<template>
  <div class="platform-page auth-page">
    <main id="home-main" class="home-container auth-main" tabindex="-1">
      <div class="auth-card">
        <h1>Obnova hesla</h1>
        <p class="auth-description">Na zadanou adresu Vám zašleme email s proklikem, kde si budete moct změnit Vaše heslo.</p>
        <form id="auth-renew-form" class="auth-form" novalidate :aria-busy="pending ? 'true' : 'false'" @submit.prevent="renewPassword">
          <auth-field label="Zadejte Váš email" input-id="auth-renew-email" :error="errorsEmail">
            <b-input id="auth-renew-email" name="email" type="email" autocomplete="email" placeholder="novak@email.cz" v-model="email" :disabled="pending" :use-html5-validation="false" :aria-invalid="errorsEmail.type ? 'true' : 'false'" :aria-describedby="errorsEmail.message ? 'auth-renew-email-error' : null" @focus="focusedEmail = true" @blur="focusedEmail = false" />
          </auth-field>
          <auth-feedback :type="messageType" :message="message" />
          <button type="submit" class="home-button home-button-orange auth-submit" :disabled="pending" @mousedown.prevent>{{ pending ? 'Odesílám…' : 'Odeslat' }}</button>
          <router-link to="/login" class="home-text-link auth-back-link">Zpět na přihlášení</router-link>
        </form>
      </div>
    </main>
    <home-footer />
  </div>
</template>

<script>
import fb from '../../firebase.js'
import { required, email } from 'vuelidate/lib/validators'
import HomeFooter from '../../components/home/HomeFooter'
import AuthField from '../../components/login/AuthField'
import AuthFeedback from '../../components/login/AuthFeedback'
import { focusField, fieldError, invalidFormMessage, requestErrorMessage } from '../../components/login/authPresentation'

export default {
  name: 'renew-password-page',
  metaInfo: { title: 'Obnova hesla' },
  components: {
    HomeFooter,
    AuthField,
    AuthFeedback
  },
  data () {
    return {
      email: '',
      focusedEmail: '',
      submitStatus: '',
      message: '',
      messageType: 'error',
      pending: false
    }
  },
  computed: {
    errorsEmail: function () {
      return fieldError(this, this.$v.email, 'focusedEmail')
    }
  },
  methods: {
    async renewPassword () {
      if (this.pending) return
      this.message = ''
      this.messageType = 'error'
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.message = invalidFormMessage
        focusField(this, 'auth-renew-email')
        return
      }
      this.submitStatus = ''
      this.pending = true
      try {
        const status = await fb.renewPassword(this.email)
        if (status !== 'OK') this.message = status
        else {
          this.messageType = 'success'
          this.message = 'Email byl odeslán. Podívejte se do své pošty.'
          this.cleanForm()
        }
      } catch (error) {
        this.message = requestErrorMessage
      } finally {
        this.pending = false
      }
    },
    cleanForm () {
      this.email = ''
      this.focusedEmail = ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>

<style lang="scss">
@import '../../components/login/auth';
</style>
