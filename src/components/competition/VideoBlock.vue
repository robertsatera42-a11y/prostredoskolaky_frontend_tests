<template>
  <section class="video-section" id="weekend">
    <div class="content">
    <h2>Víkend nejaktivnějších středoškoláků</h2>
    <h4><b>Prvních 25 středoškoláků</b> pozveme na víkendové setkání na horách. <b>Cílem víkendu je poznat další aktivní středoškoláky z celé republiky a něco společně zažít</b>. Potkáš se zde kromě dalších finalistů a týmu organizace (často podobně aktivní vrstevníci) i s finalisty z minulých let.</h4>
    <h4>Hned první večer vás rozdělíme do skupin a dostanete první úkoly. Už dopředu tě varujeme, že toho moc nenaspíš, ale srandy a zážitků bude tolik, že je ani nevstřebáš. Během víkendu zkusíš práci v různých týmech a na všemožných úkolech. <b>Pro většinu účastníků je to nejlepší víkend z celého roku a pro nás taky!</b> Inspirací a motivací chata doslova přetéká.</h4>
        <div class="iframe-container">
          <div class="video-block">
            <div class="description">Víkendové setkání 2020</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/IxyKAJxoBqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="video-block next">
            <iframe
              src="https://www.youtube.com/embed/AiXt5bak6fQ"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="description">Víkendové setkání 2019</div>
          </div>
          <div class="video-block next">
            <div class="description">Víkendové setkání 2018</div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3nEgsgYoCP0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'video-block'
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

section.video-section {
  padding: 20px 0 10px;
  position: relative;

    h2 {
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.2;
    padding-top: 20px;
  }

  h4 {
    padding-top: 20px;
    text-align: center;
    font-size: 1rem;
    line-height: 25px;
    font-weight: normal;
  }

  .iframe-container {
    margin: 50px auto;
    padding: 25px;
    background: #f2eded;
    border-radius: 9px;
    width: 780px;
    max-width: 100%;

    .video-block {
      display: flex;
      flex-direction: row;
      justify-content: center;

      @media (max-width: 700px) {
        flex-direction: column;
      }

      .description {
        font-size: 20px;
        text-align: left;
        padding: 120px 20px 0 20px;

        @media (max-width: 700px) {
          padding: 20px;
        }
      }

      iframe {
        border: none;
        display: flex;
        width: 560px;
        height: 315px;
        max-width: 100%;

        @media (max-width: 700px) {
          height: 200px;
        }
      }

      &.next {
        padding-top: 20px;
      }
    }
  }
}

</style>
