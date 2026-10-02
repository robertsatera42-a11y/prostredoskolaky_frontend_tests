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
            >I když se snažíš ze střední vytěžit maximum, někdy je lepší nevymýšlet všechno od nuly. Pomůže ti někdo, kdo už si podobnými rozhodnutími prošel – a může ti ukázat cestu, jak se posunout dál.<br></br>Spojujeme tě s mladými lidmi, kteří již za sebou mají spoustu projektů, a už ví, jak v tom všem chodit. Naši mentoři jsou finalisté soutěže Středoškolák roku nebo další inspirativní studenti a mají zkušenosti, které ti mohou ušetřit spoustu času i nervů.</div>
            <span class="orange why-title">Co od programu očekávat?</span>
            <div
              class="why-description"
            >Během programu budeš mít příležitost se několikrát potkat se svým mentorem osobně nebo online. Během vašich setkání můžeš řešit své aktuální problémy – od projektů, stáží a soutěží i přes to, jak si naplánovat čas a vyhnout se tak syndromu vyhoření, nebo jak se dostat ke studiu v zahraničí.<br></br>Tvůj mentor ti dá cennou zpětnou vazbu, nabídne svůj pohled na věc nebo předá své tipy a rady. V jiných případech ti dá motivaci a pocit, že na to nejsi sám, což je někdy vše, co potřebuješ.</div>
          </div>
          <div class="flex-1">
            <span class="orange why-title">Jak to bude probíhat?</span>
            <div class="why-description">
              <ul>
              <li>Vyber si alespoň jednoho z našich mentorů, klikni na „Přihlas se do programu“ a vyplň přihlášku. Odešli ji nejpozději do 1. 11. 2026 23:59.</li>
              <li>Proběhne oboustranně co nejvýhodnější spárování dvojic. O všem ti dáme vědět</li>
              <li>Několikrát si zavoláte nebo se sejdete, záleží na vašich možnostech. Pokusíte se posunout tvé aktivity o kousek dál či v tobě jen zažehnout ducha aktivního středoškoláka.</li>
              <li>Pravidelně tě budeme kontaktovat, abychom ověřili, že jde vše hladce a setkání jsou pro tebe přínosná. Kdybyste zjistili, že si nesedíte, dej nám vědět a podíváme se po možné náhradě.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="round-time">
          <a href="https://forms.gle/52BpSA6sDuuSPUPz9" target="_blank" class="step-link">Vyplnit přihlášku</a>
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
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/anna-prusova.jpg" alt="Fotografie Anna Průšová">
            <span class="amigo-name">Anna Průšová</span>
            <span class="orange amigo-hashtags">#fyzika #lékařskáfyzika #studiumvzahraničí #stáže</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'anna-prusova'}) ]">
              <ul>
                <li>Ahoj, jmenuji se Anička. Před rokem jsem dokončila bakaláře ve fyzice na Technické univerzitě v Mnichově, kde jsem se posledním roce soustředila na biofyziku. Aktuálně pokračuji s magistrem ve fyzice se zaměřením lékařskou fyziku na Ludwig-Maximilians Universität, taktéž v Mnichově.</li>
                <li>Během gymnázia jsem se věnovala nejen fyzice, ale i chemii. Mám za sebou stáž na Fyzikálním i Astronomickém ústavu AV ČR, vícero soutěží, letní školu fyzikální chemie, samostudium cizích jazyků, praxi v architektonické kanceláři a mateřské škole v Německu.</li>
                <li>Ráda poradím s hledáním stáží, soutěží a vysoké školy, jak v Čechách, tak zahraničí.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'anna-prusova'})]"
              @click="changeAmigo('anna-prusova')"
            >
              <span></span>
              {{activeAmigo === 'anna-prusova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/antonin-svoboda.jpg" alt="Fotografie Antonín Svoboda">
            <span class="amigo-name">Antonín Svoboda</span>
            <span class="orange amigo-hashtags">#přednášení #adiktologie #organizacečasu #projekty</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'antonin-svoboda'}) ]">
              <ul>
                <li>Setkání on-line kdykoli, nebo naživo v Praze📍- hledám mentee/menteeho, který/á má vůli a kapacitu na cokoli z následujícího:</li>
                <li>založení vlastního projektu/akce</li>
                <li>zlepšení prezentačních dovedností</li>
                <li>zájem o adiktologickou tematiku a prevenci</li>
                <li>bouldering (lezení na stěnu)</li>
                <li>efektivní organizaci kalendáře a to-do listů</li>
                <li>Jsem Tonda a studuji na 1.LF UK Adiktologii. Dva roky po sobě jsme s bráchou vyhráli národní kolo Prezentiády, což pak vedlo k přednáškám pro Akademii Díky, že můžem, Kampus Hybernská, Zvaž vědu! nebo různě po školách v ČR. Založil jsem projekt Offline čtení, který v centru Prahy tvoří komunitní prostředí a ve stopách organizace ProStředoškoláky vedu projekt Vysokoškolák roku 2027.</li>
                <li>K tomu 13 let hraji na housle. Prošel jsem 8týdenní kurz MBSR, cvičím yogu, zdokonalil jsem journaling a letos jsem absolvoval Dobrovolné vojenské cvičení ve Vyškově.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'antonin-svoboda'})]"
              @click="changeAmigo('antonin-svoboda')"
            >
              <span></span>
              {{activeAmigo === 'antonin-svoboda' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/nimrichtr.jpg" alt="Fotografie Arnošt Matěj Nimrichtr">
            <span class="amigo-name">Arnošt Matěj Nimrichtr</span>
            <span class="orange amigo-hashtags">#klavír #umění #vzdělávání #věda</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'arnost-matej-nimrichtr'}) ]">
              <ul>
                <li>Ahoj, já jsem Arnošt a jsem v maturitním ročníku na gymnáziu v Pardubicích. Mimo studium se naplno věnuji hře na klavír. Měl jsem možnost vystupovat na mezinárodních pódiích včetně Carnegie Hall v New Yorku nebo divadla Curci Theatre v Itálii, a jsem vítězem mezinárodních soutěží AVIMC či Città di Barletta a celostátních soutěží jako Dvořák mladým. Klavírní dovednosti jsem rozvíjel na stipendijních akademiích MenART pod vedením Karla Košárka a na Academy Kroměříž u prof. Ivo Kahánka.</li>
                <li>Kromě hudby mě baví přesah do vědy. Podílel jsem se totiž na chemickém výzkumu výbušnin a mitigace průmyslových výbuchů, jehož výsledky jsem prezentoval na mezinárodním symposiu na Taiwanu. Působím také v Evropském parlamentu mládeže, kde jsem letos zorganizoval národní konferenci pro více než 170 účastníků. Zastávám také pozici předsedy školní studentské rady, vyučuji klavír a korepetuji.</li>
                <li>Rád ti pomůžu hlavně s tím, jak se prosadit v hudbě a hře na klavír. Společně můžeme probrat i to, jak efektivně skloubit náročné studium s velkými projekty.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'arnost-matej-nimrichtr'})]"
              @click="changeAmigo('arnost-matej-nimrichtr')"
            >
              <span></span>
              {{activeAmigo === 'arnost-matej-nimrichtr' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/barbora-tomaskova.jpg" alt="Fotografie Barbora Tomášková">
            <span class="amigo-name">Barbora Tomášková</span>
            <span class="orange amigo-hashtags">#herectví #film #distribuce #produkce #dabing</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'barbora-tomaskova'}) ]">
              <ul>
                <li>Ahoj! Já jsem Barča a pohybuju se ve světě filmu jako producentka a distributorka. Ráda bych svoje zkušenosti předávala dál těm, kteří se chtějí herecky posunout, dozvědět se víc o filmovém prostředí nebo se v něm lépe zorientovat.</li>
                <li>V roce 2025 jsem spoluzaložila produkční a distribuční společnost Crystaloid. Mým cílem je, aby byla místem, kde mohou mladí tvůrci získávat zkušenosti, rozvíjet svůj talent a tvořit v prostředí, které je otevřené, respektující a bezpečné. Baví mě také práce s mladými lidmi prostřednictvím filmových a dabingových workshopů, kde se snažím ukazovat, že cesta do audiovize nemusí být jen pro pár vyvolených.</li>
                <li>Pokud Tě zajímá herectví, film, dabing, produkce, máš vlastní projekty nebo prostě chceš zjistit, jak filmový svět funguje, ráda s Tebou vše proberu, předám Ti svoje zkušenosti a společně vymyslíme, jak se posouvat dál. Budu se těšit!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'barbora-tomaskova'})]"
              @click="changeAmigo('barbora-tomaskova')"
            >
              <span></span>
              {{activeAmigo === 'barbora-tomaskova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/david-seltenreich.jpg" alt="Fotografie David Seltenreich">
            <span class="amigo-name">David Seltenreich</span>
            <span class="orange amigo-hashtags">#divadlo #literatura #historie #psaní</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'david-seltenreich'}) ]">
              <ul>
                <li>Ahoj! Jsem David a začínám studium režie-dramaturgie činoherního divadla na DAMU spolu s dějinami umění na FF UK. Blízko mám k uměleckému prostředí stejně jako k humanitním vědám.</li>
                <li>V roce 2024 jsem vyhrál celostátní dějepisnou olympiádu, v roce 2025 jsem se svojí odbornou prací vyhrál historickou soutěž EUStory. Také jsem se po celou dobu střední školy věnoval psaní beletrie, uspěl jsem v několika literárních soutěžích a na podzim 2026 mi vyšel debutový román Bylo pozdě, pro mnohé už navždy u nakladatelství Bourdon. Zajímá mě taky recitace a mluvený projev.</li>
                <li>Rád pomůžu s orientací v uměleckém světě (soubory, soutěže, konkurzy, nakladatelství…), ať už jde o herectví, divadlo obecně, literaturu nebo cokoli podobného; poradím i s tvorbou odborných prací na historická témata a psaním celkově. Především si ale rád popovídám s někým, koho zajímá svět kolem něj, přemýšlí občas nad jeho krásou a uvažuje, co všechno se s ní dá dělat :)</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'david-seltenreich'})]"
              @click="changeAmigo('david-seltenreich')"
            >
              <span></span>
              {{activeAmigo === 'david-seltenreich' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/eduard-cervinka.jpg" alt="Fotografie Eduard Červinka">
            <span class="amigo-name">Eduard Červinka</span>
            <span class="orange amigo-hashtags">#science #machinelearning #publicspeaking #cybersecurity</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'eduard-cervinka'}) ]">
              <ul>
                <li>Ahoj, jsem Eda! Studuju informatiku se zaměřením na umělou inteligenci na matfyzu. Baví mě technologie, věda a cybersecurity, ale zároveň jsem extrovert, který miluje public speaking, networking a společenské akce. Mám takový "hacker mindset", baví mě zkoumat pravidla systémů, optimalizovat procesy a hledat ty nejefektivnější cesty. Když zrovna neprogramuju nebo se nešprtám matiku, trávím čas aktivně sportem, hrou na saxofon a klavír.</li>
                <li>V oblasti AI pracuju na výzkumu v rámci fakultního grantu a také působím na Matematickém ústavu AV ČR, kde právě čekáme na publikaci paperu. Absolvoval jsem několik stáží v programu Otevřená věda a účastnil se SOČ. V oblasti technologií jsem se dostal do finále Qminers Quant Hackathonu a s týmem vyhrál Samsung Solve for Tomorrow, což nás přivedlo až k prezentaci našeho projektu prezidentům tří zemí. Prošel jsem také programem Microsoft STC a nyní školím ve firmách. Od technologií odskakuju k soft skills, moderuju akce, účastnil jsem se Prezentiády a prezentuju na studentských vědeckých konferencích.</li>
                <li>Pomůžu ti nakopnout výzkum, proniknout do machine learningu, zefektivnit tvůj přístup k věcem nebo aplikovat design thinking na tvůj projekt. Především tě ale naučím, jak svůj nápad prodat. Společně zapracujeme na tvé asertivitě, expresivitě projevu i na tom, jak si připravit sebevědomou speech. Cestu vymyslíme spolu, realizace je na tobě ;)</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'eduard-cervinka'})]"
              @click="changeAmigo('eduard-cervinka')"
            >
              <span></span>
              {{activeAmigo === 'eduard-cervinka' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/jan-barva.jpg" alt="Fotografie Jan Barva">
            <span class="amigo-name">Jan Barva</span>
            <span class="orange amigo-hashtags">#právo #lidskápráva #diplomacie #projekty</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'jan-barva'}) ]">
              <ul>
                <li>Nemám rád houby, písek v botách a lhostejnost. Pokud se alespoň na tom posledním shodneme, myslím, že si budeme rozumět! Věřím, že svět se posouvá dopředu, když se lidi zapojují, mluví spolu a umí si naslouchat. Jsem Honza, druhým rokem studuju na Právnické fakultě Masarykovy univerzity a rád hledám cesty, jak dobré nápady přetavit v realitu.</li>
                <li>Kromě nynějšího studia práva jsem absolvoval International Baccalaureate Diploma Programme, který mě naučil dívat se na problémy z vícero perspektiv. Mám taky zkušenosti ze zahraničí. V roce 2024 jsem reprezentoval Česko v programu BFTF, který pořádá vláda USA, a zamiloval si mezinárodní vztahy a diplomacii. Současně trávím semestr na University of Glasgow, kde se zaměřuji především na lidskoprávní a mezinárodněprávní otázky. Založil jsem také projekt Voices for Rights, který jsme představili prezidentovi ČR, a jsem členem poradních skupin mladých při Velvyslanectví USA i MPSV. V nezisku jsem si vyzkoušel doučování angličtiny u dětí ze znevýhodněného prostředí nebo dobrovolnictví pro Amnesty International.</li>
                <li>Ať už hledáš nové způsoby, jak trávit čas, chceš vyšperkovat svoje CVčko, rozjet nový projekt nebo jen chceš sparring partnera, se kterým můžeš sdílet jakékoliv nápady a myšlenky, jsem tu pro tebe. Těším se, až se potkáme!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'jan-barva'})]"
              @click="changeAmigo('jan-barva')"
            >
              <span></span>
              {{activeAmigo === 'jan-barva' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/jan-franek.jpg" alt="Fotografie Jan Franěk">
            <span class="amigo-name">Jan Franěk</span>
            <span class="orange amigo-hashtags">#projectmanagement #politika #mindset #komunita</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'jan-franek'}) ]">
              <ul>
                <li>Čau čau, já jsem Honza a jestli jsi jako já člověk, který hodně přemýšlí a je ochotný dělat věci navíc, abys zlepšil sebe i svoje okolí, tak mi bude radostí tě poznat.</li>
                <li>Něco málo o mě, jen abys měl představu: jsem člověk, který se hodně zajímá o historii a filozofii v tom smyslu, jak je správné žít a jak si vybudovat život tak, aby tě nic neskolilo, který má rád absurdní humor, sportuje a celkově pořád něco dělá. Jo, a taky studuji politologii na Univerzitě Karlově. Profesně se stále hledám, ale zabývám se už 4 roky, i když jsem to neplánoval, projektovým managementem.</li>
                <li>Dělal jsem všechno možné, v zisku i nezisku, pro sebe i pro ostatní, akademii YPALA, mezinárodní Erasmus+ programy, nashistorickykalendar.cz a teď v mojí práci v inovativní logistické společnosti, kde řešíme robotizaci a automatizaci distribuce.</li>
                <li>Pokud máš vlastní projekty, moc rád budu někým, s kým si o tom můžeš pokecat, doladit nápad, zvážit rizika, sehnat lidi a dotáhnout to do konce a hlavně se z toho nezbláznit, když jako já skočíš po hlavě do několika projektů najednou a ještě ideálně k tomu budeš dělat dalších 50 věcí. :)</li>
                <li>Kromě pomoci s projekty se na mě můžeš určitě spolehnout taky v těchto oblastech, kde už jsem dosáhl výsledků a hodně se toho naučil, alespoň v poměru k našemu věku: učení se cizích jazyků, stoicismus, freelancing, journaling, reálné zapojení se do politiky, mezilidské vztahy, sebevědomí a sebeláska, prostě mindset, vytváření komunity, vedení dospělých i dětí, zvláště jako mladý člověk, a zdravý životní styl.</li>
                <li>Ať už budeš potřebovat praktické know-how, nebo jen parťáka, se kterým budeš sdílet svou cestu, jsem tu pro tebe.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'jan-franek'})]"
              @click="changeAmigo('jan-franek')"
            >
              <span></span>
              {{activeAmigo === 'jan-franek' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/jan-herzig.jpg" alt="Fotografie Jan Herzig">
            <span class="amigo-name">Jan Herzig</span>
            <span class="orange amigo-hashtags">#projectmanagement, #eventmanagement, #věda, #vesmír</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'jan-herzig'}) ]">
              <ul>
                <li>Čuuus, jsem Honza a aktuálně jsem v maturitním ročníku na gymplu. Za první tři roky střední jsem stihnul celou řadu věcí - od vědeckých soutěží přes výzkum až po založení neziskovky, která pracuje s tisíci studentů po celém Česku.</li>
                <li>V mém srdci je už dlouhou dobu vesmír a věnuji se mu po všech možných stránkách. Umístil jsem se v mezinárodních astronomických soutěžích, rok pracoval na vlastním výzkumu a vyhrál s ním SOČku. Za klíčové však považuji především o vědě a vesmíru mluvit a makat na rozvoji zájmu o tyhle obory na celostátní úrovni - právě tak věřím, že dokážu nejpozitivněji ovlivnit svět kolem sebe.</li>
                <li>Jako mentor rád pomůžu s tím, jak napsat SOČku, vést velký tým, přemýšlet nad social impactem i tím, jak se z toho všeho nezbláznit a shledávat ve všech aktivitách to nejdůležitější - naplnění, trochu štěstí a přátele.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'jan-herzig'})]"
              @click="changeAmigo('jan-herzig')"
            >
              <span></span>
              {{activeAmigo === 'jan-herzig' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/ludmila-kozlova.jpg" alt="Fotografie Ludmila Kozlová">
            <span class="amigo-name">Ludmila Kozlová</span>
            <span class="orange amigo-hashtags">#enviro #politika #vzdelavani #sport #kontaktmaxxing #vlastnicesta #studiumvzahranici</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'ludmila-kozlova'}) ]">
              <ul>
                <li>Ahooj!:D Jsem Lidu a studuji na Leiden University College v Haagu obor Global Challenges.</li>
                <li>Už od základky se věnuji environmentálním tématům hlavně z humanitní perspektivy. Vytvořila jsem spoustu výukových programů zaměřených na uchopení role jednotlivce v systémové změny v rámci ochrany klimatu. Lektoruji na konferencích, pořádám tábory, reprezentuji na českých i mezinárodních fórech, účastním se politických simulací. Mám zkušenost i s politickou aktivitou v podobě otevřeného dopisu, který se dostal až na jednání s premiérem. Až do 3. ročníku gymplu jsem také dělala atletiku a stala se Mistryní ČR v chůzi. Okrajově se věnuji i (sportovní) žurnalistice.</li>
                <li>Moc ráda Tě nasměřuji k tvojí jedinečné cestě v jakémkoliv z těchto odvětví, propojím s kontakty na odborníky, vrstevníky nebo organizace. Můžeme se i pověnovat kombinování všeho dohromady a prioritizaci (taky s tím zápasím :D). Především Ti ale zkusím pomoct s objevením a spokojeným přijetím vlastního místa namísto porovnávání a pocitu nedostatečnosti. Mým cílem bude, abys věděl/a, kam míříš, realizoval/a v tom svou vášeň naplno, získal/a z toho co nejvíc do budoucna a zároveň byl/a v míru s aktuální fází.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'ludmila-kozlova'})]"
              @click="changeAmigo('ludmila-kozlova')"
            >
              <span></span>
              {{activeAmigo === 'ludmila-kozlova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/matej-sicner.jpg" alt="Fotografie Matěj Šicner">
            <span class="amigo-name">Matěj Šicner</span>
            <span class="orange amigo-hashtags">#astronomie #fyzika #SOČ #organizaceakcí</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'matej-sicner'}) ]">
              <ul>
                <li>Čau, já jsem Matěj a pokud tě baví věda a její popularizace, nebojíš se pohybu a hledáš, do čeho se na střední zapojit, tak si budeme rozumět!</li>
                <li>Na gymplu jsem propadl fyzice – hlavně astronomii, později i kvantovce, které jsem se věnoval i v rámci své SOČky. Od září studuji bioinformatiku na UK v Praze a a teď sbírám zkušenosti na stážích v zahraničí pro studium ve Vídni.</li>
                <li>Vždycky jsem chtěl dělat to, co mě opravdu baví, takže jsem školní lavici často vyměňoval za různé akce pro středoškoláky. Nakonec jsem je začal i sám organizovat – nejdřív AstroPi Hackathon, později Zvaž vědu!</li>
                <li>Práce s mladými mi dává smysl – podílím se na organizaci táborů, vedu kroužek na škole a věnuju se mentoringu. K tomu rád relaxuji při sportu, nejvíc mě baví horská turistika, cyklistika a běh.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'matej-sicner'})]"
              @click="changeAmigo('matej-sicner')"
            >
              <span></span>
              {{activeAmigo === 'matej-sicner' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/metodej-svoboda.png" alt="Fotografie Metoděj Svoboda">
            <span class="amigo-name">Metoděj Svoboda</span>
            <span class="orange amigo-hashtags">#projectmanagement #přednášení #idkhlavněchciabytocodělámmělosmysl</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'metodej-svoboda'}) ]">
              <ul>
                <li>Ahoooj, já jsem Metoděj🙋‍♂️</li>
                <li>Teď vedu organizaci ProStředoškoláky, která stojí za Cenou Středoškolák roku, ale začínal jsem dost jinak, na matematických olympiádách a na rozbourávání školského pořádku, jak to jen šlo, skrze řadu projektů, stavěním počítače z lidí, dvouletým vedením vzdělávacího kroužku atd.</li>
                <li>Až později, co jsem potkal komunitu aktivních studentů, jsem školu mentálně opustil. Reprezentoval jsem ČR na světové vědecké soutěži Regeneron ISEF, s dvouletou stáží na vliv neurotransmiterů na expresi IGF-2 a IGF2R. A s bráchou jsme taky dvakrát vyhráli největší soutěž v prezentování v ČR. A byl jsem taky v Misi Zero G. Občasně přednáším a moderuji, př. na TEDx Prague Youth nebo Díky, že můžem. Hraji na klasickou kytaru a věnuji se také skládání vlastní poezie a hudby.</li>
                <li>To hlavní ale je, že mě nikdy nepustila hrůza nad tím, že za dítětem, které si ve školce se svým random autíčkem myslí, že život je hra, najednou někdo přijde a je jako “wasup, dalších 13 let budeš každý den chodit do budovy, kde 8 hodin sedíš, a spolu se 30 dětmi přepisuješ do vlastního sešitu, co je na tabuli” dokud neztratí jakoukoli kreativitu odpovědnost a vlastní iniciativu. Ale stále myslím, že to jde změnit a jdu se o to snažit, sice cestou, která možná nevypadá, že k tomu vede😅.</li>
                <li>Je taky crazy, jak v nějaký moment začnou lidi věci hrotit, a tvářit se důležitě. Opačným přístupem nemyslím ledabylost a nezodpovědnost, ale že projekty co máme, jsou pískoviště, na kterém si můžeme hrát😎</li>
                <li>Pokud s tebou něco rezonovalo a třeba by tě zajímalo, jaké to organizovat v ProStředoškoláky, určitě si mě zaškrtni v přihlášce a budu se moc těšit, co spolu vymyslíme👋</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'metodej-svoboda'})]"
              @click="changeAmigo('metodej-svoboda')"
            >
              <span></span>
              {{activeAmigo === 'metodej-svoboda' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/michal-branda.jpg" alt="Fotografie Michal Branda">
            <span class="amigo-name">Michal Branda</span>
            <span class="orange amigo-hashtags">#podnikání #vzdělávání #robotika #veřejnévystupování</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'michal-branda'}) ]">
              <ul>
                <li>Hola!</li>
                <li>Střední školu jsem strávil různými soutěžemi a olympiádami (Samsung Solve for Tomorrow, Prezentiáda, Office Aréna aj.) a prošel jsem si také výběrovým rozvojovým programem Studentské Trenérské Centrum od Microsoftu.</li>
                <li>Od 17 let s povolením soudu rozvíjím svůj podnikatelský projekt Doučebnice, kde aktuálně přes 20 lektorů pomáhá dětem a studentům zlepšit si vztah k učení. Mimo oblast vzdělávání podnikám i v IT konzultacích, školení a salesu.</li>
                <li>Nyní studuju Kybernetiku a robotiku na ČVUT FEL. Miluju sport, hudbu, jazyky a cestování. Snažím se využívat čas naplno a řídím se mottem: "Don't be afraid to ask, the worst they say is no."</li>
                <li>Ať už chceš začít podnikat (i třeba před osmnáctinami), hledat soutěže, lépe si pamatovat věci a pracovat s časem nebo zlepšit veřejné vystupování, rád nasdílím své zkušenosti. Realizace je pak už ale na tobě!</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'michal-branda'})]"
              @click="changeAmigo('michal-branda')"
            >
              <span></span>
              {{activeAmigo === 'michal-branda' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/tadeas-frycak.jpg" alt="Fotografie Tadeáš Fryčák">
            <span class="amigo-name">Tadeáš Fryčák</span>
            <span class="orange amigo-hashtags">#informatika #věda #studiumvzahraničí #elektrotechnika</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'tadeas-frycak'}) ]">
              <ul>
                <li>Studuji Computer Science and Engineering na TU Delft v Nizozemsku a EPFL ve Švýcarsku, pokud zvažuješ studium technického oboru v zahraničí, určitě mě neváhej kontaktovat.</li>
                <li>Informatiku ale jen nestuduji, snažím se ji propojovat s jinými obory, nejčastěji pomocí Computer Vision, Data Science, Machine Learning a AI metod. Využití mých algoritmů nacházejí nejen biologická vědecko-výzkumná pracoviště, ale také i softwarové firmy jako například Seznam.cz, kde jsem absolvoval několikaletou stáž.</li>
                <li>Prošel jsem si programy pro středoškoláky, jako je Badatel či Newton na Univerzitě Palackého nebo Otevřená věda na Akademii věd ČR, což mi umožnilo vytvořit nejednu publikaci. Také jsem se úspěšně zúčastnil Středoškolské odborné činnosti, Soutěže v programování či Mistrovství ČR v radioelektrotechnice.</li>
                <li>Kontaktovat mě můžeš také v případě, že bys potřeboval poradit s programováním nebo elektrotechnikou. Mám zkušenosti s vývojem hardwaru od schématu přes PCB až po mechanický návrh finálního produktu (KiCad/EAGLE, SolidWorks, STM32/ESP32, 3D tisk).</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'tadeas-frycak'})]"
              @click="changeAmigo('tadeas-frycak')"
            >
              <span></span>
              {{activeAmigo === 'tadeas-frycak' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/tereza-tomaskova-doplneni.jpg" alt="Fotografie Tereza Tomášková">
            <span class="amigo-name">Tereza Tomášková</span>
            <span class="orange amigo-hashtags">#konzervatoř #medicína #flétna #výzkum</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'tereza-tomaskova'}) ]">
              <ul>
                <li>Ahoj! Jsem Terka a studuji všeobecné lékařství na 3. lékařské fakultě Univerzity Karlovy. Vedle medicíny se velmi intenzivně věnuji hře na příčnou flétnu. Několik let jsem souběžně s gymnáziem studovala také na Pražské konzervatoři (kde i nyní pokračuji). Absolvovala jsem stipendijní program MenART, řadu mezinárodních kurzů a masterclassů a podařilo se mi vyhrát i několik soutěží.</li>
                <li>Druhou velkou částí mého života je věda, především výzkum v oblasti onkologie. Během střední školy jsem absolvovala stáže na Ústavu živočišné fyziologie a genetiky a následně na Ústavu molekulární genetiky AV ČR, kde jsem se věnovala senescentním buňkám vznikajícím po protinádorové léčbě. Zkušenosti jsem později rozšířila také v laboratoři hematoonkologie a během kurzu Laboratory Skills v Liverpoolu. K tomu jsem se během středních škol samostatně připravovala na americké AP zkoušky a úspěšně složila AP Biology a AP Chemistry.</li>
                <li>Ráda si s Tebou popovídám vlastně o čemkoliv, co Tě napadne. Můžu Ti třeba přiblížit, jak funguje studium na konzervatoři (protože to není úplně typická škola) a jak je vůbec možné studovat dvě střední, podělit se o zkušenosti ze soutěží a zahraničních kurzů, poradit, jak podobné příležitosti hledat a financovat, nebo probrat, jak skloubit hudbu na co nejvyšší úrovni se školou a dalšími aktivitami.</li>
                <li>Ráda předám i zkušenosti s tím, jak se už na střední dostat k vědě, hledat stáže nebo se připravit na AP zkoušky (a k čemu to vůbec je).</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'tereza-tomaskova'})]"
              @click="changeAmigo('tereza-tomaskova')"
            >
              <span></span>
              {{activeAmigo === 'tereza-tomaskova' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
          <div class="flex-1 amigo">
            <img loading="lazy" class="amigo-img" src="~@/assets/amigo/tomas-cermak.png" alt="Fotografie Tomáš Čermák">
            <span class="amigo-name">Tomáš Čermák</span>
            <span class="orange amigo-hashtags">#věda #technologie #biomedicína #studentsképrojekty</span>
            <div v-bind:class="['amigo-more-info', ({active: activeAmigo === 'tomas-cermak'}) ]">
              <ul>
                <li>Už během střední školy se intenzivně věnoval vědě a technologiím. V laboratoři Ústavu fyziky plazmatu AV ČR vyvinul zařízení využívající studené plazma k čištění vody a inaktivaci mikroorganismů, za které získal Cenu Učené společnosti pro středoškoláky. Společně s Annou Podmanickou se s projektem Pura v roce 2025 stali prvními evropskými vítězi The Earth Prize.</li>
                <li>Vedle toho se podílel na vývoji neuronové sítě pro diagnostiku srdečních poruch z EKG, zvítězil v Energetické olympiádě a získal řadu dalších ocenění za své vědecké a studentské projekty. Dnes studuje biomedicínské inženýrství na Imperial College London a pokračuje v rozvoji vlastních projektů.</li>
                <li>Je také spoluzakladatelem studentského spolku STEM_HUB, který propojuje více než 250 mladých lidí se zájmem o STEM. Právě podpora aktivních studentů, propojování lidí a pomoc při proměně nápadů v konkrétní projekty jsou zkušenosti, které chce jako mentor předávat dál.</li>
              </ul>
              <div class="amigo-more-info-overlay"></div>
            </div>
            <div v-bind:class="['orange', 'amigo-info', ({active: activeAmigo === 'tomas-cermak'})]"
              @click="changeAmigo('tomas-cermak')"
            >
              <span></span>
              {{activeAmigo === 'tomas-cermak' ? 'Zobrazit méně' : 'Více o veteránovi'}}
            </div>
          </div>
        </div>
      </div>

      <div class="mentor-box">
        <div class="mentor-title">Přihlas se ještě dnes!</div>
        <a href="https://forms.gle/52BpSA6sDuuSPUPz9" target="_blank" class="mentor-button button">Přihlas se do programu</a>
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
        max-height: 3000px;
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
