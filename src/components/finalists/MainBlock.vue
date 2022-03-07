<template>
  <section class="main-section">
    <div class="content">
      <div class="half">
        <h1>Finalisté soutěže Středoškolák roku</h1>
        <p>
          Každý rok vybereme a oceníme ty nejaktivnější středoškoláky v České republice.<br/>
        </p>
      </div>
      <span class="image-overlay"/>
      <span class="overlay"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'main-block'
}
</script>

<style scoped lang="scss">
  section.main-section {
    padding: 100px 0 60px;
    position: relative;

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
      background: url(~@/assets/finalists-intro.jpg) center;
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
