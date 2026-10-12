import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import { getField, updateField } from 'vuex-map-fields'
import { createLocalVue, mount } from '@vue/test-utils'
import FilterBlock from '@/components/database/FilterBlock.vue'
import SearchBlock from '@/components/database/SearchBlock.vue'
import EventsList from '@/components/database/EventsList.vue'
import Event from '@/components/database/Event.vue'
import Pagination from '@/components/database/Pagination.vue'
import Detail from '@/components/database/Detail.vue'
import ActivityForm from '@/components/database/ActivityForm.vue'
import ReportActivity from '@/components/database/ReportActivity.vue'
import config from '@/config/default'
import client from '@/client/client'

jest.mock('@/client/client', () => ({ sendEvent: jest.fn(), saveReport: jest.fn(), getEvent: jest.fn() }))

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)
localVue.use(Vuelidate)
localVue.directive('line-clamp', () => {})
const settle = async () => { await Vue.nextTick(); await Vue.nextTick(); await Vue.nextTick() }
const activity = {
  id: 42,
  name: 'Studentská soutěž',
  description: 'Příležitost pro aktivní studenty.',
  logoUrl: '/',
  logo: 'activity.jpg',
  categories: [{ short: 'BIO', full: 'Biologie' }],
  types: [{ short: 'SO', full: 'Soutěž' }],
  deadlines: [config.consts.periods[0].short],
  ageGroup: ['SŠ'],
  group: ['individuální'],
  contact: 'info@example.test',
  eventUrl: 'https://example.test/activity',
  price: 'zdarma'
}

describe('Databáze: filtry, výsledky, detail a izolace vzhledu', () => {
  let wrapper
  let store
  let fetchEvents
  let open

  async function render (component, propsData = {}, state = {}) {
    fetchEvents = jest.fn((context, page) => { context.commit('setPage', page); return Promise.resolve() })
    store = new Vuex.Store({
      state: { search: '', checkedCategories: [], checkedTypes: [], events: [activity], totalPages: 8, totalEvents: 80, actualPage: 1, ...state },
      getters: { getField, events: state => state.events, totalPages: state => state.totalPages, totalEvents: state => state.totalEvents, actualPage: state => state.actualPage },
      mutations: { updateField, setPage: (state, page) => { state.actualPage = page } },
      actions: { fetchEvents }
    })
    open = jest.fn()
    wrapper = mount(component, { localVue, store, propsData, mocks: { $modal: { open } }, attachTo: document.body })
    await settle()
    return wrapper
  }

  function button (text) {
    const result = wrapper.findAll('button').wrappers.find(item => item.text().trim() === text)
    expect(result).toBeDefined()
    return result
  }

  beforeEach(() => { jest.clearAllMocks() })
  afterEach(() => { if (wrapper) wrapper.destroy(); jest.useRealTimers(); jest.restoreAllMocks(); document.body.innerHTML = '' })

  test('předmět je nativní tlačítko a nadále vybere všechny své podkategorie', async () => {
    await render(FilterBlock, { appearance: 'platform' })
    button('Přírodní vědy').trigger('click')
    await settle()
    expect(store.state.checkedCategories).toEqual(config.consts.interestsMapping.nature.map(item => item.short))
    expect(wrapper.findAll('input[type="checkbox"]').length).toBe(config.consts.interestsMapping.nature.length)
    const checkbox = wrapper.find('input[type="checkbox"]')
    checkbox.setChecked(false)
    await settle()
    expect(store.state.checkedCategories).toHaveLength(config.consts.interestsMapping.nature.length - 1)
    expect(fetchEvents).toHaveBeenLastCalledWith(expect.anything(), 1)
  })

  test('kombinuje více typů, jejich vypnutí a odstranění všech filtrů', async () => {
    await render(FilterBlock, { appearance: 'platform' })
    for (const type of config.consts.types.slice(0, 2)) button(type.full).trigger('click')
    await settle()
    expect(store.state.checkedTypes).toEqual(config.consts.types.slice(0, 2).map(item => item.short))
    button(config.consts.types[0].full).trigger('click')
    await settle()
    expect(store.state.checkedTypes).toEqual([config.consts.types[1].short])
    store.commit('updateField', { path: 'search', value: 'věda' })
    button('Odstranit filtry').trigger('click')
    await settle()
    expect([store.state.checkedCategories, store.state.checkedTypes, store.state.search]).toEqual([[], [], ''])
  })

  test('vyhledávání zachová hodnotu a prodlevu 500 ms', async () => {
    // The existing debounced method is shared by component instances. Finish a
    // preceding instance's real timer before switching this test to fake time.
    SearchBlock.methods.getEvents.flush()
    jest.useFakeTimers()
    let now = 1000
    jest.spyOn(Date, 'now').mockImplementation(() => now)
    await render(FilterBlock, { appearance: 'platform' })
    const input = wrapper.find('input[name="search"]')
    input.setValue('věda')
    input.trigger('keyup', { key: 'a' })
    now += 499
    jest.advanceTimersByTime(499)
    expect(fetchEvents).not.toHaveBeenCalled()
    now += 1
    jest.advanceTimersByTime(1)
    expect(fetchEvents).toHaveBeenCalledWith(expect.anything(), 1)
    expect(store.state.search).toBe('věda')
    button('Vyhledat').trigger('click')
    now += 500
    jest.advanceTimersByTime(500)
    expect(fetchEvents).toHaveBeenCalledTimes(2)
  })

  test('nový vzhled se předává do formuláře návrhu, výchozí administrace zůstává legacy', async () => {
    await render(FilterBlock, { appearance: 'platform' })
    button('Přidat aktivitu').trigger('click')
    expect(open.mock.calls[0][0]).toMatchObject({ component: ActivityForm, props: { status: 'proposal', appearance: 'platform' }, customClass: 'platform-modal', canCancel: ['escape', 'x'] })
    wrapper.destroy()
    await render(FilterBlock)
    expect(wrapper.props('appearance')).toBe('legacy')
    wrapper.vm.addEvent()
    expect(open.mock.calls[0][0].customClass).toBeUndefined()
    expect(open.mock.calls[0][0].props.appearance).toBe('legacy')
  })

  test('prázdné výsledky zachovají možnost navrhnout aktivitu', async () => {
    await render(EventsList, { appearance: 'platform' }, { events: [], totalEvents: 0, totalPages: 0 })
    expect(wrapper.text()).toContain('nenalezli')
    button('Přidat aktivitu').trigger('click')
    expect(open.mock.calls[0][0].props).toEqual({ status: 'proposal', appearance: 'platform' })
  })

  test('karta otevírá stejný detail se stejným seznamem a indexem', async () => {
    await render(Event, { appearance: 'platform', event: activity, eventKey: 0, events: [activity] })
    const control = wrapper.find('button')
    expect(control.exists()).toBe(true)
    control.trigger('click')
    expect(open.mock.calls[0][0]).toMatchObject({ component: Detail, props: { events: [activity], eventKey: 0, appearance: 'platform' }, canCancel: ['escape', 'x', 'outside'] })
  })

  test('detail zachová klávesové procházení, krajní stavy a vazbu hlášení', async () => {
    const second = { ...activity, id: 43, name: 'Další studentská aktivita' }
    await render(Detail, { appearance: 'platform', events: [activity, second], eventKey: 0 })
    expect(wrapper.find('[aria-label="Předchozí aktivita"]').exists()).toBe(false)
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    await settle()
    expect(wrapper.text()).toContain(second.name)
    expect(wrapper.find('[aria-label="Následující aktivita"]').exists()).toBe(false)
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }))
    await settle()
    button('Nahlásit/Upravit aktivitu').trigger('click')
    expect(open.mock.calls[0][0]).toMatchObject({ component: ReportActivity, props: { name: activity.name, eventId: 42, appearance: 'platform' }, customClass: 'platform-modal' })
  })

  test.each(['next', 'previous'])('detail udrží focus po odstranění navigačního tlačítka na hranici: %s', async direction => {
    const second = { ...activity, id: 43, name: 'Další studentská aktivita' }
    await render(Detail, { appearance: 'platform', events: [activity, second], eventKey: direction === 'next' ? 0 : 1 })
    const control = wrapper.find(`[aria-label="${direction === 'next' ? 'Následující' : 'Předchozí'} aktivita"]`)
    control.element.focus()
    control.trigger('click')
    await settle()
    expect(document.activeElement).toBe(wrapper.find('[data-dialog-heading]').element)
    wrapper.find('[role="dialog"]').trigger('keydown', { key: 'Tab' })
    expect(document.activeElement).toBe(wrapper.find('.platform-dialog-close').element)
  })

  test('procházení detailu nepřevezme focus z otevřeného hlášení', async () => {
    const second = { ...activity, id: 43, name: 'Další studentská aktivita' }
    await render(Detail, { appearance: 'platform', events: [activity, second], eventKey: 0 })
    const report = mount(ReportActivity, { localVue, propsData: { appearance: 'platform', name: activity.name, eventId: 42 }, attachTo: document.body })
    try {
      await settle()
      const field = report.find('textarea').element
      field.focus()
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
      await settle()
      expect(wrapper.vm.actualKey).toBe(1)
      expect(document.activeElement).toBe(field)
    } finally {
      report.destroy()
    }
  })

  test('stránkování zachová požadované číslo a krajní stavy', async () => {
    await render(Pagination, { appearance: 'platform', total: 8 })
    wrapper.vm.scroll = jest.fn()
    const previous = wrapper.find('[aria-label="Předchozí stránka"]')
    expect(previous.exists()).toBe(true)
    expect(previous.attributes('disabled')).toBeDefined()
    button('2').trigger('click')
    await settle()
    expect(fetchEvents).toHaveBeenLastCalledWith(expect.anything(), 2)
    expect(wrapper.vm.scroll).toHaveBeenCalledWith('event-section')
    await wrapper.vm.goToPage(8)
    await settle()
    expect(wrapper.find('[aria-label="Následující stránka"]').attributes('disabled')).toBeDefined()
  })

  test('platformní dialog má popisek, úvodní focus a ohraničené procházení Tab', async () => {
    await render(ReportActivity, { appearance: 'platform', name: activity.name, eventId: 42 })
    const dialog = wrapper.find('[role="dialog"]')
    expect(dialog.exists()).toBe(true)
    expect(dialog.attributes('aria-modal')).toBe('true')
    const heading = wrapper.find('[data-dialog-heading]')
    expect(document.activeElement).toBe(heading.element)
    const controls = wrapper.findAll('input, textarea, button').wrappers.filter(control => !control.attributes('disabled'))
    const last = controls[controls.length - 1].element
    last.focus()
    dialog.trigger('keydown', { key: 'Tab' })
    expect(document.activeElement).toBe(controls[0].element)
  })

  test('hlášení zachová payload a úspěšnou zprávu bez skutečného zápisu', async () => {
    client.saveReport.mockResolvedValue(undefined)
    await render(ReportActivity, { appearance: 'platform', name: activity.name, eventId: 42 })
    wrapper.find('textarea').setValue('Změnil se termín přihlášení.')
    wrapper.find('input').setValue('student@example.test')
    await settle()
    button('Uložit a zpět').element.focus()
    button('Uložit a zpět').trigger('click')
    await settle()
    expect(client.saveReport).toHaveBeenCalledWith({ description: 'Změnil se termín přihlášení.', contact: 'student@example.test', name: activity.name, eventId: 42 })
    expect(wrapper.text()).toContain('Děkujeme, Vaší zpětnou vazbou se budeme zabývat.')
    expect(document.activeElement).toBe(wrapper.find('[data-dialog-heading]').element)
  })

  test('reduced motion zachová cíl posunu pod současnou hlavičkou bez animace', async () => {
    await render(Pagination, { appearance: 'platform', total: 8 })
    const target = document.createElement('section')
    target.id = 'event-section'
    target.getBoundingClientRect = () => ({ top: 400 })
    const header = document.createElement('header')
    header.className = 'home-header'
    header.getBoundingClientRect = () => ({ height: 96 })
    document.body.appendChild(header)
    document.body.appendChild(target)
    window.matchMedia = jest.fn(() => ({ matches: true }))
    window.scrollTo = jest.fn()
    wrapper.vm.scroll('event-section')
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 288, behavior: 'auto' })
  })

  test.each([ActivityForm, ReportActivity])('formulář zachová validaci před odesláním a výchozí legacy variantu', async component => {
    await render(component, component === ActivityForm ? { status: 'proposal' } : { name: activity.name, eventId: 42 })
    expect(wrapper.props('appearance')).toBe('legacy')
    const save = wrapper.findAll('button').wrappers.find(item => item.text().includes('Uložit'))
    save.trigger('click')
    await settle()
    expect(client.sendEvent).not.toHaveBeenCalled()
    expect(client.saveReport).not.toHaveBeenCalled()
    expect(wrapper.find('.help.is-danger').exists()).toBe(true)
  })

  test.each([ActivityForm, ReportActivity])('platformní formulář propojí label s každým textovým polem', async component => {
    await render(component, component === ActivityForm ? { appearance: 'platform', status: 'proposal' } : { appearance: 'platform', name: activity.name, eventId: 42 })
    wrapper.findAll('input:not([type="checkbox"]):not([type="radio"]), textarea, select').wrappers.forEach(field => {
      expect(field.attributes('id')).toBeTruthy()
      expect(wrapper.find(`label[for="${field.attributes('id')}"]`).exists()).toBe(true)
    })
  })

  test('návrh aktivity zachová transformaci kategorií, typů i odesílaná pole', async () => {
    client.sendEvent.mockResolvedValue(undefined)
    await render(ActivityForm, { appearance: 'platform', status: 'proposal' })
    const category = config.consts.interestsMapping.nature[0]
    const type = config.consts.types[0]
    wrapper.setData({ activity: {
      ...wrapper.vm.activity,
      name: 'Studentská aktivita',
      description: 'Podrobný popis studentské aktivity.',
      link: 'https://example.test/activity',
      contact: 'student@example.test',
      categories: [category.name],
      types: [type.full],
      note: 'Poznámka organizátora'
    } })
    await settle()
    button('Uložit a zavřít').element.focus()
    button('Uložit a zavřít').trigger('click')
    await settle()
    expect(client.sendEvent).toHaveBeenCalledTimes(1)
    expect(client.sendEvent.mock.calls[0][0]).toMatchObject({
      status: 'proposal',
      name: 'Studentská aktivita',
      description: 'Podrobný popis studentské aktivity.',
      link: 'https://example.test/activity',
      contact: 'student@example.test',
      categories: [category.short],
      types: [type.short],
      note: 'Poznámka organizátora'
    })
    expect(wrapper.text()).toContain('Děkujeme Vám za návrh nové aktivity.')
    expect(document.activeElement).toBe(wrapper.find('[data-dialog-heading]').element)
  })
})
