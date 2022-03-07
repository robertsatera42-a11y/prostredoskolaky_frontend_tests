<template>
  <section class="photo-section" id="academy">
    <div class="content">
      <h2>Vyhlášení a Akademie Středoškoláka roku</h2>
      <h4><b>Prvních 65 středoškoláků</b> pozveme na společnou <b>dvoudenní vzdělávací akademii</b> do konferenčního centra společnosti Microsoft v Praze. Začneme společným seznámením a pak následuje řada workshopů a přednášek na témata soft skills, podnikání nebo třeba IT. Večer strávíme společně neformální formou, abys měl čas se se všemi <b>vzájemně poznat i mimo akademii.</b></h4>
      <h4>Druhý den navážeme ve formě debat, třeba s CEO Microsoftu, bývalými finalisty soutěže a dalšími zajímavými hosty. Následuje <b>předání ocenění pro všechny aktivní z TOP65</b>. Celý den zakončíme <b>slavnostním galavečerem, kde vyhlásíme pořadí prvních deseti finalistů a oceníme i zbylých 15 z TOP25</b>. Součástí večera je i debata se vzácnými hosty a je to vždy úžasné zakončení celého ročníku.</h4>
      <div class="picture-wrapper">
          <div class="overlay first">
            <div class="overlay-image"></div>
            <div class="overlay-background"></div>
          </div>
          <div class="overlay fifth">
            <div class="overlay-image"></div>
            <div class="overlay-background"></div>
          </div>
          <div class="overlay third">
            <div class="overlay-image"></div>
            <div class="overlay-background"></div>
          </div>
          <div class="overlay seventh">
            <div class="overlay-image"></div>
            <div class="overlay-background"></div>
          </div>
        </div>
        <div class="picture-wrapper">
          <div class="overlay fourth">
            <div class="overlay-image"></div>
            <div class="overlay-background"></div>
          </div>
          <div class="overlay second">
            <div class="overlay-image"></div>
            <div class="overlay-background"></div>
          </div>
          <div class="overlay sixth">
            <div class="overlay-image"></div>
            <div class="overlay-background"></div>
          </div>
          <div class="overlay action" @click="showGallery">
            <div class="overlay-text">
              <div class="text">Více fotek</div>
              <div class="slide-down"></div>
            </div>
            <div class="overlay-background"></div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pictures-block',
  methods: {
    showGallery () {
      window.open('https://www.facebook.com/prostredoskolaky/media_set/?set=a.2225617094226091', '_blank')
    }
  }
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

section.photo-section {
  padding: 5px 0 10px;
  position: relative;

  h2 {
    text-align: center;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.2;
  }

  h4 {
    padding-top: 20px;
    text-align: center;
    font-size: 1rem;
    line-height: 25px;
    font-weight: normal;
  }

  .picture-wrapper {
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .overlay {
      position: relative;
      width: 200px;
      height: 200px;

      @media (max-width: 700px) {
          width: 70px;
          height: 70px;
        }

      .overlay-background {
        position: absolute;
        background: linear-gradient(
          160deg,
          rgba(127, 97, 250, 0.2) 25%,
          rgba(215, 109, 124, 0.2) 75%
        );
        z-index: -1;
        top: 0;
        left: 0;
        height: 88%;
        width: 88%;
      }

      .overlay-image {
        position: absolute;
        width: 88%;
        height: 88%;
        left: 0;
        top: 0;
        z-index: -1;
        background-size: cover;
        background-repeat: no-repeat;
      }

      &.first {
        .overlay-image {
          background-image: url(~@/assets/competition/img_1.jpg);
        }
      }
      &.second {
        .overlay-image {
          background-image: url(~@/assets/competition/img_2.jpg);
        }
      }
      &.third {
        .overlay-image {
          background-image: url(~@/assets/competition/img_3.jpg);
        }
      }
      &.fourth {
        .overlay-image {
          background-image: url(~@/assets/competition/img_4.jpg);
        }
      }
      &.fifth {
        .overlay-image {
          background-image: url(~@/assets/competition/img_5.jpg);
        }
      }
      &.sixth {
        .overlay-image {
          background-image: url(~@/assets/competition/img_6.jpg);
        }
      }
      &.seventh {
        .overlay-image {
          background-image: url(~@/assets/competition/img_7.jpg);
        }
      }
      &.action {
        cursor: pointer;
        .overlay-background {
          background: #FF767B;
          background-color: #FF767B;
        }
        .overlay-text {
          width: 88%;
          text-align: center;
          padding: 30px 10px;

          @media (max-width: 700px) {
            padding: 5px;
          }

          .text {
            padding-bottom: 10px;
            color: white;
            font-size: 20px;

            @media (max-width: 700px) {
              font-size: 10px;
            }
          }

          .slide-down {
            width: 50px;
            height: 50px;
            margin: auto;
            background: url(~@/assets/arrow-down.svg) center;
            background-size: cover;
            transform: rotate(270deg);
            cursor: pointer;

            @media (max-width: 700px) {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}

</style>
