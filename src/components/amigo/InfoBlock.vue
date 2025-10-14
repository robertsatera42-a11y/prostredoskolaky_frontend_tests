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
              <li>Zaujme-li tě alespoň jeden z našich amigů, klikni na „Přihlas se do programu“ a vyplň přihlášku. Odešli ji nejpozději do 2. 11. 2025 23:59.</li>
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
          <a href="https://forms.gle/oTQx8Amvrw7XVKzTA" target="_blank" class="step-link">Vyplnit přihlášku</a>
        </div>
        <!-- Přihlašování
          <span class="orange">ukončeno</span>, další ročník bude otevřen na <span class="orange">podzim 2025</span> -->
        <!-- <a href="https://forms.gle/oTQx8Amvrw7XVKzTA" target="_blank" class="step-link">Vyplnit přihlášku</a> -->
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
        <h2>Naši mentoři</h2>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/anezka-indrackova.jpg">
            <span class="amigo-name">Anežka Indráčková</span>
            <span class="orange amigo-hashtags">#sport #psychickézdraví #fotografie #studiumvzahraničí #sociálnísítě</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'indrackova'}) ]">
              <ul>
                <li>Helou! Jsem Anežka a aktuálně si dávám gap year. S největší chutí bych teď procestovala celý svět, ale profesionálně se věnuji sportu a čas mi to tak bohužel nedovolí.</li>
                <li>Konec střední jsem strávila na sportovním gymnáziu v Rakousku, zároveň se připravovala na českou maturitu a trénovala. Ve volném čase pak ráda fotím, trávím čas s přáteli, cestuji a zkouším si rozjet instagram.</li>
                <li>Jestli tě zajímá sport, psychika a zvládání stresu, studium v zahraničí či cokoli jiného, tak ráda s Tebou pokecám a poznám Tě. Už teď se těším!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'indrackova'})]"
              @click="changeAmigo('indrackova')"
            >
              <span></span>
              {{activeAmigo === 'indrackova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/anna-cerna.jpg">
            <span class="amigo-name">Anna Černá</span>
            <span class="orange amigo-hashtags">#molekulárníbiologie #věda #SOČ #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'cerna'}) ]">
              <ul>
                <li>Ahoj! Jsem Anička a studuji Přírodní vědy na Maastricht University v Nizozemsku. Od konce prváku na gymplu jsem dělala výzkum v oblasti molekulární biologie na Masarykově univerzitě a mám zkušenosti z vědeckých soutěží v Česku i v zahraničí.</li>
                <li>Jako mentorka pomohu s výběrem a oslovením laboratoře, přípravou SOČ, posteru a obhajoby, i s přihláškami na české i zahraniční VŠ a se stipendii nebo prostě s čímkoliv, co zrovna bude potřeba;).</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'cerna'})]"
              @click="changeAmigo('cerna')"
            >
              <span></span>
              {{activeAmigo === 'cerna' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/anna-prusova.jpg">
            <span class="amigo-name">Anna Průšová</span>
            <span class="orange amigo-hashtags">#fyzika #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'prusova'}) ]">
              <ul>
                <li>Ahoj, jmenuji se Anička a momentálně ukončuji bakalářské studium na Technické univerzitě v Mnichově s plánem začít magisterské studium na LMU se zaměřením na lékařskou fyziku.</li>
                <li>Během gymnázia jsem se věnovala nejen fyzice, ale i chemii. Mám za sebou stáž na Fyzikálním i Astronomickém ústavu AV ČR, vícero soutěží, letní školu fyzikální chemie, samostudium cizích jazyků, praxi v architektonické kanceláři a mateřské škole v Německu.</li>
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

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/antonin-svoboda.jpg">
            <span class="amigo-name">Antonín Svoboda</span>
            <span class="orange amigo-hashtags">#mluvení #adiktologie #mindfulness</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'svoboda'}) ]">
              <ul>
                <li>Aby se člověk nevyšťavil hned na prvním projektu jak jablečný mošt🥁, tak by si jako nultý projekt mohl dát třeba sebe. Jaké možnosti jsou? Některé tušíte, na jiné přijdeme společně v Amigu. Takže se pobavíme o tom, jak nakonec všechno zvládnout a jak si odpočinout. Nebo z jiného soudku, jak vymaxovat schopnost mluvit, přednášet a prezentovat. (popřípadě cokoli z níže vypsaného)</li>
                <li>Jsem Tonda a studuji na 1.LF UK Adiktologii. Dva roky po sobě jsme s bráchou vyhráli národní kolo Prezentiády, což pak vedlo k přednáškám pro Akademii Díky, že můžem, Kampus Hybernská nebo různě po školách v ČR. Angažuji se ve spolcích ProStředoškoláky, SCG a ČASA a 13 let hraji na housle. Na druhé straně jsem pak vychodil 8 týdenní kurz MBSR, coaching s Coachville, medituji, cvičím yogu a vyrostl jsem na stoicismu a journalingu</li>
                <li>Setkání on-line kdykoli, nebo naživo v Praze📍</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'svoboda'})]"
              @click="changeAmigo('svoboda')"
            >
              <span></span>
              {{activeAmigo === 'svoboda' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/eliska-konecna.jpg">
            <span class="amigo-name">Eliška Konečná</span>
            <span class="orange amigo-hashtags">#vědeckésoutěže #sport #mezioborovost</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'konecna'}) ]">
              <ul>
                <li>Ahoj! Jsem Eliška a vždycky jsem byla dobrá v topení se v rozhodnutích o tom, kterým jedním směrem mají mé kroky směřovat.</li>
                <li>Část mě patří vodám „bio“. Během střední školy jsem se věnovala výzkumu na pomezí molekulární biologie a chemie a soutěžila jsem v SOČ i navazujících zahraničních soutěžích v Americe a Číně.</li>
                <li>Vždy mě lákala kombinace více oborů, a proto jsem nakonec skončila u studia mezioborové Bioinformatiky.</li>
                <li>Zároveň jsem často „utíkala“ k závodní atletice a snažila jsem se tak zkombinovat vše, co mi (v daný moment) dávalo smysl – to vnímám jako cestu k výběru toho správného rybníčku.</li>
                <li>Ráda se podělím o zkušenosti s výzkumem na SŠ, SOČ, přípravou na nominaci i samotnými zahraničními soutěžemi, ale také o tipy, jak plavat mezi všemi svými zájmy, i když se některý může jevit jen jako útěk, a ne kariérní růst (aka např. sport).</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'konecna'})]"
              @click="changeAmigo('konecna')"
            >
              <span></span>
              {{activeAmigo === 'konecna' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/hana-bernhardova.jpg">
            <span class="amigo-name">Hana Bernhardová</span>
            <span class="orange amigo-hashtags">#biochemie #studiumvzahraničí #věda</span>
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
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/jan-barva.jpg">
            <span class="amigo-name">Jan Barva</span>
            <span class="orange amigo-hashtags">#mezinárodnívztahy #extracuricularactivities #projectmanagement #právo #angličtina</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'barva'}) ]">
              <ul>
                <li>Nemám rád houby, písek v botách a lhostejnost. Pokud se alespoň na tom posledním shodneme, myslím, že si budeme rozumět! Věřím, že svět se posouvá dopředu, když se lidi zapojují, mluví spolu a umí si naslouchat. Jsem Honza, první rok studuju na Právnické fakultě Masarykovy univerzity, a rád hledám cesty, jak dobré nápady přetavit v realitu.</li>
                <li>Kromě nynějšího studia práva, jsem absolvoval International Baccalaureate Diploma Programme, který mě naučil, dívat se na problémy z vícero perspektiv. Mám taky zkušenost se zahraničím. V roce 2024 jsem reprezentoval Česko v programu BFTF, který pořádá vláda USA a zamiloval si mezinárodní vztahy a diplomacii. Založil jsem také projekt Voices for Rights, který jsme představili prezidentu ČR, a jsem členem poradních skupin mladých při Velvyslanectví USA i MPSV. V nezisku jsem si taky vyzkoušel doučování angličtiny u dětí ze znevýhodněného prostředí nebo dobrovolnictví pro Amnesty International.</li>
                <li>Ať už hledáš nové způsoby, jak trávit čas, chceš vyšperkovat svoje CVčko, rozjet nový projekt nebo jen chceš sparring partnera, se kterým můžeš sdílet jakékoliv nápady a myšlenky, jsem tu pro tebe. Těším se, až se potkáme!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'barva'})]"
              @click="changeAmigo('barva')"
            >
              <span></span>
              {{activeAmigo === 'barva' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/jana-tomastikova.jpg">
            <span class="amigo-name">Jana Tomaštíková</span>
            <span class="orange amigo-hashtags">#neurověda #psychologie #výzkum #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'tomastikova'}) ]">
              <ul>
                <li>Ahoj, tady Jana! Na konci střední školy jsem se rozhodla vrhnout do studia mozku a lidského chování. Teď studuju obor kognitivních neurověd na University of Cambridge. Ne vždy jsem ale věděla, čemu bych se chtěla věnovat.</li>
                <li>Během střední školy jsem sportovala, soutěžně tancovala v Česku i v zahraničí, ale zároveň jsem třeba prezentovala na Přírodovědecké konferenci, překládala články z angličtiny do češtiny pro časopis Mensa nebo dobrovolničila v Alzheimer centru v Ostravě. Nakonec jsem si vysnila studium v zahraničí. S podporou svého okolí jsem mohla vystudovat psychologii na University of Edinburgh. Teď se věnuju výzkumu vnímání a pozornosti v Cambridge.</li>
                <li>Ráda pokecám o psychologii a neurovědě. Poradím, co s volným časem nebo jak na přihlášky na univerzitu v zahraničí. Můžeme spolu probrat, co tě zajímá a baví, a vymyslet, jak nejlíp pokračovat dál (a jak se při tom nezbláznit!).</li>
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
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/johana-valova.jpg">
            <span class="amigo-name">Johana Valová</span>
            <span class="orange amigo-hashtags">#hudba #autorskátvorba #umění #psanínaklávesnici #vzdělávaní</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'valova'}) ]">
              <ul>
                <li>Ahoj! Já jsem Johana a studuji druhý ročník na 1. lékařské fakultě UK. Mou velkou vášní a místem, kam můžu vždy utéct, je hudba a umění. Na střední škole jsem se naplno věnovala hraní na klavír, zpěvu a divadlu. V roce 2022 jsem absolvovala letní kurz Národního divadla Young, který byl zakončen inscenací na Nové scéně ND.</li>
                <li>V současnosti se nejvíce věnuji zpěvu a skládání vlastních písní, se kterými jsem vystoupila například na Zlínském filmovém festivalu nebo v rámci oslav 17. listopadu Korzo národní. Kromě autorské tvorby se aktivně věnuji psaní na klávesnici, v němž jsem několikanásobnou mistryní světa a taktéž jsem hrdou propagátorkou klávesnicové gramotnosti.</li>
                <li>Pokud tě zajímají věci z hudebního světa, skládání, nahrávání nebo třeba balancování více různých koníčků najednou, jsem tady pro tebe a těším se na společné sdílení a objevování nových pohledů na věc.</li>
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
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/matej-prokop.jpg">
            <span class="amigo-name">Matěj Prokop</span>
            <span class="orange amigo-hashtags">#politika #mezinárodnívztahy #participace #lobbing #socialimpact</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'prokop'}) ]">
              <ul>
                <li>Štve tě něco? Změň to! Pokud máš tenhle mindset, budeme si rozumět 🙂 Jsem Matěj a aktuálně pracuji v kabinetu ministra školství, kde měním přístup státu k začleňování mládeže do tvorby politik, protože mě vždycky štvalo, že stát mladé nebere moc vážně.</li>
                <li>Zkušenosti mám i s prací v Radě EU, v lobbingové agentuře, nebo v různých startupech. V každé práci mě vždy motivovala hlavně možnost stát za pozitivní společenskou změnou.</li>
                <li>Jsem absolvent práv z Karlovky a taky VŠE, kde jsem nejdříve studoval diplomacii a teď mezinárodní obchod. Ze šesti let studia jsem strávil téměř půlku v zahraničí, nejraději se ale stejně vždycky vracím zpět do Česka.</li>
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

        </div>

        <div class="flex">

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/matej-sicner.jpg">
            <span class="amigo-name">Matěj Šicner</span>
            <span class="orange amigo-hashtags">#věda #fyzika #sport #táboryproděcka #eventmanagement #bioinformatika</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'sicner'}) ]">
              <ul>
                <li>Čau, já jsem Matěj a pokud tě baví věda a její popularizace, nebojíš se pohybu a hledáš, do čeho se na střední zapojit, tak si budeme rozumět!</li>
                <li>Na gymplu jsem propadl fyzice – hlavně astronomii, později i kvantovce, které jsem se věnoval i v rámci své SOČky. Od září studuju bioinformatiku na UK v Praze a na magistra bych rád vyrazil do zahraničí.</li>
                <li>Vždycky jsem chtěl dělat to, co mě opravdu baví, takže jsem školní lavici často vyměňoval za různé akce pro středoškoláky. Nakonec jsem je začal i sám organizovat – nejdřív AstroPi Hackathon, později Zvaž vědu!</li>
                <li>Práce s mladými mi dává smysl – podílím se na organizaci táborů, vedu kroužek na škole a věnuju se mentoringu. K tomu rád relaxuju při sportu, nejvíc mě baví horská turistika, cyklistika a běh.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'sicner'})]"
              @click="changeAmigo('sicner')"
            >
              <span></span>
              {{activeAmigo === 'sicner' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/metodej-svoboda.png">
            <span class="amigo-name">Metoděj Svoboda</span>
            <span class="orange amigo-hashtags">#projectmanagement #přednášení #idkhlavněchciabytocodělámmělosmysl</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'svoboda2'}) ]">
              <ul>
                <li>Vadí mi, když si neuvědomuji, co mi vadí a mám jenom divný pocit. Když se ale naučíme vnímat, co chceme a nechceme, náš život se, myslím, dost posune – paradoxně na to ale často zapomínáme a děláme věci, za nimiž smysl nevidíme.</li>
                <li>Jsem Metoděj a s bráchou jsme dvakrát vyhráli nadnárodní kolo Prezentiády, největší soutěže v prezentování v ČR. Vzhledem k tomu teď přednášíme pro Akademii Díky, že můžem nebo Kampus Hybernská pod Univerzitou Karlovou. </li>
                <li>Ačkoli jsem celkem hluboko zabrouzdal do širokého rozptylu oborů od matematiky a programování přes výzkumu v biochemii až po poezii, hudbu a vlastní tvorbu, nejvíc se teď shlížím v projektovém managementu. Začínal jsem s řadou projektů na škole, organizoval Prezentiádu a pIšQworky. A teď od letošního roku vedu organizaci ProStředoškoláky.</li>
                <li>Neporadím ti ve výběru vysoké školy, zahraničím, podnikáním a vyděláváním peněz, neboť většinou dělám v nezisku:D</li>
                <li>Pokud máš před sebou těžko rozlusknutelný oříšek, nebo chceš nějaký vytvořit, rád ti s tím pomůžu:D Nejpodstatnější je pokud je tvojí hlavní motivací smysl… dává to smysl?</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'svoboda2'})]"
              @click="changeAmigo('svoboda2')"
            >
              <span></span>
              {{activeAmigo === 'svoboda2' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

        </div>

        <div class="flex">

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/ondrej-pazourek.jpeg">
            <span class="amigo-name">Ondřej Pazourek</span>
            <span class="orange amigo-hashtags">#dev #software #tech</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'pazourek'}) ]">
              <ul>
                <li>Zaměřuji se převážně na computer science, vývoj softwaru a počítačové sítě.</li>
                <li>Mám zkušenosti z firem jako AT&T, Red Hat a GOAL SPORT SOFTWARE, kde jsem pracoval na projektech od modernizace 5G sítí na vývoj softwaru pro sportovní stadiony. </li>
                <li>Právě studuji Computer Science na University of Twente v Nizozemsku a žiji zde.</li>
                <li>Baví mě pomáhat ostatním rozvíjet jejich potenciál a předávat zkušenosti z technologií, sportu a projektového vedení.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'pazourek'})]"
              @click="changeAmigo('pazourek')"
            >
              <span></span>
              {{activeAmigo === 'pazourek' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/ondrej-pelanek.jpg">
            <span class="amigo-name">Ondřej Pelánek</span>
            <span class="orange amigo-hashtags">#biologie #fotografie #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'pelanek'}) ]">
              <ul>
                <li>Jsem nadšencem do biologie, focení, cestování a přírody. Střední jsem strávil s Biologickou olympiádou, SOČkou, počítal ptáky, zašel do molekulárně-biologické laboratoře, zafilozofoval si na Princetonu a celkově ji prožil akčně. Vystudoval jsem v Anglii na University College London a v průběhu studia mimo jiné strávil rok v Austrálii. Teď jsem na doktorátu ze zoologie na univerzitě v Cambridge a směřuju vědeckým směrem. Nejradši jsem na výpravách venku, cestuji po světě, koukám po ptákách a fotím zvířata (celkem profi ;-)).</li>
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
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/petra-placha.jpg">
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
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/simon-falta.jpg">
            <span class="amigo-name">Šimon Falta</span>
            <span class="orange amigo-hashtags">#startups #sport #business</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'falta'}) ]">
              <ul>
                <li>Ahoj! Jmenuju se Šimon Falta a jsem student na FEL ČVUT. Rád hledám ve všem plný potenciál a dotahuju věci do konce. Aktuálně působím na pozici CEO ve firmě IQstat, kde pomáháme šetřit za elektřinu skrz technologie. V minulosti jsem také soutěžil na mezinárodní úrovni v silovém trojboji, hrál na různé hudební nástroje apod. – klasický život aktivního středoškoláka : )</li>
                <li>Jako mentor pomůžu hlavně v oblasti byznysu. Jak založit startup už na střední? Kde vzít peníze? Kde najít první zákazníky? A jak to všechno stíhat při škole? Pokud děláš jakýkoli sport, budeme si rozumět : ) V silovém trojboji jsem došel k titulu mistra Evropy a k pár národním rekordům. Rád pomůžu hlavně s mindsetem a disciplínou.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'falta'})]"
              @click="changeAmigo('falta')"
            >
              <span></span>
              {{activeAmigo === 'falta' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

        </div>

        <div class="flex">

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/simon-spilar.jpg">
            <span class="amigo-name">Šimon Špilar</span>
            <span class="orange amigo-hashtags">#investice #ekonomie #politika #němčina</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'spilar'}) ]">
              <ul>
                <li>Šimon Špilar je studentem Financial Economics na University of St Andrews, který působí v oblasti ekonomie a investic. Má za sebou vítězství v Celostátní přehlídce SOČ, účast na Regeneron ISEF a pracovní angažmá ve financích.</li>
                <li>Během střední školy se kromě ekonomických soutěží věnoval také participaci v European Youth Parliament a Česko-německém fóru mládeže, kde působil jako mluvčí. Rád Ti tedy poradí s dotazy v oblastech ekonomie, financí, politických akcí, němčiny, ale i time managementu a přihlášek na zahraniční univerzity.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'spilar'})]"
              @click="changeAmigo('spilar')"
            >
              <span></span>
              {{activeAmigo === 'spilar' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/tadeas-frycak.jpg">
            <span class="amigo-name">Tadeáš Fryčák</span>
            <span class="orange amigo-hashtags">#informatika #věda #studiumvzahraničí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'frycak'}) ]">
              <ul>
                <li>Studuji Computer Science and Engineering na TU Delft v Nizozemsku, pokud zvažuješ studium technického oboru v zahraničí, určitě mě neváhej kontaktovat.</li>
                <li>Informatiku ale jen nestuduji, snažím se ji propojovat s jinými obory, nejčastěji pomocí Computer Vision, Data Science, Machine Learning a AI metod. Využití mých algoritmů nacházejí nejen biologická vědeckovýzkumná pracoviště, ale také i softwarové firmy jako například Seznam.cz, kde jsem absolvoval několikaletou stáž.</li>
                <li>Prošel jsem si programy pro středoškoláky, jako je Badatel či Newton na Univerzitě Palackého nebo Otevřená věda na Akademii věd ČR, což mi umožnilo vytvořit nejednu publikaci. Také jsem se úspěšně účastnil Středoškolské odborné činnosti, Soutěže v programování či Mistrovství ČR v radioelektrotechnice.</li>
                <li>Kontaktovat mě můžeš také v případě, že bys chtěl poradit v programování (ať už se jedná o web, návrh architektury softwaru, či jen klasické programování) nebo elektrotechnice (umím navrhovat v prostředí KiCAD či Eagle a mám zkušenosti nejen s STM32 či ESP32).</li>
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

        </div>

        <div class="flex">

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/tadeas-vylita.jpg">
            <span class="amigo-name">Tadeáš Vylita</span>
            <span class="orange amigo-hashtags">#vzdělávání #pedagogika #sport #organizace akcí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'vylita'}) ]">
              <ul>
                <li>Tadeáš učí informatiku na základní škole a zároveň je stážistou v Mattoni 1873, kde má na starosti vzdělávací projekty pro děti na 1. a 2. stupni základních škol. Studuje dálkově na Pedagogické fakultě UK a všude, kde to jde, jezdí na kole. Závodně hrál volejbal a ten teď trénuje malé děti.</li>
                <li>Organizoval několik celorepublikových soutěží, natočil dokumentární film o jeho volejbalovém klubu a na KVIFFu se stará o zelenější festival. Dobrovolničí a vedl sportovně-vzdělávací program pro ukrajinské vrstevníky.</li>
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

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/tereza-przeczkova.jpg">
            <span class="amigo-name">Tereza Przeczková</span>
            <span class="orange amigo-hashtags">#studiumvzahraničí #biomedicína #věda #sport</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'przeczkova'}) ]">
              <ul>
                <li>Ahoj, jsem Terka a momentálně studuji obor Biomedical Sciences na University College London (UCL). Prošla jsem si stážemi na Fyziologickém ústavu AV ČR, Katedře organické chemie PřF UPOL či v centru BIOCEV. Na olomoucké univerzitě jsem dokonce vystudovala buněčnou biologii již jako středoškolák a prošla jsem si také řadou soutěží přes slavnou SOČ až po České hlavičky.</li>
                <li>Jsem aktivní dobrovolnicí. Působím jako vedoucí v programu DOFE a zabývám se prevencí syndromu vyhoření v organizaci Nevyhasni. No a to vše se ještě snažím zkombinovat s olympijským vzpíráním, kterému se závodně věnuji.</li>
                <li>Ráda se s tebou pobavím o studiu v zahraničí, možnostech zapojení se do výzkumu, a to jak v ČR, tak v zahraničí nebo taky o tom, jak hacknout systém a studovat VŠ už na střední. Pomůžu ti posouvat své hranice a naučím tě klíčovou vlastnost pro úspěch – nebát se a věci hlavně zkoušet!</li>
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

        </div>

        <div class="flex">

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/tereza-tomaskova.jpg">
            <span class="amigo-name">Tereza Tomášková</span>
            <span class="orange amigo-hashtags">#konzervatoř #flétna #výzkum #molekulárníbiologie</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'tomaskova'}) ]">
              <ul>
                <li>Ahoj! Jsem Terka a momentálně studuji čtvrťák na gymplu a třeťák na Pražské konzervatoři, kde se věnuju hře na příčnou flétnu. S flétnou jsem už zažila mnoho, třeba vyhrála pár soutěží, zúčastnila se stipendijní akademie Menart a hrála v několika orchestrech.</li>
                <li>Zároveň se velmi zajímám o medicínu a vědu. Minulý rok jsem absolvovala stáž na Ústavu živočišné fyziologie a genetiky. Letos jsem na Ústavu molekulární genetiky, kde se věnuju výzkumu senescentních buněk po protinádorové léčbě a možnostem, jak je odstranit. Zkušenosti jsem sbírala i na kurzu Laboratory Skills v Liverpoolu. Navíc mám úspěšně složené zkoušky AP Biology a AP Chemistry.</li>
                <li>Určitě si můžeme popovídat třeba o studiu na konzervatoři, protože to není úplně typická škola, o tom jak se dostat do vědy a zařídit si stáže či jiné příležitosti, jak vyzrát nad AP (a co to vůbec je :-)) a nebo o čemkoliv jiném, co Tě napadne.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div
              v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'tomaskova'})]"
              @click="changeAmigo('tomaskova')"
            >
              <span></span>
              {{activeAmigo === 'tomaskova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>

          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/veronika-zelinkova.jpg">
            <span class="amigo-name">Veronika Zelinková</span>
            <span class="orange amigo-hashtags">#programming #iOSDevelopment #careerTips</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'zelinkova'}) ]">
              <ul>
                <li>Ahoj, jsem Verča a věnuji se vývoji mobilních aplikací pro iOS. Pracuji jako freelancer (což znamená že hodně cestuji a klienty si hledám sama) momentálně pro BeReal a přednáším na technických konferencích.</li>
                <li>V IT pracuji od druháku na střední a od té doby jsem sbírala zkušenosti ve firmách jako je Alza, STRV, na zahraničmí trhu pak třeba Microsoft, IBM, Porsche nebo BeReal.</li>
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

      </div>

      <div class="mentor-box">
        <div class="mentor-title">Přihlas se ještě dnes!</div>
        <a href="https://forms.gle/oTQx8Amvrw7XVKzTA" target="_blank" class="mentor-button button">Přihlas se do programu</a>
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
