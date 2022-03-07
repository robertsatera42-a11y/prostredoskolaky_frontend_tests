<template>
  <section class="prices-section">
    <div class="content">
      <!-- <h2>
        Hrajeme o hodnotné ceny
      </h2>
      <p style="text-align:center">Brzy je zveřejníme</p> -->
      <!-- <div class="prices">
        <div class="prices-arrow">
          <div></div>
          <div></div>
        </div>
        <div class="prices-content">
        <div>
          <img loading="lazy" src="~@/assets/prices/xbox.png">
          <div class="description">Herní konzole XBox One</div>
        </div>
        <div>
          <img loading="lazy" src="~@/assets/prices/tedx.png">
          <div class="description">Lístky na konferenci TedX</div>
        </div>
        <div>
          <img loading="lazy" src="~@/assets/prices/bookstore.png">
          <div class="description">Poukázky do knihkupectví</div>
        </div>
        <div>
          <img loading="lazy" src="~@/assets/prices/forbes1.jpg">
          <div class="description">Předplatné časopisu Forbes</div>
        </div>
        <div>
          <img loading="lazy" src="~@/assets/prices/gift.png">
          <div class="description">A další zajímavé ceny...</div>
        </div>
      </div>
      </div>!-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'prices-block'
}
</script>

<style scoped lang="scss">
  @keyframes bounce {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-5px);
    }
  }
  @keyframes bounce_rotate {
    from {
      transform: translateX(0px) rotate(180deg);
    }
    to {
      transform: translateX(5px) rotate(180deg);
    }
  }

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

  section.prices-section {
    padding: 20px 0 20px;
    position: relative;

    h2 {
      text-align: center;
      font-size: 30px;
      font-weight: normal;
      line-height: 1.2;
    }

    .prices {
      position: relative;

      .prices-arrow {
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
        width: 100%;

        > div {
          position: absolute;
          display: inline-block;
          background: url(~@/assets/svg/arrow.svg) no-repeat left center;
          background-size: contain;
          width: 30px;
          height: 30px;
          cursor: pointer;
          left: -35px;
          animation: bounce 1s infinite alternate;
          &:nth-child(2) {
            animation: bounce_rotate 1s infinite alternate;
            right: -35px;
            left: initial;
          }
          @media (max-width: 800px) {
            left: -25px;
            height: 20px;
            &:nth-child(2) {
              right: -25px;
            }
          }
        }
      }

      .prices-content {
        overflow: auto;
        white-space: nowrap;
        margin: auto;

        > div {
          margin: 30px;
          width: 150px;
          display: inline-block;

          img {
            width: 100%;
            max-width: 150px;
            height: auto;
            border-radius: 100%;
            margin-bottom: 25px;
          }

          .description {
            white-space: initial;
          }
        }
      }
    }
  }
</style>
