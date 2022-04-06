<template>
  <section class="main-section">
    <div class="content">
      <div class="half">
        <h1>Soutěž<span/>Středoškolák roku 2022</h1>
        <p>
          Všechny informace k soutěži naleznete na nových webových stránkách<br/>
        </p>
        <!-- <button
        class="button is-active is-primary"
        @click="goToAndTrack('/form', 'button', 'sign_up_top')"
        >Přihlásit se</button> -->
        <button
        class="button is-active is-primary"
        @click="goToStredoskolakWebsite"
        >StredoskolakRoku.cz</button>
        <!-- <button
        class="button is-active is-primary"
        disabled
        >Přihlašování do soutěže bylo ukončeno</button> -->
      </div>
      <span class="image-overlay"/>
      <video autoplay muted loop>
        <source src="~@/assets/background-video.mp4" type="video/mp4">
      </video>
      <span class="overlay"/>
    </div>
  </section>
</template>

<script>
import router from '../../router'
import tracking from '../../utils/tracking'

export default {
  name: 'main-block',
  methods: {
    goToAndTrack (path, action, label) {
      tracking.track('homepage', action, label)
      router.push(path)
    },

    goToFinalists () {
      router.push('/finaliste')
    },

    goToStredoskolakWebsite () {
      window.open('https://stredoskolakroku.cz')
    }
  }
}
</script>

<style scoped lang="scss">
  section.main-section {
    padding: 100px 0 60px;
    position: relative;
    overflow: hidden;

    .button {
      font-size: 18px;
      padding: 0 18px;
      font-family: 'NunitoLight', sans-serif;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(160deg, rgba(127, 97, 250, 0.8) 25%, rgba(215, 109, 124, 0.8) 75%);
      z-index: -1;
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(~@/assets/contest.png) center;
      background-size: cover;
      z-index: -1;
    }
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      object-fit: cover;
    }

    .content {
      width: 80%;
      max-width: 1200px;
      margin: 80px auto;
      padding: 40px 40px 0;

      @media (max-width: 800px) {
        width: 90%;
        padding: 40px 20px 0;
      }

      .half {
        max-width: 50%;

        @media (max-width: 900px) {
          max-width: 100%;
        }
      }

      h1, p {
        text-align: left;
        color: #FFF;
      }

      h1 {
        font-size: 34px;
        font-weight: normal;

        span {
          display: block;
        }
      }
      p {
        margin-top: 60px;
        font-size: 20px;
      }
    }
  }
</style>
