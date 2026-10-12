<template>
  <div class="auth-password">
    <input :id="inputId" class="input" :class="{ 'is-danger': invalid }" :type="visible ? 'text' : 'password'" :value="value" :name="inputId" :autocomplete="autocomplete" :disabled="disabled" :aria-invalid="invalid ? 'true' : 'false'" :aria-describedby="invalid ? inputId + '-error' : null" @input="$emit('input', $event.target.value)" @focus="$emit('focus')" @blur="$emit('blur')">
    <button type="button" :disabled="disabled" :aria-controls="inputId" :aria-pressed="visible ? 'true' : 'false'" :aria-label="(visible ? 'Skrýt ' : 'Zobrazit ') + label" @click="visible = !visible">{{ visible ? 'Skrýt' : 'Zobrazit' }}</button>
  </div>
</template>

<script>
export default {
  name: 'AuthPassword',
  props: {
    value: { type: String, default: '' },
    inputId: { type: String, required: true },
    label: { type: String, default: 'heslo' },
    autocomplete: { type: String, required: true },
    disabled: Boolean,
    invalid: Boolean
  },
  data () { return { visible: false } }
}
</script>
