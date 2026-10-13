<template>
  <div class="public-page university-award-page">
    <main id="home-main" tabindex="-1">
      <section class="hero" aria-labelledby="award-title">
        <div class="content hero-content">
          <div class="intro">
            <h1 id="award-title">Cena Vysokoškolák roku 2027</h1>
            <p>
              Jsme projekt, který hledá, podporuje a propojuje aktivní vysokoškoláky,
              kteří nad rámec studia podnikají, dobrovolničí, angažují se v neziskovkách,
              sportují nebo se věnují občanské participaci.
            </p>
            <div class="hero-actions">
              <a class="home-button home-button-award" href="https://forms.cloud.microsoft/e/XauCr8y6np">Chci ocenit</a>
              <a class="home-button home-button-award" href="https://www.instagram.com/vysokoskolak?stkn=MXFkMm9ycWNhNXpjcw==">Sleduj Instagram!</a>
            </div>
          </div>
          <img
            class="award-logo"
            src="~@/assets/vysokoskolak_roku/vs_roku_3.jpeg"
            alt="Logo Vysokoškolák roku"
            width="1080"
            height="1350"
            fetchpriority="high"
          >
        </div>
      </section>

      <section class="story" aria-labelledby="story-title">
        <div class="content story-content">
          <img
            class="story-image"
            src="~@/assets/vysokoskolak_roku/foto_popis.jpeg"
            alt="Přednášející a účastníci studentského setkání"
            loading="lazy"
            width="2048"
            height="1366"
          >
          <div class="story-copy">
            <h2 id="story-title">Od střední se hodně změnilo…</h2>
            <p>
              Matematický klokan, Biologická olympiáda, Chemická, Ekonomická,
              Dějepisná, Pythágoriáda, Prezentiáda, Zvaž vědu! a další stovky
              soutěží a příležitostí se potkat napříč republikou. Na vysoké to
              ale někam všechno zmizelo. Zbyly nám fakultní spolky, pivo po
              přednášce a práce??? Studentský prostor se individualizoval.
              Pojďme to probořit – potkat se – zase soutěžit – vytvářet týmy
              a spolupráce.
            </p>
            <a class="home-button home-button-award" href="https://forms.cloud.microsoft/e/XauCr8y6np">PŘIHLASTE SE DO VYSOKOŠKOLÁKA ROKU 2027</a>
          </div>
        </div>
      </section>

      <section class="contact" aria-labelledby="contact-title">
        <div class="content">
          <h2 id="contact-title">Kontakt</h2>
          <div class="contact-grid">
            <article class="contact-card">
              <img src="~@/assets/vysokoskolak_roku/tonda.jpeg" alt="Antonín Svoboda" loading="lazy" width="1080" height="1350">
              <div class="contact-details">
                <h3>Antonín Svoboda</h3>
                <p class="role">Koordinátor projektu a spoluprací</p>
                <div class="contact-links">
                  <a href="mailto:antonin.svoboda@prostredoskolaky.cz">antonin.svoboda<wbr>@prostredoskolaky.cz</a>
                  <a href="https://www.instagram.com/antony.freedom/" target="_blank" rel="noopener noreferrer">IG: @antony.freedom<span class="home-sr-only"> (otevře se v nové kartě)</span></a>
                  <a href="tel:+420605442685">+420 605 442 685</a>
                </div>
              </div>
            </article>
            <article class="contact-card">
              <img src="~@/assets/vysokoskolak_roku/kata.jpeg" alt="Kateřina Brouzdová" loading="lazy" width="1080" height="1350">
              <div class="contact-details">
                <h3>Kateřina Brouzdová</h3>
                <p class="role">Marketing &amp; Grafika</p>
                <div class="contact-links">
                  <a href="mailto:katerina.brouzdova@gmail.com">katerina.brouzdova<wbr>@gmail.com</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
    <home-footer :social-links="socialLinks"/>
  </div>
</template>

<script>
import HomeFooter from '../components/home/HomeFooter'
import { platformSocialLinks } from '../components/platform/presentation'

export default {
  name: 'university-award-2027-page',
  metaInfo: {
    title: 'Cena Vysokoškolák roku 2027',
    titleTemplate: null,
    meta: [
      { name: 'description', content: 'Cena Vysokoškolák roku 2027 propojuje aktivní vysokoškoláky, kteří se věnují projektům nad rámec studia.' }
    ]
  },
  components: { HomeFooter },
  data () { return { socialLinks: platformSocialLinks } }
}
</script>

<style lang="scss">
#app.public-shell .university-award-page {
  --award-purple: #752061;
  --award-purple-hover: #5f194f;
  .content { width: calc(100% - var(--home-gutter) * 2); max-width: 1200px; margin: 0 auto; padding: 0; }
  .hero { padding: 48px 0; border-bottom: 1px solid var(--home-line); background: linear-gradient(160deg, #fff 55%, #efeeff); }
  .hero-content { display: grid; grid-template-columns: minmax(0, 1fr) minmax(240px, 320px); align-items: center; gap: 48px; }
  .intro { min-width: 0; }
  h1 { max-width: 680px; font-size: clamp(32px, 3.8vw, 52px); line-height: 1.15; letter-spacing: -.035em; text-wrap: balance; }
  .intro p { max-width: 680px; margin-top: 24px; font-size: 18px; line-height: 1.6; color: var(--home-muted); }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 24px; }
  .hero-actions .home-button { min-height: 48px; padding: 12px 20px; font-size: 16px; border-radius: var(--home-control-radius); }
  .home-button-award { background: var(--award-purple); color: #fff; &:hover { background: var(--award-purple-hover); } }
  .award-logo { display: block; width: min(100%, 320px); height: auto; aspect-ratio: 1; object-fit: cover; object-position: center; border-radius: var(--home-radius); margin: 0 auto; }
  .story { padding: 96px 0; }
  .story-content { display: grid; grid-template-columns: 1.05fr 1fr; align-items: center; gap: 64px; }
  .story-image { display: block; width: 100%; height: auto; aspect-ratio: 3 / 2; object-fit: cover; object-position: center; border-radius: var(--home-radius); }
  .story-copy { min-width: 0; }
  .story-copy h2 { font-size: 40px; line-height: 1.15; letter-spacing: -.035em; }
  .story-copy p { margin: 24px 0 28px; font-size: 16px; line-height: 1.85; color: var(--home-muted); }
  .story-copy .home-button { max-width: 100%; font-size: 13px; line-height: 1.6; }
  .contact { padding: 72px 0 96px; border-top: 1px solid var(--home-line); background: #f7f5fb; }
  .contact h2 { font-size: 40px; line-height: 1.15; letter-spacing: -.035em; margin-bottom: 32px; }
  .contact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
  .contact-card { display: grid; grid-template-columns: 144px minmax(0, 1fr); align-items: start; gap: 24px; padding: 28px; border: 1px solid var(--home-line); border-radius: var(--home-radius); background: rgba(255, 255, 255, .45); }
  .contact-card img { width: 144px; height: auto; aspect-ratio: 4 / 5; object-fit: cover; object-position: center top; border-radius: 12px; }
  .contact-details { min-width: 0; }
  .contact-details h3 { font-size: 24px; line-height: 1.3; letter-spacing: -.025em; }
  .contact-details .role { margin: 10px 0 12px; font-size: 13px; line-height: 1.7; color: var(--home-muted); }
  .contact-links { display: flex; flex-direction: column; align-items: flex-start; gap: 4px; font-size: 14px; line-height: 1.7; overflow-wrap: anywhere; }
  .contact-links a { display: inline-flex; align-items: center; min-height: 44px; max-width: 100%; text-decoration: underline; text-underline-offset: 4px; }
  .home-footer h2 { font-size: 14px; line-height: 1.5; letter-spacing: 0; }
  @media (max-width: 1000px) {
    .hero-content { width: calc(100% - var(--home-gutter) * 2); }
    .hero-content, .story-content { gap: 40px; }
    .contact-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 800px) {
    .hero { padding: 32px 0 40px; }
    .hero-content { grid-template-columns: 1fr; gap: 24px; }
    .award-logo { order: -1; width: min(100%, 220px); }
    .hero-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 24px; }
    .hero-actions .home-button { min-height: 48px; padding: 12px 10px; font-size: 14px; border-radius: var(--home-control-radius); }
    .story { padding: 64px 0; }
    .story-content { grid-template-columns: 1fr; gap: 32px; }
    .story-copy h2 { font-size: 32px; }
    .contact { padding: 56px 0 64px; }
  }
  @media (max-width: 600px) {
    h1 { font-size: 30px; }
    .intro p { font-size: 16px; margin-top: 16px; }
    .contact h2 { font-size: 32px; }
    .contact-card { grid-template-columns: minmax(0, 1fr); gap: 20px; padding: 24px; text-align: center; }
    .contact-card img { margin: 0 auto; }
    .contact-links { align-items: center; }
    .contact-details h3 { font-size: 20px; }
    .contact-links { font-size: 13px; }
  }
}
</style>
