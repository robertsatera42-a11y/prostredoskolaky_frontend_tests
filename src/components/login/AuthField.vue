<template>
  <b-field :label="label" :label-for="inputId" :type="error.type" :addons="false">
    <slot />
    <p v-if="error.message" :id="inputId + '-error'" class="help is-danger">{{ error.message }}</p>
  </b-field>
</template>

<script>
export default {
  name: 'AuthField',
  props: {
    label: { type: String, required: true },
    inputId: { type: String, required: true },
    error: { type: Object, default: () => ({ type: '', message: '' }) }
  }
}
</script>
