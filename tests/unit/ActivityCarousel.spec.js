import Vue from 'vue'
import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import ActivityCarousel from '@/components/home/ActivityCarousel.vue'

const items = Array.from({ length: 7 }, (_, index) => ({
  id: `activity-${index}`,
  title: `Aktivita ${index + 1}`,
  description: 'Popis aktivity',
  image: '/photo.jpg',
  imageAlt: 'Studenti na setkání',
  href: index === 1 ? '/amigo' : 'https://stredoskolakroku.cz/',
  external: index !== 1,
  trackingLabel: `activity-${index}`
}))

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Procházení aktivit', () => {
  let wrapper
  let track
  let dimensions
  let media
  let observer

  async function render () {
    const router = new VueRouter({ mode: 'history', routes: [{ path: '/amigo', component: { template: '<div />' } }] })
    wrapper = mount(ActivityCarousel, { localVue, router, propsData: { items } })
    track = wrapper.find('.home-activity-track').element
    dimensions = { width: 1008, card: 320, gap: 24 }
    Object.defineProperties(track, {
      clientWidth: { configurable: true, get: () => dimensions.width },
      scrollWidth: { configurable: true, get: () => items.length * dimensions.card + (items.length - 1) * dimensions.gap }
    })
    wrapper.findAll('.home-activity-card').wrappers.forEach((card, index) => {
      Object.defineProperty(card.element, 'offsetLeft', { configurable: true, get: () => index * (dimensions.card + dimensions.gap) })
    })
    track.scrollTo = jest.fn(({ left }) => {
      track.scrollLeft = Math.max(0, Math.min(left, track.scrollWidth - track.clientWidth))
      track.dispatchEvent(new Event('scroll'))
    })
    await Vue.nextTick()
    window.dispatchEvent(new Event('resize'))
    await Vue.nextTick()
  }

  beforeEach(() => {
    media = { matches: false }
    window.matchMedia = jest.fn(() => media)
    observer = { observe: jest.fn(), disconnect: jest.fn() }
    window.ResizeObserver = jest.fn(() => observer)
  })

  afterEach(() => {
    if (wrapper) wrapper.destroy()
    delete window.ResizeObserver
  })

  test('nabízí všech sedm aktivit a skutečné cíle odkazů', async () => {
    await render()
    expect(wrapper.findAll('.home-activity-card').length).toBe(7)
    const links = wrapper.element.querySelectorAll('.home-activity-link')
    expect(links[1].getAttribute('href')).toBe('/amigo')
    expect(links[0].getAttribute('rel')).toContain('noopener')
  })

  test('má ovládání po stranách seznamu místo v nadpisu sekce', async () => {
    await render()
    expect(wrapper.find('.home-section-heading button').exists()).toBe(false)
    const carousel = wrapper.find('.home-activity-carousel').element
    expect(carousel.firstElementChild.getAttribute('aria-label')).toBe('Předchozí aktivita')
    expect(carousel.lastElementChild.getAttribute('aria-label')).toBe('Další aktivita')
    expect(carousel.querySelector('#activity-list')).toBe(track)
  })

  test('šipkami projde celý seznam a správně označí oba konce', async () => {
    await render()
    const previous = wrapper.find('[aria-label="Předchozí aktivita"]')
    const next = wrapper.find('[aria-label="Další aktivita"]')
    expect(previous.element.disabled).toBe(true)
    expect(next.element.disabled).toBe(false)
    for (let step = 0; step < 4; step++) {
      next.trigger('click')
      await Vue.nextTick()
      expect(track.scrollLeft).toBe((step + 1) * 344)
    }
    expect(next.element.disabled).toBe(true)
    expect(previous.element.disabled).toBe(false)
    for (let step = 0; step < 4; step++) {
      previous.trigger('click')
      await Vue.nextTick()
    }
    expect(track.scrollLeft).toBe(0)
    expect(previous.element.disabled).toBe(true)
  })

  test('reaguje i na ruční nebo dotykové posunutí', async () => {
    await render()
    track.scrollLeft = 600
    track.dispatchEvent(new Event('scroll'))
    await Vue.nextTick()
    expect(wrapper.find('[aria-label="Předchozí aktivita"]').element.disabled).toBe(false)
    wrapper.find('[aria-label="Další aktivita"]').trigger('click')
    expect(track.scrollTo.mock.calls[0][0].left).toBe(688)
  })

  test('podporuje šipky, Home a End při zaměření seznamu', async () => {
    await render()
    const list = wrapper.find('.home-activity-track')
    expect(list.attributes('tabindex')).toBe('0')
    list.trigger('keydown', { key: 'ArrowRight' })
    expect(track.scrollLeft).toBe(344)
    list.trigger('keydown', { key: 'End' })
    expect(track.scrollLeft).toBe(1376)
    list.trigger('keydown', { key: 'ArrowLeft' })
    expect(track.scrollLeft).toBe(1032)
    list.trigger('keydown', { key: 'Home' })
    expect(track.scrollLeft).toBe(0)
  })

  test('nepřebírá klávesy zaměřenému odkazu', async () => {
    await render()
    wrapper.find('.home-activity-link').trigger('keydown', { key: 'End' })
    expect(track.scrollTo).not.toHaveBeenCalled()
  })

  test('klávesnice posouvá okamžitě, kliknutí ukazatelem plynule', async () => {
    await render()
    wrapper.find('.home-activity-track').trigger('keydown', { key: 'ArrowRight' })
    expect(track.scrollTo.mock.calls[0][0].behavior).toBe('auto')
    const next = wrapper.find('[aria-label="Další aktivita"]').element
    next.dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 0 }))
    expect(track.scrollTo.mock.calls[1][0].behavior).toBe('auto')
    next.dispatchEvent(new MouseEvent('click', { bubbles: true, detail: 1 }))
    expect(track.scrollTo.mock.calls[2][0].behavior).toBe('smooth')
  })

  test('přepočítá konce a délku posunu po změně šířky', async () => {
    await render()
    track.scrollLeft = 1376
    track.dispatchEvent(new Event('scroll'))
    dimensions.width = 288
    dimensions.card = 256
    dimensions.gap = 16
    window.dispatchEvent(new Event('resize'))
    await Vue.nextTick()
    expect(wrapper.find('[aria-label="Další aktivita"]').element.disabled).toBe(false)
    wrapper.find('.home-activity-track').trigger('keydown', { key: 'Home' })
    wrapper.find('[aria-label="Další aktivita"]').trigger('click')
    expect(track.scrollLeft).toBe(272)
  })

  test('vypne obě šipky, pokud se vše vejde na obrazovku', async () => {
    await render()
    dimensions.width = 3000
    window.dispatchEvent(new Event('resize'))
    await Vue.nextTick()
    expect(wrapper.find('[aria-label="Předchozí aktivita"]').element.disabled).toBe(true)
    expect(wrapper.find('[aria-label="Další aktivita"]').element.disabled).toBe(true)
  })

  test('respektuje omezení pohybu a odpojí sledování velikosti', async () => {
    await render()
    media.matches = true
    wrapper.find('[aria-label="Další aktivita"]').trigger('click')
    expect(track.scrollTo.mock.calls[0][0].behavior).toBe('auto')
    wrapper.destroy()
    wrapper = null
    expect(observer.disconnect).toHaveBeenCalled()
  })
})
