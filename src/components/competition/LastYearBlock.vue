<template>
  <section class="last-year-section" id="last-year-section">
    <div class="content">
      <h2>Vítězové minulých ročníků</h2>
      <div class="last-year-students">
        <div>
          <img loading="lazy" src="~@/assets/finalists/1letochova.jpg">
          <div class="orange name">Karolína Letochová</div>
          <div class="school">1. místo 2021</div>
          <div
            class="description"
          >V komunitě lidí okolo Středoškoláka roku jsem už měla čest potkat tolik aktivních a talentovaných vrstevníků, kteří jsou nadšení do toho, čemu se věnují, že jsem si v porovnání s nimi vždycky připadala netalentovaná a méněcenná, což pro mě výjimečně byly pozitivní pocity. Díky moc!</div>
        </div>
        <div>
          <img loading="lazy" src="~@/assets/finalists/1bernhardova.jpg">
          <div class="orange name">Hana Bernhardová</div>
          <div class="school">1. místo 2020</div>
          <div
            class="description"
          >Vnímám střední školu jako ideální čas pro to zjistit, co člověka zajímá a naplňuje. Je super stát se součástí party lidí, kteří aktivně jdou za svými sny a inspirují druhé.</div>
        </div>
        <div>
          <img loading="lazy" src="~@/assets/finalists/max_kozlov.jpg">
          <div class="orange name">Max Kozlov</div>
          <div class="school">1. místo 2019</div>
          <div
            class="description"
          >Moji každodenní snahou je posouvat lidstvo dopředu, ale hodně věcí sám udělat nedokážu. Proto jsem tak vděčný za tu komunitu mlaďochů, které jsem součástí. Odsud je velká část mého týmu, který mi pomáhá hrnout progres vpřed.</div>
        </div>
        <div>
          <img loading="lazy" src="~@/assets/finalists/matej.jpg">
          <div class="orange name">Matěj Prokop</div>
          <div class="school">1. místo 2018</div>
          <div
            class="description"
          >Dělám, co mě baví, a díky středoškolákovi jsem poznal spoustu inspirativních lidí, kteří mi ukázali, že v životě existuje milion možností. Stačí jen začít.</div>
        </div>
        <div>
          <img loading="lazy" src="~@/assets/finalists/honza_slama.jpg">
          <div class="orange name">Jan Sláma</div>
          <div class="school">1. místo 2017</div>
          <div
            class="description"
          >Nechci prožít nejlepší léta svého života ve školní lavici. Chci něco měnit a přinášet reálné pozitivní hodnoty. Je super vidět, že v tom nejsem sám.</div>
        </div>
        <div>
          <img loading="lazy" src="~@/assets/finalists/marie.png">
          <div class="orange name">Marie Čejnová</div>
          <div class="school">1. místo 2016</div>
          <div
            class="description"
          >Utvrdila jsem se v tom, že těch lidí, co jsou takto aktivní, je sice málo, ale jsou. Sice rozházení po republice, ale jsou, což je super.</div>
        </div>
      </div>

      <div class="show-finalists">
        <!-- <button @click="goToFinalists" class="button is-active is-primary">Finalisté</button> -->
        <a href="/finaliste" class="step-link">Seznam se s příběhy našich finalistů</a>
      </div>

      <div class="media-bubble">
        <div class="media-content">
          <span class="quote-start">“</span>
          <p>
            V dnešní době je škola odrazový můstek, který má studenta ponouknout k tomu, aby dělal další aktivity.
            <span
              class="quote-end"
            >„</span>
          </p>
        </div>
        <div class="orange media-author">Matěj Prokop pro Český Rozhlas</div>
        <div class="interviews">
          <h2>Rozhovory s finalisty</h2>
          <div class="interview-finalists">
            <div>
              <p>Max Kozlov pro</p>
              <a
                href="https://www.hatefree.cz/blo/rozhovory/3400-max-kozlov"
                target="_blank"
              >
                <img loading="lazy" src="~@/assets/partners/hf.png" style="margin-left: 90px; height: 50px; width: 50px;">
              </a>
            </div>
            <div>
              <p>Jan Sláma pro</p>
              <a href="https://www.youtube.com/watch?v=MJR0mcFQYsg" target="_blank">
                <img loading="lazy" src="~@/assets/partners/CRo-Plus.png" style="margin-left: 40px; height: 50px; width: 150px;">
              </a>
            </div>
            <div>
              <p>Matěj Prokop pro</p>
              <a
                href="https://www.seznamzpravy.cz/clanek/okoli-me-ma-za-exota-chtel-bych-jednou-do-politiky-rika-nejuspesnejsi-cesky-stredoskolak-53941"
                target="_blank"
              >
                <img loading="lazy" src="~@/assets/partners/seznam.png" style="height: 50px; width: 270px;">
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="https://prostredoskolaky-cz.medium.com/" target="_blank" class="step-link">Přečti si další rozhovory na našem blogu</a>
    </div>
  </section>
</template>

<script>
import router from '../../router'

export default {
  name: 'last-year-block',
  methods: {
    goToFinalists () {
      router.push('/finaliste')
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  max-width: 1200px;
  margin: 10px auto;
  padding: 20px 40px 0;

  @media (max-width: 800px) {
    width: 90%;
    padding: 0 20px 0;
  }
}

section.last-year-section {
  padding: 20px 0 10px;
  position: relative;

  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.2;
    padding-top: 20px;
  }

  .last-year-students {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;

    > div {
      width: 13.6%;
      margin-right: 3%;

      img {
        border-radius: 100%;
        margin-bottom: 20px;
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

  .show-finalists {
    padding: 40px 0;

    @media (max-width: 700px) {
      padding-bottom: 50px;
    }
  }

  .media-bubble {
    max-width: 60%;
    margin: 40px auto;

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
      margin: 20px auto;
    }
  }

  .interviews {
    padding-top: 70px;
    h2 {
      font-size: 20px;
      text-align: center;
    }
    .interview-finalists {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 30px 20px 0 0;

      > div {
        p {
          width: 270px;
        }

        @media (max-width: 700px) {
          padding-bottom: 20px;
        }
      }

      @media (max-width: 700px) {
        flex-direction: column;
      }
    }

    @media (max-width: 700px) {
      padding-top: 30px;
    }
  }
  .step-link {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 37%;
      text-align: center;
      color: #f06027;
      padding: 5px 0 5px 20px;
      transition: 0.3s;
      background: url(~@/assets/svg/circle-arrow.svg) no-repeat left center;
      background-size: 34px 34px;

      @media (max-width: 700px) {
        width: 90%;
        margin-left: 10px;
      }

      &:hover {
        background-position-x: 5px;
      }
    }
}
</style>
