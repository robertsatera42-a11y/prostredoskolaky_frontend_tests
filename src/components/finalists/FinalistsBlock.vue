<template>
  <section class="steps-container">
    <div class="content">
      <div class="intro-title">
        <h2>Soutěž {{ (year === 2017 || year === 2016 || year === 2015) ? 'Nejaktivnější středoškolák' : 'Středoškolák roku' }}</h2>
        <year-button :year="year" display="2021" @changeYear="changeYear"/>
        <year-button :year="year" display="2020" @changeYear="changeYear"/>
        <year-button :year="year" display="2019" @changeYear="changeYear"/>
        <year-button :year="year" display="2018" @changeYear="changeYear"/>
        <year-button :year="year" display="2017" @changeYear="changeYear"/>
        <year-button :year="year" display="2016" @changeYear="changeYear"/>
        <year-button :year="year" display="2015" @changeYear="changeYear"/>
      </div>

      <section v-if="year === 2021">
        <finalist name="Karolína letochová" place="1" image="1letochova.jpg" right="true">
           Karolína se několik let věnovala vědeckému výzkumu, a to na Ústavu fotoniky a elektroniky AV ČR, v centru BIOCEV a na katedře biofyziky UP. Své výsledky prezentovala mimo jiné jako jediná středoškolačka na Plant Biotechnology Conference. V současnosti vede pod Matfyzem korespondenční část semináře Výfuk a v následujících měsících bude knižně  vydána sbírka netradičních fyzikálních úloh, které je spoluautorkou. Rok a půl také strávila v České středoškolské unii, kde vedla tři pracovní skupiny a vystupovala v médiích a na konferencích, byla například keynote speakerem na britské B. Brooks Institute Conference věnované vzdělávací politice. Mimo to Karolína vyučovala sexuální výchovu ve vyloučených regionech, byla pozvána na výběrový program Yale Young Global Scholars a je také nositelkou bronzové a stříbrné Ceny vévody z Edinburghu. Nyní nastoupila na University College London, která je v jejím oboru Education Studies nejlepší školou na světě.
        </finalist>

        <finalist name="Filip Trhlík" place="2" image="2trhlik.jpg">
          Filip se svým týmem vyhrál programátorskou soutěž Robothon s umělou inteligencí, která analyzuje články, určuje jejich důvěryhodnost a odhaluje tak dezinformace. Tento projekt nyní pod názvem Verifee nadále rozvíjí s podporou společnosti O2, kde se tak Filip se svým týmem stali třemi nejmladšími vývojáři. Byl kapitánem robotického týmu svého gymnázia, se kterým se stal vicemistrem v Robosoutěži od FEL ČVUT. Také organizoval charitativní iniciativu Úsměvy seniorům, absolvoval stáž v Microsoftu i vzdělávací program Microsoft STC nebo vyučoval programování pod Stanford University. Momentálně nastupuje na University College London.
        </finalist>
        <finalist name="Nikola Eva Mádlová" place="3" image="3madlova.jpg" right="true">
          Nikča‌ ‌vyniká‌ ‌svými‌ ‌úspěchy‌ ‌v‌ ‌oblasti‌ ‌vědy.‌ ‌Získala‌ ‌skvělá‌ ‌umístění‌ ‌v‌ ‌prestižních‌ ‌mezinárodních‌ ‌soutěžích.‌ ‌Na‌ ‌International‌ ‌Conference‌ ‌of‌ ‌Young‌ ‌Scientists‌ ‌obsadila‌ první‌ ‌příčku‌ ‌a‌ ‌s‌ ‌maximálním‌ ‌počtem‌ ‌bodů‌ ‌se‌ ‌stala‌ ‌absolutní‌ ‌vítězkou.‌ ‌V‌ ‌celosvětové‌ ‌soutěži‌ ‌Beiijing‌ ‌Youth‌ ‌Science‌ ‌Creation‌ ‌uspěla‌ ‌se‌ ‌svým‌ ‌výzkumem‌ ‌zaměřeným‌ ‌na‌ ‌syntézu‌ ‌potenciálních‌ ‌antituberkulotik‌ ‌a‌ ‌vybojovala‌ ‌skvělé‌ ‌2.‌ ‌místo‌ ‌v‌ ‌kategorii‌ Biochemisty‌ ‌and‌ ‌Molecular‌ ‌Biology.‌ ‌V‌ ‌Česku‌ ‌excelovala‌ ‌třeba‌ ‌v‌ ‌soutěži‌ ‌SOČ‌ ‌a‌ ‌v‌ ‌Českých‌ ‌Hlavičkách.‌ ‌Nikča‌ ‌se‌ ‌také‌ ‌věnuje‌ ‌jazykům‌ ‌a‌ ‌mnoho‌ ‌úspěšně‌ ‌složených‌ ‌zkoušek‌ ‌potvrzuje‌ ‌její‌ ‌profesionální‌ ‌úroveň‌ ‌angličtiny.‌
        </finalist>
        <finalist name="Jakub Rychlý" place="4" image="4rychly.jpg">
          Jakub vybudoval perspektivní digitální studio Contentano, které pomáhá firmám s digitálním marketingem. Během prvních 8 měsíců firma dosáhla milionového obratu a tvoří ji kolektiv 25 zaměstnanců a již spolupracovala s klienty jako je SupportBox, TUkas, Arval nebo třeba Braník. Projekt Nekrachni, na kterém Jakub také pracuje, má za cíl zatočit s finanční negramotností a prostřednictvím aplikace vzdělává v této oblasti studenty základních a středních škol. Jakub je také nadšeným sportovcem, věnuje se Curlingu a mimo jiné je také politicky aktivní.
        </finalist>
        <finalist name="David Ryba" place="5" image="5ryba.jpg" right="true">
          Davidovou vášní je práce na činnostech, které kombinují kreativitu a technickou stránku věci. V roce 2020 zvítězil v Prezentiádě a nyní sepisuje metodiku prezentačních dovedností a designu prezentací pro učitele ZŠ a SŠ. Je zároveň členem organizačního týmu TEDxPragueED. Od 10 let se také chce stát architektem – minulé prázdniny se účastnil intenzivního vzdělávacího kempu FestAD a figuruje jako stážista ve firmě SOLAR SAVE, kde umístil více jak 40 000 solárních panelů do půdorysných nákresů střech budov. Dále se v rámci soutěže Amavet podílel na na vývoji ROUV, je součástí programu Samsung Tvoje Šance #futureskills a za poslední čtyři roky se několikrát umístil na republikových šampionátech v lehké atletice.
        </finalist>
        <finalist name="Otakar Kořínek" place="6" image="6korinek.jpg">
          Ota založil ve spolupráci s Institutem pro ekonomické vzdělávání spolek Econet, který organizuje ekonomická setkání a vede investiční kluby a analytický tým. Kluby společně analyzují společnosti a spravují investiční portfolia, zatímco tým publikuje články s ekonomicko-finanční tématikou.  Vedl jeden z týmů Econetu ve Wharton Investment Competition, kde se s vytvořenou investiční strategií dostal do finále a úspěšně obsadil třetí místo. V soutěži ČNB zvítězil se svým animovaným videem na téma, zda by ČR měla přijmout euro. Jako první se dvakrát umístil i v Ekonomické olympiádě a následně vyhrál i Mezinárodní ekonomickou olympiádu. Ve svém volném čase se věnuje ekonomickému výzkumu. Jeho práce analyzující dopady Stimulových šeků a COVID-19 na spotřebitelské výdaje vyhrála SOČ v oboru Ekonomika, obsadila 2. místo v České hlavičce a bude publikována v Journal of ASB Society. Ota také pracuje jako výzkumný stážista na CERGE-EI institutu a jeho Think Tank IDEA, kde pomáhá s vypracováním studie o finanční podpoře vysokoškolských studentů v ČR. Splnil také zlatou úroveň Mezinárodní ceny vévody z Edinburghu, při plnění úrovně mimo jiné také pomáhal na dětském oddělení v Thomayerově nemocnici v Praze.
        </finalist>
        <finalist name="Barbora Balášová" place="7" image="7balasova.jpg" right="true">
          Bára se odmalička věnuje hudbě a moderování. Účastnila se mnoha pěveckých soutěží - například Superstar 2018. V roce 2020 vydala své první autorské album Lovesick, aktuálně pracuje na albu Oldschool, které vyjde během letošního podzimu. V minulosti se jako freelancer věnovala správě sociálních sítí, konzultaci podcastingu nebo copywritingu. Působila na poli žurnalistiky - byla v redakci Rádia R, absolvovala stáž v CNN Prima NEWS nebo psala pro zpravodajské a lifestyle magazíny. Během pandemie začala pracovat na vlastních projektech jako jsou například pořady Selfhate a Talkie, kvůli kterým se přestěhovala z Valašského Meziříčí do Prahy. Z pozice copywriter se ve Startup Disrupt dostala až k vedení marketingového oddělení, kde půl roku pracovala na plný úvazek jako marketingová manažerka. Aktuálně se věnuje budování osobních značek podnikatelů ve společnosti AmazeThem na pozici account manažerky a jak říká, je nejšťastnější, co kdy byla.
        </finalist>
        <finalist name="Kateřina Roušarová" place="8" image="8rousarova.jpg">
          Katka je součástí národního debatního týmu ČR, v rámci kterého úspěšně reprezentuje naši zemi na mezinárodních debatních soutěžích. Dostala se například do finále prestižního turnaje Ispahan a získala ocenění “řečník turnaje” na Winter Holidays Open 2021. Mimo debatování Katka uspěla v mezinárodní vědecké soutěži “Physico a Chemico,” absolvovala vědeckou stáž na AV ČR, hraje beachvolejbal, doučuje děti a píše články o aktuálním dění ve světě.
        </finalist>
        <finalist name="Barbora Cihlová" place="9" image="9cihlova.jpg" right="true">
          Bára v 15 letech nastoupila na stáž do laboratoře na Ústavu organické chemie a biochemie AV, kde se učila metodám od genového klonování až k rentgenové krystalografii. Zanedlouho připravovala virové proteiny pro účely celé skupiny a nakonec se stala juniorskou výzkumnou asistentkou. Mohla díky tomu realizovat vlastní výzkum enzymu z viru klíšťové encefalitidy. V roce 2020 spoluvyvinula vysokokapacitní metodu pro testování antivirotik. Bára se tak stala autorkou článku v mezinárodním časopise Molecules. Bára nezahálela ani v časech pandemie, kdy doučovala žáky. Dále si neustále rozšiřovala obzory prostřednictvím odborné literatury, prestižních kurzů a stáží. Aktuálně Bára začíná studovat na Oxfordské univerzitě.
        </finalist>
        <finalist name="Maria Šimůnková" place="10" image="10maria.jpg">
          Maria působí v oblasti IT, kde se věnuje umělé inteligenci a jejímu využití. Vytvořila chatbota pro dětskou lékařku a s tímto projektem se úspěšně účastnila soutěže SOČ a zvítězila v soutěži Helle Köpfe. Vyvíjela i chatbota pro zákaznickou podporu firmy Bakaláři sw. V rámci roční stáže na Ústavu teorie informace a automatizace AV ČR se podílela na vývoji nástroje pro zpracování obrazu pomocí neuronových sítích. Je aktivní také v oblasti vzdělávání: podílela se na lokalizaci kurzu programování nebo vytváří vzdělávací kurz pro děti ve spolupráci s T-Mobile. Během pandemie pomáhala, jak s tiskem ochranných štítů pro lékaře, tak i přímo v očkovacím centru. Nyní věnuje nejvíce času neziskovému vzdělávacímu projektu Nekrachni, který spoluzaložila a vede. Svými aktivitami zaujala i média a o svých projektech přednášela na několika konferencích, včetně mezinárodních.
        </finalist>
        <other-finalist num="25" :firstRow="['Adam Karas','Adam Schinzel','Eliška Gärtnerová','Erik Stoklasa ','Filip Kocián','Filip Špinka','Georgia Hejduková','Jan Růžička']" :secondRow="['Jana Vítová','Jonáš Vala', 'Kateřina Marešová', 'Miloslava Mačková', 'Ondřej Sukač', 'Patrik Vácal', 'Štěpán Hartl']" title="Středoškolák roku 2021"/>
      </section>

      <section v-if="year === 2020">
        <finalist name="Hana Bernhardová" place="1" image="1bernhardova.jpg" right="true">
           Hana se od 15 let zapojila do několika výzkumů, nejprve vyzkoušela výzkum fyziologie rostlin, poté mozkové tkáně a nakonec začala pracovat na <b>výzkumu struktur proteinů</b>, kvůli kterému se přestěhovala do Brna. S jejich výsledky vyhrála spoustu soutěží např. <b>SOČ</b>, byla nominována na mezinárodní <b>soutěž EUCYS a ISEF</b>. V rámci výzkumu absolvovala návštěvu v Paul Scherrer, švýcarském institutu s urychlovačem částic. Za svou práci posbírala řadu dalších ocenění. Je <b>laureátkou ceny Nadačního fondu J. Heyrovského či ceny Učené společnosti ČR</b>. Na škole vyučovala studenty v <b>biologickém kroužku</b>. Kromě toho se zapojuje do dobrovolnických projektů. Vypomáhá např. v azylové domě a díky svým aktivitám získala všechny <b>tři úrovně Mezinárodní ceny vévody z Edinburghu</b>. V letošním roce byla přijata na <b>Oxford</b>, kde aktuálně studuje.
        </finalist>

        <finalist name="Bertram Škařupa" place="2" image="2skarupa.jpg">
          Před 4 lety se rozhodl, že se naučí sám programovat. Díky těmto skills vytvořil např. <b>kavární systém</b>, ulehčující práci zaměstnancům či rozšířil <b>školní informační systém Managebac Grade</b>, který se využívá ve více než 70 zemích po celém světě. Získal i <b>stáž v Googlu</b> v oddělení marketingu a jedním z jeho nejúspěšnějších projektů, s více než 1 milionem návštěv, je aktuálně <b>webová stránka c19model.com</b>, simulující šíření koronaviru. Ve vedoucí pozici týmu robotiky se také spolupodílel na výhře <b>Innovation Award ve Španělsku</b>. Za své aktivity získal ocenění <b>2. úrovně v rámci Duke of Edinburgh Award</b>. Nyní se Bertram chystá ke skládání mezinárodní maturity (IB).
        </finalist>
        <finalist name="Václav Pavlíček" place="3" image="3pavlicek.jpg" right="true">
          Václav naprogramoval software pro satelit, se kterým se zúčastnil mezinárodního finále <b>soutěže CanSat</b>, a se svým týmem získal <b>Best Outreach Award</b>. Díky tomuto úspěchu poté získal <b>stáž na Akademii věd</b>. S kamarádem se zúčastnil soutěže <b>Moon Camp Challenge</b> s modelem měsíční základny. S týmem Pardubice Pi se stal finalistou <b>soutěže Astro Pi</b>, v rámci které <b>kód jeho týmu běžel ve vesmíru na ISS</b>. Mimo to pomáhal s organizací IT akcí jako mDevCamp. Pracoval jako stážista ve firmách <b>Commity, Versino či Avast</b>. O práznidninách organizuje tábory pro děti pod záštitou SHM Krucemburk. Nyní studuje na <b>Imperial College London</b>.
        </finalist>
        <finalist name="Ondřej Pelánek" place="4" image="4pelanek.jpg">
          Je zapáleným biologem, fotografem a cestovatelem. Reprezentoval ČR v roce 2018 na týmové <b>celoevropské vědecké soutěži EUSO (se ziskem stříbrné medaile)</b> a dvakrát v letech 2019 a 2020 na <b>Mezinárodní biologické olympiádě (bronzová a stříbrná medaile)</b>. Dva týdny strávil studiem na <b>Princeton University</b> díky stipendiu AFCSLS a CTM, úspěšně také absolvoval CTM Online kurz Ap Biology. Dva roky se věnoval ornitologickému výzkumu a s výslednou prací vyhrál <b>1. místo v soutěži SOČ</b>. Jeho fotografie divoké přírody se pravidelně umisťují v soutěžích, největším úspěchem je hlavní cena v prestižní <b>soutěži Young Wildlife Photographer of the Year 2015</b>. Svou lásku k biologii a nadšení z vědeckého poznání rád předává mladším.
        </finalist>
        <finalist name="Petra Plachá" place="5" image="5petra.jpg" right="true">
          Petra se vypracovala na hlavní koordinátorku projektu <b>Prezentiády</b>, mimo to je však ještě ve vedení <b>soutěže pIšQworky</b>. Kromě toho organizovala akce jako <b>Plzeňský Barcamp či DevBattle</b> v rámci organizace TechHeaven. Spoluorganizovala také <b>první Plzeňskou přednáškovou noc a Konferenci českých nadějí II</b> v Brně, které se účastnilo přes 400 lidí. Aktivně se vzdělává v oblasti managementu a marketingu. Absolvovala <b>13-týdenní program od Digitálních architektů</b> či workshopy od <b>Vodafonu</b>. Aktuálně je součástí programu <b>Samsung Tvoje šance #futureskills</b>, kde již absolvovala přes 100 aktivit. Petra získala od primátora Plzně <b>ocenění Anděl 2019</b>.
        </finalist>
        <finalist name="Matyáš Boháček" place="6" image="6bohacek.jpg">
          Vytvořil <b>mobilní aplikaci newskit</b>, sloužící k přístupu ke zprávám z důvěryhodných zdrojů. Absolvoval <b>stáže v Deloitte a Broadcom</b>. V rámci několika projektů a různých stáží se věnuje výzkumu strojového učení, přirozeného zpracování jazyka a počítačového vidění. Vyvíjí webové stránky pro projekt <b>V pasti populismu, hru What’s the doodle, či aplikaci iHoubař</b>. Získal stipendium na <b>WWDC19 od Apple</b> a strávil tak týden v San Jose. Mimo IT svět se zajímá i o politiku a loni se zúčastnil <b>simulace Evropského parlamentu KeplerEP</b>.
        </finalist>
        <finalist name="Jakub Zegzulka" place="7" image="7zegzulka.jpg" right="true">
          Sám se naučil produktový design a postupně se dostal již k více než <b>25 zakázkám</b> pro společnosti jako <b>XTND, Undout nebo americké Studio Godsey</b>. Své dovednosti si zlepšoval i na stážích například v <b>Avastu, Avocode a Mavvo</b>. Aktivně se účastní Startup weekendů a podobných akcí, z nichž si odvezl spoustu ocenění. Buduje si rozsáhlou komunitu sledujících na LinkedInu, kde má nyní přes 5500 sledujících, ale i na dalších platfromách. Byl osloven organizátory <b>LinkedIn Summitu</b>, aby vystoupil jako zástupce za Generaci Z. Jako Dobrovolník se zapojuje i do organizace akcí, např. Startup Weekendů. Spoluzaložil <b>projekt StartRemote.net</b>.
        </finalist>
        <finalist name="Jaroslav Hradil" place="8" image="8hradil.jpg">
          Založil start-up <b>Boxee</b> s cílem zlepšit doručování zásilek v Česku a s projektem se umístil na <b>2. místě na Startup Weekendu i v soutěži Startup Klub</b>, uspěl také ve <b>finále Soutěž&Podnikej</b>. Absolvoval <b>stáž v Microsoftu i vzdělávací program Microsoft STC</b>. Vytvořil projekt <b>Surfuj bezpečně</b> a byl vybrán, aby ho prezentoval v Kalifornii na globálním <b>Google WR summitu</b>. Jako dobrovolník pomáhal na Future Port Prague, pravidelně se účastní matematických soutěží. Založil společnost <b>DigitalWizard, s.r.o.</b> a podniká v online marketingu.
        </finalist>
        <finalist name="Samuel Friedlaender" place="9" image="9Friedlaender.jpg" right="true">
          Aktivně se zajímá o ekonomii. Již třetím rokem se účastní <b>AP kurzů CTM Online</b>. S projektem "gender gap" <b>zvítězil v soutěži CERGE-EI Projects in Applied Economics for Talented Students</b>. Byl vybrán mezi 8 studentů z Česka a Slovenska v rámci <b>programu Experience Cambridge</b>. V roce 2016 reprezentoval Česko na Modelu Evropského Parlamentu v Kodani. Ve své <b>vítězné eseji v soutěži Bronislavy Müllerové</b> se zabýval analýzou emocí Barucha Spinozi a jejich vlivem na svobodu projevu. Působí jako dobrovolný instruktor v organizaci Země-Nezemě. Založil také vlastní fotbalový tým a ve volném čase se věnuje hře na bicí.
        </finalist>
        <finalist name="Maria Šimůnková" place="10" image="10maria.jpg">
          Vytvořila chatbota pro dětskou lékařku a s tímto projektem se úspěšně účastnila <b>soutěže SOČ, zvítězila v soutěži Helle Köpfe</b>. Chatbota vyvíjela i jako zákaznickou podporu pro <b>Bakaláře</b>. Zúčastnila se <b>Bootcampu o AI v Athénách</b> od Microsoftu. Spolupracovala na lokalizaci kurzu programování pro děti. Se svými projekty byla pozvána do médií a na několik konferencí, včetně mezinárodních, jako přednášející. Aktuálně <b>stážuje v rámci Otevřené vědy na AV ČR</b>, kde se věnuje využití umělé inteligence ve zpracování mikroskopických obrazových dat. Díky svým úspěchům byla přijata mezi <b>členy Kairos</b>.
        </finalist>
        <other-finalist num="25" :firstRow="['Adam Štrunc', 'Adéla Krylová', 'David Stančík','Eliška Gärtnerová', 'František Mühlfeit', 'Georgia Hejduková', 'Jakub Rychlý', 'Jan Sobotka']" :secondRow="['Kryštof  Mitka', 'Martina Malá', 'Meng Xuan Zou', 'Michal Bravanský', 'Petr Horký', 'Viktor Materna', 'Vítězslav Kříž']" title="Středoškolák roku 2020"/>
      </section>

      <section v-if="year === 2019">
        <finalist name="Maxim Kozlov" place="1" image="kozlov.png" right="true">
          Maxim je podnikavý nadšenec. Startup Weekend v Olomouci a Praze ovládl s projekty
          <b>TRIKO the life-saving t-shirt</b> (tričko, které monitoruje činnost srdce seniorů) a
          <b>Toilet Pay</b> (Facebookový chatbot pro nalezení veřejných toalet kdykoliv, kdekoliv na světě). Inspiroval se Zuckerbergovou výzvou a vytvořil originální novodobý dřevěný budík UNDOUT Sleep Box. Na svůj kanál @themaxkozlov natáčí inspirativní rozhovory se špičkami ve svých oborech z celého světa. S kamarádem se pustil do podcastu StartupKidz, kterým chtějí motivovat mladé lidi z ČR a Slovenska. Při Marketing Festivalu působil jako manažer speakerů. Absolvoval Digisemestr, což je prestižní studium online marketingu a dnes se podílí na sestavě a organizaci kurzů. Max je také produkčním v technickém startupu iflix, kde organizuje sérii
          <b>Tech Talks</b>. Dříve byl aktivním parkouristou a tanečníkem breakdance, a mohl se tak objevit i v některých videoklipech.
        </finalist>

        <finalist name="Adam Skokan" place="2" image="skokan.png">
          Adam je hlavním organizátorem
          <b>Czech VR Festu</b>, který propojuje
          firmy, studenty, odborníky a veřejnost a informuje o možnostech
          technologií virtuální reality. Je event manažerem a správcem
          technologií v
          <b>Asociaci virtuální a rozšířené reality</b>. Je členem
          <b>European Apprenticies Network</b>, v rámci které se jednou měsíčně
          schází a prezentuje své výstupy v různých městech Evropy a
          společně se snaží změnit například výuku na učňovských oborech.
          V posledních dnech nejvíce pracuje na novém projektu
          <b>
            ve
            spolupráci s nemocnicí Motol
          </b>, jehož cílem je
          <b>
            integrovat hlasové
            asistenty do nemocniční péče pro ochrnuté pacienty.
          </b>
        </finalist>
        <finalist name="Hai Long Tran" place="3" image="hong.png" right="true">
          Long společně se spolužáky z Izraele přišel s technologickým
          <b>start-upem Waterpoint</b>, který umožňuje produkovat
          <b>
            vodu ze
            vzduchu
          </b> a pomáhá tak v oblastech postižených nedostatkem
          vody. Projekt zvítězil na kalifornském
          <b>Founders Bootcampu</b>. Long
          v Izraeli organizoval studentskou
          <b>pomoc Eritrijským uprchlíkům</b>
          skrz kooperaci s neziskovými organizacemi, věnoval se
          dobrovolnictví se znevýhodněnými dětmi a mladými lidmi. Věnuje
          se také debatování, reprezentoval školu na
          <b>
            Tournament of
            Champions
          </b>, který byl hostován
          <b>Yaleovou univerzitou</b>. Rád si
          zahraje fotbal.
        </finalist>
        <finalist name="Adam Křivka" place="4" image="krivka.png">
          Adam se skrz svůj
          <b>zájem o vesmír a jadernou fyziku</b> dostal na stáž
          v
          <b>CERNu</b>. Na
          <b>Astronomickém ústavu UK</b> tento rok studoval
          skupinu planetek a se svojí prací se podíval na prestižní soutěž
          <b>Intel ISEF v americkém Phoenixu</b>. Aktivně se připravuje na
          studium v Americe – v testech SAT získal dostatečný počet bodů
          <b>pro studium na MIT</b> a má za sebou spoustu kurzů a vzdělávacích
          programů pořádaných americkými univerzitami. Jeho největší
          radostí je ale
          <b>práce s dětmi</b> – hlavně v matematickém kroužku, ve
          skautu a v karate.
          <b>Ve stylu Stohokan</b> se letos dokonce zúčastní
          mistrovství světa.
        </finalist>
        <finalist name="Ondřej Pelánek" place="5" image="pelanek.png" right="true">
          Ondra je
          <b>nadšeným biologem</b>. Píše články o ochraně přírody, jako
          jeden ze dvou biologů v českém týmu se účastnil
          <b>
            European Union
            Science Olympiad 2018
          </b>, kde změřil síly s mladými vědecky
          zaměřenými středoškoláky z celé Evropy a se svým týmem
          <b>
            získal
            stříbrnou medaili
          </b>. Absolvoval odborný kurz
          <b>
            CTY Summer Program
            na Princeton University
          </b>, vede přírodovědný kroužek pro děti a
          jeho fotografie přírody sklízí úspěch na mezinárodních soutěžích,
          za zmínku určitě stojí úspěch v soutěži
          <b>
            Wildlife Fotographer of the
            Year
          </b>. V létě bude
          <b>
            reprezentovat Česko na mezinárodní biologické
            olympiádě
          </b> a ve volném čase se věnuje hraní stolního tenisu.
        </finalist>
        <finalist name="Kateřina Kudličková" place="6" image="kudlickova.png">
          Kačka se už od svých 16 let
          <b>věnuje výzkumu leukemie</b>, konkrétně
          dvou do dřívějška neznámých proteinů. Na svém kontě má
          spoustu úspěchů v českých i mezinárodních soutěžích. Na soutěži
          <b>BYSCC v Pekingu obdržela ocenění First Award</b>, u nás např. cenu
          <b>České hlavičky</b>. V červnu organizovala
          <b>Konferenci českých nadějí</b>,
          na které přednášelo 33 inspirativních osobností z různých oblastí.
          Kačka také
          <b>vyučuje děti</b> v rámci projektu
          <b>Bioskop</b> a s neziskovkou,
          kterou založila spolu s dalšími aktivními studenty, přednášejí na
          školách. Dříve byla také
          <b>kapitánkou volejbalového týmu</b> v první
          lize.
        </finalist>
        <finalist name="Jonáš Kůra" place="7" image="kura.png" right="true">
          Jonáš se od mala
          <b>věnuje plavání a florbalu</b>. Strávil
          <b>
            rok ve
            Švédsku
          </b>, kde hrál
          <b>nejvyšší juniorskou florbalovou soutěž</b>. Přišel
          s florbalovým projektem
          <b>Peaches</b>, který sdružuje
          <b>
            talentované
            florbalisty
          </b> a dává jim možnost se dále zlepšovat a vzájemně se
          potkávat i po reprezentační kariéře.
          <b>
            Pořádá pro hráčskou
            komunitu kempy
          </b>, které bývají zaplněny okamžitě po vypsání
          registrace, akademie a další aktivity. Peaches plánuje
          spolupracovat s Nenech to být a podpořit
          <b>boj proti šikaně</b>. Jonáš
          má také svůj brand – vyrábí originální dřevěné batohy –
          <b>Woodbagy</b>, které vzbudily pozornost a sklidily úspěch na
          startupových soutěžích.
        </finalist>
        <finalist name="Jiří Štěpánek" place="8" image="stepanek.png">
          Jirka založil agenturu
          <b>PalmMedia</b>, která se zabývá distribucí
          obsahu přes sociální sítě s
          <b>důrazem na podcasty</b>. Jeho služby
          využili i významní zahraniční zákazníci a bude chtít svoji firmu
          nadále rozvíjet. Jeden rok strávil studiem na
          <b>střední v Americe</b>,
          kde také složil americkou maturitu. Založil
          <b>
            zpravodajský server
            Žbluňk
          </b>, který se snaží formou krátkých příspěvků poutavě
          informovat mladé o nejnovějších tuzemských i zahraničních
          aktualitách na Instagramu. Má vlastní
          <b>podcast Audiožurnál</b>, ve
          kterém atraktivně rozebírá řadu konspiračních teorií, filozofických
          témat nebo osobní rozvoj a můžete ho najít v žebříčku na iTunes
          ve své kategorii v
          <b>TOP 10 v ČR.</b>
        </finalist>
        <finalist name="Adam Štrunc" place="9" image="strunc.png" right="true">
          Adam založil
          <b>startup Stubchaser</b> – čistí ulice od nedopalků tím, že
          nabízí kuřákům odhození nedopalku zábavnou formou. Vyrábí
          terče pro kuřáky. Rozjel několik menších projektů, byl
          <b>
            předsedou
            školního parlamentu
          </b>, pořádal studentské akce, mimo jiné i
          studentskou párty, z niž výdělek šel na charitu. Mentoruje
          studenty v podnikání a seberozvoji a napsal knihu
          <b>
            Podnikání z
            lavice
          </b>, kterou bude brzy vydávat Albatros. Dále přednáší na
          středních školách s
          <b>LeapMakers</b>, aby podpořil podnikavost u
          studentů. Adam také pracuje na
          <b>aplikaci Green Shaded</b>, která
          <b>motivuje lidi k ekologické aktivitě</b>. V rámci projektu
          <b>Pošli to dál</b>
          šířil do okolí citáty, které vedou k zamyšlení, získání nadhledu.
          Jako dobrovolník pomáhá při organizaci závodů Jizerská 50.
          Poslední věc, na které pracuje, je startup vyrábějící speciální
          dřevěné fotbálky.
        </finalist>
        <finalist name="Václav Jan Stezka" place="10" image="stezka.png">
          Vašek má
          <b>
            jeden z nejsledovanějších herních youtube kanálů
            v ČR
          </b>. Na instagramovém profilu má
          <b>23 000 followers</b> a jeho videa
          mají přes
          <b>17 milionů zhlédnutí</b>. Umí skvěle pracovat
          s Photoshopem a programem Sony Vegas. Spolu s kamarády
          pracuje na značce oblečení
          <b>Butono</b>, která kreativně využívá
          knoflíků, jakožto hlavního vzoru k dekoraci různých triček, košilí
          apod. Aktivně se také věnuje bojovému umění – konkrétně
          <b>
            karate
            a 3x byl absolutním vítězem soutěže NARAMA SEITO
          </b>. V poslední
          době dává před závody přednost trénování dětí. Je vítězem
          <b>Startup Weekend Prague</b>, kde se svým týmem prezentoval
          <b>projekt propojující influencery a blogery</b>. Zkusil si práci
          v McDonalds, dobrovolnictví i zahraniční projekt v oblasti
          spotřebních návyků.
        </finalist>
        <other-finalist num="25" :firstRow="['Georgia Hejduk', 'Christine Havranová', 'Jakub Rychlý', 'Jakub Zemek', 'Jana Tomaštíková', 'Lenka Švidrnochová', 'Libor Havlík', 'Lukáš Zrzavý']" :secondRow="['Michaela Lucie Hanzlíková', 'Michal Vašíček', 'Ondrej Gonzor', 'Stanislav Kursa', 'Tadeáš Kapic', 'Václav Pavlíček', 'Veronika Slonková']" title="Středoškolák roku 2019"/>
      </section>

      <section v-else-if="year === 2018">
        <finalist name="Matěj Prokop" place="1" image="1prokop.png" right="true">
          Matěj stojí za projektem Athenaeum, kde vysokoškolští profesoři představují  středoškolákům své obory. S tímto projektem vyhrál soutěž Hledá se LEADr. 2018. Založil firmu TutoryApp, kde přes appku propojuje studenty, kteří hledají doučování, s jejich učiteli. Je jeden z nejmladších stážistů Americké ambasády v Praze, má pod sebou další stážisty, se kterými rok pracuje na vzdělávacím programu. Obdržel ocenění Nejúspěšnější student Moravskoslezského kraje. Na Pražském studentském summitu byl vyhlášen nejlepším nováčkem v orgánu UNESCO a byl člen nejlepší delegace. 3. místo v celostatním kole EUROPASECURA, 4. místo v celostátním kole Olympiády lidských práv. V 17ti letech jako jeden z nejmladších získal certifikát C1 v právnické angličtině.
        </finalist>

        <finalist name="Petr Štěpánek" place="2" image="2prochazka.png">
          Spoluzaložil Boardmobile Electric Longboards, kde vyvíjí elektrické longboardy. První model prodávají např. na Alze a Amazonu. Výrobu druhého modelu vyjednávají v Číně, prodávat ho budou ve stovkách kusů. Postavil 3D tiskárnu unikátní svou energetickou úsporností a chystá se ji prodávat. Jeho talentu si všimli ve Forbes Next 2017, v České televizi a na Seznamu. Ve svém medicínském výzkumu pitval lidskou ruku, aby následně mohl postavit robotickou. Pomocí 3D tisku připravuje náhrady lebečních kostí.
        </finalist>
        <finalist name="Veronika Zelinková" place="3" image="3zelinkova.png" right="true">
          Veronika na pozici stážisty či vývojáře prošla několika technologickými firmami, například IBM a Alzou, podílela se na první verzi aplikace pro start-up SpaceFlow. Účastní se Microsoft STC, úspěšně se se svými aplikacemi umisťuje na hackathonech. Vyučuje programování v Domě dětí a mládeže. S více než 30 000 followery na Instagramu je asi nejsledovanějším českým programátorem.
        </finalist>
        <finalist name="Pavel Ihm" place="4" image="4ihm.png">
          Pavel připravil největší český e-shop na prodej brýlí pro virtuální realitu Google Cardboard. Je zodpovědný za softwarovou stránku oceňovaného projektu Nenech to být!, který bojuje proti šikaně na více než 1000 školách v ČR a projektu FaceUp, který chce se stejným nápadem prorazit do USA. S vlastním vývojářským studiem Wapps.cz vyvinul např. hru 5 Sekund, dříve druhou nejstahovanější na Google Play (po Pokemon Go).
        </finalist>
        <finalist name="Filip Novotný" place="5" image="5novotny.png" right="true">
          Filip druhým rokem pracuje v Astronomickém ústavu AV ČR, kde například vyvíjel software pro klasifikaci proměnných hvězd. Publikuje články v impaktovaných zahraničních časopisech a získal již řadu ocenění. Byl vybrán na stáž do Evropského centra pro jaderný výzkum – CERN. Podílí se na softwaru pro studentský satelit Pilsen Cube, který poletí do vesmíru v roce 2019.
        </finalist>
        <finalist name="Oliver Laryea" place="6" image="6laryea.png">
          Pracoval jako stážista projektu Otevřená věda na Akademii věd.
               Byl vybrán na několikatýdenní stáž do
               švýcarského Cernu. Věnuje se i podnikání a stíhá dobrovolnickou
               činnost jako doučovatel dětí ze sociálně znevýhodněných rodin.
        </finalist>
        <finalist name="Eva Kuttichová" place="7" image="7kuttichova.png" right="true">
          Momentálně pracuje v digitální agentuře STRV, kde vytváří
                digitální ilustrace. V rámci výzvy #jetovtobě od Vodafonu tvořila ilustrace, animace a
                tiskové grafiky. Několik let dělá design webových stránek jako freelancer.
        </finalist>
        <finalist name="Erik Tihelka" place="8" image="8tihelka.png">
          Založil online recenzovaný časopis Ethnoentomology. Obhospodařuje 30
                včelstev a prezentuje problematiku nemoci hmyzu na konferencích. Doposud
                publikoval 13 entomologických studií.
                Svým studiem popsal tři do té doby neobjevené druhy.
        </finalist>
        <finalist name="Kateřina Adámková" place="9" image="9adamkova.png" right="true">
          Je mnohonásobnou vítězkou celostátní České debatní ligy a Anglické debatní ligy.
                Letos byla vyhlášena druhým nejlepším řečníkem. Významně napomohla českému týmu k umístěním v celosvětových soutěžích.
                Je v představenstvu České středoškolské unie.
        </finalist>
        <finalist name="Ondřej Gonzor" place="10" image="10gonzor.png">
          Je autorem mobilní aplikace Pochopim.to,
                Naprogramoval aplikaci Typo, která učí čínšťinu či
                hebrejštinu zábavnou a kreativní cestou. Dále si dělá letecký kurz a pravidelně se účastní
                matematicko-fyzikálních Korespondenčních seminářů.
        </finalist>
        <other-finalist num="25" :firstRow="['Jiří Bartušek', 'Ondřej Buček', 'David Fiedler', 'Barbora Hálková', 'Ngoc Hung Hoang', 'Martin Kadlec',
    'Martin Kašperlík', 'Karolína Letochová']" :secondRow="['Vanessa Marková', 'Sylva Neradová', 'Albert Oliva', 'Jakub Rychlý', 'Michal Starý',
    'Kateřina Sulková', 'Pavel Štěpánek']" title="Středoškolák roku 2018"/>
      </section>

      <section v-else-if="year === 2017">
        <finalist name="Jan Sláma" place="1" image="slama.png" right="true">
          Od 12 let se věnuje podnikání, je soudně zplnoletněn, rozjel populární vzdělávací aplikaci Taháky do
   kapsy, mobilní kuchařku Recepty Ládi Hrušky a další. Spoluzaložil a s týmem prodal dárkového asistenta Presentlist,
   psal pro několik magazínu v čele s ábíčkem, pomáhal s marketingem na BVV i Janu Mühlfeitovi, vybudoval a prodal
   nejpopulárnější český e-shop s Google Cardboard, stojí za úspěšným neziskovým projektem Nenech to být, který získal
   záštitu MŠMT, vyhrál Gratias Tibi cenu O2 a rozpoutal největší mediální debatu na téma "šikana" od tragédie v Třebešíně.
   Nyní založil a vede startup FaceUp.com, pro který získal investici od Jiřího Hlavenky a s v JICu sídlícím týmem chtějí
   expandovat do USA. Občas zajde na gympl, na ryby či zapřednášet.
        </finalist>

        <finalist name="Jiří Diblík" place="2" image="diblik.png">
          Je druhý Čech který se nechal soudně zplnoletnit a podniká od 12 let. Založil sportovní startup ToGo a kreativní
   agenturu Dibel.cz. Vytvořil stovky internetových stránek, designů, marketingových kampaní a kreativního obsahu pro klienty z
   celého světa a mimo jiné i pro velké klienty jako MAFRA, Euronics či UPOL. Vytvořil nejstahovanější aplikaci na AppStore a GooglePlay.
   Účastnil se stáže v centrále Google v San Franciscu. Vytvořil desítky fungujících robotů a v mezinárodních robotických soutěžích se
   umišťuje na předních příčkách. Naposledy ČR reprezentoval v Kolumbii, Novém Mexiku, Francii či Rusku. Podporuje benefičního festival
   Hudba pomáhá, který vybral více než 1,5 milionu korun pro handicapované děti, 3 roky organizoval  studentský festival GymJam. Dále
   získal grant od firmy Hannah na svůj cestovatelský projekt. Dříve se věnoval vrcholově tenisu, dnes se vybíjí  u kickboxu  a je
   ohromný milovník všech sportů.
        </finalist>
        <finalist name="Daniel Bulatkin" place="3" image="bulatkin.png" right="true">
          Dvakrát získal 3. místo v soutěži Pianista roku, které se zúčastnil jako vůbec nejmladší interpret v historii.
   Jeho obrovský hudební talent dokládá i fakt, že se za pouhé 3 roky dokázal dostat na úroveň profesionálního jazzového pianisty.
   Natočil EP, kde hráli i hosté z USA. Jeho nová kapela v současnosti koncertuje v prestižních klubech a na festivalech po celé ČR.
   Měl možnost vystoupit s předními českými i zahraničními hudebníky (s Martinou Bárta, Jiřím Suchým a dalšími). Organizoval turné se
   saxofonistou Olegem Kireyevem dvakrát nominovaným na Grammy, které vedlo k dlouhodobé spolupráci. Díky společnosti Petrof vystoupil
   na festivalu Rock for People a obdržel také nabídku vystoupení v Číně. Mluví rusky, anglicky (na úrovni C2), německy a francouzsky.
        </finalist>
        <finalist name="Filip Novotný" place="4" image="5novotny.png">
          Při Astronomickém ústavu Akademie věd sestavuje umělou inteligenci, která na snímcích dalekohledu hledá
   proměnné hvězdy a jejich parametry. Výsledky této práce prezentoval jako jedinný středoškolák na mezinárodní konferenci
   IBWS. Reprezentoval Českou republiku na mezinárodním semifinále soutěže Odysseus Space Contest s projektem Počítačová
   simulace terraformace Marsu. Kromě toho získal ocenění za nejoriginálnější projekt. Účastnil se soutěže
   "Expedice na Mars", v rámci které sepisoval projekt o sbírání a analýze vzorků na Marsu. Vyhrál prestižní stipedium CTY
   Summer na třítýdenní program na univerzitě v Princetonu v USA. Spolu se svým týmem porazili více než 500 týmu z
   České republiky a Slovenska v matematicko-fyzikální soutěži Náboj Junior.
        </finalist>
        <finalist name="Ondřej Belfín" place="5" image="belfin.png" right="true">
          Více než 5 let ve spolupráci s odborníky nejen z českých univerzit zkoumá hlasovou aktivitu a variabilitu
   lejska malého. Na tento projekt získal v roce 2014 grant z Národního programu na ochranu biodiverzity a vyhrál s ním
   zlaté ocenění ve středoškolské odborné činnosti v Pekingu v Číně. V létě pojede na výběrové mezinárodní odborné
   soustředění ve Švýcarsku. Dále na celostátních vědeckých konferencích získal 1. a 3. cenu za nejlepší studentskou přednášku,
   a to i přesto, že byl jediný středoškolák v konkurenci bakalářských, magisterských i doktorantských prací.
   Třetím rokem vede přírodovědný kroužek pro 100 členů, 8 let se věnuje fotografování s několika výhrami ve fotosoutěžích,
   9 let hraje na kytaru a získal 2. místo v regionální soutěži O zlaté trsátko a na Mistrovství ČR v atletice získal v
   dorostu 5. místo.
        </finalist>
        <other-finalist num="25" :firstRow="['Vít Beran', 'Kryštof Kohout', 'Vít Janda', 'Ronald Luc', 'Adam Hubálovský',
'Sára Prostějovská', 'Thao Chi Vu', 'Sophie Bellová', 'Pavel Havlín', 'Martin Kašparlík']" :secondRow="['Luboš Zápotočný',
'Jaroslav Hradil', 'Jan Strach', 'Jakub Gloza', 'Jáchym Bártík', 'Filip Šlampa', 'Anna Hrazdilová',
'Alžběta Tlapová', 'Adam Kraus', 'Štěpán Ondrášek']" title="Nejaktivnější středoškolák 2017"/>
      </section>

      <section v-else-if="year === 2016">
        <other-finalist num="17" :firstRow="['1. Marie Čejnová', '2. Tomáš Schwarz', '3. Anna Umlaufová', '4. Helene Budilová', '5. Josef Škrdlík',
'6. Daniel Kaftan', '7. Lukáš Holeczy', '8. Tereza Fojtíková', '9. Alena Brabencová']" :secondRow="['10. Vasil Kostin',
'11. Daniel Tričkov', '12. Tomáš Kodet', '13. Taťána Lysková', '14. Miroslav Varga', '15. Matouš Dvořák', '16. Filip Hoferek',
'17. Helena Havelková']" title="Nejaktivnější středoškolák 2016"/>
      </section>

      <section v-else-if="year === 2015">
        <other-finalist num="17" :firstRow="['1. Klára Höllgeová', '2. Anna Routová', '3. František Zeman', '4. Michaela Löfflerová', '5. Lukáš Kotlár',
'6. Petr Melichar', '7. Martin Suchomel', '8. Daniela Mrázková', '9. Sára Sládková']" :secondRow="['10. Tomáš Prokop',
'11. Blanka Pilátová', '12. Aneta Beranová', '13. Diana Čechová', '14. Filip Baldík', '15. Lukáš Holeczy', '16. Daniel Kaftan',
'17. Jáchym Důjka']" title="Nejaktivnější středoškolák 2015"/>
      </section>
    </div>
  </section>
</template>

<script>
import YearButton from './YearButton.vue'
import Finalist from './Finalist.vue'
import OtherFinalist from './OtherFinalists.vue'

export default {
  name: 'finalists-block',
  components: { YearButton, Finalist, OtherFinalist },
  data () {
    return {
      year: 2021
    }
  },
  methods: {
    changeYear (year) {
      this.year = +year
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

  h2,
  h3 {
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.2;
  }

  .intro-title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;

    @media (max-width: 900px) {
          // flex-direction: column;
        }

    h2 {
      display: inline;
      padding-right: 15px;
    }
  }
}

.steps-container {
  .content {
    width: 100%;
  }
}
</style>
