<template>
  <div class="wrapper">
  <div class="signup-wrapper">
    <h2 class="title">Přihlášení</h2>
    <b-field
      label="Email"
      :type="errorsEmail.type"
      :message="errorsEmail.message">
      <b-input
        class="form__input"
        type="email"
        v-model="email"
        v-focus="focusedEmail"
        @focus="focusedEmail = true"
        @blur="focusedEmail = false"></b-input>
    </b-field>
    <b-field
      label="Heslo"
      :type="errorsPassword.type"
      :message="errorsPassword.message">
      <b-input
        type="password"
        class="form__input"
        v-focus="focusedPassword"
        @focus="focusedPassword = true"
        @blur="focusedPassword = false"
        v-model="password"></b-input>
    </b-field>
    <message type="error" :message="message"/>
    <button class="button is-primary" @click="login">Přihlásit se</button>
    <div class="forgotten-password">
      <a @click="goToForgottenPassword">Obnovit zapomenuté heslo</a>
    </div>
  </div>
  <div class="signup-wrapper second">
    <h3>Registrujte se na našem webu a získejte řadu výhod!</h3>
    <ul>
      <li>Přístup do databáze mimoškolních aktivit s více než 300 vzdělávacími akcemi, soutěžemi a dobrovolnictvím</li>
      <li>Pravidelnou dávku aktivit do svého e-mailu.</li>
      <li>Možnost účastnit se našich akcí Středoškolák roku, Amigo a Free Spirit.</li>
    </ul>
  </div>
  </div>
</template>

<script>
import fb from '../../firebase'
import router from '../../router'
import ValidationUtils from '../../utils/validationUtils'
import { required } from 'vuelidate/lib/validators'
import { mixin as focusMixin } from 'vue-focus'
import Message from '../common/Message'
import { IS_LOGGED_IN } from '../../types'
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  components: { Message },
  mixins: [focusMixin],
  data () {
    return {
      email: '',
      password: '',
      focusedEmail: '',
      focusedPassword: '',
      submitStatus: '',
      message: ''
    }
  },
  computed: {
    ...mapGetters([IS_LOGGED_IN]),
    errorsEmail: function () {
      this.focusedEmail
      this.$v.email.$invalid
      this.submitStatus
      return ValidationUtils.validateBasic(this, 'email', 'focusedEmail')
    },
    errorsPassword: function () {
      this.focusedPassword
      this.$v.password.$invalid
      this.submitStatus
      return ValidationUtils.validateBasic(this, 'password', 'focusedPassword')
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
      this.message = ''
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = ''
        const status = await fb.loginUser(this.email, this.password)
        if (status !== 'OK') {
          this.message = status
        } else {
          this.cleanForm()
          if (!this.$route.query.redirect) {
            return router.push('/')
          }
        }
      }
    },
    cleanForm () {
      this.email = ''
      this.password = ''
      this.focusedEmail = ''
      this.focusedPassword = ''
    },
    goToForgottenPassword () {
      router.push('/renew-password')
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

<style scoped lang="scss">

.title {
  font-size: 30px;
}

.button {
  margin-bottom: 15px;
}
.wrapper {
  max-width: 43%;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media (max-width: 800px) {
    max-width: 100%;
    margin-right: 0;
  }
}
.signup-wrapper {
  padding: 30px 30px;
  background: white;
  border-radius: 10px;
  margin-bottom: 20px;

  &.second {
    ul {
        margin-top: 0;
        list-style: none;
    }
    li::before {
      content: "\2022";
      color: #f06027;
      width: 20px;
      margin-left: -20px;
      display: inline-block;
    }
  }

  @media (max-width: 800px) {
    padding: 30px 20px;
  }

  @media (max-width: 650px) {
    max-width: 100%;
  }
}
.forgotten-password {
  margin-top: 10px
}
</style>
