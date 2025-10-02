<template>
  <section class="main-section">
    <div class="content">
      <div class="half">
        <h1>Mentoringový program AMIGO</h1>
        <!-- <p>
          Vyber si jednoho z našich mentorů, který ti pomůže dostat se na novou úroveň.<br/>
        </p> -->
        <p>
          Letošní kolo právě probíhá, přihlašování už proto bylo ukončeno. Příští rok na podzim však otevřeme další.<br/>
        </p>
        <!-- <button class="button is-active is-primary" @click="goToForm">Přihlas se do programu</button> -->
        <button
        class="button is-active is-primary"
        disabled="true"
        >Přihlašování bylo ukončeno</button>
      </div>
      <span class="image-overlay"/>
      <span class="overlay"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'main-block',
  methods: {
    goToForm () {
      window.open('https://forms.gle/pw6q2u53ztvYa1CW9', '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
  section.main-section {
    padding: 100px 0 60px;
    position: relative;

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
      background: url(~@/assets/amigo-page.jpg) center;
      background-size: cover;
      z-index: -1;
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
