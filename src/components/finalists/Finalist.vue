<template>
  <section class="finalists">
    <div v-if="right" class="flex mobile-reverse">
      <div class="flex-1">
        <img loading="lazy" :src="src" alt>
      </div>

      <div class="flex-2 padding-left">
        <div class="step max-width-80">
          <div class="step-no">{{place}}. místo</div>
          <div class="step-title">{{name}}</div>
          <p class="step-description">
            <slot></slot>
          </p>
        </div>
      </div>
    </div>

    <div v-else class="flex">
      <div class="flex-2 second padding-left">
        <div class="step max-width-80">
          <div class="step-no">{{place}}. místo</div>
          <div class="step-title">{{name}}</div>
          <p class="step-description">
            <slot></slot>
          </p>
        </div>
      </div>
      <div class="flex-1">
        <img loading="lazy" :src="src" alt>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'finalist',
  props: ['name', 'place', 'image', 'right'],
  computed: {
    src: function () {
      return require(`../../assets/finalists/${this.image}`)
    }
  }
}
</script>

<style scoped lang="scss">
.finalists {

  .flex {
    display: flex;
    flex-direction: row;
    margin-bottom: 100px;

    @media (max-width: 600px) {
      flex-direction: column;
      margin-bottom: 40px;

      &.mobile-reverse {
        flex-direction: column-reverse;
      }
    }

    .max-width {
      &-50 {
        max-width: 50%;

        @media (max-width: 800px) {
          max-width: 80%;
          margin: auto;
        }
      }
      &-80 {
        max-width: 80%;

        @media (max-width: 600px) {
          margin: auto;
        }
        @media (max-width: 500px) {
          max-width: 100%;
        }
      }
    }

    .flex-1 {
      flex: 1;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      @media (max-width: 800px) {
        padding: 0 !important;
        &:nth-child(2) {
          margin: 20px;
        }
        img {
          margin: auto;
          max-width: 80%;
        }
      }
      @media (max-width: 500px) {
        margin-right: 0 !important;
        margin-left: 0 !important;
      }

      &.right {
        text-align: right;
      }
      &.left {
        text-align: left;
      }
      &.padding-left {
        padding-left: 100px;
        &-2 {
          padding-left: 200px;
        }

        @media (max-width: 800px) {
          &:first-child {
            padding-left: 0;
          }
          &:not(:first-child) {
            padding-left: 30px;
          }
          &-2 {
            padding-left: 60px;
          }
        }
      }
      &.padding-right {
        padding-right: 100px;
      }
    }
    .flex-2 {
      flex: 2;
      align-items: center;
      display: flex;

      @media (max-width: 800px) {
        padding: 0 !important;
        &:nth-child(2) {
          margin-top: 20px;
        }
        img {
          margin: auto;
          max-width: 80%;
        }
      }

      @media (max-width: 600px) {
        &:nth-child(2) {
          margin: 20px;
        }
      }

      @media (max-width: 500px) {
        margin-right: 0 !important;
        margin-left: 0 !important;
      }

      &.right {
        text-align: right;
      }
      &.left {
        text-align: left;
      }
      &.padding-left {
        padding-left: 120px;

        @media (max-width: 800px) {
          padding-left: 50px;
        }
      }
      &.padding-right {
        padding-right: 100px;
      }

      &.second {
        text-align: right;
      }
    }
  }
  .step {
    .step-no {
      color: #f06027;
    }
    .step-title {
      font-size: 30px;
      line-height: 1.15;
    }
    .step-description {
      margin-top: 50px;

      @media (min-width: 600px) {
          text-align: justify;
      }
    }
  }
}
</style>
