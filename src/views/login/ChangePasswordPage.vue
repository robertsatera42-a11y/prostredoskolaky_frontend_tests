<template>
  <div class="platform-page auth-page change-password-page">
    <main id="home-main" class="home-container profile-main" tabindex="-1">
      <header class="profile-heading">
        <p class="home-eyebrow">Můj účet</p>
        <h1>Změnit heslo</h1>
      </header>
      <div class="profile-card">
        <p class="auth-description">Změnte své heslo zadáním původního hesla a nového hesla.</p>
        <form id="auth-change-form" class="auth-form" novalidate :aria-busy="pending ? 'true' : 'false'" @submit.prevent="changePassword">
          <auth-field label="Vaše heslo" input-id="auth-change-old-password" :error="errorsOldPasswd">
            <auth-password input-id="auth-change-old-password" label="původní heslo" autocomplete="current-password" v-model="oldPasswd" :disabled="pending" :invalid="Boolean(errorsOldPasswd.message)" @focus="focusedOldPasswd = true" @blur="focusedOldPasswd = false" />
          </auth-field>
          <auth-field label="Nové heslo" input-id="auth-change-password" :error="errorsPasswd">
            <auth-password input-id="auth-change-password" label="nové heslo" autocomplete="new-password" v-model="passwd" :disabled="pending" :invalid="Boolean(errorsPasswd.message)" @focus="focusedPasswd = true" @blur="focusedPasswd = false" />
          </auth-field>
          <auth-field label="Nové heslo znovu" input-id="auth-change-password-repeat" :error="errorsRetypePasswd">
            <auth-password input-id="auth-change-password-repeat" label="potvrzení nového hesla" autocomplete="new-password" v-model="retypePasswd" :disabled="pending" :invalid="Boolean(errorsRetypePasswd.message)" @focus="focusedRetypePasswd = true" @blur="focusedRetypePasswd = false" />
          </auth-field>
          <auth-feedback :type="messageType" :message="message" />
          <div class="change-password-actions">
            <button type="button" class="home-button home-button-outline" @click="goToProfile">Zpět</button>
            <button type="submit" class="home-button home-button-orange" :disabled="pending" @mousedown.prevent>{{ pending ? 'Ukládám…' : 'Uložit' }}</button>
          </div>
        </form>
      </div>
    </main>
    <home-footer />
  </div>
</template>

<script>
import fb from '../../firebase'
import { USER } from '../../types'
import { mapGetters } from 'vuex'
import router from '../../router'
import { required, sameAs } from 'vuelidate/lib/validators'
import HomeFooter from '../../components/home/HomeFooter'
import AuthField from '../../components/login/AuthField'
import AuthPassword from '../../components/login/AuthPassword'
import AuthFeedback from '../../components/login/AuthFeedback'
import { focusField, fieldError, invalidFormMessage, requestErrorMessage } from '../../components/login/authPresentation'

export default {
  name: 'change-password-page',
  metaInfo: { title: 'Změnit heslo' },
  components: { HomeFooter, AuthField, AuthPassword, AuthFeedback },
  data () {
    return {
      oldPasswd: '',
      passwd: '',
      retypePasswd: '',
      focusedOldPasswd: '',
      focusedPasswd: '',
      focusedRetypePasswd: '',
      submitStatus: '',
      message: '',
      messageType: 'error',
      pending: false
    }
  },
  computed: {
    ...mapGetters([USER]),
    errorsOldPasswd: function () {
      return fieldError(this, this.$v.oldPasswd, 'focusedOldPasswd')
    },
    errorsPasswd: function () {
      return fieldError(this, this.$v.passwd, 'focusedPasswd')
    },
    errorsRetypePasswd: function () {
      return fieldError(this, this.$v.retypePasswd, 'focusedRetypePasswd')
    }
  },
  methods: {
    async changePassword () {
      if (this.pending) return
      this.message = ''
      this.messageType = 'error'
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.message = invalidFormMessage
        const inputId = this.$v.oldPasswd.$invalid ? 'auth-change-old-password'
          : this.$v.passwd.$invalid ? 'auth-change-password' : 'auth-change-password-repeat'
        focusField(this, inputId)
        return
      }
      this.submitStatus = ''
      this.pending = true
      try {
        const status = await fb.changePassword(this.user.email, this.oldPasswd, this.passwd)
        if (status !== 'OK') {
          this.message = status || requestErrorMessage
          return
        }
        this.messageType = 'success'
        this.message = 'Heslo bylo uloženo'
        this.cleanForm()
      } catch (error) {
        this.message = requestErrorMessage
      } finally {
        this.pending = false
      }
    },
    goToProfile () {
      router.push('/profil')
    },
    cleanForm () {
      this.oldPasswd = ''
      this.passwd = ''
      this.retypePasswd = ''
      this.focusedOldPasswd = ''
      this.focusedPasswd = ''
      this.focusedRetypePasswd = ''
    }
  },
  validations: {
    oldPasswd: {
      required
    },
    passwd: {
      required
    },
    retypePasswd: {
      sameAsPassword: sameAs('passwd')
    }
  }

}
</script>

<style lang="scss">
@import '../../components/login/auth';

#app.platform-shell .change-password-page .change-password-actions {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--home-line);

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
}
</style>
