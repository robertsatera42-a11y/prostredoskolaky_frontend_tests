<template>
  <div>
    <svg-icon @click-event="clearInput" icon="close"></svg-icon>
  </div>
</template>
<script>
import SvgIcon from '../common/SvgIcon'
import bus, { CLEAR_ERRORS } from './Bus'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: { SvgIcon },
  name: 'clear-box',
  methods: {
    clearInput () {
      let inputs = document.querySelectorAll(`input[name=${this.name}]`)
      inputs.forEach(input => {
        input.value = ''
        input.dispatchEvent(new Event('input'))
      })
      bus.$emit(CLEAR_ERRORS)
    }
  }
}
</script>
<style>

</style>
