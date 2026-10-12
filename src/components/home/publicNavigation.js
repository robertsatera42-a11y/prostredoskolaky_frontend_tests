export const publicNavigation = [
  { id: 'home', title: 'Domů', href: '/', trackingLabel: 'home' },
  { id: 'platform', title: 'Platforma', href: '/databaze', trackingLabel: 'database' },
  { id: 'amigo', title: 'AMIGO', href: '/amigo', trackingLabel: 'amigo' },
  { id: 'competition', title: 'Středoškolák roku', href: 'https://stredoskolakroku.cz/', external: true, trackingLabel: 'soutez' },
  { id: 'university', title: 'Vysokoškolák roku', href: '/vysokoskolak-roku-2027', trackingLabel: 'university_award' },
  { id: 'ivp', title: 'Vše o IVP', href: '/ivp', trackingLabel: 'ivp' },
  { id: 'about', title: 'O nás', href: '/o-nas', trackingLabel: 'about_us' }
]

export const publicPageHashes = {
  '/': ['#home-main', '#aktivity', '#platforma', '#komunita'],
  '/amigo': ['#home-main', '#mentori', '#jak-to-funguje'],
  '/ivp': ['#home-main', '#zaklady', '#zadost', '#studium'],
  '/o-nas': ['#home-main', '#kdo-jsme', '#tym', '#kontakt', '#historie'],
  '/vysokoskolak-roku-2027': ['#home-main']
}

export const publicPagePaths = Object.keys(publicPageHashes)

export const platformPagePaths = ['/databaze', '/profil', '/login', '/renew-password']

export function styledPagePath (route) {
  const paths = [...publicPagePaths, ...platformPagePaths]
  const page = (route.matched || []).find(record => paths.includes(record.path))
  return page ? page.path : route.path
}

export function publicPagePath (route) {
  const page = (route.matched || []).find(record => publicPagePaths.includes(record.path))
  return page ? page.path : route.path
}
