<template>
  <section class="info-section">
    <div class="content">
      <div class="about-wrapper">
        <div class="max-width-80">
          <h2>Dali jsme dohromady ty nejaktivnější bývalé středoškoláky, aby ti pomohli s tvým rozletem</h2>
          <p>Ať už chceš poradit se svým projektem, hledáš rady a tipy, jak dělat něco navíc, anebo si chceš popovídat, co s životem po střední. Pak je program Amigo přímo pro tebe.</p>
        </div>
      </div>

      <div class="why-wrapper">
        <div class="flex start">
          <div class="flex-1">
            <span class="orange why-title">Proč se programu zúčastnit?</span>
            <div
              class="why-description"
            >I když se snažíš využít svou střední školu na maximum, je občas lepší nepostupovat jen cestou pokus-omyl, ale obrátit se na někoho, kdo si už podobnými situacemi, jaké teď řešíš, prošel a může se na tvá nynější rozhodnutí podívat s větším odstupem. Přinášíme ti skupinu tvořenou mentory z řad finalistů soutěže Středoškolák roku, ale i dalších úspěšných lidí, kteří jsou sice jen pár let po střední, ale dokázali už nabrat plno cenných zkušeností.</div>
            <span class="orange why-title">Co od programu očekávat?</span>
            <div
              class="why-description"
            >Během programu budeš mít příležitost se několikrát setkat či si zavolat se svým amigo veteránem, se kterým budeš řešit tvé aktuální problémy a otázky. Tvůj veterán se ti bude snažit předat svůj pohled na věc, své rady a tipy a motivovat tě do dalších rozhodnutí.</div>
          </div>
          <div class="flex-1">
            <span class="orange why-title">Jak to bude probíhat?</span>
            <div class="why-description">
              <ul>
              <li>Zaujme-li tě alespoň jeden z našich amigů, klikni na „Přihlas se do programu“ a vyplň přihlášku. Odešli ji nejpozději do 30. 11. 2023 23:59.</li>
              <li>Úvodní setkání již proběhlo, ale pořád si můžeš vybrat svého mentora a absolvovat všechna další setkání.</li>
              <li>Ty i tvůj amigo obdržíte krátký seznam neformálních instrukcí, jak a o čem vést vaše rozhovory, abyste si to oba užili.</li>
              <li>Několikrát si zavoláte nebo se sejdete, záleží na Vašich možnostech, a pokusíte se posunout tvé aktivity o kousek dál či v tobě jen zažehnout ducha aktivního středoškoláka.</li>
              <li>Po každém kontaktu ti pošleme krátký dotazník, abychom ověřili, že jde vše hladce a setkání jsou pro tebe přínosná. Kdybyste zjistili, že si nesedíte, dej nám vědět a podíváme se po možné náhradě.</li>
              <li>Hlavně si to však oba musíte užít a co nejvíce se vzájemně obohatit.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="round-time">
          Přihlas se do
          <span class="orange">30. listopadu 2023</span>
        </div>
        <a href="https://forms.gle/zKf6hP2R4xNZVvAR7" target="_blank" class="step-link">Vyplnit přihlášku</a>
      </div>

      <div class="picture-wrapper">
        <div class="overlay first">
          <div class="overlay-image"></div>
          <div class="overlay-background"></div>
        </div>
        <div class="overlay second">
          <div class="overlay-image"></div>
          <div class="overlay-background"></div>
        </div>
        <div class="overlay third">
          <div class="overlay-image"></div>
          <div class="overlay-background"></div>
        </div>
      </div>

      <div class="amigos-wrapper">
        <h2>Naši amigos</h2>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/millerova.jpg">
            <span class="amigo-name">Sabina Millerová</span>
            <span class="orange amigo-hashtags">#historie #archeologie #zpěv #umění</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'millerova'}) ]">
              <ul>
                <li>Už od dětství jsem se soutěžně věnovala sólovému zpěvu a postupně začala jezdit i na soutěže v latinsko-americkém tanci. Kromě toho mě to vždy táhlo k herectví. Během studia na gymplu jsem se ale začala věnovat humanitním vědám - konkrétně historii a archeologii, které v současnosti studuji ve dvouoboru na FF UK. Již na střední jsem se zúčastnila vysokoškolských praxí, stážovala v rámci Otevřené vědy na dvou různých ústavech AV ČR a zúčastnila se projektů Eustory.</li>
                <li>Zajímalo by tě, jak skloubit mimoškolní zájmy z různých oborů i naprosto jiné druhy mimoškolních aktivit? Baví tě humanitní vědy, ale nevíš, jestli najdeš uplatnění? Zajímá tě umění a hledáš další možnost uplatnění se? S tím vším Ti mohu pomoct. :)</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'millerova'})]"
              @click="changeAmigo('millerova')"
            >
              <span></span>
              {{activeAmigo === 'millerova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/heger.jpg">
            <span class="amigo-name">Tomáš Heger</span>
            <span class="orange amigo-hashtags">#chemie #studiumvzahraničí #vzdělávání</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'heger'}) ]">
              <ul>
                <li>JAhoj, jsem Tomáš a studuji druhý ročník předmětu Natural Sciences na University of Cambridge. Z vědních oborů mám nejblíže k výpočetní chemii, ale baví mě získávat vědomosti ve všech přírodních vědách a propojovat je dohromady. Intelektuálně mě hodně zajímá, jak se tohle propojení oborů dá využít např. při řešení klimatických problémů, kterým čelíme. Taky bych chtěl pochopit, jak tato řešení nejlépe prosazovat do praxe. Mám za sebou dvě stáže na ústavech Akademie věd, zaměřené právě na výpočetní chemii a na biochemii enzymů.</li>
                <li>Kromě toho pomáhám organizovat různé vzdělávací akce a semináře - pokud jste někdy slyšeli o semináři KSICHT, letním odborném soustředění Běstvinka nebo programu Výlety za Vědou, tak tam všude se se mnou můžete setkat (nebo spíš o mě slyšet, protože zahraniční studium mi mnohdy znemožňuje věci organizovat osobně, ač bych moc rád).</li>
                <li>Ve volném čase rád cestuju do přírody pěšky nebo na kole, třeba v rámci skautské družiny, ve které jsem již od dětství. Kromě toho věřím, že dobrá kniha a vášnivý tanec poskytnou odpovědi na většinu palčivých životních otázek.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'heger'})]"
              @click="changeAmigo('heger')"
            >
              <span></span>
              {{activeAmigo === 'heger' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/kaspar.jpg">
            <span class="amigo-name">Robin Kašpar</span>
            <span class="orange amigo-hashtags">#právo #politika #youthengagement #společenskévědy</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'kaspar'}) ]">
              <ul>
                <li>Ahoj! Jsem Robin a v současnosti studuju prvním rokem práva. Na střední jsem se přes úspěšnou účast na řadě politických simulací dostal ke stáži v neziskovce AMO, reprezentaci středoškoláků v České středoškolské unii, organizaci projektů jako je AMOB pro aktivní studenty, nebo budování startupu v Soutěž&Podnikej, které mě dovedly až ke stáži v Evropském parlametu. Vedle toho ve volném čase rád sportuju (posilování, tenis, lyže a bojové umění), cestuju nebo dokola sjíždím bondovky a star wars</li>
                <li>Ať už Tě zajímá politika, právo, participace mladých nebo seberozvoj, rád Ti pomůžu využít Tvůj potenciál naplno a poradit se vším tak, ať nastartuješ svoji kariéru na střední a nevyhoříš při tom, co Tě baví.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'kaspar'})]"
              @click="changeAmigo('kaspar')"
            >
              <span></span>
              {{activeAmigo === 'kaspar' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/pankova.jpg">
            <span class="amigo-name">Anna Pánková</span>
            <span class="orange amigo-hashtags">#společenskévědy #studiumvzahraničí #ekonomie</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'pankova'}) ]">
              <ul>
                <li>Jsem nadšená studentka společenských věd se zaměřením na ekonomii a sociologii na Sciences Po ve Francii. V průběhu střední školy jsem si prošla řadou stáží, vzdělávacích akcí a soutěží od stáže na Filosofickém ústavu Akademie věd a consultingové firmě Deloitte, přes předsedání spolku MOB-Mladí občané a úspěšnou SOČku, až po reprezentaci ČR na Mezinárodní filosofické olympiádě. Na vysoké jsem založila dvě studentské asociace a vedu pobočku juniorního consulting týmu. Ve volném čase se ráda učím nové jazyky, low-cost cestuji, hraji na klavír a flétnu, chodím do divadla a vůbec dělám všechno možné. Ráda pomůžu a poradím s čímkoli od studia v zahraničí, přes ekonomii a filosofii až po doporučení na knížky.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'pankova'})]"
              @click="changeAmigo('pankova')"
            >
              <span></span>
              {{activeAmigo === 'pankova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/prusova.jpg">
            <span class="amigo-name">Anna Průšová</span>
            <span class="orange amigo-hashtags">#fyzika #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'prusova'}) ]">
              <ul>
                <li>Ahoj, jmenuji se Anička a momentálně studuji druhým rokem fyziku na Technické univerzitě v Mnichově. Během střední jsem se věnovala právě fyzice, ale i chemii. Mám za sebou stáž na Fyzikálním i Astronomickém ústavu AV ČR, vícero soutěží, letní školu fyzikální chemie, samostudium biochemie a cizích jazyků, praxi v architektonické kanceláři a mateřské škole v Německu.</li>
                <li> Ráda poradím s hledáním stáží, soutěží a vysoké, jak v Čechách, tak zahraničí. Ukážu ti, jak kombinovat samostudium s běžnějšími formami vzdělávání, a jak se z těch všech aktivit nezbláznit.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'prusova'})]"
              @click="changeAmigo('prusova')"
            >
              <span></span>
              {{activeAmigo === 'prusova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/vitova.jpg">
            <span class="amigo-name">Jana Vítová</span>
            <span class="orange amigo-hashtags">#marketing #cestování #psychickézdraví</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'vitova'}) ]">
              <ul>
                <li>Jsem Jana a věnuji se marketingu a psychickému zdraví. V komunitě aktivních studentů se pohybuji od roku 2020. Prošla jsem si mnoho programy od Samsung Tvoje Šance #fitureskills až po The Duke of Edinburgh's International Award. Od roku 2021 taky aktivně sdílím o tom, jaká to je mít psychickou nemoc a jak se s ní dá spokojeně žít. Hodně cestuji a dlouhodobě žiji v zahraničí. V současné chvíli vedu marketing v neziskové organizaci Nekrachni. Dále jsem založila svůj projekt Ataka, kde dávám prostor lidem s psychickými problémy sdílet jejich umění.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'vitova'})]"
              @click="changeAmigo('vitova')"
            >
              <span></span>
              {{activeAmigo === 'vitova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/vacal.jpg">
            <span class="amigo-name">Patrik Vácal</span>
            <span class="orange amigo-hashtags">#uměláinteligence #samostudium #informatika #kyberbezpečnost</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'vacal'}) ]">
              <ul>
                <li>Ahoj tady Patrik! Dělám, co mě zrovna baví, což většinou skončí u IT. - Na střední jsem dva roky pracoval pro britský startup, založil startup vlastní a zkusil si třeba i vývoj vodíkového autíčka. Také jsem se probojoval do národního kybertýmu, který reprezentovat Česko na European Cyber Security Challenge ve Vídni. Posledních pár let se věnuji hlavně AI. Například jsem jí během stáže na Akademii věd zkoušel využít k chemickým simulacím. Momentálně AI studuji na Matfyzu v Praze. - Rád zkouším nové věci i mimo IT. Minulý rok jsem běžel půlmaraton, byl jsem na dvouměsíční cestě po Asii či doučoval středoškolskou matiku. Jednoduše, co mi přijde zajímavé to prostě zkusím. - Chceš-li se naplno ponořit do technologií, vytvořit báječnou apku, zjistit jak se hackuje nebo se ponořit do výzkumu AI, rád ti pomůžu najít ten správný směr.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'vacal'})]"
              @click="changeAmigo('vacal')"
            >
              <span></span>
              {{activeAmigo === 'vacal' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/tomastikova.jpg">
            <span class="amigo-name">Jana Tomaštíková</span>
            <span class="orange amigo-hashtags">#neurověda #psychologie #studiumvzahraničí #tanec</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'tomastikova'}) ]">
              <ul>
                <li>Na konci střední jsem se rozhodla vrhnout se do studia mozku a lidského chování. Teď jsem studentkou třetího ročníku psychologie na University of Edinburgh. Ne vždy jsem ale věděla, co bych chtěla dělat (tak jsem prostě četla Harryho Pottera). Když ale vyzkoušíš různé věci, někam tě to vždycky posune.</li>
                <li>Přes má středoškolská léta jsem sportovala, soutěžně tancovala v Česku a jiných zemích, ale zároveň jsem třeba i prezentovala na Přírodovědecké konferenci, překládala články z angličtiny do češtiny pro Mensa časopis, nebo dobrovolničila v Alzheimer centru. Nakonec jsem si vysnila studovat v zahraničí. Nedávno jsem dokončila neurovědeckou stáž na University of Cambridge. Nikdy nevíš, kde tě malé kroky, které teď děláš, nakonec zavedou.</li>
                <li>Ráda pokecám o psychologii a neurovědě. Poradím, co s volným časem, nebo jak na přihlášky na univerzitu v zahraničí. Můžeme spolu probrat, co tě zajímá a baví, a vymyslet jak nejlíp dál (a jak se při tom nezbláznit!).</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'tomastikova'})]"
              @click="changeAmigo('tomastikova')"
            >
              <span></span>
              {{activeAmigo === 'tomastikova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/gartnerova.jpg">
            <span class="amigo-name">Eliška Gärtnerová</span>
            <span class="orange amigo-hashtags">#zahraničí #psychologie #neurodivergence #duševnízdraví</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'gartnerova'}) ]">
              <ul>
                <li>Fotka asi prozradila, že z Česka si s Tebou volat nebudu - nevylučuji ale, že bychom se nemohli potkat okolo Vánoc nebo Velikonoc :) už chvíli žiji v Británii, nyní začínám se studiem udržitelného rozvoje na univerzitě v Edinburghu.</li>
                <li>Rok jsem pracovala jako asistentka ve výuce dětem se specifickými výukovými potřebami. Z psychologie jsem dělala v Anglii maturitu, a o duševní zdraví jsem se zajímala ještě před tím, než jsem si s ním sama zažila dost formující zkušenost.</li>
                <li>Během střední jsem si prošla Microsoft STC, Yodou, ale vytvářela i vlastní projekty. Naučila jsem se, že zkoušet všechno možné je strašně super, a jen velmi málo kdy to může dopadnout extra špatně. Těším se, až Tě třeba poznám, a podpořím nejen v osobním rozvoji.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'gartnerova'})]"
              @click="changeAmigo('gartnerova')"
            >
              <span></span>
              {{activeAmigo === 'gartnerova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/jelinkova.jpg">
            <span class="amigo-name">Karolína Jelínková</span>
            <span class="orange amigo-hashtags">#studiumvzahraničí #ekonomie #politika #výzkum</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'jelinkova'}) ]">
              <ul>
                <li>Jsem studentka společenských a humanitních věd na francouzské univerzitě Sciences Po. Během střední školy jsem se věnovala několika mimoškolním aktivitám v různých oborech včetně sociologického výzkumu v Akademii věd, politických simulací, stáží, soutěží a jiných vzdělávacích projektů. Ráda pomůžu s přihláškou na zahraniční univerzity nejen do Francie, ale třeba i do Británie a Nizozemí. Můžu také poradit se SOČkou či jinou akademickou prací v oblasti společenských věd (ekonomie, sociologie, politologie). Můžeme pokecat úplně očemkoliv od tvých mimoškolních aktivit, zájmů, cílů a plánů, přes time management a vyhoření, až třeba po politiku a seriály.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'jelinkova'})]"
              @click="changeAmigo('jelinkova')"
            >
              <span></span>
              {{activeAmigo === 'jelinkova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/kursa.jpg">
            <span class="amigo-name">Stanislav Kursa</span>
            <span class="orange amigo-hashtags">#tech #marketing #vize</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'kursa'}) ]">
              <ul>
                <li>Na základě zkušeností z vedení vlastní značky oblečení, sdíleného showroomu s deseti českými a slovenskými značkami oblečení, organizace vzdělávacích a sportovních neziskových akcí, pěti vytížených let v social media marketingu a třech letech ve výkonnostním marketingu od působení v agentuře až po vlastní menší tým a správu malých, středních i korporátních klientů, Standa přemýšlel nad důvodem nízkých konverzních poměrů v online, rozdíly mezi online a offline prodejem a možnostmi posílení lidské složky v online prostoru, načež přišel s prvotní myšlenkou Creaitionu | webových asistentů s lidskou tváří, kteří aktuálně zlidšťují online Zootu, Mercedes-Benz, Direct auto a dalších klientů.</li>
                <li>Standa je vizionářem týmu, který denně přichází s novými podněty, inspiracemi, nápady a možnými cestami rozvoje. V Creaitionu vidí možnost statisícům lidí pomoci správně, rychle a poutavě nakoupit i sjednat v online světě a to je jeho hnacím motorem.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'kursa'})]"
              @click="changeAmigo('kursa')"
            >
              <span></span>
              {{activeAmigo === 'kursa' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/maresova.jpg">
            <span class="amigo-name">Kateřina Marešová</span>
            <span class="orange amigo-hashtags">#biologie #věda #výzkum #duševnízdraví</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'maresova'}) ]">
              <ul>
                <li>Ahoj, jsem Káťa, studentka Molekulární biologie a biochemie na Univerzitě Karlově. Od střední jsem prošla několika laboratořemi, počínaje stáží na FGÚ Akademie věd. Pokračovala jsem ve farmaceutické firmě Contipro a poslední tři roky jsem pracovala ve start-upu Bene Meat Technologies vyvíjející kultivované maso. Mám za sebou taky mnohaletou účast v přírodovědných soutěžích a soustředění Běstvina, takže ti mohu pomoci s přípravou třeba na Biologickou olympiádu, poznávačky a podobně. V současnosti dělám marketing a grafiku ProStředoškoláky.</li>
                <li>Poslední roky mě nejvíce zaměstnává otázka duševního zdraví. Při studiu se potýkám s úzkostnou poruchou, mohu se tedy opřít o vlastní zkušenost při pomoci druhým v nelehkých situacích. Ráda ti poradím, jak takto zvládat studium a najít odbornou pomoc. A nebo pokud jen hledáš parťáka na sdílení, jsem tu pro tebe :)</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'maresova'})]"
              @click="changeAmigo('maresova')"
            >
              <span></span>
              {{activeAmigo === 'maresova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/hlavenka.jpg">
            <span class="amigo-name">Vojtěch Hlavenka</span>
            <span class="orange amigo-hashtags">#podnikání #nezisk #startupy #gapyear</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'hlavenka'}) ]">
              <ul>
                <li>Pokud tě baví svět podnikání nebo nezisku, tak budeme mít minimálně jedno společný téma :). A jestli skončíme na tenisu, nebo společně posuneme tvůj projekt o kus dál, je na tobě.</li>
                <li>Můj první byznys byl obchod s oblečením, který dnes utrží kolem 500 000 měsíčně.</li>
                <li>V 16 jsem založil taky Názory Politiků, které během 4 voleb pomohlo více než 300 000 voličů zvolit si sobě nejbližšího kandidáta. Po získání Ceny Gratias tibi ale práce teprve začíná. Dnes pracujeme na modernizaci výuky politologie ve školách.</li>
                <li>Ke startupům jsem se dostal díky pozici markeťáka-obchoďáka v rostutu, které se zaměřuje na vertikální zemědělství a dodává svou produkci do krajských měst.</li>
                <li>A dnes vedu vlastní startup s dvěma produkty - mySASY a elonga. To je po mých rozlítaných středoškolských aktivitách firma, kde se vidím i za 5 let, a věřím, že produkty změní způsob, jakým lidé mohou pracovat na svém fyzickém, ale i mentálním zdraví.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'hlavenka'})]"
              @click="changeAmigo('hlavenka')"
            >
              <span></span>
              {{activeAmigo === 'hlavenka' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/ryba.jpg">
            <span class="amigo-name">David Ryba</span>
            <span class="orange amigo-hashtags">#architektura #prezentačnídovednosti #eventmanagement #sport</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'ryba'}) ]">
              <ul>
                <li>Ze všeho nejvíc mě baví učit se – za knížkami mě nenajdete, ale co se dovedností týče, budete jen těžko hledat někoho, kdo se takhle nadchne v podstatě pro cokoliv. Poslední 2 roky jsem stál za kormidlem mistrovství škol Česka a Slovenska v prezentačních dovednostech – Prezentiádou, spouorganizuji TEDxPragueED, miluji si hrát v PowerPointu a posledních pár let pracuji na učebních podkladech, se kterým si kladu za cíl pomoct k lepší výuce softskills na školách v ČR. K tomu studuji 3. ročník architektury v Brně, dělal jsem vrcholově atletiku a teď nově začal trénovat na Ironmana. Těším se, až budu moct být co nejvíce napomocný!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'ryba'})]"
              @click="changeAmigo('ryba')"
            >
              <span></span>
              {{activeAmigo === 'ryba' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/kubon.jpg">
            <span class="amigo-name">Václav Kuboň</span>
            <span class="orange amigo-hashtags">#informatika #věda #debatování #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'kubon'}) ]">
              <ul>
                <li>Jsem v druháku Computer Science na TU Delft v Nizozemsku. Svou Ostravskou střední jsem si zpestřil účastí v startupových soutěžích jako Soutěž a Podnikej, výzkum umělé inteligence v rámci SOČ, stáží v Red Hat, nebo účastí na mistrovství světa v debatování. Nedávno jsem skončil roční stáž v Pražské AI konzultační firmě Blindspot. Nyní se věnuju AI dál ve svém univerzitním výzkumu.</li>
                <li>Pokud jsi ještě nejseš jistý, čemu se chceš plno věnovat, můžeme společně prozkoumat dostupné aktivity nebo zajímavé oblasti informatiky. Pokud už cíle máš, tak ti je pomůžu splnit. Ať už chceš rozvninout svůj nápad na podnikání nebo výzkum, připravit se na důležitý pohovor, nebo psát přihlášky na stipendia a vysoké školy. Ve všech případech je sebeprezentace a dobrá příprava klíčem.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'kubon'})]"
              @click="changeAmigo('kubon')"
            >
              <span></span>
              {{activeAmigo === 'kubon' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>


          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/svidrnochova.jpg">
            <span class="amigo-name">Lenka Švidrnochová</span>
            <span class="orange amigo-hashtags">#studiumvzahraničí #podnikání #fotografie #seberozvoj</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'svidrnochova'}) ]">
              <ul>
                <li>Ahoj! Po gymnáziu jsem vyrazila do Dánska, kde jsem studovala Marketing, Inovace & Podnikání, a nyní se věnuji Turismu. Během posledních čtyř let na severu jsem se naučila dánsky a získala skvělé sociální zázemí. Pracuji navíc také jako fotografka pro soukromé i komerční klienty. Dánsko pro mě znamená nejen úžasné studium a práci, ale také nové přátelství, dobrodružství a možnosti.</li>
                <li>Mezi mé koníčky patří běhání od 5 km po maraton, geocaching, hory, otužování, dobrovolnictví, příprava rostlinných dezertů nebo kalistenika. Užívám si také jakékoliv sebepřekonávací výzvy.</li>
                <li>Pokud tedy přemýšlíš nad studiem v zahraničí nebo tě zaujaly některé z mých studijních programů, ráda ti pomůžu v tvé cestě.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'svidrnochova'})]"
              @click="changeAmigo('svidrnochova')"
            >
              <span></span>
              {{activeAmigo === 'svidrnochova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

      </div>

      <div class="mentor-box">
        <div class="mentor-title">Přihlas se ještě dnes!</div>
        <a href="https://forms.gle/zKf6hP2R4xNZVvAR7" target="_blank" class="mentor-button button">Přihlas se do programu</a>
        <!-- <a target="_blank" class="mentor-button button">Přihlašování bylo ukončeno</a> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'info-block',
  data () {
    return {
      activeAmigo: ''
    }
  },
  methods: {
    changeAmigo (amigo) {
      if (amigo === this.activeAmigo) {
        this.activeAmigo = ''
      } else {
        this.activeAmigo = amigo
      }
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px 40px 0;

  @media (max-width: 800px) {
    width: 90%;
    padding: 20px;
  }
}

section.info-section {
  padding: 20px 0 60px;
  position: relative;

  h2 {
    letter-spacing: 0.5px;
    text-align: center;
  }
  p {
    text-align: center;
  }

  .about-wrapper {
    .max-width-80 {
      margin: auto;

      p {
        padding-top: 20px;
      }
    }
  }

  .why-wrapper {
    margin-top: 40px;

    .why-title {
      margin-bottom: 20px;
      text-align: left;
    }
    .why-description {
      padding-bottom: 20px;
      text-align: justify;

      ul {
        margin-top: 0;
        list-style: none;
      }
      li::before {
        content: "\2022";
        color: #f06027;
        width: 20px;
        margin-left: -20px;
        display: inline-block;
    }
    }
    .round-time {
      text-align: center;
      font-size: 20px;
    }

    .step-link {
      display: block;
      margin: 30px auto 0 auto;
      width: 20%;
      text-align: center;
      color: #f06027;
      padding: 5px 0 5px 50px;
      transition: 0.3s;
      background: url(~@/assets/svg/circle-arrow.svg) no-repeat left center;
      background-size: 34px 34px;

      @media (max-width: 600px) {
        width: 60%;
      }

      &:hover {
        background-position-x: 5px;
      }
    }
  }

  .picture-wrapper {
    padding-top: 65px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .overlay {
      position: relative;
      width: 300px;
      height: 300px;

      @media (max-width: 700px) {
          width: 120px;
          height: 120px;
        }

      .overlay-background {
        position: absolute;
        background: linear-gradient(
          160deg,
          rgba(127, 97, 250, 0.4) 25%,
          rgba(215, 109, 124, 0.4) 75%
        );
        z-index: -1;
        top: 0;
        left: 0;
        height: 88%;
        width: 88%;
      }

      .overlay-image {
        position: absolute;
        width: 88%;
        height: 88%;
        left: 0;
        top: 0;
        z-index: -1;
        background-size: cover;
        background-repeat: no-repeat;
      }

      &.first {
        .overlay-image {
          background-image: url(~@/assets/amigo/ment4.jpg);
        }
      }
      &.second {
        margin-top: 40px;
        .overlay-image {
          background-image: url(~@/assets/amigo/ment.jpg);
        }
      }
      &.third {
        margin-top: 80px;
        .overlay-image {
          background-image: url(~@/assets/amigo/ment3.jpg);
        }
      }
    }
  }

  .amigos-wrapper {
    margin-top: 50px;
    h2 {
      margin-bottom: 40px;
    }
  }
  .amigo {
    &-img {
      border-radius: 100%;
      max-width: 120px;
      margin-bottom: 16px;
    }
    &-name {
      font-size: 18px;
    }
    &-more-info {
      overflow: hidden;
      max-height: 100px;
      padding-bottom: 10px;
      position: relative;
      transition: 1s cubic-bezier(0.2, 0.5, 0.3, 0.9);

      &-overlay {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff)
      }

      &.active {
        max-height: 800px;
      }
    }
    &-info {
      margin-top: 20px;
      cursor: pointer;
      span {
        display: inline-block;
        width: 26px;
        height: 12px;
        background: url(~@/assets/svg/arrow.svg) no-repeat center center;
        background-size: contain;
        transform: rotate(-90deg);
        transition: 0.3s;
      }
      &.active span {
        transform: rotate(90deg);
      }
    }
    .button {
      background: #f06027;
      color: white;
    }
    ul {
      list-style: none;
      padding-bottom: 20px;
    }
    li::before {
      content: "\2022";
      color: #f06027;
      width: 20px;
      margin-left: -20px;
      display: inline-block;
    }

    @media (max-width: 600px) {
      &:nth-child(odd) {
        margin-bottom: 50px !important;
      }
    }
  }

  .mentor {
    &-box {
      margin-top: 35px;
      padding: 35px 50px;
      background: linear-gradient(
        165deg,
        rgba(127, 97, 250, 0.5) 3%,
        rgba(191, 106, 159, 0.65) 92%,
        rgba(215, 109, 124, 0.7) 105%
      );
      border-radius: 16px;
      color: #fff;
      text-align: center;

      @media (max-width: 400px) {
        padding: 20px;
      }
    }
    &-title {
      font-size: 22px;
      margin-bottom: 20px;
    }
    &-button {
      background: #f06027;
      color: white;
      padding: 0 18px;
      font-size: 18px;
      font-family: "NunitoLight", sans-serif;
    }
  }

  .max-width {
    &-50 {
      max-width: 50%;

      @media (max-width: 800px) {
        max-width: 80%;
        margin: auto;
      }
    }
    &-80 {
      max-width: 80%;

      @media (max-width: 600px) {
        margin: auto;
      }
      @media (max-width: 500px) {
        max-width: 100%;
      }
    }
  }

  .flex {
    display: flex;
    flex-direction: row;
    margin-bottom: 60px;

    &.start {
      align-items: flex-start;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      margin-bottom: 40px;
    }

    .flex-1 {
      flex: 1;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
