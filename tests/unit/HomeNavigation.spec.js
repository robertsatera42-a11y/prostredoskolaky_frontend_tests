import Vue from 'vue'
import { createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import HomeHeader from '@/components/home/HomeHeader'
import HomeCommunity from '@/components/home/HomeCommunity'

jest.mock('@/assets/logo_new.svg', () => '/logo.svg')
jest.mock('@/components/home/homeContent', () => ({
  communityChannels: [{ id: 'blog', title: 'Blog', description: 'Příběhy studentů', href: 'https://prostredoskolaky-cz.medium.com/', icon: 'book' }]
}))

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('Navigace homepage a newsletter', () => {
  let wrapper

  function render (component, propsData = {}) {
    const routes = ['/amigo', '/ivp', '/o-nas'].map(path => ({ path, component: { render: h => h('main') } }))
    const router = new VueRouter({ mode: 'abstract', routes })
    wrapper = mount(component, { localVue, router, propsData, attachTo: document.body })
    return wrapper
  }

  afterEach(() => { wrapper.destroy() })

  test('menu zveřejňuje svůj stav a po Escape vrátí focus na tlačítko', async () => {
    render(HomeHeader)
    const button = wrapper.find('.home-menu-button')
    expect(button.attributes('aria-expanded')).toBe('false')
    button.trigger('click')
    await Vue.nextTick()
    expect(button.attributes('aria-expanded')).toBe('true')
    wrapper.trigger('keydown.esc')
    await Vue.nextTick()
    expect(button.attributes('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(button.element)
  })

  test('odkaz na stránku i kliknutí mimo hlavičku zavřou mobilní menu', async () => {
    render(HomeHeader)
    wrapper.find('.home-menu-button').trigger('click')
    wrapper.find('a[href="/amigo"]').trigger('click')
    await Vue.nextTick()
    expect(wrapper.find('.home-menu-button').attributes('aria-expanded')).toBe('false')
    wrapper.find('.home-menu-button').trigger('click')
    document.body.click()
    await Vue.nextTick()
    expect(wrapper.find('.home-menu-button').attributes('aria-expanded')).toBe('false')
  })

  test('nabízí požadovaných sedm položek ve správném pořadí a skutečné cíle', () => {
    render(HomeHeader)
    const links = [...wrapper.element.querySelectorAll('#home-navigation > a:not(.home-button)')]
    expect(links.map(link => link.textContent.trim())).toEqual(['Domů', 'Platforma', 'AMIGO', 'Středoškolák roku', 'Vysokoškolák roku', 'Vše o IVP', 'O nás'])
    expect(links.map(link => link.getAttribute('href'))).toEqual(['/', '/databaze', '/amigo', 'https://stredoskolakroku.cz/', '/vysokoskolak-roku-2027', '/ivp', '/o-nas'])
    expect(links[0].getAttribute('aria-current')).toBe('page')
    expect(links[1].getAttribute('aria-current')).toBeNull()
  })

  test('změna veřejné stránky označí aktivní položku a zavře menu', async () => {
    render(HomeHeader)
    wrapper.find('.home-menu-button').trigger('click')
    wrapper.vm.$router.push('/ivp')
    await Vue.nextTick()
    expect(wrapper.find('a[href="/ivp"]').attributes('aria-current')).toBe('page')
    expect(wrapper.find('a[href="/"]').attributes('aria-current')).toBeUndefined()
    expect(wrapper.find('.home-menu-button').attributes('aria-expanded')).toBe('false')
  })

  test.each(['/amigo', '/ivp', '/o-nas'])('označí aktivní položku i na adrese %s/ s kotvou', async path => {
    render(HomeHeader)
    wrapper.vm.$router.push(`${path}/#home-main`)
    await Vue.nextTick()
    expect(wrapper.find(`a[href="${path}"]`).attributes('aria-current')).toBe('page')
    expect(wrapper.find('a[href="/"]').attributes('aria-current')).toBeUndefined()
  })

  test('návštěvník má přihlášení a přihlášený student profil bez administrace', async () => {
    render(HomeHeader)
    expect(wrapper.element.querySelector('a[href="/login"]')).not.toBeNull()
    wrapper.setProps({ isLoggedIn: true, user: { firstName: 'Student', role: 'user' } })
    await Vue.nextTick()
    wrapper.find('.home-account-button').trigger('click')
    await Vue.nextTick()
    expect(wrapper.element.querySelector('a[href="/profil"]')).not.toBeNull()
    expect(wrapper.element.querySelector('a[href="/users"]')).toBeNull()
    wrapper.find('.home-account-links button').trigger('click')
    expect(wrapper.emitted('logout')).toHaveLength(1)
  })

  test.each(['admin', 'manager'])('zachová všechny odkazy pro roli %s', async role => {
    render(HomeHeader, { isLoggedIn: true, user: { firstName: 'Správce', role } })
    wrapper.find('.home-account-button').trigger('click')
    await Vue.nextTick()
    for (const href of ['/profil', '/users', '/competition', '/events']) {
      expect(wrapper.element.querySelector(`a[href="${href}"]`)).not.toBeNull()
    }
  })

  test('newsletter vede do existující registrace a pro přihlášeného do profilu', async () => {
    render(HomeCommunity)
    expect(wrapper.find('.home-newsletter a').attributes('href')).toBe('/login')
    wrapper.setProps({ isLoggedIn: true })
    await Vue.nextTick()
    expect(wrapper.find('.home-newsletter a').attributes('href')).toBe('/profil')
    expect(wrapper.find('.home-newsletter a').text()).toContain('Nastavit odběr')
  })
})
