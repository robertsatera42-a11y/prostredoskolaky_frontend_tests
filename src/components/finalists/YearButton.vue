<template>
  <span :class="classValue" @click="goToYear()">{{ display }}</span>
</template>
<script>
export default {
  name: 'year-button',
  props: ['year', 'display'],
  data () {
    return {
      classValue: 'button'
    }
  },
  mounted () {
    this.classValue = this.year === +this.display ? 'button active' : 'button'
  },
  watch: {
    year: function () {
      this.classValue = this.year === +this.display ? 'button active' : 'button'
    }
  },
  methods: {
    goToYear () {
      this.$emit('changeYear', this.display)
    }
  }
}
</script>
<style scoped lang="scss">

  .button {
        font-family: 'NunitoLight', sans-serif;
        font-weight: normal;
        border-radius: 6px;
        font-size: 14px;
        transition: .3s;
        padding: 6px 12px;
        background: #FFF;
        margin: 0 10px 10px;

        &:first-child {
          margin-left: 0;
        }

        &.active {
          background: #F06027;
          border-color: #F06027;
          color: white;
        }
      }
</style>
