<template>
  <section class="contact-section">
    <div class="content">
      <h3>Základní údaje</h3>
      <div>
        ProStředoškoláky, z.s.<br/>
        IČO: 02655047<br/>
        Adresa: Kolová 1480/32, Praha 5 Radotín<br/>
        Bankovní spojení: 2200569794/2010
      </div>

      <h2>
        Kontakt
      </h2>
      <div>info&#64;prostredoskolaky.cz</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact-block'
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
    padding: 40px 20px 0;
  }
}

section.contact-section {
  padding: 10px 0 20px;
  position: relative;

  h2, h3 {
    text-align: left;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.2;
  }
  h3 {
    font-size: 24px;
    color: #F06027;
  }

  p {
    margin-bottom: 40px;
  }
}
</style>
