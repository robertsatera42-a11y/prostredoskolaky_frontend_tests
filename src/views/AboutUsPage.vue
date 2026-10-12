<template>
  <div class="public-page about-us-page">
    <main id="home-main" tabindex="-1">
      <public-hero title="O nás" :lead="'Podporujeme, propojujeme\na oceňujeme středoškoláky.'" description="Věříme, že vzdělávání mimo školu dává smysl a zaslouží si pozornost. Pomáháme studentům objevovat příležitosti a rozvíjet to, co je baví." :photo="heroPhoto" >
        <a href="#tym" class="home-button home-button-orange">Poznej náš tým <home-icon name="arrow-right" /></a>
        <a href="#kontakt" class="home-text-link">Napiš nám <home-icon name="arrow-right" /></a>
      </public-hero>

      <section id="kdo-jsme" class="home-section public-about-story" aria-labelledby="about-story-title">
        <div class="home-container public-editorial-grid">
          <div><p class="home-eyebrow">Vzdělávání pokračuje i za školními dveřmi</p><h2 id="about-story-title">Kdo jsme</h2></div>
          <div class="public-prose">
            <p>V organizaci ProStředoškoláky motivujeme studenty středních škol k účasti na mimoškolních aktivitách. Pořádáme soutěž Středoškolák roku, ve které oceňujeme středoškoláky aktivní ve svém volném čase.</p>
            <p>Věříme, že díky zkušenostem mimo školu se lépe rozhodujeme o budoucím povolání, smysluplněji se učíme a rozvíjíme svou osobnost.</p>
            <p>Shromažďujeme příležitosti do databáze mimoškolních aktivit a sdílíme je mezi českými středoškoláky. To vše dobrovolně zajišťují středoškoláci, vysokoškoláci i mladí pracující.</p>
            <router-link to="/databaze" class="home-text-link">Prozkoumat platformu <home-icon name="arrow-right" /></router-link>
          </div>
        </div>
      </section>

      <section id="tym" class="home-section public-team" aria-labelledby="team-title">
        <div class="home-container">
          <div class="public-editorial-grid public-team-intro">
            <div><p class="home-eyebrow">Lidé za ProStředoškoláky</p><h2 id="team-title">Náš tým</h2><p class="public-section-description">Jsme dobrovolnická organizace. Spojuje nás chuť podporovat studenty v tom, co je baví.</p></div>
            <article class="public-team-lead">
              <img :src="team[0].image" :alt="team[0].name" :width="team[0].width" :height="team[0].height" loading="lazy">
              <div><p class="home-eyebrow">{{ team[0].role }}</p><h3>{{ team[0].name }}</h3><div class="public-team-links"><a v-for="link in team[0].links" :key="link.href" :href="link.href" :target="link.href.startsWith('mailto:') ? null : '_blank'" rel="noopener noreferrer">{{ link.title }}<span v-if="!link.href.startsWith('mailto:')" class="home-sr-only"> (otevře se v nové kartě)</span></a></div></div>
            </article>
          </div>
          <h3 class="public-founders-heading">Zakladatelé</h3>
          <div class="public-founder-grid">
            <article v-for="member in team.slice(1)" :key="member.id" class="public-founder">
              <img :src="member.image" :alt="member.name" :width="member.width" :height="member.height" loading="lazy" decoding="async">
              <div><h3>{{ member.name }}</h3><div class="public-team-links"><a v-for="link in member.links" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.title }}<span class="home-sr-only"> (otevře se v nové kartě)</span></a></div></div>
            </article>
          </div>
        </div>
      </section>

      <section id="kontakt" class="public-contact" aria-labelledby="contact-title">
        <div class="home-container public-contact-panel">
          <div><p class="home-eyebrow">Ozvi se nám</p><h2 id="contact-title">Kontakt</h2><p>Máš otázku k našim projektům nebo se chceš zapojit? Napiš nám.</p><a href="mailto:info@prostredoskolaky.cz" class="public-contact-email">info@prostredoskolaky.cz <home-icon name="arrow-right" /></a></div>
          <dl><div><dt>Organizace</dt><dd>ProStředoškoláky, z. s.</dd></div><div><dt>IČO</dt><dd>02655047</dd></div><div><dt>Adresa</dt><dd>Kolová 1480/32<br>Praha 5 Radotín</dd></div><div><dt>Bankovní spojení</dt><dd>2200569794/2010</dd></div></dl>
        </div>
      </section>

      <public-history :history="history" />
    </main>
    <home-footer />
  </div>
</template>

<script>
import PublicHero from '@/components/public/PublicHero'
import PublicHistory from '@/components/public/PublicHistory'
import HomeFooter from '@/components/home/HomeFooter'
import HomeIcon from '@/components/home/HomeIcon'
import { team, history } from '@/components/public/aboutContent'

export default {
  name: 'about-us-page',
  metaInfo: {
    htmlAttrs: { lang: 'cs' },
    title: 'O nás',
    titleTemplate: null
  },
  components: { PublicHero, PublicHistory, HomeFooter, HomeIcon },
  data () {
    return {
      team,
      history,
      heroPhoto: { src: require('@/assets/about-us.png'), alt: 'Společná fotografie účastníků a organizátorů Středoškoláka roku', width: 2000, height: 692, position: '80% center' }
    }
  }
}
</script>
