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
              <li>Pravidelně tě budeme kontaktovat, abychom ověřili, že jde vše hladce a setkání jsou pro tebe přínosná. Kdybyste zjistili, že si nesedíte, dej nám vědět a podíváme se po možné náhradě.</li>
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
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/jedlickova.jpg">
            <span class="amigo-name">Adriena Jedličková</span>
            <span class="orange amigo-hashtags">#medicína #věda #biologie #chemie</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'jedlickova'}) ]">
              <ul>
                <li>Ahoj, jsem Adri a studuji medicínu a chemii.</li>
                <li>Vědě se věnuji už od svých 15 let a mám za sebou účast na řadě soutěží, konferencí a stáží, zároveň se aktivně zapojuji do neziskových projekt. Ve volném čase mě baví triatlon a chození po horách.</li>
                <li>Ráda Ti poradím s čímkoliv ohledně studia na VŠ (ať už jedné nebo více:)), pomůžu se zařizováním stáží, hledáním příležitostí a hlavně se podělím o tipy, jak to všechno zvládnout a nezbláznit se z toho.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'jedlickova'})]"
              @click="changeAmigo('jedlickova')"
            >
              <span></span>
              {{activeAmigo === 'jedlickova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/prusova.jpg">
            <span class="amigo-name">Anna Průšová</span>
            <span class="orange amigo-hashtags">#fyzika #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'prusova'}) ]">
              <ul>
                <li>Ahoj, jmenuji se Anička a momentálně studuji třetím rokem fyziku na Technické univerzitě v Mnichově.</li>
                <li>Během střední jsem se věnovala nejen fyzice, ale i chemii. Mám za sebou stáž na Fyzikálním i Astronomickém ústavu AV ČR, vícero soutěží, letní školu fyzikální chemie, samostudium cizích jazyků, praxi v architektonické kanceláři a mateřské škole v Německu.</li>
                <li>Ráda poradím s hledáním stáží, soutěží a vysoké školy, jak v Čechách, tak zahraničí.</li></ul>
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
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/ryba.jpg">
            <span class="amigo-name">David Ryba</span>
            <span class="orange amigo-hashtags">#vzdělávání #architektura #soft-skills #eventmanagement #sport #cestování</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'ryba'}) ]">
              <ul>
                <li>Ze všeho nejvíc mě baví učit se – za knížkami mě spíš nenajdete, ale co se dovedností týče, budete jen těžko hledat někoho, kdo se takhle nadchne v podstatě pro cokoliv. Nejvíce času aktuálně trávím tím, že se snažím učitele učit prezentační dovednosti, aby výuka na školách u nás byla praktičtější.</li>
                <li>Dva roky jsem vedl soutěž Prezentiáda, vedu přípravy konference TEDxPrague: Metamorphosis. Bydlím v Brně, kde studuji 4. ročník architektury, mám rád sporty a zkoušení různých způsobů cestování – naposledy jsme se s kamarádem stopem dostali za 54 hodin z Pardubic k moři do Francie. Těším se, s čím budu moct pomoct!</li>
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

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/nimrichtr.jpg">
            <span class="amigo-name">David Theodor Nimrichtr</span>
            <span class="orange amigo-hashtags">#ITveVědě #nezisk #organizace</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'nimrichtr'}) ]">
              <ul>
                <li>Ahoj, já jsem Theo a aktuálně začínám kombinovaně studovat všeobecné lékařství na 3. Lékařské fakultě UK a Informatiku na FIT ČVUT. Pokud mne tyto školy nerozemelou, mohu ti nabídnout zkušenosti s kombinovaným studiem a nějaké obecné tipy na time management a plánování úkolů.</li>
                <li>Už na gymplu jsem rád organizoval všechno možné a několik let působím v neziskové organizaci Evropský parlament mládeže zaměřené na vzdělávání středoškoláků skrz simulace. Mohu ti tak předat rady a zkušenosti o vedení neziskových spolků, organizaci akcí pro desítky až stovky účastníků, mezinárodních spolupracích, získávání zajímavých partnerů a politiků a hlavně fundraisování velkých částek a dlouhodobých dotací z veřejného i soukromého sektoru.</li>
                <li>V rámci mnoha projektů jsem integroval (čti: bastlil v garáži) IT do přírodních věd, a vytvořil jsem tak např. polární sondu, stratobalón, ponorku nebo UV-VIS-IR spektrometr. S těmito jsem pak různě soutěžil a byl m.j. dvakrát na bedně v SOČce.</li>
                <li>Absolvoval jsem taky třeba program STC, přednášel na Juniorské vědecké konferenci nebo MakerFairu a umístil se na soutěžích jako České hlavičky, CanSat, Czech Rocket Challenge nebo na mnoha předmětových olympiádách. Navíc jsem několik let vyučoval různě staré základoškoláky robotiku a programování.</li>
                <li>V tom, co nazývám volným časem, tančím a zpívám ve folklórním souboru, občas si zahraju na klavír nebo na housle, přečtu si nějakou klasickou knížku a taky docela cestuju po Evropě, můžeme tak zavést řeč i sem.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'nimrichtr'})]"
              @click="changeAmigo('nimrichtr')"
            >
              <span></span>
              {{activeAmigo === 'nimrichtr' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/vitkova.jpg">
            <span class="amigo-name">Denisa Vítková</span>
            <span class="orange amigo-hashtags">#životvzahraničí #věda #STEM</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'vitkova'}) ]">
              <ul>
                <li>👋 Jsem Denča, srdcem dobrovolnice i dobrodruh. </li>
                <li>⚛️ Věnuji se hlavně STEM, na střední jsem studovala print(“IT”) a volný čas trávila různými mimoškolními aktivitami.</li>
                <li>🫶 Pomůžu Ti najít něco, co by Tě mohlo zajímat a budu Tvojí podporou, nejen pokud zrovna procházíš složitým životním obdobím. Ráda se od Tebe také něco přiučím!</li>
                <li>🧳 Kromě Erasmu+ mám zkušenosti i s životem v zahraničí. Setkávali bychom se on-line a můžeme se klidně bavit i in English:)</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'vitkova'})]"
              @click="changeAmigo('vitkova')"
            >
              <span></span>
              {{activeAmigo === 'vitkova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/bernhardova.jpg">
            <span class="amigo-name">Hana Bernhardová</span>
            <span class="orange amigo-hashtags">#studiumvzahranici #biochemie #věda</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'bernhardova'}) ]">
              <ul>
                <li>Ahoj, jsem Hanka a v současnosti dělám doktorát na lékařské fakultě ve Vídni, kde se věnuji výzkumu dětské rakoviny kostí. Své bakalářské a magisterské studium biochemie a molekulární biologie jsem absolvovala v Anglii na Oxfordské univerzitě.</li>
                <li>Během střední školy jsem pracovala ve třech různých laboratořích v Olomouci, v Praze a v Brně a napsala jsem tři SOČky, každou v jiné kategorii - biologie, zdravotnictví a chemie. Také jsem se věnovala biologické olympiádě a dobrovolnictví v azylovém domě pro matky s dětmi.</li>
                <li>Moc ráda poradím ohledně studia v zahraničí, možností zapojení se do výzkumu během střední školy, výběru tématu výzkumu, psaní odborných prací, tvorby posterů, hledání zdrojů pro samostudium, studia angličtiny pro nejazykové typy, ale i nastavení priorit a jak se z toho všeho nezbláznit🙂</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'bernhardova'})]"
              @click="changeAmigo('bernhardova')"
            >
              <span></span>
              {{activeAmigo === 'bernhardova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/zegzulka.jpg">
            <span class="amigo-name">Jakub Zegzulka</span>
            <span class="orange amigo-hashtags">#design #tech</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'zegzulka'}) ]">
              <ul>
                <li>Zaměřuji se na tvorbu digitálních produktů, převážně v oblastech interakčního designu, UX a future technologies.</li>
                <li>Mám zkušenosti z firem jako Apple, Meta, Avast, Kiwi.com a vícero startupů, kde jsem se zaměřoval na UI/UX, product growth a brand.</li>
                <li>Aktuálně bydlím mezi Los Angeles a San Franciscem. Studuji interakční design na ArtCenter College of Design.</li>
                <li>Baví mě pomáhat ostatním dosáhnout jejich  potenciálu, který je často mnohem větší, než si myslíme.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'zegzulka'})]"
              @click="changeAmigo('zegzulka')"
            >
              <span></span>
              {{activeAmigo === 'zegzulka' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/tomastikova.jpg">
            <span class="amigo-name">Jana Tomaštítková</span>
            <span class="orange amigo-hashtags">#neurověda #psychologie #studiumvzahraničí #tanec</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'tomastikova'}) ]">
              <ul>
                <li>Tady Jana! Na konci střední jsem se rozhodla vrhnout se do studia mozku a lidského chování. Teď jsem studentkou posledního ročníku psychologie na University of Edinburgh a pracuju na tom, abych se stala kognitivní neurovědkyní. Ne vždy jsem ale věděla, co bych chtěla dělat.</li>
                <li>Přes má středoškolská léta jsem sportovala, soutěžně tancovala v Česku a jiných zemích, ale zároveň jsem třeba i prezentovala na Přírodovědecké konferenci, překládala články z angličtiny do češtiny pro Mensa časopis, nebo dobrovolničila v Alzheimer centru. Nakonec jsem si vysnila studovat v zahraničí. Minulý rok jsem dokončila neurovědeckou stáž na University of Cambridge. Nikdy nevíš, kde tě malé kroky, které teď děláš, nakonec zavedou.</li>
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
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/valova.jpg">
            <span class="amigo-name">Johana Valová</span>
            <span class="orange amigo-hashtags">#hudba #autorskátvorba #umění #psanínaklávesnici #vzdělávaní</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'valova'}) ]">
              <ul>
                <li>Ahoj! Já jsem Johana a aktuálně jsem studentkou prvního ročníku na 1. lékařské fakultě UK v Praze.</li>
                <li>Na střední škole jsem se naplno věnovala umění, především hraní na klavír, zpěvu a divadlu. V roce 2022 jsem absolvovala letní kurz Národního divadla Young, který byl zakončen inscenací na Nové scéně ND. V současnosti se mou vášní stal zpěv a skládání vlastních písní, se kterými jsem vystoupila například na Zlínském filmovém festivalu nebo v rámci oslav 17. listopadu Korzo národní. Kromě autorské tvorby se aktivně věnuji psaní na klávesnici, v němž jsem několikanásobnou mistryní světa a taktéž jsem hrdou propagátorkou klávesnicové gramotnosti!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'valova'})]"
              @click="changeAmigo('valova')"
            >
              <span></span>
              {{activeAmigo === 'valova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/vala.jpg">
            <span class="amigo-name">Jonáš Vala</span>
            <span class="orange amigo-hashtags">#studium #IT #medicina #psaninaklavesnici #souteze</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'vala'}) ]">
              <ul>
                <li>Jmenuji se Jonáš a studuji medicínu. V průběhu své střední školy jsem se hodně věnoval informace, programoval jsem nebo jsem soutěžil v psaní na klávesnici. Kromě toho jsem dělal jazyky, především němčinu, nebo trávil čas nad přípravou školního časopisu.</li>
                <li>Výrazně mne ovlivnilo psaní na klávesnici, kterému jsem se věnoval už od základní školy. Účastnil jsem se soutěží a na mistrovství světa jsem opakovaně získal titul mistra světa. Dnes tuto disciplínu vyučuji, podílím se na organizaci republikových soutěží nebo sám se podílím na zkvalitňování jeho e-learningu.</li>
                <li>Na Univerzitě Karlově jsem dnes také členem fakultního i univerzitního akademického senátu. Na fakultní úrovni se pak zabývám zkvalitňováním výuky coby člen komise pro evaluaci výuky.</li>
                <li>Rád se s Tebou pobavím o mimoškolních aktivitách, o výběru školy nebo třeba o různých certifikátech, které by Ti mohly pomoct získat budoucí zaměstnání.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'vala'})]"
              @click="changeAmigo('vala')"
            >
              <span></span>
              {{activeAmigo === 'vala' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/steinova.jpg">
            <span class="amigo-name">Kamila Steinová</span>
            <span class="orange amigo-hashtags">#umění #psychologie #seberozvoj</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'steinova'}) ]">
              <ul>
                <li>Ahojky, jsem Kamča a ráda dělám věci, které mě skutečně naplňují a posouvají vpřed. Chceš se dozvědět více o šachovém světě a jeho zákulisí? Zajímá tě, jaký je to pocit, když stojíš na jevišti Nové scény Národního divadla? Máš v plánu napsat knihu, ale nevíš, jak začít? Baví tě psychologie a filozofie? Můj drahý amigo, jsi na správném místě!</li>
                <li>V mém mentoringovém programu odblokuju tvé dosavadní bariéry a naučím tě vzácné schopnosti: NEBÁT SE. Popovídáme si o tvých zájmech a cílech a budeme společně posouvat tvé hranice.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'steinova'})]"
              @click="changeAmigo('steinova')"
            >
              <span></span>
              {{activeAmigo === 'steinova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/musilova.jpg">
            <span class="amigo-name">Majda Musilová</span>
            <span class="orange amigo-hashtags">#vědavýzkum #komunikacevědeckýchtématveřejnosti #sport #worklifebalance</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'musilova'}) ]">
              <ul>
                <li>Ahojky, říkají mi Majdi, mám ráda vědu a to napříč obory a nehledě na specializaci, a také proto jsem už v prvním ročníku na střední začala stážovat na Akademii věd ČR. Od té doby jsem prošla různými středoškolskými vědeckými soutěžemi, a tak ti můžu mimo jiné pomoct třeba s psaním nějakého odborného článku nebo publikace.</li>
                <li>Svítí mi oči, když se můžu dozvědět něco nového, mým největším pomocníkem je plánovač a nikam bych se nevydala bez poznámkového bloku. Od tohoto akademického roku jsem studentkou oboru fyzioterapie na FTVS a nutriční terapie na 1. LF UK. Na soutěžní úrovni se věnuji tanečnímu sportu a naplňuje mě i práce s dětmi, jejich vedení ke zdravému pohybu a také vzdělávání v rámci matematicko-informatického korespondenčního semináře Jáma lvová nebo prostřednictvím geograficko-environmentálního projektu Na suchu.</li>
                <li>Můj den je často plný od rozednění do setmění, ale nemysli si prosím, že jsem robot. Nene, také u mě si perfekcionismus a workoholismus čas od času vybírá svou daň, a tak si s tebou kromě zmíněných témat ráda promluvím i o tématu duševního zdraví, zkrátka budu tvým parťákem jakkoli budeš potřebovat. Navíc věřím, že komunikace a objetí mají kouzelnou sílu.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'musilova'})]"
              @click="changeAmigo('musilova')"
            >
              <span></span>
              {{activeAmigo === 'musilova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/prokop.jpg">
            <span class="amigo-name">Matěj Prokop</span>
            <span class="orange amigo-hashtags">#politika #mezinárodnívztahy #participace #lobbing #socialimpact</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'prokop'}) ]">
              <ul>
                <li>Štve tě něco? Změň to! Pokud máš tenhle mindset, budeme si rozumět 🙂 Jsem Matěj a aktuálně pracuji v kabinetu ministra školství, kde měním přístup státu k začleňování mládeže do tvorby politik, protože mě vždycky štvalo, že stát mladé nebere moc vážně.</li>
                <li>Zkušenosti mám i s prací v Radě EU, v lobbingové agentuře, nebo v různých startupech. V každé práci mě vždy motivovala hlavně možnost stát za pozitivní společenskou změnou.</li>
                <li>Jsem čerstvý absolvent práv a také dokončují studium na VŠE, kde jsem nejdříve studoval diplomacii a teď mezinárodní obchod. Ze 6 let studia jsem strávil téměř půlku v zahraničí, nejraději se ale stejně vždycky vracím zpět do Česka.</li>
                <li>Rád přijímám nové výzvy a jsem tu, abych Ti byl po ruce jako parťák, na kterého se můžeš obrátit s jakoukoli výzvou, které čelíš. Budu se moc těšit, až se poznáme 🙂</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'prokop'})]"
              @click="changeAmigo('prokop')"
            >
              <span></span>
              {{activeAmigo === 'prokop' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/pelanek.jpg">
            <span class="amigo-name">Ondřej Pelánek</span>
            <span class="orange amigo-hashtags">#biologie #fotografie #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'pelanek'}) ]">
              <ul>
                <li>Jsem nadšencem do biologie, focení, cestování a přírody. Střední jsem strávil s Biologickou olympiádou, SOČkou, počítal ptáky, zašel do molekulárně-biologické laboratoře, zafilozofoval si na Princetonu a celkově ji prožil akčně. Teď jsem dokončil magisterské studium na University College London, během kterého jsem se mimo jiné na rok podíval do Austrálie. V říjnu začínám doktorát zoologie na univerzitě v Cambridge, takže směřuju vědeckým směrem. Nejradši jsem na výpravách venku, cestuji po světě, koukám po ptákách a fotím zvířata (celkem profi ;-)).</li>
                <li>Jestli Tě baví příroda, fotografie či věda, tak mám spoustu tipů, co a jak dělat, materiálů a kontaktů. Nakopnu do aktivit, poradím k soutěžím, stážím, skouknu psaní, vymyslíme ochranářský projekt a pokecáme.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'pelanek'})]"
              @click="changeAmigo('pelanek')"
            >
              <span></span>
              {{activeAmigo === 'pelanek' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/placha.jpg">
            <span class="amigo-name">Petra Plachá</span>
            <span class="orange amigo-hashtags">#vzdelavani #management #fundraising #softskills</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'placha'}) ]">
              <ul>
                <li>Čauko, já jsem Péťa. Pokud se zajímáš o projektový management a organizaci akcí, studentské spolky nebo rozvoj soft skills, tak to nejspíš bude match. Zároveň studuju andragogiku a pedagogiku na MUNI, což znamená, že si tebou ráda pokecám i o vzdělávání.</li>
                <li>Mám zkušenost z nezisku, start-upu i korporátu, ze studia víc škol na jednou, z absolvování i organizování vzdělávacích projektů pro studenty. Můj background je v managementu, fundraisingu, marketingu a HR. Jestli toužíš po něčem konkrétním, mrkni na můj LinkedIn.</li>
                <li>Neumím vařit a řídit, ale umím zařídit, aby věci fungovaly. A udělá mi radost, když v tom budu moct pomoc i tobě. Mám ráda příběhy a jsem fakt skvělá v únikovkách a laser game. Potkávat se můžeme v Brně, Plzni, Praze, třeba v čajce nebo klidně online.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'placha'})]"
              @click="changeAmigo('placha')"
            >
              <span></span>
              {{activeAmigo === 'placha' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/millerova.jpg">
            <span class="amigo-name">Sabina Millerová</span>
            <span class="orange amigo-hashtags">#historie #archeologie #zpěv #umění</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'millerova'}) ]">
              <ul>
                <li>Už od dětství jsem se soutěžně věnovala sólovému zpěvu a postupně začala jezdit i na soutěže v latinsko-americkém tanci. Kromě toho mě to vždy táhlo k herectví. Během studia na gymplu jsem se ale začala věnovat humanitním vědám – konkrétně historii a archeologii, které v současnosti studuji ve dvouoboru na FF UK. Již na střední jsem se zúčastnila vysokoškolských praxí, stážovala v rámci Otevřené vědy na dvou různých ústavech AV ČR a zúčastnila se projektů Eustory.</li>
                <li>Zajímalo by tě, jak skloubit mimoškolní zájmy z různých oborů i naprosto jiné druhy mimoškolních aktivit? Baví tě humanitní vědy, ale nevíš, jestli najdeš uplatnění? Zajímá tě umění a hledáš další možnost uplatnění se? S tím vším Ti mohu pomoct. :)  </li>
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
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/frycak.jpg">
            <span class="amigo-name">Tadeáš Fryčák</span>
            <span class="orange amigo-hashtags">#informatika #věda #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'frycak'}) ]">
              <ul>
                <li>Studuji Computer Science and Engineering na TU Delft v Nizozemsku, pokud zvažuješ studium technického oboru v zahraničí, určitě mě neváhej kontaktovat.</li>
                <li>Informatiku ale jen nestuduji, snažím se ji propojit s jinými obory, nejčastěji pomocí Computer Vision, Data Science, Machine Learning a AI metod. Využití mých algoritmů nacházejí nejen biologická vědeckovýzkumná pracoviště, ale také i softwarové firmy jako například Seznam.cz, kde jsem absolvoval několikaletou stáž.</li>
                <li>Prošel jsem si programy pro středoškoláky, jako je Badatel či Newton na Univerzitě Palackého nebo Otevřená věda na Akademii věd ČR, což mi umožnilo vytvořit nejednu publikaci. Také jsem se úspěšně účastnil Středoškolské odborné činnosti, Soutěže v programování či Mistrovství ČR v radioelektrotechnice.</li>
                <li>Kontaktovat mě můžeš také v případě, že bys chtěl poradit v elektrotechnice; umím navrhovat v prostředí KiCAD či Eagle a mám zkušenosti nejen s STM32 či ESP32.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'frycak'})]"
              @click="changeAmigo('frycak')"
            >
              <span></span>
              {{activeAmigo === 'frycak' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/vylita.jpg">
            <span class="amigo-name">Tadeáš Vylita</span>
            <span class="orange amigo-hashtags">#životní prostředí #pedagogika #sport #organizace akcí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'vylita'}) ]">
              <ul>
                <li>Tadeáš je nadšencem do ochrany životního prostředí, pedagogiky a sportu. Studuje na Přírodovědecké fakultě UK. Všude, kde to jde, jezdí na kole, závodně hraje volejbal a trénuje malé děti. Během stáže v Mattoni 1873 vede jedinečný vzdělávací projekt o vodě a biodiverzitě pro 1. stupně ZŠ a zároveň se podílí na tvorbě nových učebnic prvouky pro 1. stupně ZŠ. Organizoval několik celorepublikových soutěží, natočil dokumentární film o jeho volejbalovém klubu a na KVIFFu se stará o zelenější festival. Dobrovolničí a vedl sportovně-vzdělávací program pro ukrajinské vrstevníky.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'vylita'})]"
              @click="changeAmigo('vylita')"
            >
              <span></span>
              {{activeAmigo === 'vylita' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/przeczkova.jpg">
            <span class="amigo-name">Tereza Przeczková</span>
            <span class="orange amigo-hashtags">#studiumvzahraničí #biomedicína #výzkum #sport </span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'przeczkova'}) ]">
              <ul>
                <li>Ahoj! Jsem Terka a momentálně studuji obor Biomedical Sciences na University College London. Absolvovala jsem dvě stáže na Fyziologickém ústavu Akademie věd a také na Katedře organické chemie PřF UPOL. Na olomoucké univerzitě jsem mimojiné vystudovala buněčnou biologii již na střední. Prošla jsem si taky řadou soutěží počínaje slavnou SOČkou a končíce u Českých hlaviček.</li>
                <li>Vzdálené mi není ani dobrovolnictví. Mám za sebou všechny úrovně programu DofE, kde momentálně působím jako online vedoucí. Taky jsem součástí redakčního týmu neziskové organizace Nevyhasni, kde se zabýváme prevencí syndromu vyhoření.</li>
                <li>Celou střední mě doprovázel i sport. Hrála jsem závodně volejbal na postu libera, věnovala se crossfitu a vzápětí objevila svou vášeň pro vzpírání.</li>
                <li>Zajímají tě přírodní vědy? Láká tě výzkum? Chceš pomoci hacknout systém a studovat na VŠ jako středoškolák? Chystáš se vyjet na školu do zahraničí nebo chceš pomoci nastartovat kariéru aktivního studenta? Pak se těším na vzájemnou spolupráci!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'przeczkova'})]"
              @click="changeAmigo('przeczkova')"
            >
              <span></span>
              {{activeAmigo === 'przeczkova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>


          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/zelinkova.jpg">
            <span class="amigo-name">Veronika Zelinková</span>
            <span class="orange amigo-hashtags">#programming #iOSDevelopment #careerTips</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'zelinkova'}) ]">
              <ul>
                <li>Ahoj, jsem Verča a věnuji se vývoji mobilních aplikací pro iOS. Pracuji jako freelancer (hodně cestuji a klienty si hledám sama), přednáším na technických konferencích a píšu diplomku.</li>
                <li>V IT pracuji od druháku na střední a od té doby jsem sbírala zkušenosti ve firmách jako je Alza, STRV, na zahraničním trhu pak třeba Microsoft, IBM, Porsche nebo Docler.</li>
                <li>Ráda ti předám všechny své tipy na středoškolské soutěže a programy, poradím s tím jak přemluvit firmu, aby tě vzala na stáž, či se sebevědomím v IT. Po technické stránce se můžeme pobavit o tom, jak se naučit programovat co nejefektivněji, a jak vyvinout svou první iOS aplikaci.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'zelinkova'})]"
              @click="changeAmigo('zelinkova')"
            >
              <span></span>
              {{activeAmigo === 'zelinkova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/kriz.jpg">
            <span class="amigo-name">Vítězslav Kříž</span>
            <span class="orange amigo-hashtags">#education #🍞 #AI #e-learning</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'kriz'}) ]">
              <ul>
                <li>Ahojky! Jmenuju se Víťa a sice se ještě neznáme, ale už teď se na tebe těším! Právě teď studuji učitelství na FI MU v Brně, ale hlavně učím IT na ZŠ a SŠ, dělám lektora AI pro Škoda Auto a Volkswagen, trochu podnikám jako e-learningový specialista a beru každej job, ze kterýho se můžu naučit něco novýho. Abych ale trochu vyvážil tu karmickou nerovnováhu, dávám energii i do několika neziskových projektů, které mi dávají smysl – aktuálně stojím třeba za obsahem soutěže Tour de App, které mi přirostlo k srdci. Zkrátka dělám každý den něco jiného, jen abych se nenudil.</li>
                <li>S tím vším jsem začal už na střední díky pár skvělým lidem, kteří mě nakazili svojí vášní k dělání cool věcí. Moc rád se pokusím o to samé i s tebou!</li>
                <li>Rád s tebou proberu cokoliv ohledně vzdělávání (se), AI & IT, vypadnutí z komfortní zóny & zapadnutí do kolektivu, jak mířit vysoko a při tom zůstat nohama na zemi. A když budeš opravdu hodně chtít, klidně se s tebou podělím i o svůj recept na domácí chleba™🍞</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'kriz'})]"
              @click="changeAmigo('kriz')"
            >
              <span></span>
              {{activeAmigo === 'kriz' ? 'Zobrazit méně' : 'Více o veteránovi'}}
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
        max-height: 1200px;
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
