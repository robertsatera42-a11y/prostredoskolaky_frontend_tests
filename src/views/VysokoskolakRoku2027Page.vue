<template>
  <div class="university-award-page">
    <main>
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
              <a class="cta-button" href="https://forms.cloud.microsoft/e/XauCr8y6np">Chci ocenit</a>
              <a class="cta-button" href="https://www.instagram.com/vysokoskolak?stkn=MXFkMm9ycWNhNXpjcw==">Sleduj Instagram!</a>
            </div>
          </div>
          <img
            class="award-logo"
            src="~@/assets/vysokoskolak_roku/vs_roku_3.jpeg"
            alt="Logo Vysokoškolák roku"
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
            <a class="cta-button" href="https://forms.cloud.microsoft/e/XauCr8y6np">PŘIHLASTE SE DO VYSOKOŠKOLÁKA ROKU 2027</a>
          </div>
        </div>
      </section>

      <section class="contact" aria-labelledby="contact-title">
        <div class="content">
          <h2 id="contact-title">Kontakt</h2>
          <div class="contact-grid">
            <article class="contact-card">
              <img src="~@/assets/vysokoskolak_roku/tonda.jpeg" alt="Antonín Svoboda" loading="lazy">
              <div class="contact-details">
                <h3>Antonín Svoboda</h3>
                <p class="role">Koordinátor projektu a spoluprací</p>
                <div class="contact-links">
                  <a href="mailto:antonin.svoboda@prostredoskolaky.cz">antonin.svoboda<wbr>@prostredoskolaky.cz</a>
                  <span>IG: @antony.freedom</span>
                  <a href="tel:+420605442685">+420 605 442 685</a>
                </div>
              </div>
            </article>
            <article class="contact-card">
              <img src="~@/assets/vysokoskolak_roku/kata.jpeg" alt="Kateřina Brouzdová" loading="lazy">
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
    <footer-block/>
  </div>
</template>

<script>
import FooterBlock from '../components/common/Footer'

export default {
  name: 'university-award-2027-page',
  metaInfo: {
    title: 'Cena Vysokoškolák roku 2027',
    titleTemplate: null,
    meta: [
      { name: 'description', content: 'Cena Vysokoškolák roku 2027 propojuje aktivní vysokoškoláky, kteří se věnují projektům nad rámec studia.' }
    ]
  },
  components: { FooterBlock }
}
</script>

<style scoped lang="scss">
.university-award-page {
  .content {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;

    @media (max-width: 800px) {
      width: 90%;
      padding: 0 20px;
    }
  }

  .hero {
    padding: 170px 0 90px;
    background: linear-gradient(160deg, #fff 55%, #efeeff);

    @media (max-width: 800px) {
      padding: 125px 0 65px;
    }
  }

  .hero-content {
    display: flex;
    align-items: center;
    gap: 60px;

    @media (max-width: 800px) {
      flex-direction: column;
      align-items: stretch;
      gap: 36px;
    }
  }

  .intro {
    flex: 1 1 60%;
  }

  h1 {
    max-width: 650px;
    font-size: clamp(34px, 4vw, 52px);
    font-weight: normal;
    line-height: 1.15;
  }

  .intro p {
    max-width: 690px;
    margin: 28px 0 0;
    font-family: 'NunitoLight', sans-serif;
    font-size: 20px;
    line-height: 1.5;

    @media (max-width: 800px) {
      font-size: 18px;
    }
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 36px;
    margin-top: 32px;

    @media (max-width: 800px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;

      .cta-button {
        padding: 10px 8px;
        font-size: 14px;
      }
    }
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
    padding: 13px 24px;
    border-radius: 4px;
    background: #752061;
    color: #fff;
    font-size: 18px;
    line-height: 1.35;
    text-align: center;

    &:hover, &:focus {
      background: #5f194f;
      color: #fff;
    }

    &:focus-visible {
      outline: 3px solid #752061;
      outline-offset: 3px;
    }
  }

  .award-logo {
    display: block;
    flex: 0 0 300px;
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;

    @media (max-width: 800px) {
      order: -1;
      flex-basis: auto;
      width: min(100%, 260px);
      height: 260px;
      margin: 0 auto;
    }
  }

  .story {
    padding: 90px 0;

    @media (max-width: 800px) {
      padding: 65px 0;
    }
  }

  .story-content {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    align-items: center;
    gap: 64px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  }

  .story-image {
    display: block;
    width: 100%;
    height: 520px;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;

    @media (max-width: 900px) {
      height: auto;
      aspect-ratio: 3 / 2;
    }
  }

  .story-copy {
    h2 {
      font-size: clamp(30px, 3vw, 42px);
      font-weight: normal;
      line-height: 1.2;
    }

    p {
      margin: 26px 0 30px;
      font-family: 'NunitoLight', sans-serif;
      font-size: 18px;
      line-height: 1.55;
    }

    .cta-button {
      max-width: 100%;
      font-size: 16px;
    }
  }

  .contact {
    padding: 75px 0 90px;
    background: #f7f5fb;

    h2 {
      margin-bottom: 36px;
      font-size: 34px;
      font-weight: normal;
    }
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }

  .contact-card {
    display: grid;
    grid-template-columns: 150px minmax(0, 1fr);
    gap: 22px;
    padding: 24px;
    border-radius: 16px;
    background: #fff;

    img {
      display: block;
      width: 150px;
      height: 190px;
      object-fit: cover;
      object-position: center top;
      border-radius: 12px;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 18px;

      img {
        width: 180px;
        height: 180px;
      }
    }
  }

  .contact-details {
    min-width: 0;

    h3 {
      margin: 0 0 8px;
      color: #000;
      font-size: 24px;
      font-weight: normal;
      line-height: 1.2;
    }

    .role {
      margin: 0 0 18px;
      font-family: 'NunitoLight', sans-serif;
      font-size: 16px;
      line-height: 1.4;
    }
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-size: 16px;
    overflow-wrap: anywhere;

    a {
      text-decoration: underline;
    }
  }
}
</style>
