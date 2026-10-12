<template>
  <form id="auth-login-form" class="auth-form" novalidate :aria-busy="pending ? 'true' : 'false'" @submit.prevent="login">
    <auth-field label="Email" input-id="auth-login-email" :error="errorsEmail">
      <b-input id="auth-login-email" name="email" type="email" autocomplete="username" v-model="email" :disabled="pending" :use-html5-validation="false" :aria-invalid="errorsEmail.type ? 'true' : 'false'" :aria-describedby="errorsEmail.message ? 'auth-login-email-error' : null" @focus="focusedEmail = true" @blur="focusedEmail = false" />
    </auth-field>
    <auth-field label="Heslo" input-id="auth-login-password" :error="errorsPassword">
      <auth-password input-id="auth-login-password" autocomplete="current-password" v-model="password" :disabled="pending" :invalid="Boolean(errorsPassword.message)" @focus="focusedPassword = true" @blur="focusedPassword = false" />
    </auth-field>
    <auth-feedback :message="message" />
    <button type="submit" class="home-button home-button-orange auth-submit" :disabled="pending" @mousedown.prevent>{{ pending ? 'Přihlašuji…' : 'Přihlásit se' }}</button>
    <router-link class="home-text-link auth-back-link" to="/renew-password">Obnovit zapomenuté heslo</router-link>
  </form>
</template>

<script>
import fb from '../../firebase'
import router from '../../router'
import { required } from 'vuelidate/lib/validators'
import AuthField from './AuthField'
import AuthPassword from './AuthPassword'
import AuthFeedback from './AuthFeedback'
import { focusField, fieldError, invalidFormMessage, requestErrorMessage } from './authPresentation'
import { IS_LOGGED_IN } from '../../types'
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  components: { AuthField, AuthPassword, AuthFeedback },
  data () {
    return {
      email: '',
      password: '',
      focusedEmail: '',
      focusedPassword: '',
      submitStatus: '',
      message: '',
      pending: false
    }
  },
  computed: {
    ...mapGetters([IS_LOGGED_IN]),
    errorsEmail: function () {
      return fieldError(this, this.$v.email, 'focusedEmail')
    },
    errorsPassword: function () {
      return fieldError(this, this.$v.password, 'focusedPassword')
    },
    isUserLogged: function () {
      return this.isLoggedIn
    }
  },
  watch: {
    isUserLogged: function () {
      if (this.$route && this.$route.query && this.$route.query.redirect) {
        return router.push(`/${this.$route.query.redirect}`)
      }
    }
  },
  methods: {
    async login () {
      if (this.pending) return
      this.message = ''
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.message = invalidFormMessage
        focusField(this, this.$v.email.$invalid ? 'auth-login-email' : 'auth-login-password')
        return
      }
      this.submitStatus = ''
      this.pending = true
      this.$emit('busy-change', true)
      try {
        const status = await fb.loginUser(this.email, this.password)
        if (status !== 'OK') this.message = status
        else {
          this.cleanForm()
          if (!this.$route.query.redirect) return router.push('/')
        }
      } catch (error) {
        this.message = requestErrorMessage
      } finally {
        this.pending = false
        this.$emit('busy-change', false)
      }
    },
    cleanForm () {
      this.email = ''
      this.password = ''
      this.focusedEmail = ''
      this.focusedPassword = ''
    }
  },
  validations: {
    email: {
      required
    },
    password: {
      required
    }
  }
}
</script>
