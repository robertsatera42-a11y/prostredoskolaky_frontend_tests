<template>
  <div class="message-wrapper">
    <div :class="messageClass">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'message',
  props: {
    message: String,
    type: String
  },
  computed: {
    messageClass: function () {
      if (this.type === 'error') {
        return 'message-text error'
      } else {
        return 'message-text'
      }
    }
  }
}
</script>
<style scoped lang="scss">

.message-wrapper {
  height: 30px;
  .message-text {
    font-size: 15px;
    font-style: italic;
    color: #23d160;
    &.error {
      color: #ff3860;
    }
  }
}
</style>
