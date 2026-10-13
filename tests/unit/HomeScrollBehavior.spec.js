import router from '@/router'
import App from '@/App.vue'

jest.mock('@/views/Home.vue', () => ({ render: h => h('main') }))
jest.mock('firebase/auth', () => ({ getAuth: () => ({ currentUser: null }) }))
jest.mock('@/firebase', () => ({}))
jest.mock('@/assets/logo_new.svg', () => '/logo.svg')

describe('Posouvání skutečného routeru na veřejných stránkách', () => {
  beforeEach(() => {
    document.body.innerHTML = '<header class="home-header"></header><main id="home-main"><section id="aktivity"></section><section id="platforma"></section><section id="komunita"></section></main>'
    document.querySelector('.home-header').getBoundingClientRect = () => ({ height: 96 })
  })

  afterEach(() => { document.body.innerHTML = '' })

  test.each(['#aktivity', '#platforma', '#komunita', '#home-main'])('přímá adresa %s zachová cíl pod hlavičkou', hash => {
    expect(router.options.scrollBehavior({ path: '/', hash })).toEqual({ selector: hash, offset: { x: 0, y: 112 } })
  })

  test('přepočítá odstup podle aktuální výšky mobilní hlavičky', () => {
    document.querySelector('.home-header').getBoundingClientRect = () => ({ height: 72 })
    expect(router.options.scrollBehavior({ path: '/', hash: '#komunita' }).offset.y).toBe(88)
  })

  test.each([{ path: '/', hash: '' }, { path: '/', hash: '#neznamy' }, { path: '/o-nas', hash: '#komunita' }])('zachová posun nahoru mimo známé kotvy: %j', route => {
    expect(router.options.scrollBehavior(route)).toEqual({ x: 0, y: 0 })
  })

  test('chybějící cíl bezpečně vrátí stránku nahoru', () => {
    document.getElementById('komunita').remove()
    expect(router.options.scrollBehavior({ path: '/', hash: '#komunita' })).toEqual({ x: 0, y: 0 })
  })

  test.each([
    { path: '/amigo', hash: '#mentori' },
    { path: '/ivp', hash: '#zadost' },
    { path: '/o-nas', hash: '#kontakt' },
    { path: '/vysokoskolak-roku-2027', hash: '#home-main' }
  ])('zachová přímý odkaz na veřejnou stránku: %j', route => {
    document.body.innerHTML = `<header class="home-header"></header><main id="home-main"><section id="${route.hash.slice(1)}"></section></main>`
    document.querySelector('.home-header').getBoundingClientRect = () => ({ height: 96 })
    expect(router.options.scrollBehavior(route)).toEqual({ selector: route.hash, offset: { x: 0, y: 112 } })
  })

  test('kotva z jiné veřejné stránky ani z produktové stránky nemění původní scroll', () => {
    document.body.innerHTML += '<section id="zadost"></section>'
    expect(router.options.scrollBehavior({ path: '/amigo', hash: '#zadost' })).toEqual({ x: 0, y: 0 })
    expect(router.options.scrollBehavior({ path: '/delete-account', hash: '#home-main' })).toEqual({ x: 0, y: 0 })
  })

  test.each([
    '/amigo/#mentori', '/ivp/#zadost', '/o-nas/#kontakt', '/vysokoskolak-roku-2027/#home-main'
  ])('rozpozná veřejnou stránku i její kotvu s koncovým lomítkem: %s', url => {
    const { route } = router.resolve(url)
    if (!document.getElementById(route.hash.slice(1))) {
      document.body.insertAdjacentHTML('beforeend', `<section id="${route.hash.slice(1)}"></section>`)
    }
    expect(App.computed.isPublicPage.call({ $route: route })).toBe(true)
    expect(router.options.scrollBehavior(route)).toEqual({ selector: route.hash, offset: { x: 0, y: 112 } })
  })
})
