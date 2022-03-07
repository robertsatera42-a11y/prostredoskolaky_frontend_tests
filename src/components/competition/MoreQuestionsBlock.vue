<template>
  <section class="more-questions-section">
    <div class="content">
      <div class="box">
        <div class="description">
          Chceš se ještě na něco zeptat? Napiš nám.
        </div>
        <div class="mail">info@prostredoskolaky.cz</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'more-questions-block'
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

section.more-questions-section {
  padding: 10px 0 20px;
  position: relative;

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
    margin-bottom: 15px;
  }
  .mail {
    font-size: 20px;
    word-break: break-all;
  }
}
</style>
