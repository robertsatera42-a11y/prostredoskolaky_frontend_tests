<template>
  <section class="signup-section">
    <div class="content">
      <div class="box">
        <!-- <div class="description">Už na nic nečekej a pojď se přihlásit.</div> -->
        <!-- <div class="description">Další ročník začal 4. 4. 2021</div> -->
        <!-- <div class="description">Podívej se na příběhy letošních finalistů</div> -->
        <!-- <button class="button is-active is-primary" @click="goToAndTrack('/form', 'button', 'sign_up_bottom')">Přihlásit se</button> -->
        <button class="button is-active is-primary" @click="goToFinalists">Finalisté 2021</button>
        <!-- <button class="button is-active is-primary" disabled>Přihlašování do soutěže bylo ukončeno</button> -->
      </div>
    </div>
  </section>
</template>

<script>
import router from '../../router'
import tracking from '../../utils/tracking'

export default {
  name: 'sign-up-now-block',
  methods: {
    goToAndTrack (path, action, label) {
      tracking.track('homepage', action, label)
      router.push(path)
    },
    goToFinalists () {
      router.push('finaliste')
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  max-width: 1200px;
  margin: 10px auto;
  padding: 10px 40px 0;

  @media (max-width: 800px) {
    width: 90%;
    padding: 0 20px 0;
  }
}

section.signup-section {
  padding: 20px 0 20px;
  position: relative;

  .button {
      font-size: 18px;
      padding: 0 18px;
      font-family: 'NunitoLight', sans-serif;
    }

  .box {
    margin-top: 15px;
    padding: 35px 50px;
    background: linear-gradient(
      165deg,
      rgba(127, 97, 250, 0.5) 3%,
      rgba(191, 106, 159, 0.65) 92%,
      rgba(215, 109, 124, 0.7) 105%
    );
    border-radius: 16px;
    color: #fff;
    text-align: center;
  }

  .description {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.2;
  }
}
</style>
