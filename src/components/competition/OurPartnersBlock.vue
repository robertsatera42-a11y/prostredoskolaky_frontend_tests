<template>
  <section class="our-partners-section">
    <div class="content">
      <h2>Hlavní partneři</h2>
      <div class="partner-logos">
        <a href="https://www.praha.eu/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/praha.png"></a>
        <a href="https://www.ddmp6.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/ddm6.png"></a>
        <a href="https://www.ctenipomaha.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/cteni.png"></a>
        <a href="https://www.nadacepreciosa.cz/" target="_blank"><img style="max-height:36px" loading="lazy" src="~@/assets/partners/preciosa.png"></a>
      </div>
      <h2>Další partneři</h2>
      <div class="partner-logos">
        <a href="https://www.akka-technologies.com/czech-republic" target="_blank"><img loading="lazy" src="~@/assets/partners/Akka_logo-RVB2.png"></a>
        <a href="http://www.bedrichov-ubytovani.cz" target="_blank"><img loading="lazy" style="max-height: 70px;" src="~@/assets/balada.png"></a>
        <a href="http://www.balletschoolprague.com/cs/" target="_blank"><img loading="lazy" src="~@/assets/partners/fbs.jpeg"></a>
        <a href="https://www.potiskol.cz/" target="_blank"><img loading="lazy" src="~@/assets/partners/potiskol.png"></a>
      </div>
      <!--
      <div class="partner-logos">
        <img loading="lazy" src="~@/assets/partners/via.jpeg">
        <img loading="lazy" style="max-height: 60px;" src="~@/assets/partners/UN_logo.jpg">
        <img loading="lazy" src="~@/assets/partners/la.png">
        <img loading="lazy" style="max-height: 70px;" src="~@/assets/partners/CIIRC.jpg">
        <img loading="lazy" style="max-height: 70px;" src="~@/assets/partners/jablotron.png">
      </div>
      -->
      <h2>Dárci cen</h2>
      <div class="partner-logos">
        <img loading="lazy" style="max-height: 90px" src="~@/assets/partners/impacthub.png">
        <img loading="lazy" style="max-height: 30px" src="~@/assets/partners/narodnidivadlo.jpg">
        <img loading="lazy" src="~@/assets/partners/studiohrdinu.jpg">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'our-partners-block'
}
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  max-width: 1200px;
  margin: 10px auto;
  padding: 20px 40px 0;

  @media (max-width: 800px) {
    width: 90%;
    padding: 0 20px 0;
  }
}

section.our-partners-section {
  padding: 20px 0 60px;
  position: relative;

  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.2;
  }

  .partner-logos {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 20px;

    img {
      max-height: 55px;
      margin: 0 20px 20px;

      @media (max-width: 800px) {
        margin: 0 0 25px;
        max-width: 180px;
      }
    }
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
}
</style>
