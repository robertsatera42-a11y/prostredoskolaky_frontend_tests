<template>
  <section class="important-questions-section">
    <div class="content">
      <h2>Důležité otázky a odpovědi</h2>

      <div class="questions">
        <div>
          <div class="question" @click="questionOpened = questionOpened == 0 ? -1 : 0">
            <div class="orange">Kdo je považován za aktivního středoškoláka? &rarr;</div>
            <transition name="slide">
              <div v-if="questionOpened == 0" class="description">
                Každý, kdo se věnoval nějaké aktivitě nad rámec povinné školní docházky. Aktivitu chápej například jako vzdělávání mimo školní výuku, účast v soutěžích, dobrovolnictví, práci na projektech, podnikání, koníčky a mnoho dalšího. Inspiraci najdeš v naší databázi. Pokud máš za sebou alespoň některou z takových aktivit, tak vítej mezi aktivními středoškoláky.
              </div>
            </transition>
          </div>
          <div class="question" @click="questionOpened = questionOpened == 1 ? -1 : 1">
            <div class="orange">Proč se mám „chlubit“ svými mimoškolními aktivitami a úspěchy? &rarr;</div>
            <transition name="slide">
              <div v-if="questionOpened == 1" class="description">
                Věříme, že správně pojatá prezentace vlastních úspěchů je v dnešním světě velmi důležitá. Dobře připravený příběh o tom, co tě baví a čeho jsi dosáhl/a pomůže, ať už se budeš ucházet o zaměstnání, investici do svého projektu nebo třeba vědecký grant. Navíc poznáš stejně akční středoškoláky, kteří ti rozšíří obzory a mimochodem motivuješ i ostatní středoškoláky k tomu, aby se také zapojili do mimoškolních aktivit.
              </div>
            </transition>
          </div>
          <div class="question" @click="questionOpened = questionOpened == 2 ? -1 : 2">
            <div class="orange">Co hodnotíme? &rarr;</div>
            <transition name="slide">
              <div v-if="questionOpened == 2" class="description">
                <div>
                  <div class="orange">1. Počet a rozsah mimoškolních aktivit</div>
                    <div
                      class="description"
                    >Vyber 1 až 10 svých nejlepších aktivit, ať už to jsou dlouhodobé projekty, dobrovolnictví, jednorázová soutěž nebo pořádání akcí.</div>
                  </div>
                  <div class="question">
                    <div class="orange">2. Dílčí úspěchy a vynaložené úsilí</div>
                    <div
                      class="description"
                    >První místo je víc než brambora. Celostátní dopad víc než lokální. Nemusíš se ale bát pochlubit „jen“ účastí v aktivitách.</div>
                  </div>
                  <div class="question">
                    <div class="orange">3. Pestrost aktivit</div>
                    <div
                      class="description"
                    >Věříme, že na střední je dobré zkoušet aktivity napříč obory. Ale třeba i míchat prezenční a online aktivity, domací a zahraniční.</div>
                  </div>
              </div>
            </transition>
          </div>
          <div class="question" @click="questionOpened = questionOpened == 3 ? -1 : 3">
            <div class="orange">Jak hodnotíme? &rarr;</div>
            <transition name="slide">
              <div v-if="questionOpened == 3" class="description">
                Každý z pěti porotců, bývalých aktivních středoškoláků, nejdříve oboduje aktivity všech soutěžících podle významnosti. Prvních 100 soutěžících s nejvyšším průměrným počtem bodů následně postoupí do dalšího kola, kde už porotci dohromady vyberou nejlepších 65 finalistů.
                Následuje nejtěžší část hodnocení, a to z nejlepších 65 finalistů vybrat 25 „nejaktivnějších“, kteří pojedou na víkendové setkání nejaktivnějších středoškoláků. Během víkendu proběhnou ještě krátké rozhovory s top 25 finalisty, které porotcům pomůžou určit konečné pořadí a vybrat prvních 10 včetně Středoškoláka roku.
                Protože je hodnocení aktivit napříč různými obory nesmírně obtížné, neurčujeme konečné pořadí s výjimkou prvních pěti míst.
              </div>
            </transition>
          </div>
        </div>

        <div>
          <div class="question" @click="questionOpened = questionOpened == 4 ? -1 : 4">
            <div class="orange">Jak upravit svoji přihlášku? &rarr;</div>
            <transition name="slide">
              <div v-if="questionOpened == 4" class="description">
                V případě, že bys již odeslal/a svoji přihlášku a chtěl/a dodatečně něco upravit, vyplň další přihlášku a my při hodnocení vezmeme v potaz tu naposledy odeslanou.
              </div>
            </transition>
          </div>
          <div class="question" @click="questionOpened = questionOpened == 5 ? -1 : 5">
            <div class="orange">Můžu se přihlásit, když letos maturuji? &rarr;</div>
            <transition name="slide">
              <div v-if="questionOpened == 5" class="description">
                Ano
              </div>
            </transition>
          </div>
          <div class="question" @click="questionOpened = questionOpened == 6 ? -1 : 6">
            <div class="orange">Můžu se zúčastnit soutěže opakovaně? &rarr;</div>
            <transition name="slide">
              <div v-if="questionOpened == 6" class="description">
                Ano
              </div>
            </transition>
          </div>
          <div class="question">
            <div>Pro více podrobností se podívej do <a href="https://drive.google.com/file/d/1Jq48GaNIC-yhYy583tWcLdhWL3_6NIX9/view?usp=sharing" target="_blank">pravidel soutěže</a>.</div>
          </div>
          <div class="question">
            <div>Pokud máš nějakou další otázku, napiš nám na <a href="mailto: info@prostredoskolaky.cz" target="_blank">info@prostredoskolaky.cz</a>.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'important-questions-block',
  data: function () {
    return {
      questionOpened: -1
    }
  }
}
</script>

<style scoped lang="scss">

.slide-enter-active {
   transition-duration: 0.3s;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.3s;
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height: 100px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}

.content {
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px 40px 0;

  @media (max-width: 800px) {
    width: 90%;
    padding: 20px 20px 0;
  }
}

section.important-questions-section {
  padding: 10px 0 20px;
  position: relative;

  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.2;
  }

  .questions {
    margin-top: 40px;
    display: flex;
    flex: 1;
    flex-direction: row;

    a {
      text-decoration: underline;
    }

    > div {
      display: flex;
      flex: 0.5;
      flex-direction: column;

      &:first-child {
        margin-right: 30px;
      }

      &:last-child {
        margin-left: 30px;
      }

      .question {
        padding-bottom: 20px;

        .orange {
          cursor: pointer;
        }
      }

      @media (max-width: 700px) {
        margin: 0 !important;
      }
    }

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
}
</style>
