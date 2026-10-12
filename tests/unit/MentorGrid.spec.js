import Vue from 'vue'
import { mount } from '@vue/test-utils'
import MentorGrid from '@/components/public/MentorGrid'

const mentors = [
  { id: 'anna', name: 'Anna Průšová', hashtags: '#fyzika', image: '/anna.jpg', width: 800, height: 1000, paragraphs: ['První odstavec medailonku.', 'Druhý odstavec medailonku.'] },
  { id: 'antonin', name: 'Antonín Svoboda', hashtags: '', image: '/antonin.jpg', width: 900, height: 1200, paragraphs: ['Další medailonek.'] }
]

describe('Medailonky mentorů AMIGO', () => {
  let wrapper
  beforeEach(() => { wrapper = mount(MentorGrid, { propsData: { mentors } }) })
  afterEach(() => { wrapper.destroy() })

  test('na mobilu otevře samostatnou kartu s celým medailonkem a ponechá náhled v seznamu', async () => {
    wrapper.destroy()
    const originalMatchMedia = window.matchMedia
    window.matchMedia = jest.fn(() => ({ matches: true, addEventListener: jest.fn(), removeEventListener: jest.fn() }))
    try {
      wrapper = mount(MentorGrid, { propsData: { mentors } })
      await Vue.nextTick()
      const dialog = wrapper.find('dialog')
      expect(dialog.exists()).toBe(true)
      Object.defineProperty(dialog.element, 'open', { get () { return this.hasAttribute('open') } })
      dialog.element.showModal = jest.fn(function () { this.setAttribute('open', '') })
      dialog.element.close = jest.fn(function () { this.removeAttribute('open') })
      const button = wrapper.find('.public-mentor-toggle')
      expect(button.attributes('aria-haspopup')).toBe('dialog')
      button.trigger('click')
      await Vue.nextTick()
      await Vue.nextTick()
      expect(dialog.element.showModal).toHaveBeenCalledTimes(1)
      expect(wrapper.find('.public-mentor-preview').isVisible()).toBe(true)
      expect(wrapper.find('#mentor-anna').isVisible()).toBe(false)
      expect(dialog.find('h3').text()).toBe(mentors[0].name)
      expect(dialog.find('img').attributes('src')).toBe(mentors[0].image)
      expect(dialog.findAll('li').wrappers.map(item => item.text())).toEqual(mentors[0].paragraphs)
      dialog.trigger('cancel')
      await Vue.nextTick()
      expect(dialog.element.close).toHaveBeenCalledTimes(1)
      expect(button.attributes('aria-expanded')).toBe('false')
    } finally {
      window.matchMedia = originalMatchMedia
    }
  })

  test('zavřená karta ukazuje první neprázdný odstavec a rozbalení jej nahradí celým medailonkem', async () => {
    wrapper.setProps({ mentors: [{ ...mentors[0], paragraphs: ['', '  ', ...mentors[0].paragraphs] }, mentors[1]] })
    await Vue.nextTick()
    expect(wrapper.findAll('.public-mentor-preview')).toHaveLength(2)
    expect(wrapper.find('.public-mentor-preview').isVisible()).toBe(true)
    expect(wrapper.find('.public-mentor-preview').text()).toBe(mentors[0].paragraphs[0])
    wrapper.find('.public-mentor-toggle').trigger('click')
    await Vue.nextTick()
    expect(wrapper.findAll('.public-mentor').at(0).find('.public-mentor-preview').exists()).toBe(false)
    expect(wrapper.find('#mentor-anna').isVisible()).toBe(true)
    expect(wrapper.find('#mentor-anna').findAll('li').wrappers.map(item => item.text())).toEqual(['', '', ...mentors[0].paragraphs])
    wrapper.findAll('.public-mentor-toggle').at(1).trigger('click')
    await Vue.nextTick()
    expect(wrapper.findAll('.public-mentor').at(0).find('.public-mentor-preview').isVisible()).toBe(true)
    expect(wrapper.find('#mentor-anna').isVisible()).toBe(false)
    expect(wrapper.findAll('.public-mentor').at(1).find('.public-mentor-preview').exists()).toBe(false)
  })

  test('zachová všechny fotografie, skutečné rozměry a celý obsah medailonku', () => {
    expect(wrapper.findAll('.public-mentor')).toHaveLength(2)
    expect(wrapper.findAll('img').at(0).attributes('width')).toBe('800')
    expect(wrapper.findAll('img').at(1).attributes('alt')).toContain('Antonín Svoboda')
    expect(wrapper.text()).toContain('Druhý odstavec medailonku.')
    expect(wrapper.findAll('.public-mentor-tags')).toHaveLength(1)
  })

  test('tlačítka zveřejní stav a ponechají otevřený právě vybraný medailonek', async () => {
    const buttons = wrapper.findAll('.public-mentor-toggle')
    expect(buttons.at(0).attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('#mentor-anna').isVisible()).toBe(false)
    buttons.at(0).trigger('click')
    await Vue.nextTick()
    expect(buttons.at(0).attributes('aria-expanded')).toBe('true')
    expect(wrapper.find('#mentor-anna').isVisible()).toBe(true)
    buttons.at(1).trigger('click')
    await Vue.nextTick()
    expect(wrapper.find('#mentor-anna').isVisible()).toBe(false)
    expect(wrapper.find('#mentor-antonin').isVisible()).toBe(true)
    buttons.at(1).trigger('click')
    await Vue.nextTick()
    expect(buttons.at(1).attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('#mentor-antonin').isVisible()).toBe(false)
  })
})
