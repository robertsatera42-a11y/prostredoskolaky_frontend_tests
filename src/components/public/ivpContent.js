// Existing IVP topics, edited for clarity. Legal points checked against gov.cz
// and MŠMT's consolidated decree 13/2005 Sb. effective 1 January 2026.
export const ivpGroups = [
  {
    id: 'zaklady',
    title: 'Základy IVP',
    description: 'Co plán umožňuje a kdo o něj může požádat.',
    questions: [
      {
        title: 'Co je to IVP?',
        paragraphs: [
          'Individuální vzdělávací plán (IVP) upravuje organizaci vzdělávání podle potřeb konkrétního studenta. Tento průvodce se věnuje hlavně aktivním středoškolákům, kteří chtějí sladit školu a mimoškolní rozvoj.',
          'U IVP povoleného z jiných závažných důvodů se upravuje organizace výuky a délka vzdělávání, přičemž obsah a rozsah vzdělávání stanovený školním vzdělávacím programem zůstává zachován.'
        ]
      },
      {
        title: 'Jak a kdo žádá o IVP?',
        paragraphs: ['Písemná žádost je adresovaná řediteli školy. Podává ji zletilý žák, nebo zákonný zástupce nezletilého žáka. Nejdřív si s vedením školy domluv, co od IVP očekáváš a jaké podklady budeš potřebovat.']
      },
      {
        title: 'O co si mohu v IVP žádat?',
        paragraphs: [
          'Studenti často řeší úpravu docházky, termínů testů nebo způsobu doplňování hodnocení. Někdo chodí do školy ve smluvených časech, jiný potřebuje uvolnění z určitých hodin například kvůli sportovním tréninkům.',
          'Rozsah docházky, omlouvání absence i doplňování klasifikace vychází z konkrétních podmínek tvého plánu a pravidel školy. Domluv je se školou předem, abys věděl, jaké máš možnosti a povinnosti.'
        ]
      }
    ]
  },
  {
    id: 'zadost',
    title: 'Jak začít',
    description: 'Od první domluvy se školou po rozhodnutí o žádosti.',
    questions: [
      {
        title: 'Kdy s vyřizováním IVP začít?',
        paragraphs: ['Začni s přípravou včas. Některé podklady, například doporučení poradenského zařízení, mohou trvat déle. Žádost lze řešit kdykoliv během vzdělávání; konkrétní období a termíny si domluv se školou.']
      },
      {
        title: 'Jak probíhá proces získávání IVP?',
        paragraphs: [
          'Před sepisováním žádosti je dobré IVP neformálně probrat s vedením školy. Ujasněte si, co od něj očekáváte, jaké aktivity chceš rozvíjet a jak budeš plnit školní povinnosti.',
          'Poté podáš písemnou žádost s potřebnými podklady. Škola o ní rozhodne. V povoleném plánu si se školou vyjasni organizaci studia, termíny a povinnosti. Otevřená komunikace s vedením i učiteli je důležitá po celou dobu.'
        ]
      },
      {
        title: 'Jaké dokumenty musím k IVP dodávat?',
        paragraphs: ['Základem je písemná žádost. Další podklady se odvíjejí od důvodu žádosti; ověř si je přímo se školou. Mohou dokládat tvé mimoškolní aktivity, doporučení vedoucích nebo odborníků.'],
        list: ['Přehled relevantních aktivit a vysvětlení, proč kvůli nim IVP potřebuješ.', 'Potvrzení nebo doporučení vedoucích tvých aktivit, pokud je škola požaduje.', 'Doporučení školského poradenského zařízení, pokud je pro daný důvod žádosti potřeba.']
      },
      {
        title: 'Má škola povinnost mi IVP udělit?',
        paragraphs: [
          'Záleží na důvodu žádosti. IVP jako podpůrné opatření doporučené školským poradenským zařízením podle § 16 školského zákona škola zpracovává povinně. Ve střední škole musí ředitel povolit IVP také sportovnímu reprezentantovi České republiky, který doloží příslušné potvrzení.',
          'U žádosti z jiných závažných důvodů posuzuje jejich závažnost ředitel školy. Podmínky svého případu si ověř se školou nebo poradenským zařízením.'
        ]
      },
      {
        title: 'Co mám dělat, pokud mi škola IVP neudělí?',
        paragraphs: [
          'Prober s vedením důvody zamítnutí a možnosti, jak své aktivity se školou sladit. Pomoci může doplnění podkladů nebo jiná dohoda o docházce a hodnocení.',
          'Proti zamítnutí žádosti lze podat odvolání ke krajskému úřadu nebo Magistrátu hlavního města Prahy podle sídla školy, prostřednictvím ředitele školy. Postup a lhůtu si ověř v poučení rozhodnutí.'
        ]
      },
      {
        title: 'Jaké k IVP existují alternativy?',
        paragraphs: [
          'Některé školy mají vlastní způsoby podpory aktivních studentů. Může jít o uvolnění z konkrétních hodin, individuální dopisování testů nebo jinou dohodu o docházce. Zeptej se vedení, učitelů i studentů, kteří podobnou situaci řešili.',
          'Pokud na škole nenajdeš vhodné podmínky, můžeš zvažovat přestup nebo jinou formu studia. Zkušenosti s otevřenými školami můžeš hledat i mezi dalšími lidmi z komunity aktivních středoškoláků.'
        ]
      }
    ]
  },
  {
    id: 'studium',
    title: 'Studium s IVP',
    description: 'Jak se domluvit na docházce, podkladech a hodnocení.',
    questions: [
      {
        title: 'I přesto, že mám IVP, mi učitelé nevycházejí vstříc. Co mám dělat?',
        paragraphs: ['Začni otevřenou komunikací s učiteli. Vysvětli své potřeby a společně projděte podmínky schváleného plánu. Při domlouvání konzultací a doplňování testů mysli také na časové možnosti učitelů. Pokud se nedaří najít řešení, obrať se na vedení školy.']
      },
      {
        title: 'Jak probíhá omlouvání absence ve škole?',
        paragraphs: ['Omlouvání absence se řídí podmínkami plánu a pravidly tvé školy. Předem si ujasni, kdo absenci omlouvá, jak ji dokládáš a jak budeš doplňovat zameškané učivo a hodnocení. Podmínky různých škol se mohou lišit.']
      },
      {
        title: 'Co jsou to komisionální zkoušky?',
        paragraphs: [
          'Komisionální zkoušky se podle vyhlášky č. 13/2005 Sb. konají například při opravných zkouškách nebo komisionálním přezkoušení. Podrobnosti včetně složení komise a termínů stanoví ředitel školy a zveřejní je na přístupném místě.',
          'Způsob doplnění hodnocení při studiu s IVP si ověř přímo ve svém plánu a školním řádu. S učiteli průběžně domlouvej termíny testů a další možnosti, jak hodnocení doplnit.'
        ]
      }
    ]
  }
]

export const ivpSources = [
  { title: 'Povolení IVP na Portálu veřejné správy', href: 'https://portal.gov.cz/sluzby-vs/povoleni-individualniho-vzdelavaciho-planu-S1100' },
  { title: 'Vyhláška č. 13/2005 Sb. na webu MŠMT', href: 'https://msmt.gov.cz/media/wp-content/uploads/2026/07/13-2005-k1.1.2026.pdf' }
]
