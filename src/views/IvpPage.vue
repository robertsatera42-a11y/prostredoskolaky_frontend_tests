<template>
  <div class="public-page ivp-page">
    <main id="home-main" tabindex="-1">
      <public-hero title="Vše o IVP" :lead="'Individuální vzdělávací plán.\nKrok za krokem.'" description="Chceš naplno rozvíjet své aktivity a zároveň zvládat školu? Připravili jsme odpovědi na otázky o žádosti, podmínkách a studiu s IVP.">
        <a href="#zadost" class="home-button home-button-orange">Jak si o IVP požádat <home-icon name="arrow-right" /></a>
        <a href="#zaklady" class="home-text-link">Začít od základů <home-icon name="arrow-right" /></a>
        <template #visual>
          <aside class="public-ivp-summary" aria-label="Na čem se se školou domluvit">
            <span class="home-icon-tile"><home-icon name="book" /></span><h2>Začni domluvou<br>se školou.</h2>
            <p>Ujasněte si, co od plánu potřebuješ a jak bude tvé studium vypadat.</p>
            <ul><li><span>01</span>Aktivity a důvody žádosti</li><li><span>02</span>Docházka a konzultace</li><li><span>03</span>Termíny a hodnocení</li></ul>
          </aside>
        </template>
      </public-hero>
      <section class="home-section public-ivp-guide" aria-label="Otázky a odpovědi o IVP">
        <div class="home-container public-guide-grid">
          <aside class="public-guide-navigation">
            <p class="home-eyebrow">V tomto průvodci</p>
            <nav aria-label="Obsah průvodce IVP"><a v-for="(group, index) in groups" :key="group.id" :href="'#' + group.id"><span>0{{ index + 1 }}</span>{{ group.title }}<home-icon name="arrow-right" /></a></nav>
            <p>Konkrétní podmínky plánu si vždy domluv přímo se svou školou.</p>
          </aside>
          <div>
            <section v-for="group in groups" :id="group.id" :key="group.id" class="public-faq-group" :aria-labelledby="group.id + '-title'">
              <h2 :id="group.id + '-title'">{{ group.title }}</h2><p>{{ group.description }}</p>
              <details v-for="(question, index) in group.questions" :key="question.title" class="public-faq" :open="group.id === 'zaklady' && index === 0">
                <summary>{{ question.title }}<home-icon name="chevron" /></summary>
                <div class="public-faq-answer"><p v-for="paragraph in question.paragraphs" :key="paragraph">{{ paragraph }}</p><ul v-if="question.list"><li v-for="item in question.list" :key="item">{{ item }}</li></ul></div>
              </details>
            </section>
            <div class="public-ivp-sources"><h3>Oficiální podklady</h3><a v-for="source in sources" :key="source.href" :href="source.href" class="home-text-link" target="_blank" rel="noopener noreferrer">{{ source.title }}<home-icon name="external" /><span class="home-sr-only"> (otevře se v nové kartě)</span></a></div>
          </div>
        </div>
      </section>
      <section class="public-invitation" aria-labelledby="ivp-contact-title"><div class="home-container public-invitation-panel"><div><p class="home-eyebrow">Nezůstávej na to sám</p><h2 id="ivp-contact-title">Máš další otázku?</h2><p>S dotazy k průvodci i ke své situaci nám můžeš napsat.</p></div><a href="mailto:info@prostredoskolaky.cz" class="home-button home-button-teal">Napiš nám <home-icon name="mail" /></a></div></section>
    </main>
    <home-footer />
  </div>
</template>
<script>
import PublicHero from '@/components/public/PublicHero'
import HomeFooter from '@/components/home/HomeFooter'
import HomeIcon from '@/components/home/HomeIcon'
import { ivpGroups, ivpSources } from '@/components/public/ivpContent'

export default {
  name: 'ivp-page',
  metaInfo: {
    title: 'Vše o IVP',
    htmlAttrs: { lang: 'cs' },
    meta: [{ name: 'description', content: 'Jak požádat o individuální vzdělávací plán a sladit školu s mimoškolními aktivitami. Přehledný průvodce IVP pro středoškoláky.' }]
  },
  components: { PublicHero, HomeFooter, HomeIcon },
  data () { return { groups: ivpGroups, sources: ivpSources } }
}
</script>
