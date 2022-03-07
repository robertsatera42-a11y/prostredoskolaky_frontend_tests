<template>
    <span v-if="message">
        <div class="message-text" style="color: red">{{ message }}</div>
    </span>
</template>
<script>
export default {
  name: 'error-message',
  props: {
    message: String
  }
}
</script>
<style scoped lang="scss">
.message-text {
  font-size: 15px;
  padding-left: 10px;
}
</style>
