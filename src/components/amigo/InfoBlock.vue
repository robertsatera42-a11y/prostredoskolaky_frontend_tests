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
              <li>Zaujme-li tě jeden z našich amigů, klikni na ‘přihlas se do programu’ a začni vyplňovat přihlášku. Odešli ji nejpozději do 31. 1. 2022. Nezapomeň, že čím dříve se přihlásíš, tím větší máš šanci, že dostaneš svého vybraného.</li>
              <li>Začátkem února tvou přihlášku vyhodnotíme a propojíme tě s tvým amigem.</li>
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
          <span class="orange">31. ledna 2022</span>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScEvWh6HLAXPPE4e5f86EuYG1KmiU49pFY3noB1aHhACtd8Jg/viewform" target="_blank" class="step-link">Vyplnit přihlášku</a>
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
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/ondra.jpg">
            <span class="amigo-name">Ondřej Belfín</span>
            <span class="orange amigo-hashtags">#ekologie #neziskovky #studium v zahraničí</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'belfin'}) ]">
              <ul>
                <li>Jsem velký nadšenec do přírody a všeho okolo ní, jako je věda, cestování, focení, sport atd. Mám za sebou vedení několika větších i menších projektů a práci v neziskovém sektoru.</li>
                <li> Studium jsem začal v Praze, jeden semestr strávil v Austrálii a teď pokračuji magistra v Holandsku. Mezitím jsem si dal takový Gap half-year, kdy jsem naplno cestoval a pak také pracoval.</li>
                <li>Můžu ti poradit se vším co budu umět, ale hlavně ti ukážu v čem je podle mě důležité se rozvíjet během studia na střední. Popovídat si o tvých projektech nebo nakopnout do nových aktivit.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'belfin'})]"
              @click="changeAmigo('belfin')"
            >
              <span></span>
              {{activeAmigo === 'belfin' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/kura.jpg">
            <span class="amigo-name">Jonáš Kůra</span>
            <span class="orange amigo-hashtags">#florbal #woodbag #peacheskemp #pef</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'kura'}) ]">
              <ul>
                <li>Hraju florbal. Studuji ekonomku na mendelu. Podnikám. Woodbag, Peaches, TvujBrand, Poplate a spousta dalšího.</li>
                <li>Mám 3 priority na první místě. Jak je to možný? Myslím si ze si umim dobre rozplanovat čas a vytvořit kolem sebe skvelej tým lidi a to bych ti nejradši předal!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'kura'})]"
              @click="changeAmigo('kura')"
            >
              <span></span>
              {{activeAmigo === 'kura' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/oliver.jpg">
            <span class="amigo-name">Oliver Laryea</span>
            <span class="orange amigo-hashtags">#startupy #technologie #studium v zahraničí #prezentační dovednosti</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'laryea'}) ]">
              <ul>
                <li>Jsem napůl z Česka, napůl z Ghany, mám anglickej akcent z Kanady a studuju v Anglii – to je dobrej multikulti bordel, co? Na střední jsem prošel několika obory: od nano-vědy na Akademii věd a v CERNu, přes matiku na Princetonu a úspěšnej neziskovej projekt až po nějaký podnikatelský úlety a vedení nadnárodní firmy v roli CEO (jen na měsíc, abych jim to úplně nezbořil).</li>
                <li>Leč nemám rád déšť, tak jsem se z nějakýho šílenýho důvodu rozhodl studovat inženýrství v Manchesteru. Ale co si budem, škola je pro mě takovej "side-hustle": místo přednášek a úkolů většinu času trávím vedením top studentskýho podnikatelskýho akcelerátoru v Británii, jako konzultant v oblasti prezentací a vyjednávání, nebo jako prodejce takovejch fajn africkejch chipsů, který prodávám pod vlastní značkou.</li>
                <li>Chceš-li mít týdenní "sunshines a rainbows" sessions, kde se budeme bavit o mindsetu a dostaneš tak akorát velkou pochvalu nebo ego-boost "o tom, že jsi nej", tak scrolluj dál. U mě dostaneš jinej boost -- turbo-boost pro sebe a svoje projekty. Chci s Tebou bez bullsh*tu popovídat o tom, jak se reálně posouvat a pomoct Ti dostat se na další level, ať děláš cokoliv. Bude to akční, praktický a především se nebudeš nudit! (Příp. můžem prohodit pár slov o fotbale nebo boxu - takže máš-li rád/a, budeme si rozumět!)</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'laryea'})]"
              @click="changeAmigo('laryea')"
            >
              <span></span>
              {{activeAmigo === 'laryea' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/adamkova.jpg">
            <span class="amigo-name">Kateřina Adámková</span>
            <span class="orange amigo-hashtags">#debatování #umění #neziskovky #vzdělání</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'adamkova'}) ]">
              <ul>
                <li>Ahoj! Jmenuju se Káťa a všichni okolo mě by řekli, že se hrnu doopravdy do všeho (což je pravda). Momentálně studuju práva na PF a politologii na FSV UK. Za střední jsem se věnovala široké škále aktivit - reprezentovala jsem ČR v debatování tady i ve světě, byla jsem v předsednictvu České středoškolské unie, spoluzaložila jeden z nejúspěšnějších středoškolských časopisů v ČR, zahrála si v komerčních i nekomerčních projektech, začala "na stará" kolena tancovat, naučila se aspoň trochu hrát na kytaru a směsici dalších věcí, co mě zrovna nadchly a bavily. Především si to ale všechno hrozně užívala.</li>
                <li>Můžu ti pomoct s možnostmi, co na střední můžeš mít, ukázat ti, jak se zlepšovat pomocí toho, že tě věci budou bavit a nadchneš se do nich, pomoct ti předejít syndromu vyhoření a předat ti všechny přešlapy a správná rozhodnutí, kterými jsem si prošla ( a že zvlášť těch přešlapů bylo).</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'adamkova'})]"
              @click="changeAmigo('adamkova')"
            >
              <span></span>
              {{activeAmigo === 'adamkova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/novotny.jpg">
            <span class="amigo-name">Filip Novotný</span>
            <span class="orange amigo-hashtags">#fyzika #cestování #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'novotny'}) ]">
              <ul>
                <li>Jsem silně neorganizovaný student třetího ročníku fyziky. Předměty mám zaměřený na statistickou mechaniku, na střední jsem dělal astrofyziku a jako správný chaotik mám rád i teorii chaosu. Ale jako správný vědec velice rád exploruju skoro všechno a neomezuju se na můj obor. Na střední jsem docházel na astronomický ústav akademie věd, kde jsem sepisoval SOČku, účastnil se turnaje mladých fyziků (něco jako fyzikální olympiáda zaměřená na experimenty - moc doporučuju). Během studia gymnázia jsem se přestěhoval z Jihlavy do Prahy (a změnil gymnázia), kde jsem dělal několik stáží zaměřených na programování a machine learning. Ve volným čase třeba lezu po skalách, stopuju po Súdánu (či jiných neturitstickych zemích) nebo třeba hraju v divadle? Kdo ví co vymyslím příště…</li>
                <li>Můžu poradit s čímkoliv od individuálu po recept na omáčku na tortelliny, ale jestli to bude fungovat nemám nejmenší tušení…</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'novotny'})]"
              @click="changeAmigo('novotny')"
            >
              <span></span>
              {{activeAmigo === 'novotny' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/bulatkin.jpg">
            <span class="amigo-name">Daniel Bulatkin</span>
            <span class="orange amigo-hashtags">#hudba #self-management #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'bulatkin'}) ]">
              <ul>
                <li>Jsem pianista, skladatel, bandleader/producent a zároveň self-manager působící na poli jazzu a přidružených žánrů. Mám za sebou studium na pražské HAMU a v současnosti si dodělávám magistra v Holandsku. Souhrou šťastných náhod jsem se objevil na pódiích nejen s místní hudební smetánkou, ale i s několika světovými jmény. Další příjemnou náhodou byla skoro dvouletá praxe vyučujícího na Mezinárodní konzervatoři v Praze. Teď dělám na několika vlastních albech a starám se o booking a PR pro 5 kapel.</li>
                <li>Vedle muziky rád poradím, jak nastartovat tvoji uměleckou kariéru (od cvičení, přes studio až na pódium), a to všechno ještě během střední. Taky můžu předat zkušenosti aspirujícím uměleckým managerům a organizátorům a popovídat si o studiu hudby u nás a v zahraničí.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'bulatkin'})]"
              @click="changeAmigo('bulatkin')"
            >
              <span></span>
              {{activeAmigo === 'bulatkin' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/svidrnochova.jpg">
            <span class="amigo-name">Lenka Švidrnochová</span>
            <span class="orange amigo-hashtags">#studiumvzahranici #osobnirozvoj #jakprocestovatevropu #marketing</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'svidrnochova'}) ]">
              <ul>
                <li>Na střední škole jsem se věnovala dobrovolnictví ve sportu, práci s dětmi, organizování akcí pro veřejnost a procestování Evropy skrze zajímavé projekty. Díky tomu jsem se rozhodla, že půjdu studovat marketing do Dánska. A zde jsem propadla fitness, audioknihám zaměřené nejen na osobní rozvoj nebo učení dánštiny.</li>
                <li>Jestli přemyšlíš nad studiem v zahraničí, chystáš se podnikat nebo bys na sobě chtěl(a) více pracovat, můžeme se spojit a nasdílet si zkušenosti a inpiraci. Ráda ti pomůžu!"</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'svidrnochova'})]"
              @click="changeAmigo('svidrnochova')"
            >
              <span></span>
              {{activeAmigo === 'svidrnochova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/rychly.jpg">
            <span class="amigo-name">Jakub Rychlý</span>
            <span class="orange amigo-hashtags">#marketing #podnikani #startup #sport</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'rychly'}) ]">
              <ul>
                <li>Jakub vybudoval perspektivní digitální studio Contentano, které pomáhá firmám s digitálním marketingem. Během prvních 8 měsíců firma dosáhla milionového obratu a tvoří ji kolektiv 25 zaměstnanců a již spolupracovala s klienty jako je SupportBox, TUkas, Arval nebo třeba Braník. Projekt Nekrachni, na kterém Jakub také pracuje, má za cíl zatočit s finanční negramotností a prostřednictvím aplikace vzdělává v této oblasti studenty základních a středních škol. Jakub je také nadšeným sportovcem, věnuje se Curlingu a mimo jiné je také politicky aktivní.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'rychly'})]"
              @click="changeAmigo('rychly')"
            >
              <span></span>
              {{activeAmigo === 'rychly' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/pelanek.jpg">
            <span class="amigo-name">Ondřej Pelánek</span>
            <span class="orange amigo-hashtags">#biologie #fotografie #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'pelanek'}) ]">
              <ul>
                <li>Jsem nadšencem do biologie, focení, cestování, přírody a kde čeho kolem. Střední jsem strávil s Biologickou olympiádou, SOČkou, počítal ptáky, zašel do molekulárně-biologické laboratoře, zafilozofoval si na Princetonu a tak. Teď druhým rokem studuji biologii v Anglii na University College London a snažím se řádně vědecky vzdělat. Nejradši jsem na výpravách venku, cestuji po světě, koukám po ptákách a fotím zvířata (celkem profi ;-)).</li>
                <li>Jestli Tě baví příroda, fotografie či věda, tak mám spoustu tipů, co a jak dělat, materiálů a kontaktů. Nakopnu do aktivit, poradím k soutěžím, stážím, skouknu psaní, vymyslíme ochranářský projekt a pokecáme.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'pelanek'})]"
              @click="changeAmigo('pelanek')"
            >
              <span></span>
              {{activeAmigo === 'pelanek' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/cejnova.jpg">
            <span class="amigo-name">Marie Čejnová</span>
            <span class="orange amigo-hashtags">#hudba #koncerty #seberozvoj #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'cejnova'}) ]">
              <ul>
                <li>Ahoj! Jmenuji se Marie a v současné době studuji akordeon na hudební akademii v Dánsku. Baví mě prošlapávat cestu tomuto krásném nástroji a ukazovat, co všechno se na akordeon dá zahrát. Jsem organizátorkou hudebního festivalu, který má rozpočet přes čtvrt milionu korun. Kazdoročně odehraji několik desítek koncertů. Není mi cizí komunikace s novináři a sociální média jsou můj každodenní chleba. I přes poměrně velké vytížení si každý týden najdu čas na dobrovolnictví, kdy online doučuji děti migrantů žijící v ČR. S Nadací Jedličkova ústavu zase dlouhodobě spolupracuji při organizacích dobročinných koncertů. Mám i mnoho akordeonových studentů.</li>
                <li>Ráda Ti pomohu s výběrem aktivit, které mají opravdu smysl. A přidám pár tipů, co bych třeba sama na střední udělala jinak. Pokud bys rád/a organizoval/a jakoukoli akci, tak Ti moc ráda předám své zkušenosti.A pokud bys váhal/a nad studiem v zahraničí, tak mi určitě dej vědět, protože investice do seberozvoje je tou nejlepší!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'cejnova'})]"
              @click="changeAmigo('cejnova')"
            >
              <span></span>
              {{activeAmigo === 'cejnova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/letochova.jpg">
            <span class="amigo-name">Karolína Letochova</span>
            <span class="orange amigo-hashtags">#educationalstudies #technickéobory #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'letochova'}) ]">
              <ul>
                <li>Čus, já jsem Kája a na střední jsem se dva roky věnovala přírodním a technickým oborům a pracovala ve fancy laborkách a ty další dva roky jsem strávila u společenských věd a vzdělávání. Teď studuju školství a vzdělávání v Londýně, chodím plavat a píšu bangery na Twitter. Ráda si bubu povídat ohledně čehokoli okolo kariéry ve školství/vzdělávání/společenských vědách, ale ráda poradím i ohledně specializace v širokém spektru aktivit nebo o strachu úplně změnit obor (been there done that).</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'letochova'})]"
              @click="changeAmigo('letochova')"
            >
              <span></span>
              {{activeAmigo === 'letochova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/neradova.jpg">
            <span class="amigo-name">Sylva Neradová</span>
            <span class="orange amigo-hashtags">#medicína #sport #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'neradova'}) ]">
              <ul>
                <li>Jsem medik a jsem běžec. Neumím poradit tomu, kdo chce dělat málo, pokusím se pomoct tomu, kdo chce dělat moc.</li>
                <li>To se může týkat přihlášek na univerzity v zahraničí, jiné možnosti vzdělávání se mimo naši rodnou louži, středoškolského výzkumu, nebo třeba i životosprávy v oblasti sportu, ale i mimo něj 😉</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'neradova'})]"
              @click="changeAmigo('neradova')"
            >
              <span></span>
              {{activeAmigo === 'neradova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/simunkova.jpg">
            <span class="amigo-name">Maria Šimůnková</span>
            <span class="orange amigo-hashtags">#grafika #věda #projekty #timemanagement</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'simunkova'}) ]">
              <ul>
                <li>Jsem ambiciózní debílek studující Data Analytics na FIS VŠE. Takhle to nezní moc ambiciózně… já se ale kromě školy věnuji ještě zhruba 7 part-full time aktivitám. Spoluzaložila jsem a vedu neziskový vzdělávací projekt Nekrachni, na volné noze pracuji jako grafička, jsem členkou česko-německého fóra mládeže nebo předsedám v radě mezinárodní soutěže. Na střední jsem se věnovala i vědě – konkrétně zpracování obrazových dat pomocí umělé inteligence a možná mě znáš jako chatbot girl.</li>
                <li>S tím, jak se dostat na zahraniční univerzitu ti nepomůžu, ale můžu ti poradit jak rozjet vlastní projekt, jak vést tým, organizovat si čas a studium nebo jak dobíhat tramvaje.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'simunkova'})]"
              @click="changeAmigo('simunkova')"
            >
              <span></span>
              {{activeAmigo === 'simunkova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/horky.jpg">
            <span class="amigo-name">Petr Horký</span>
            <span class="orange amigo-hashtags">#matematika #neziskovky #baseball #deskovky</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'horky'}) ]">
              <ul>
                <li>Ahoj! Jmenuji se Petr a aktuálně prvním rokem studuji Matematiku, Statistiku a Business na London School of Economics. Do toho pracuji jak investiční analytik v jednom z pražských VC fondů, léto jsem strávil nad M&amp;A transakcí v hodnotě desítek miliard pro PPF a nedávno jsem vyhrál McKinsey Solve It.</li>
                <li>Mimo svět korporátů jsem také pomáhal v několika neziskovkách, založil s kamarádem business s obratem >1mil. měsíčně a vyhrál MČR v baseballu, dámě a piškvorkách, takže rád pomůžu s celou škálou věcí, od kariérního zaměření, přes přihlášky na střední do Británie, až po nejlepší strategie ve zmíněných deskových hrách 😀</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'horky'})]"
              @click="changeAmigo('horky')"
            >
              <span></span>
              {{activeAmigo === 'horky' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/hradil.jpg">
            <span class="amigo-name">Jaroslav Hradil</span>
            <span class="orange amigo-hashtags">#computerscience #podnikani #startupy</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'hradil'}) ]">
              <ul>
                <li>Ahoj, jsem Jarda a aktuálně nejvíc času věnuju studiu computer science na FIT CTU. Během střední jsem ale stihl založit (a pohřbít) startup, absolvovat stáž v Microsoftu, se vzdělávacím programem od Googlu se podívat přímo do samotného Sillicon Valley nebo podnikat v online marketingu.</li>
                <li>Takže pokud tě taky baví technologie nebo chces začít podnikat, rád s tebou proberu tvoje nápady (můžeš mě použít jako takovou debuggovací kachničku) a propojím tě se zajímavými a pro vytyčené cíle relevantními lidmi.</li>
                <li>Jo a mám rád kočky. A hory. Moc.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'hradil'})]"
              @click="changeAmigo('hradil')"
            >
              <span></span>
              {{activeAmigo === 'hradil' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/friedlaender.jpg">
            <span class="amigo-name">Samuel Friedlaender</span>
            <span class="orange amigo-hashtags">#ekonomie #politika #sport #seriály #soutěže</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'friedlaender'}) ]">
              <ul>
                <li>Jsem student ekonometrie na univerzitě v Nizozemsku, a proto se zajímám primárně o společenské a sociální vědy a matematiku se statistikou. Během střední školy jsem si prošel několika ekonomickými soutěžemi a projekty jako CERGE-EI Projects in Applied Economics, nebo High School Business Challenge, kromě toho jsem byl na stáži v konzultační firmě Deloitte nebo jsem reprezentoval ČR na mezinárodním Modelu Evropského Parlamentu v Kodani. Ve volném čase rád sportuju (zvláště pak běhání, fotbal a splitboarding), hraju na bicí, nebo zajdu s kamarády na pivo</li>
                <li>Rád poradim a pokecám o všem od studia v zahraničí, přes ekonomii/politiku a všemožné další volnočasové projekty až po sport a seriály</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'friedlaender'})]"
              @click="changeAmigo('friedlaender')"
            >
              <span></span>
              {{activeAmigo === 'friedlaender' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/pavlicek.jpg">
            <span class="amigo-name">Václav Pavlíček</span>
            <span class="orange amigo-hashtags">#vesmír #IT #elektronika #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'pavlicek'}) ]">
              <ul>
                <li>Jsem space nerd a blázen do elektroniky a IT. Na střední škole mě značně posunuly soutěže pořádané Evropskou kosmickou agenturou. V soutěži CanSat jsme s ostatními členy týmu vyrobili sondu velikosti plechovky, v rámci soutěže Astro Pi jsme pracovali na programu, který běžel ve vesmíru na ISS.  Také jsem spolunavrhnul měsíční základnu do soutěže Moon Camp Challenge. Kromě toho jsem pracoval na SOČ na Fyzikálním ústavu AV ČR. Dále mám zkušenost s organizací IT konferencí mDevCamp a DevFest.cz a s hromadou dalších IT akcí pro veřejnost pod vedením GUG.cz. Co se pracovních zkušeností týče, tak jsem pracoval pro IT firmy jako je Avast, Commity či Versino.cz.</li>
                <li>Aktuálně studuji Electronic and Information Engineering na Imperial College London, kde mě dost začal bavit elementární design počítačů. Volný čas trávím navrhováním raket a prací na satelitu velikosti CubeSat v Imperial College London Space Society.</li>
                <li>Velmi rád Tě zasvětím do světa vesmíru, pomohu Ti s účastí ve vesmírných soutěžích, předám fajnové vesmírné i IT kontakty, zkouknu motivační dopis, doporučím Ti hromadu studijních materiálů s IT a elektronickou tématikou či pomohu s přihláškou na univerzitu do zahraničí.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'pavlicek'})]"
              @click="changeAmigo('pavlicek')"
            >
              <span></span>
              {{activeAmigo === 'pavlicek' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/kudlickova.jpg">
            <span class="amigo-name">Kateřina Kudličková</span>
            <span class="orange amigo-hashtags">#věda #neziskovky #konference #soutěže</span>
            <div v-bind:class="['amigo-more-info', ...({active: activeAmigo === 'kudlickova'}) ]">
              <ul>
                <li>Mám za sebou organizaci dvou vlastních konferencí pro stovky účastníků, založení a vedení neziskové organizace a mimo to práci na výzkumu v laboratoři, se kterým jsem se zúčastnila soutěží po Česku i v zahraničí.</li>
                <li>Ráda ti pomůžu rozjet jakýkoliv neziskový projekt či zorganizovat akci, poradím ti ohledně vědeckých výzkumů (např. kde a jak se k nějakému dostat) a předám zkušenosti s tím, co (ne)dělat během střední 😀</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ...({active: activeAmigo === 'kudlickova'})]"
              @click="changeAmigo('kudlickova')"
            >
              <span></span>
              {{activeAmigo === 'kudlickova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
      </div>

      <div class="mentor-box">
        <div class="mentor-title">Přihlas se ještě dnes ať máš svého Amiga jistého</div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScEvWh6HLAXPPE4e5f86EuYG1KmiU49pFY3noB1aHhACtd8Jg/viewform" target="_blank" class="mentor-button button">Vyber si svého Amiga</a>
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

  @media (max-width: 1200px) {
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
      transition: 1s;

      &-overlay {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff)
      }

      &.active {
        max-height: 515px;
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
