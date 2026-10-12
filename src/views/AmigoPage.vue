<template>
  <div class="public-page amigo-page">
    <main id="home-main" tabindex="-1">
      <public-hero title="AMIGO" :lead="'Mentor, který ti\npomůže s rozletem.'" description="Ať už chceš poradit se svým projektem, hledáš tipy, jak dělat něco navíc, nebo si chceš popovídat o životě po střední. Spojíme tě s někým, kdo už má podobné zkušenosti." :photo="heroPhoto">
        <a :href="applicationHref" class="home-button home-button-orange" target="_blank" rel="noopener noreferrer">Přihlas se do programu <home-icon name="external" /><span class="home-sr-only"> (otevře se v nové kartě)</span></a>
        <a href="#mentori" class="home-text-link">Poznej mentory <home-icon name="arrow-right" /></a>
      </public-hero>

      <section id="jak-to-funguje" class="home-section public-program" aria-labelledby="program-title">
        <div class="home-container">
          <div class="public-editorial-grid">
            <div><p class="home-eyebrow">Zkušenosti, které nemusíš získávat sám</p><h2 id="program-title">Jak AMIGO funguje</h2></div>
            <div class="public-prose">
              <p>Dali jsme dohromady aktivní bývalé středoškoláky, aby ti pomohli s tvým rozletem. Naši mentoři jsou finalisté Středoškoláka roku nebo další inspirativní studenti. Jejich zkušenosti ti mohou ušetřit čas i nervy.</p>
              <p>Během osobních nebo online setkání můžeš řešit projekty, stáže, soutěže, plánování času i studium v zahraničí. Mentor ti nabídne zpětnou vazbu, svůj pohled na věc a podporu v tom, co právě potřebuješ.</p>
            </div>
          </div>
          <ol class="public-steps">
            <li><span>01</span><h3>Vyber si mentora</h3><p>Prohlédni si medailonky a v přihlášce vyber alespoň jednoho mentora, se kterým by sis chtěl povídat.</p></li>
            <li><span>02</span><h3>Vyplň přihlášku</h3><p>Odešli ji nejpozději <time datetime="2026-11-01T23:59:00+01:00">1. listopadu 2026 ve 23:59</time>. Najdeme oboustranně vhodnou dvojici a dáme ti vědět.</p></li>
            <li><span>03</span><h3>Potkávejte se</h3><p>Několikrát si zavoláte nebo se sejdete podle svých možností. Budeme s vámi v kontaktu, abychom ověřili, že jde vše hladce.</p></li>
          </ol>
          <p class="public-program-note">Pokud zjistíte, že si nesedíte, dej nám vědět a podíváme se po možné náhradě.</p>
        </div>
      </section>

      <mentor-grid :mentors="mentors" />
      <section class="public-invitation" aria-labelledby="amigo-join-title">
        <div class="home-container public-invitation-panel">
          <div><p class="home-eyebrow">První krok je na tobě</p><h2 id="amigo-join-title">S kým chceš svůj rozlet probrat?</h2><p>Vyber si mentora a napiš nám v přihlášce, s čím ti může pomoct.</p></div>
          <a :href="detailsApplicationHref" class="home-button home-button-teal" target="_blank" rel="noopener noreferrer">Vyplnit přihlášku <home-icon name="external" /><span class="home-sr-only"> (otevře se v nové kartě)</span></a>
        </div>
      </section>
    </main>
    <home-footer />
  </div>
</template>

<script>
import PublicHero from '@/components/public/PublicHero'
import MentorGrid from '@/components/public/MentorGrid'
import HomeFooter from '@/components/home/HomeFooter'
import HomeIcon from '@/components/home/HomeIcon'
import { mentors, amigoApplicationHref, amigoDetailsApplicationHref } from '@/components/public/amigoContent'

export default {
  name: 'amigo-page',
  metaInfo: {
    htmlAttrs: { lang: 'cs' },
    title: 'AMIGO',
    titleTemplate: '%s | mentoringový program pro středoškoláky',
    meta: [
      { name: 'description', content: 'Dali jsme dohromady ty nejaktivnější bývalé středoškoláky, aby ti pomohli s tvým rozletem. Ať už chceš poradit se svým projektem, hledáš rady a tipy jak dělat něco navíc a nebo si chceš popovídat, co s životem po střední.' }
    ]
  },
  components: { PublicHero, MentorGrid, HomeFooter, HomeIcon },
  data () {
    return {
      mentors,
      applicationHref: amigoApplicationHref,
      detailsApplicationHref: amigoDetailsApplicationHref,
      heroPhoto: { src: require('@/assets/amigo-page.jpg'), alt: 'Studenti při společné aktivitě na venkovním setkání', width: 1439, height: 490 }
    }
  }
}
</script>
