<template>
  <div>
    <section v-if="showSuccess" class="auth-success" aria-labelledby="auth-signup-success">
      <img src="~@/assets/tick.png" alt="" width="64" height="64">
      <h2 id="auth-signup-success" tabindex="-1">Děkujeme, byli jste úspěšně zaregistrováni.</h2>
      <p>Zaslali jsme do Vašeho e-mailu potvrzovací link.</p>
      <button type="button" class="home-button home-button-orange auth-submit" @click="showLogin">Přejít na přihlášení</button>
    </section>
    <form v-else id="auth-signup-form" class="auth-form" novalidate :aria-busy="pending ? 'true' : 'false'" @submit.prevent="signUp">
      <auth-field label="Vyberte své povolání" input-id="auth-signup-occupation">
        <b-select id="auth-signup-occupation" name="occupation" v-model="user.occupation" expanded :disabled="pending"><option v-for="option in jobs" :value="option" :key="option">{{ option }}</option></b-select>
      </auth-field>
      <div class="auth-name-grid">
        <auth-field label="Jméno" input-id="auth-signup-first-name" :error="errorsFirstName">
          <b-input id="auth-signup-first-name" name="firstName" autocomplete="given-name" placeholder="Jan" v-model="user.firstName" :disabled="pending" :use-html5-validation="false" :aria-invalid="errorsFirstName.type ? 'true' : 'false'" :aria-describedby="errorsFirstName.message ? 'auth-signup-first-name-error' : null" @focus="focusedFirstName = true" @blur="focusedFirstName = false" />
        </auth-field>
        <auth-field label="Příjmení" input-id="auth-signup-last-name" :error="errorsLastName">
          <b-input id="auth-signup-last-name" name="lastName" autocomplete="family-name" placeholder="Novak" v-model="user.lastName" :disabled="pending" :use-html5-validation="false" :aria-invalid="errorsLastName.type ? 'true' : 'false'" :aria-describedby="errorsLastName.message ? 'auth-signup-last-name-error' : null" @focus="focusedLastName = true" @blur="focusedLastName = false" />
        </auth-field>
      </div>
      <auth-field label="Email" input-id="auth-signup-email" :error="errorsEmail">
        <b-input id="auth-signup-email" name="email" type="email" autocomplete="email" placeholder="novak@email.cz" v-model="user.email" :disabled="pending" :use-html5-validation="false" :aria-invalid="errorsEmail.type ? 'true' : 'false'" :aria-describedby="errorsEmail.message ? 'auth-signup-email-error' : null" @focus="focusedEmail = true" @blur="focusedEmail = false" />
      </auth-field>
      <auth-field label="Heslo" input-id="auth-signup-password" :error="errorsPasswd">
        <auth-password input-id="auth-signup-password" autocomplete="new-password" v-model="passwd" :disabled="pending" :invalid="Boolean(errorsPasswd.message)" @focus="focusedPasswd = true" @blur="focusedPasswd = false" />
      </auth-field>
      <auth-field label="Heslo znovu" input-id="auth-signup-password-repeat" :error="errorsPasswdRetype">
        <auth-password input-id="auth-signup-password-repeat" label="zopakované heslo" autocomplete="new-password" v-model="passwdRetype" :disabled="pending" :invalid="Boolean(errorsPasswdRetype.message)" @focus="focusedPasswdRetype = true" @blur="focusedPasswdRetype = false" />
      </auth-field>
      <div class="auth-consents">
        <label class="auth-check" for="auth-signup-newsletter"><input id="auth-signup-newsletter" name="newsletter" type="checkbox" v-model="sendNewsletter" :disabled="pending"><span>Chci si nechat zasílat pravidelnou dávku mimoškolních aktivit do svého e-mailu.</span></label>
        <label class="auth-check" for="auth-signup-consent"><input id="auth-signup-consent" name="consent" type="checkbox" v-model="giveConsent" :disabled="pending" :aria-invalid="!giveConsent && message === 'Musíte souhlasit se zpracováním údajů.' ? 'true' : 'false'" :aria-describedby="!giveConsent && message ? 'auth-signup-feedback' : null"><span>Souhlasím se zpracováním svých <a href="https://drive.google.com/file/d/1-MDM8wdW7xctBT3kmrq6FSI_48nl-2BB/view?usp=sharing" target="_blank" rel="noopener noreferrer">osobních údajů<span class="home-sr-only"> (otevře se v nové kartě)</span></a>.</span></label>
      </div>
      <auth-feedback id="auth-signup-feedback" :message="message" />
      <button type="submit" class="home-button home-button-orange auth-submit" :disabled="pending" @mousedown.prevent>{{ pending ? 'Registruji…' : 'Zaregistrovat se' }}</button>
    </form>
  </div>
</template>

<script>
import fb from '../../firebase.js'
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { UPDATE_USER } from '../../types'
import { mapMutations } from 'vuex'
import AuthField from './AuthField'
import AuthPassword from './AuthPassword'
import AuthFeedback from './AuthFeedback'
import { focusField, fieldError, invalidFormMessage, requestErrorMessage } from './authPresentation'
import config from '../../config/default'

export default {
  name: 'sign-up',
  components: { AuthField, AuthPassword, AuthFeedback },
  data () {
    return {
      user: {
        occupation: 'student',
        firstName: '',
        lastName: '',
        email: ''
      },
      sendNewsletter: true,
      giveConsent: false,
      passwd: '',
      focusedFirstName: '',
      focusedLastName: '',
      focusedEmail: '',
      focusedPasswd: '',
      focusedPasswdRetype: '',
      passwdRetype: '',
      submitStatus: '',
      message: '',
      showSuccess: false,
      pending: false,
      jobs: config.consts.jobs
    }
  },
  computed: {
    errorsFirstName: function () {
      return fieldError(this, this.$v.user.firstName, 'focusedFirstName')
    },
    errorsLastName: function () {
      return fieldError(this, this.$v.user.lastName, 'focusedLastName')
    },
    errorsEmail: function () {
      return fieldError(this, this.$v.user.email, 'focusedEmail')
    },
    errorsPasswd: function () {
      return fieldError(this, this.$v.passwd, 'focusedPasswd')
    },
    errorsPasswdRetype: function () {
      return fieldError(this, this.$v.passwdRetype, 'focusedPasswdRetype')
    }
  },
  methods: {
    ...mapMutations([UPDATE_USER]),
    async signUp () {
      if (this.pending) return
      this.message = ''
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.message = invalidFormMessage
        const fields = [
          [this.$v.user.firstName, 'auth-signup-first-name'],
          [this.$v.user.lastName, 'auth-signup-last-name'],
          [this.$v.user.email, 'auth-signup-email'],
          [this.$v.passwd, 'auth-signup-password'],
          [this.$v.passwdRetype, 'auth-signup-password-repeat']
        ]
        focusField(this, fields.find(([validation]) => validation.$invalid)[1])
        return
      }
      if (!this.giveConsent) {
        this.message = 'Musíte souhlasit se zpracováním údajů.'
        focusField(this, 'auth-signup-consent')
        return
      }
      this.submitStatus = ''
      this.pending = true
      this.$emit('busy-change', true)
      try {
        const status = await fb.createUser({
          occupation: this.user.occupation,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          sendNewsletter: this.sendNewsletter
        }, this.passwd)
        if (status !== 'OK') this.message = status
        else {
          this.updateUser({ firstName: this.user.firstName, lastName: this.user.lastName, email: this.user.email })
          this.cleanForm()
          this.showSuccess = true
          focusField(this, 'auth-signup-success')
        }
      } catch (error) {
        this.message = requestErrorMessage
      } finally {
        this.pending = false
        this.$emit('busy-change', false)
      }
    },
    showLogin () {
      this.goBack()
      this.$emit('show-login')
    },
    goBack () {
      this.showSuccess = false
      this.submitStatus = ''
    },
    cleanForm () {
      this.user.firstName = ''
      this.user.lastName = ''
      this.user.email = ''
      this.passwd = ''
      this.passwdRetype = ''
      this.sendNewsletter = false
      this.focusedFirstName = ''
      this.focusedLastName = ''
      this.focusedEmail = ''
      this.focusedPasswd = ''
      this.focusedPasswdRetype = ''
    }
  },
  validations: {
    user: {
      firstName: {
        required
      },
      lastName: {
        required
      },
      email: {
        required,
        email
      }
    },
    passwd: {
      required
    },
    passwdRetype: {
      required,
      sameAsPassword: sameAs('passwd')
    }
  }
}
</script>
