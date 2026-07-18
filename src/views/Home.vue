<template>
  <div class="main-page">
    <section class="main-container">
      <div class="content">
        <h1>
          Tvoříme komunitu aktivních středoškoláků.
        </h1>
        <button
          @click="startExploring('steps-container')"
          class="button is-active is-primary"
        >Začni objevovat</button>
        <span class="image-overlay"/>
        <span class="overlay"/>
        <div class="partners">
          <a href="https://www.praha.eu/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/praha.png"></a>
          <a href="https://www.ddmp6.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/ddm6.png" alt></a>
          <a href="https://www.ctenipomaha.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/cteni.png" alt></a>
          <a href="https://www.nadacepreciosa.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/preciosa.png" alt></a>
          <a href="https://portal.rozhlas.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/CRo-Cesky_rozhlas-Z-RGB.png" alt></a>
          <a href="https://www.hotel-ilf.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/logo-ILF-ramecek-barva-500.jpg" alt></a>
        </div>
      </div>
    </section>

    <section class="steps-container" id="steps-container">
      <div class="content">
        <h2>
          Návod, jak strávit
          <span></span>středoškolská léta.
        </h2>
      </div>
      <div class="content">
        <div class="flex">
          <div class="flex-1 padding-left">
            <p>Připravili jsme návod, jak se vyhnout průšvihu a neskončit studovaním vysoké školy, která tě nebaví, a chozením do kanclu, kde tě všechno prudí.</p>
            <div class="scroll-down" @click="scroll('step1')"/>
          </div>
          <div class="flex-1 padding-left">
            <img loading="lazy" src="~@/assets/first-step.png" alt>
          </div>
        </div>

        <div class="flex mobile-reverse" id="step1">
          <div class="flex-1">
            <img loading="lazy" src="~@/assets/next-step.png" alt>
          </div>
          <div class="flex-2 padding-left">
            <div class="step max-width-80">
              <div class="step-no">Krok 1</div>
              <div class="step-title">Najdi si, co dělat</div>
              <p
                class="step-description"
              >Je potřeba začít něco dělat. A že je toho spousty pro každého. Do začátku nemusíš nic umět. Možnost má každý. Nezávisle na ročníku, ve kterém jsi, škole či bydlišti. Připravili jsme databázi 400+ mimoškolních aktivit. Stačí si jen vybrat.</p>
              <a class="step-link" @click="goToAndTrack('/databaze', 'link', 'database')">Databáze mimoškolních aktivit</a>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-2">
            <div class="step max-width-80">
              <div class="step-no">Krok 2</div>
              <div class="step-title">Zlepšuj se spolu se svým Amigem</div>
              <p class="step-description">
                Děláš, co tě naplňuje, ale potřebuješ ještě popostrčit? Dali jsme dohromady úspěšné lidi, kteří jsou teprve několik let po střední škole, aby ti na tvé cestě pomohli. Vyber si svého mentora a posuň se s ním na novou úroveň.
                <a class="step-link" @click="goToAndTrack('/amigo', 'link', 'amigo')">Mentoringový program Amigo</a>
              </p>
            </div>
          </div>
          <div class="flex-1">
            <img loading="lazy" src="~@/assets/amigo-step.jpg" alt>
          </div>
        </div>

        <div class="flex">
          <div class="flex-1">
            <img loading="lazy" src="~@/assets/three-step.png" alt>
          </div>
          <div class="flex-2 padding-left">
            <div class="step max-width-80">
              <div class="step-no">Krok 3</div>
              <div class="step-title">Nech se inspirovat na Konferenci Free Spirit</div>
              <p
                class="step-description"
              >Přijď se inspirovat od těch nejzajímavějších středoškoláků v České republice. Několikrát do roka pořádáme setkání, kde se s tebou o své zkušenosti a názory podělí mladí aktivní lidé, kteří už mají něco za sebou.</p>
              <a class="step-link" @click="goToAndTrack('https://www.facebook.com/events/681821840504671/', 'link', 'free_spirit', true)">Konference Free Spirit</a>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="flex-2">
            <div class="step max-width-80">
              <div class="step-no">Krok 4</div>
              <div class="step-title">Přihlas se do Středoškoláka roku</div>
              <p class="step-description">
                Máš už aktivity, které tě baví a něčeho jsi v nich dosáhl? Je ten pravý čas přihlásit se do soutěže Středoškolák roku. Ty nejaktivnější středoškoláky propojíme mezi sebou, pozveme je na seznamovací víkend a také něco naučíme ve vzdělávací akademii.
                <a class="step-link" @click="goToAndTrack('https://stredoskolakroku.cz/', 'link', 'competition', true)">Soutěž Středoškolák roku</a>
              </p>
            </div>
          </div>
          <div class="flex-1">
            <img loading="lazy" src="~@/assets/second-step.png" alt>
          </div>
        </div>

        <!-- TODO: LAST STEP -->
        <div class="newsletter step">
          <div class="flex-1">
            <div class="step-no">Krok 0</div>
            <div class="step-title">Začni odebíráním newsletteru</div>

            <div class="newsletter-box">
              <div class="newsletter-description">
                Každý měsíc ti do tvého e-mailu zašleme pravidelnou dávku mimoškolních
                <span>aktivit, odkazy na zajímavé knihy a další vzdělávací tipy.</span>
              </div>
              <div class="newsletter-form">
                <button class="button" @click="goToAndTrack('/login', 'link', 'login')">Přihlásit se</button>
              </div>
            </div>
          </div>
        </div>

        <div class="our-instructions">
          <h2>Studenti, kteří se řídili naším návodem</h2>
          <div class="students">
            <div>
              <img
                src="~@/assets/finalists/dan.png"
                alt
                loading="lazy"
              >
              <div class="orange name">Daniel Bulatkin</div>
              <div class="school">Hudební a taneční fakulta AMU</div>
              <div
                class="description"
              >Soutěž Středoškolák roku a aktivity s ní spojené mě začlenily do komunity mladých, talentovaných a především aktivních lidí, o které jsem ani nevěděl, že existuje. Inspirovala mě spoustou příběhů úspěšných a dala mi energii nepřestávat s tím, co dělám.</div>
            </div>
            <div>
              <img
                src="~@/assets/finalists/katerina.jpg"
                alt
                loading="lazy"
              >
              <div class="orange name">Kateřina Adámková</div>
              <div class="school">Gymnázium Nad Alejí</div>
              <div
                class="description"
              >Díky Středoškolákovi roku jsem poznala komunitu lidí, kteří mění svět už dnes.</div>
            </div>
            <div>
              <img
                src="~@/assets/finalists/jakub.png"
                alt
                loading="lazy"
              >
              <div class="orange name">Jakub Rychlý</div>
              <div class="school">Delta - Střední škola informatiky a ekonomie</div>
              <div
                class="description"
              >Během víkendu člověk pozná mnoho aktivních lidí, kteří se nebojí nových výzev. Soutěž mě motivovala k dalším věcem, kterým se teď věnuji.</div>
            </div>
          </div>
          <a class="read-more-on-blog" @click="goToAndTrack('https://prostredoskolaky-cz.medium.com/', 'link', 'blog', true)">další příběhy na našem blogu</a>
        </div>

        <div class="media-title">
          <h2>Napsali o nás</h2>
        </div>
        <div class="media-bubble">
          <div class="media-content">
            <span class="quote-start">“</span>
            <p>
              Dělám, co mě baví, a díky středoškolákovi jsem poznal spoustu inspirativních lidí, kteří mi ukázali, že v životě existuje milion možností. Stačí jen začít.
              <span
                class="quote-end"
              >„</span>
            </p>
          </div>
          <div class="orange media-author">Matěj Prokop pro Český Rozhlas</div>
        </div>

        <div class="more-media">
          <div class="media-logos">
            <a
              href="https://www.eduin.cz/clanky/neformalni-vzdelavani-rozsiruje-prehled-stredoskolaci-ukazuji-vrstevnikum-jak-na-to/"
              target="_blank"
            >
              <img loading="lazy" src="~@/assets/eduin_logo.png" alt>
            </a>
            <a
              href="https://www.idnes.cz/zpravy/domaci/vyuka-mimo-skolu-a-tomas-zahradnik.A140731_212757_domaci_ert"
              target="_blank"
            >
              <img loading="lazy" src="~@/assets/idnes.jpg" alt>
            </a>
            <a
              href="https://www.respekt.cz/tydenik/2014/41/nespolehat-jen-na-skolu"
              target="_blank"
            >
              <img loading="lazy" src="~@/assets/respekt.png" alt>
            </a>
          </div>
        </div>

        <div class="our-activities">
          <h2>Naše aktivity</h2>

          <div class="activities">
            <a class="activity">
              <img loading="lazy" src="~@/assets/db-img.png" alt>
              <div class="text-box">
                <div class="activity-title">Databáze mimoškolních aktivit</div>
                <p
                  class="activity-description"
                >Máme databázi více než 400 mimoškolních aktivit napříč všemi obory.</p>
              </div>
            </a>
            <a class="activity">
              <img loading="lazy" src="~@/assets/contest-img.png" alt>
              <div class="text-box">
                <div class="activity-title">Soutěž Středoškolák roku</div>
                <p
                  class="activity-description"
                >Pořádáme soutěž pro všechny aktivní středoškoláky, kteří dělají něco navíc.</p>
              </div>
            </a>
            <a class="activity">
              <img loading="lazy" src="~@/assets/spirit-img.png" alt>
              <div class="text-box">
                <div class="activity-title">Konference Free Spirit</div>
                <p
                  class="activity-description"
                >Konference, na které tě seznámíme s těmi nejzajímavějšími středoškoláky v ČR.</p>
              </div>
            </a>
          </div>
        </div>

        <!--<div class="our-team">
          <h2>Náš tým</h2>

          <div class="team">
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/monika.jpg" alt="Monika Smiešková">
            </div>
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/lenka.jpg" alt="Lenka Novotná">
            </div>
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/agata.jpg" alt="Agáta Lantová">
            </div>
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/cecilie.jpg" alt="Cecílie Sekalová">
            </div>
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/petra.jpg" alt="Petra Plachá">
            </div>
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/adela.jpg" alt="Adéla Lišková">
            </div>
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/elena.jpg" alt="Elena Musilová">
            </div>
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/anna.jpg" alt="Anna Balcarová">
            </div>
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/runda.jpg" alt="Runda Brandýsová">
            </div>
            <div class="team-member">
              <img loading="lazy" src="~@/assets/team/pavel.jpg" alt="Pavel Ihm">
            </div>
          </div>
          <a class="more-about-us" @click="goToAndTrack('/o-nas', 'link', 'about_us')">více o nás</a>
        </div>-->

        <div class="our-partners">
          <h2>Pod záštitou</h2>
          <div class="partner-logos">
            <img loading="lazy" class="msmt-logo" src="~@/assets/partners/msmt.jpg" alt>
          </div>
        </div>

        <div class="our-partners">
          <h2>Naši partneři</h2>
          <div class="partner-logos">
            <a href="https://www.praha.eu/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/praha.png"></a>
            <a href="https://www.ddmp6.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/ddm6.png" alt></a>
            <a href="https://www.ctenipomaha.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/cteni.png" alt></a>
            <a href="https://www.nadacepreciosa.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/preciosa.png" alt></a>
            <a href="https://portal.rozhlas.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/CRo-Cesky_rozhlas-Z-RGB.png" alt></a>
            <a href="https://www.hotel-ilf.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/logo-ILF-ramecek-barva-500.jpg" alt></a>
          </div>
        </div>
      </div>
    </section>

    <footer-block/>

  </div>
</template>

<script>
import FooterBlock from '../components/common/Footer'
import tracking from '../utils/tracking'
import router from '../router'

export default {
  name: 'home',
  components: { FooterBlock },
  methods: {
    startExploring (elementId) {
      this.scroll(elementId)
      tracking.track('homepage', 'button', 'main_cta')
    },
    scroll (elementId) {
      let offset = 0
      let y = 0
      let dy
      let call = setInterval(() => {
        if (Math.abs((dy = offset - y)) > 1) {
          y += dy / 12
        } else {
          clearInterval(call)
          y = offset
        }
        document.documentElement.scrollTop = y - 100
      }, 10)
      offset = document.getElementById(elementId).offsetTop
      y = document.documentElement.scrollTop
    },
    goToAndTrack (path, action, label, goOutside) {
      tracking.track('homepage', action, label)
      if (goOutside) {
        window.open(path, '_blank')
      } else {
        router.push(path)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@keyframes bounce {
  from {
    transform: translateY(0px) rotate(90deg);
  }
  to {
    transform: translateY(-5px) rotate(90deg);
  }
}

.content {
  width: 80%;
  max-width: 1200px;
  margin: 60px auto;
  padding: 40px 40px 0;
}
.main-container {
  padding: 100px 0 20px;
  min-height: 100vh;
  position: relative;
  display: flex;

  @media (max-width: 600px) {
    padding: 100px 0 50px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 10px;

    @media (max-width: 800px) {
      width: 90%;
      padding: 20px;
    }
  }

  h1 {
    margin-top: 50px;

    @media (max-width: 800px) {
      margin-top: 0;
    }
  }

  .button {
    margin-top: 40px;
    font-size: 18px;
    padding: 0 18px;
    font-family: 'NunitoLight', sans-serif;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(~@/assets/mainheader.jpg) center;
    background-size: cover;
    z-index: -1;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(106deg, #efeeff 0%, rgba(231, 225, 255, 0.9) 39%, rgba(231, 187, 210, 0.81) 63%, rgba(230, 71, 71, 0.22) 100%);
    z-index: -1;
  }

  .partners {
    margin-top: auto;

    @media (max-width: 600px) {
      margin-top: 50px;
    }

    &-title {
      margin-bottom: 8px;
      font-weight: bold;
    }
    img {
      margin-right: 20px;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);

      @media (max-width: 500px) {
        margin: 0 10px 10px;
      }
    }
  }
}
.steps-container {
  h2 {
    text-align: center;
  }
  .scroll-down {
    background: url(~@/assets/svg/circle-arrow.svg) no-repeat left center;
    background-size: contain;
    transform: rotate(90deg);
    width: 40px;
    height: 40px;
    margin-top: 40px;
    cursor: pointer;
    animation: bounce 1s infinite alternate;
  }

  .content {
    width: 100%;
  }

  .flex {
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;

    @media (max-width: 600px) {
      flex-direction: column;
      margin-bottom: 40px;

      &.mobile-reverse {
        flex-direction: column-reverse;
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

    .flex-1 {
      flex: 1;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 800px) {
        padding: 0 !important;
        &:nth-child(2) {
          margin: 20px;
        }
        img {
          margin: auto;
          max-width: 80%;
        }
      }
      @media (max-width: 500px) {
        margin-right: 0 !important;
        margin-left: 0 !important;
      }

      &.right {
        text-align: right;
      }
      &.left {
        text-align: left;
      }
      &.padding-left {
        padding-left: 100px;
        &-2 {
          padding-left: 200px;
        }

        @media (max-width: 800px) {
          &:first-child {
            padding-left: 0;
          }
          &:not(:first-child) {
            padding-left: 30px;
          }
          &-2 {
            padding-left: 60px;
          }
        }
      }
      &.padding-right {
        padding-right: 100px;
      }
    }
    .flex-2 {
      flex: 2;
      align-items: center;
      display: flex;

      @media (max-width: 800px) {
        padding: 0 !important;
        &:nth-child(2) {
          margin-top: 20px;
        }
        img {
          margin: auto;
          max-width: 80%;
        }
      }

      @media (max-width: 600px) {
        &:nth-child(2) {
          margin: 20px;
        }
      }

      @media (max-width: 500px) {
        margin-right: 0 !important;
        margin-left: 0 !important;
      }

      &.right {
        text-align: right;
      }
      &.left {
        text-align: left;
      }
      &.padding-left {
        padding-left: 100px;

        @media (max-width: 800px) {
          padding-left: 50px;
        }
      }
      &.padding-right {
        padding-right: 100px;
      }
    }
  }
  .step {
    .step-no {
      color: #f06027;
    }
    .step-title {
      font-size: 30px;
      line-height: 1.15;
    }
    .step-description {
      margin-top: 50px;
    }
    .step-link {
      display: block;
      margin-top: 50px;
      color: #f06027;
      padding: 5px 0 5px 50px;
      transition: 0.3s;
      background: url(~@/assets/svg/circle-arrow.svg) no-repeat left center;
      background-size: 34px 34px;

      &:hover {
        background-position-x: 5px;
      }
    }
  }
}

.newsletter {
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
  }
  &-description {
    margin-bottom: 30px;

    span {
      display: block;
    }
  }
  &-form {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;

    .button {
      margin-left: 20px;
      background: #f06027;
      color: white;
    }

    @media (max-width: 400px) {
      flex-direction: column;

      .button {
        margin-left: 0;
      }
    }
  }
}

.our-instructions {
  margin-top: 80px;

  h2 {
    margin: 0 0 60px;
  }

  .students {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      width: 31.3%;

      &:nth-child(2) {
        margin: 0 3%;
      }

      img {
        border-radius: 100%;
        margin-bottom: 20px;
        max-width: 150px;
      }

      .name {
        margin-bottom: 5px;
      }

      .school {
        margin-bottom: 20px;
      }

      @media (max-width: 700px) {
        width: 48%;

        &:nth-child(2) {
          margin: 0;
        }
        margin: 0 2% 20px;
      }
      @media (max-width: 500px) {
        width: 100%;
        margin: 0 0 40px !important;

        img {
          max-width: 100px;
          margin-bottom: 10px;
        }
        .name {
          margin-bottom: 0;
        }
        .school {
          margin-bottom: 10px;
        }
      }
    }
  }

  .read-more-on-blog {
    display: inline-block;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 50px;
    color: #f06027;
    padding: 5px 0 5px 50px;
    transition: 0.3s;
    background: url(~@/assets/svg/circle-arrow.svg) no-repeat left center;
    background-size: contain;

    &:hover {
      background-position-x: 5px;
    }
  }
}

.media-title {
  h2 {
    text-align: center;
    margin: 60px 0 15px 0;
  }
}

.media-bubble {
  max-width: 60%;
  float: right;
  margin: 40px 0;

  h2 {
    text-align: left;
    margin-bottom: 25px;
  }

  .media-content {
    border-radius: 9px;
    background: #f2eded;
    padding: 20px 30px;
    display: flex;
    flex: 1;

    .quote-start {
      font-size: 40px;
      margin-right: 10px;
      margin-top: -10px;
    }

    .quote-end {
      font-size: 40px;
      line-height: 0;
      margin-left: 5px;
    }
  }

  .media-author {
    font-size: 14px;
    padding-left: 30px;
    margin-top: 10px;

    @media (max-width: 700px) {
      text-align: center;
      padding-left: 0;
      font-size: 12px;
    }
  }

  @media (max-width: 700px) {
    max-width: 100%;
    float: initial;
    margin: 80px auto;
  }
}

.more-media {
  clear: both;

  .media-logos {
    display: flex;
    flex: 1;

    img {
      max-height: 45px;
      margin-right: 90px;
    }

    @media (max-width: 700px) {
      flex-wrap: wrap;
      justify-content: center;
      img {
        margin: 0 40px 15px;
      }
    }
    @media (max-width: 500px) {
      img {
        margin: 0 0 15px;
      }
    }
  }
}

.our-activities {
  margin-top: 80px;
  clear: both;

  .activities {
    display: flex;
    flex-direction: row;
    justify-content: center;

    .activity {
      position: relative;
      img {
        transition: 0.3s;
        :hover {
          box-shadow: 0 0 20px 3px #c3c3c3;
        }
      }

      .text-box {
        position: absolute;
        bottom: 0;
        padding: 30px;
        color: #fff;
      }

      .activity-title {
        font-size: 30px;
        margin-bottom: 30px;

        @media (max-width: 900px) {
          font-size: 20px;
        }
      }
      .activity-description {
        font-size: 20px;

        @media (max-width: 900px) {
          font-size: 15px;
        }
      }

      &:nth-child(2) {
        margin: 0 40px;
        top: 40px;
      }
      &:nth-child(3) {
        top: 80px;
      }
    }
    @media (max-width: 700px) {
      flex-wrap: wrap;

      .activity {
        max-width: 33%;
        top: 0 !important;
        margin: 10px 20px !important;
      }
    }
    @media (max-width: 600px) {
      .activity {
        max-width: 50%;
        margin-bottom: 20px;
      }
    }
    @media (max-width: 450px) {
      .activity {
        max-width: 100%;
        margin: 0 0 20px !important;
      }
    }
  }
}

.our-team {
  margin-top: 160px;

  .team {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .team-member {
      &:not(:last-child) {
        margin-right: 10px;
      }
      margin-bottom: 10px;
      width: calc(10% - 60px);
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      img {
        border-radius: 100%;
        max-width: 50px;
        margin-bottom: 20px;
      }

      span {
        display: block;
      }

      a {
        color: #4a4a4a;
        &:hover {
          color: #f06027;
        }
      }

      @media (max-width: 1000px) {
        flex: 1 0 8%;
        text-align: center;
        img {
          margin: 0 auto 20px;
        }
      }
      @media (max-width: 700px) {
        flex: 1 0 10%;
      }
      @media (max-width: 500px) {
        flex: 1 0 17%;
        &:nth-child(2n) {
          margin-right: 0 !important;
        }
      }
      @media (max-width: 400px) {
        flex: 1 0 17%;
        margin-right: 0 !important;
      }
    }
  }
  .more-about-us {
    display: inline-block;
    text-align: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 30px;
    color: #f06027;
    padding: 5px 0 5px 50px;
    transition: 0.3s;
    background: url(~@/assets/svg/circle-arrow.svg) no-repeat left center;
    background-size: contain;

    &:hover {
      background-position-x: 5px;
    }
  }
}

.our-partners {
  margin-top: 80px;

  .partner-logos {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .msmt-logo {
      max-height: 130px;
    }
    img {
      max-height: 45px;
      margin: 0 20px 20px;
    }
  }
}

h1,
h2 {
  font-size: 34px;
  font-weight: normal;

  span {
    display: block;
  }
}
</style>
