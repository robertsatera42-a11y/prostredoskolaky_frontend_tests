// Programme descriptions: https://stredoskolakroku.cz/ (checked 10 October 2026).
// Keep finalist-only programmes explicit. AMIGO and the university award use local pages.
export const activities = [
  {
    id: 'stredoskolak-roku',
    title: 'Středoškolák roku',
    description: 'Soutěž pro středoškoláky, kteří rozvíjejí své zájmy i mimo školu. Oceňujeme jejich aktivity a propojujeme je mezi sebou.',
    image: require('@/assets/mainheader.jpg'),
    imageAlt: 'Společná fotografie účastníků Středoškoláka roku',
    imageWidth: 2881,
    imageHeight: 1921,
    href: 'https://stredoskolakroku.cz/',
    external: true,
    trackingLabel: 'competition',
    category: 'Soutěž'
  },
  {
    id: 'amigo',
    title: 'AMIGO',
    description: 'Mentoring, který tě posune dál. Vyber si mentora z řad úspěšných lidí několik let po střední škole a rozvíjej s ním to, co tě baví.',
    image: require('@/assets/Víkend26_PS_Neděle_AntoninSvoboda-67.jpg'),
    imageAlt: 'Mladí lidé při společném setkání venku',
    imageWidth: 500,
    imageHeight: 356,
    href: '/amigo',
    external: false,
    trackingLabel: 'amigo',
    category: 'Mentoring'
  },
  {
    id: 'free-spirit',
    title: 'Free Spirit',
    description: 'Konference s příběhy bývalých finalistů a zkušenostmi hostů. Inspiruj se a poznej další aktivní středoškoláky z celé republiky.',
    image: require('@/assets/KFS2026_AntoninSvoboda-317.jpg'),
    imageAlt: 'Hosté diskutují na konferenci Free Spirit',
    imageWidth: 1800,
    imageHeight: 1200,
    href: 'https://stredoskolakroku.cz/',
    external: true,
    trackingLabel: 'free_spirit',
    category: 'Konference'
  },
  {
    id: 'vikend-top25',
    title: 'Víkend TOP25',
    description: 'Seznamovací víkend pro 25 finalistů Středoškoláka roku. Společné aktivity a výpravy do přírody dávají prostor přátelství i spolupráci.',
    image: require('@/assets/Víkend26_PS_Neděle_AntoninSvoboda-16.jpg'),
    imageAlt: 'Finalisté s koly před chatou na víkendovém setkání',
    imageWidth: 340,
    imageHeight: 340,
    href: 'https://stredoskolakroku.cz/',
    external: true,
    trackingLabel: 'top25',
    category: 'Pro finalisty'
  },
  {
    id: 'akademie-top100',
    title: 'Akademie TOP100',
    description: 'Vzdělávací program pro 100 finalistů soutěže. Workshopy, přednášky a debaty pomáhají rozvíjet dovednosti využitelné ve škole i mimo ni.',
    image: require('@/assets/Akademie2026_Pátek_SŠR_AntoninSvoboda-042.jpg'),
    imageAlt: 'Lektor a studenti na vzdělávací akademii',
    imageWidth: 1400,
    imageHeight: 933,
    href: 'https://stredoskolakroku.cz/',
    external: true,
    trackingLabel: 'top100',
    category: 'Pro finalisty'
  },
  {
    id: 'galavecer',
    title: 'Slavnostní galavečer',
    description: 'Závěrečný večer Středoškoláka roku s vyhlášením finalistů a předáním cen. Nechybí hosté ani debata na aktuální témata.',
    image: require('@/assets/Galavečer2026_StredoskolakRoku_AntoninSvoboda-131.jpg'),
    imageAlt: 'Ocenění finalisté na slavnostním vyhlášení soutěže',
    imageWidth: 340,
    imageHeight: 340,
    href: 'https://stredoskolakroku.cz/',
    external: true,
    trackingLabel: 'galavecer',
    category: 'Vyhlášení soutěže'
  },
  {
    id: 'vysokoskolak-roku',
    title: 'Vysokoškolák roku',
    description: 'Na vysoké škole to nekončí. Soutěž představuje vysokoškoláky, kteří se věnují aktivitám nad rámec svého studia.',
    image: require('@/assets/vysokoskolak_roku/foto_popis.jpeg'),
    imageAlt: 'Studenti a přednášející při společném vzdělávacím setkání',
    imageWidth: 2048,
    imageHeight: 1366,
    href: '/vysokoskolak-roku-2027',
    external: false,
    trackingLabel: 'vysokoskolak_roku',
    category: 'Pro vysokoškoláky'
  }
]

// Existing destinations from the shared footer; no unverified Discord invitation.
export const communityChannels = [
  { id: 'instagram', title: 'Instagram', description: 'Nahlédni do dění kolem našich akcí a komunity.', href: 'https://www.instagram.com/prostredoskolaky/', icon: 'instagram' },
  { id: 'facebook', title: 'Facebook', description: 'Sleduj novinky a informace o našich akcích.', href: 'https://www.facebook.com/prostredoskolaky/?fref=ts', icon: 'facebook' },
  { id: 'linkedin', title: 'LinkedIn', description: 'Poznej naše projekty a činnost organizace.', href: 'https://cz.linkedin.com/company/prost%C5%99edo%C5%A1kol%C3%A1ky-z-s-', icon: 'linkedin' },
  { id: 'blog', title: 'Blog', description: 'Přečti si příběhy aktivních studentů a načerpej inspiraci.', href: 'https://prostredoskolaky-cz.medium.com/', icon: 'book' }
]

export const partners = [
  { id: 'praha', title: 'Hlavní město Praha', image: require('@/assets/partners/praha.png'), width: 567, height: 567, href: 'https://www.praha.eu/' },
  { id: 'ddm6', title: 'DDM Praha 6', image: require('@/assets/partners/ddm6.png'), width: 400, height: 393, href: 'https://www.ddmp6.cz/' },
  { id: 'cteni', title: 'Čtení pomáhá', image: require('@/assets/partners/cteni.png'), width: 500, height: 180, href: 'https://www.ctenipomaha.cz/' },
  { id: 'preciosa', title: 'Nadace Preciosa', image: require('@/assets/partners/preciosa.png'), width: 400, height: 147, href: 'https://www.nadacepreciosa.cz/' },
  { id: 'rozhlas', title: 'Český rozhlas', image: require('@/assets/partners/CRo-Cesky_rozhlas-Z-RGB.png'), width: 758, height: 163, href: 'https://portal.rozhlas.cz/' },
  { id: 'ilf', title: 'Hotel ILF', image: require('@/assets/partners/logo-ILF-ramecek-barva-500.jpg'), width: 500, height: 495, href: 'https://www.hotel-ilf.cz/' }
]

export const footerGroups = [
  {
    title: 'Prozkoumej',
    links: [
      { title: 'Středoškolák roku', href: 'https://stredoskolakroku.cz/', external: true, trackingLabel: 'soutez' },
      { title: 'Vysokoškolák roku', href: '/vysokoskolak-roku-2027' },
      { title: 'AMIGO', href: '/amigo' },
      { title: 'Databáze aktivit', href: '/databaze' },
      { title: 'O nás', href: '/o-nas', trackingLabel: 'about_us' }
    ]
  },
  {
    title: 'Užitečné odkazy',
    links: [
      { title: 'Vše o IVP', href: '/ivp' },
      { title: 'Blog', href: communityChannels[3].href, external: true, trackingLabel: 'blog' },
      { title: 'YouTube', href: 'https://www.youtube.com/channel/UCzE5_oYsLRIYB5ej35unTBw', external: true, trackingLabel: 'youtube' },
      { title: 'Archiv Free Spirit', href: 'https://www.facebook.com/events/681821840504671/', external: true, trackingLabel: 'free_spirit_archive' },
      { title: 'Podmínky soutěže', href: 'https://drive.google.com/file/d/1Jq48GaNIC-yhYy583tWcLdhWL3_6NIX9/view?usp=sharing', external: true, trackingLabel: 'competition_terms' }
    ]
  },
  {
    title: 'Napsali o nás',
    links: [
      { title: 'EDUin', href: 'https://www.eduin.cz/clanky/neformalni-vzdelavani-rozsiruje-prehled-stredoskolaci-ukazuji-vrstevnikum-jak-na-to/', external: true, trackingLabel: 'eduin' },
      { title: 'iDNES.cz', href: 'https://www.idnes.cz/zpravy/domaci/vyuka-mimo-skolu-a-tomas-zahradnik.A140731_212757_domaci_ert', external: true, trackingLabel: 'idnes' },
      { title: 'Respekt', href: 'https://www.respekt.cz/tydenik/2014/41/nespolehat-jen-na-skolu', external: true, trackingLabel: 'respekt' }
    ]
  }
]

export const privacyHref = 'https://drive.google.com/file/d/1-MDM8wdW7xctBT3kmrq6FSI_48nl-2BB/view?usp=sharing'
