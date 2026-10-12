import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import AwardPage from '@/views/VysokoskolakRoku2027Page.vue'

jest.mock('@/assets/vysokoskolak_roku/vs_roku_3.jpeg', () => '/award-logo.jpeg')
jest.mock('@/assets/vysokoskolak_roku/foto_popis.jpeg', () => '/award-story.jpeg')
jest.mock('@/assets/vysokoskolak_roku/tonda.jpeg', () => '/antonin.jpeg')
jest.mock('@/assets/vysokoskolak_roku/kata.jpeg', () => '/katerina.jpeg')
jest.mock('@/components/home/homeContent', () => ({ footerGroups: [], privacyHref: '/privacy' }))
jest.mock('@/assets/logo_new.svg', () => '/logo.svg')

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Vysokoškolák roku: zachované cíle a obsah', () => {
  let wrapper
  beforeEach(() => { wrapper = mount(AwardPage, { localVue, router: new VueRouter({ mode: 'abstract' }), stubs: ['home-footer'] }) })
  afterEach(() => { wrapper.destroy() })

  test('používá veřejný vzhled, jediný hlavní nadpis a přístupný main', () => {
    expect(wrapper.classes()).toContain('public-page')
    expect(wrapper.findAll('h1').length).toBe(1)
    expect(wrapper.find('main#home-main').attributes('tabindex')).toBe('-1')
  })

  test('zachová oba odkazy na přihlášku a původní Instagram', () => {
    expect(wrapper.findAll('a[href="https://forms.cloud.microsoft/e/XauCr8y6np"]').length).toBe(2)
    expect(wrapper.find('a[href="https://www.instagram.com/vysokoskolak?stkn=MXFkMm9ycWNhNXpjcw=="]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Od střední se hodně změnilo…')
    expect(wrapper.text()).toContain('Pojďme to probořit')
  })

  test('zachová vybrané logo, fotografii, obě osoby a jejich kontakty', () => {
    expect(wrapper.find('.award-logo').attributes('src')).toContain('vs_roku_3.jpeg')
    expect(wrapper.find('.award-logo').attributes('width')).toBe('1080')
    expect(wrapper.find('.award-logo').attributes('height')).toBe('1350')
    expect(wrapper.text()).toContain('Antonín Svoboda')
    expect(wrapper.text()).toContain('Kateřina Brouzdová')
    for (const href of ['mailto:antonin.svoboda@prostredoskolaky.cz', 'tel:+420605442685', 'mailto:katerina.brouzdova@gmail.com']) expect(wrapper.find(`a[href="${href}"]`).exists()).toBe(true)
  })

  test('kontakt na Instagram koordinátora je skutečný odkaz s původním uživatelským jménem', () => {
    const link = wrapper.find('.contact-links a[href="https://www.instagram.com/antony.freedom/"]')
    expect(link.exists()).toBe(true)
    expect(link.text()).toContain('IG: @antony.freedom')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toContain('noopener')
  })
})
