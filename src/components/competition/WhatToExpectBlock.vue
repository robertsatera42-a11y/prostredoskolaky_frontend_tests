<template>
  <section class="what-to-expect-section" id="what-to-expect">
    <div class="content">
      <h2>
        Připravili jsme novou webovou stránku <a href="https://stredoskolakroku.cz" target="_blank">StredoskolakRoku.cz</a>, kde nalezneš všechny informace ohledně letošního ročníku.</h2>
        <h4><b>Účastníš se soutěží? Děláš vědu? Sportuješ? Podnikáš? Dobrovolničíš?</b> Zkrátka děláš něco nad rámec povinné školní výuky? Pak je soutěž Středoškolák roku přímo pro tebe. Takové jako ty hledáme, chceme je propojit, ocenit a ukázat veřejnosti, že vzdělávání „za“ školou je velmi důležité pro osobní růst a budoucí profesi.</h4>
        <h4>Přihlašování probíhá přes náš online formulář a za úkol v něm máš jedinou věc – popsat, co děláš nad rámec školní výuky. <b>Žádné známky. Jediné, na čem záleží, jsou tvoje aktivity a úspěchy.</b></h4>
        <h4>Pokud tě vybere porota do 25 nejaktivnějších, pozveme tě na společné <b>víkendové setkání</b>, kde se potkáš se svou krevní skupinou, a o dva týdny později pozveme prvních 65 na <b>dvoudenní vzdělávací akademii</b> do Prahy. Celou akci zakončíme <b>galavečerem</b> otevřeným pro veřejnost, kde slavnostně vyhlásíme finalisty letošního ročníku.</h4>
      <h3>Co tě čeká?</h3>
      <div class="what-to-expect">
        <div class="row row-first">
          <div>
            <div class="date">28. 3. - <span style="text-decoration:line-through">12. 5. </span><span style="font-size:11px">&nbsp;(PRODLOUŽENO DO </span> <b>12. 5.</b><span style="font-size:11px">)</span></div>
            <div class="expect-title">Přihlašování do soutěže</div>
            <div class="description">Přihlašovat se můžeš až do května pomocí online formuláře.</div>
            <div class="overlay-image first"></div>
            <div class="overlay"></div>
          </div>
          <div>
            <div class="date">13. 5. - 30. 5.</div>
            <div class="expect-title">Zasedání poroty</div>
            <div class="description">Naše porota složená z členů týmu a bývalých finalistů pečlivě vybere finalisty.</div>
            <div class="overlay-image second"></div>
            <div class="overlay"></div>
          </div>
          <div @click="goToWeekend" style="cursor:pointer">
            <div class="date">17. 6. - 19. 6.</div>
            <div class="expect-title">Víkendové setkání</div>
            <div class="description">Nejlepších 25 finalistů pozveme na víkendové setkání.</div>
            <div class="overlay-image third"></div>
            <div class="overlay"></div>
          </div>
        </div>
        <div class="row row-second">
          <div @click="goToAcademy" style="cursor:pointer">
            <div class="date">23. 6. - 24. 6.</div>
            <div class="expect-title">Akademie 2022</div>
            <div class="description">Nejlepších 65 finalistů pozveme na sérii vzdělávacích workshopů a přednášek v oblasti soft skills.</div>
            <div class="overlay-image fourth"></div>
            <div class="overlay"></div>
          </div>
          <div @click="goToAcademy" style="cursor:pointer">
            <div class="date">24. 6.</div>
            <div class="expect-title">Slavnostní vyhlášení</div>
            <div class="description">Během večera představíme nejaktivnější středoškoláky a vzácní hosté jim předají hodnotné ceny.</div>
            <div class="overlay-image fifth"></div>
            <div class="overlay"></div>
          </div>
          <div @click="scroll('last-year-section')" class="last-year">
            <div class="expect-title">Podívej se na vítěze z předešlých let</div>
            <div class="slide-down"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'what-to-expect-block',
  methods: {
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
    goToWeekend () {
      this.scroll('weekend')
    },
    goToAcademy () {
      this.scroll('academy')
    }
  }
}
</script>

<style scoped lang="scss">
  .content {
    width: 80%;
    max-width: 1200px;
    margin: 20px auto;
    padding: 40px 40px 0;

    @media (max-width: 800px) {
      width: 90%;
      padding: 40px 20px 0;
    }
  }

  section.what-to-expect-section {
    padding: 20px 0 10px;
    position: relative;

    h2, h3 {
      text-align: center;
      font-size: 30px;
      font-weight: normal;
      line-height: 1.2;
    }

    h3 {
      margin: 60px 0;
    }

    h4 {
      padding-top: 20px;
      text-align: center;
      font-size: 1rem;
      line-height: 25px;
      font-weight: normal;
    }

    .what-to-expect {
      .row {
        display: flex;
        flex-direction: row;
        word-break: break-word;

        .last-year {
          cursor: pointer;
          background: #FF767B
        }

        @media (max-width: 800px) {
          flex-direction: column;
        }

        > div {
          padding: 30px 30px 40px;
          margin: 0 10px 20px;
          position: relative;
          color: #FFF;
          display: flex;
          flex-direction: column;
          width: 33%;
          flex: 1;

          @media (max-width: 800px) {
            width: 50%;
            margin: 0 auto 20px;
          }
          @media (max-width: 600px) {
            width: 100%;
          }

          .expect-title {
            font-size: 24px;
            margin: 20px 0 35px;
            line-height: 1.1;
          }

          .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: linear-gradient(160deg, rgba(127, 97, 250, 0.8) 25%, rgba(215, 109, 124, 0.8) 75%);
            z-index: -1;
          }

          .overlay-image {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-size: cover;
            z-index: -1;
            &.first {
              background: url(~@/assets/prihlasky.png) center;
            }
            &.second {
              background: url(~@/assets/porota.png) center;
            }
            &.third {
              background: url(~@/assets/vikend.png) center;
            }
            &.fourth {
              background: url(~@/assets/akademie.png) center;
            }
            &.fifth {
              background: url(~@/assets/vyhlaseni.png) center;
            }
          }

          .description {
            margin-top: 60px;
          }

          .slide-down {
            width: 50px;
            height: 50px;
            margin: auto;
            background: url(~@/assets/arrow-down.svg) center;
            background-size: cover;
            cursor: pointer;
          }
        }

        &-first, &-second {
          > div {
            .description {
              padding-top: 40px;
            }
          }
        }
      }
    }
  }
</style>

