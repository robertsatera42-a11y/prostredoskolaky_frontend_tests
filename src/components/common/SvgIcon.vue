<template>
  <i v-html="require(`!!html-loader!./../../assets/svg/${icon}.svg`)" @click="$emit('click-event')"></i>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: ['icon']
}
</script>
