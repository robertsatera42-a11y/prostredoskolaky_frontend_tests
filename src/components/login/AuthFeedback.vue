<template>
  <div class="auth-feedback" :class="{ 'has-message': message, 'is-error': type === 'error' }" :role="type === 'error' ? 'alert' : 'status'" :aria-live="type === 'error' ? 'assertive' : 'polite'" aria-atomic="true"><p v-if="message">{{ message }}</p></div>
</template>

<script>
export default {
  name: 'AuthFeedback',
  props: { message: { type: String, default: '' }, type: { type: String, default: 'error' } }
}
</script>
