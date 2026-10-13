import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import { createLocalVue, mount } from '@vue/test-utils'
import App from '@/App.vue'
import router from '@/router'
import HomeFooter from '@/components/home/HomeFooter.vue'

jest.mock('@/views/Home.vue', () => ({ render: h => h('main') }))
jest.mock('firebase/auth', () => ({ getAuth: () => ({ currentUser: null }) }))
jest.mock('@/firebase', () => ({}))
jest.mock('@/assets/logo_new.svg', () => '/logo.svg')
jest.mock('@/components/home/homeContent', () => ({ footerGroups: [], privacyHref: '/privacy' }))

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(Buefy)

describe('Společný vzhled produktových stránek bez změny autentizace', () => {
  let wrapper
  afterEach(() => { if (wrapper) wrapper.destroy(); document.body.innerHTML = '' })

  test('patička nabízí původní sociální cíle i bez explicitních props', () => {
    wrapper = mount(HomeFooter, { localVue, router: new VueRouter({ mode: 'abstract' }) })
    expect(wrapper.findAll('.home-footer-social a').length).toBe(3)
    expect(wrapper.find('a[href="https://www.instagram.com/prostredoskolaky/"]').exists()).toBe(true)
    expect(wrapper.find('a[href="https://www.facebook.com/prostredoskolaky/?fref=ts"]').exists()).toBe(true)
    expect(wrapper.find('.home-footer-social a').attributes('target')).toBe('_blank')
  })

  test.each(['/profil', '/profil/', '/databaze', '/databaze/', '/login', '/login/', '/renew-password', '/renew-password/', '/change-password', '/change-password/'])('vybere společnou hlavičku a styly pouze pro %s', async path => {
    const navigation = new VueRouter({ mode: 'abstract', routes: ['/profil', '/databaze', '/login', '/renew-password', '/change-password'].map(path => ({ path, component: { render: h => h('main') } })) })
    navigation.push(path)
    const store = new Vuex.Store({ getters: { user: () => ({ firstName: 'Anna', role: 'user' }), isLoggedIn: () => true } })
    wrapper = mount(App, { localVue, router: navigation, store, stubs: ['cookies'] })
    expect(wrapper.classes()).toContain('platform-shell')
    expect(wrapper.find('.home-header').exists()).toBe(true)
    if (path.startsWith('/databaze')) expect(wrapper.find('a[href="/databaze"]').attributes('aria-current')).toBe('page')
  })

  test.each(['/events', '/abffd7', '/delete-account'])('nepřenese nové styly do %s', path => {
    const navigation = new VueRouter({ mode: 'abstract', routes: [{ path, component: { render: h => h('main') } }] })
    navigation.push(path)
    const store = new Vuex.Store({ getters: { user: () => ({}), isLoggedIn: () => false } })
    wrapper = mount(App, { localVue, router: navigation, store, stubs: ['cookies'] })
    expect(wrapper.classes()).not.toContain('platform-shell')
    expect(wrapper.find('.app-header').exists()).toBe(true)
  })

  test('databáze zachová vstup přes přihlášení a profil původní auth metadata', async () => {
    const next = jest.fn()
    const route = router.resolve('/databaze').route
    await router.beforeHooks[0](route, {}, next)
    expect(next).toHaveBeenCalledWith('/login?redirect=databaze')
    expect(router.resolve('/profil').route.meta.requiresAuth).toBe(true)
    expect(router.resolve('/change-password').route.meta.requiresAuth).toBe(true)
    expect(router.resolve('/abffd7').route.meta.requiresAuth).toBeUndefined()
  })

  test.each(['/profil/', '/databaze/', '/login/', '/renew-password/', '/change-password', '/change-password/'])('skip link a návrat nahoru fungují i na %s', path => {
    document.body.innerHTML = '<header class="home-header"></header><main id="home-main"></main>'
    document.querySelector('.home-header').getBoundingClientRect = () => ({ height: 96 })
    expect(router.options.scrollBehavior(router.resolve(`${path}#home-main`).route)).toEqual({ selector: '#home-main', offset: { x: 0, y: 112 } })
  })

  test('volitelné sociální odkazy zachovají cíle, labels a bezpečné otevření nové karty', () => {
    const socialLinks = [{ id: 'instagram', title: 'Instagram', href: 'https://www.instagram.com/prostredoskolaky/', trackingLabel: 'instagram' }]
    wrapper = mount(HomeFooter, { localVue, router: new VueRouter({ mode: 'abstract' }), propsData: { socialLinks } })
    const link = wrapper.find('a[href="https://www.instagram.com/prostredoskolaky/"]')
    expect(link.exists()).toBe(true)
    expect(link.text()).toContain('Instagram')
    expect(link.attributes('target')).toBe('_blank')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })
})
