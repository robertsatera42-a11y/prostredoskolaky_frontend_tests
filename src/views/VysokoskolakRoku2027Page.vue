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
            <a class="apply-link" href="https://forms.cloud.microsoft/e/XauCr8y6np">Přihlásit se</a>
          </div>
          <img
            class="award-logo"
            src="~@/assets/vysokoskolak_roku/vs_roku_2.jpeg"
            alt="Logo Vysokoškolák roku"
          >
        </div>
      </section>

      <section class="contact" aria-labelledby="contact-title">
        <div class="content">
          <h2 id="contact-title">Kontakt</h2>
          <a href="mailto:antonin.svoboda@prostredoskolaky.cz">antonin.svoboda@prostredoskolaky.cz</a>
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

  p {
    max-width: 690px;
    margin: 28px 0 32px;
    font-family: 'NunitoLight', sans-serif;
    font-size: 20px;
    line-height: 1.5;

    @media (max-width: 800px) {
      font-size: 18px;
    }
  }

  .apply-link {
    display: inline-block;
    padding: 13px 24px;
    border-radius: 4px;
    background: #f06027;
    color: #220800;
    font-size: 18px;

    &:hover, &:focus {
      background: #da521c;
      color: #220800;
    }

    &:focus-visible {
      outline: 3px solid #220800;
      outline-offset: 3px;
    }
  }

  .award-logo {
    display: block;
    flex: 0 0 300px;
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: center bottom;
    border-radius: 12px;

    @media (max-width: 800px) {
      flex-basis: auto;
      width: min(100%, 260px);
      height: 260px;
      margin: 0 auto;
    }
  }

  .contact {
    padding: 60px 0 70px;

    h2 {
      margin-bottom: 16px;
      font-size: 30px;
      font-weight: normal;
    }

    a {
      font-size: 18px;
      text-decoration: underline;
    }
  }
}
</style>
