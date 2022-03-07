<template>
  <div class="wrapper">
    <div v-if="showSuccess" class="login-wrapper">
      <div class="success-message">
        <div class="tick"></div>
        <div class="text">Děkujeme, byli jste úspěšně zaregistrováni.</div>
        <p>Zaslali jsme do Vašeho e-mailu potvrzovací link.</p>
        <button class="button" @click="goBack">Zpět</button>
      </div>
    </div>
    <div v-else class="login-wrapper">
      <h2 class="title">Registrace</h2>
      <b-field
        label="Vyberte své povolání"
      >
        <b-select
          v-model="user.occupation"
          expanded
        >
          <option v-for="option in jobs" :value="option" :key="option">{{ option }}</option>
        </b-select>
      </b-field>
      <b-field
          label="Jméno"
          :type="errorsFirstName.type"
          :message="errorsFirstName.message">
        <b-input
            class="form__input"
            v-model="user.firstName"
            v-focus="focusedFirstName"
            @focus="focusedFirstName = true"
            @blur="focusedFirstName = false"
            placeholder="Jan"></b-input>
      </b-field>
      <b-field
          label="Příjmení"
          :type="errorsLastName.type"
          :message="errorsLastName.message">
        <b-input
            class="form__input"
            v-model="user.lastName"
            v-focus="focusedLastName"
            @focus="focusedLastName = true"
            @blur="focusedLastName = false"
            placeholder="Novak"></b-input>
      </b-field>
      <b-field
          label="Email"
          :type="errorsEmail.type"
          :message="errorsEmail.message">
        <b-input
            class="form__input"
            v-model="user.email"
            v-focus="focusedEmail"
            @focus="focusedEmail = true"
            @blur="focusedEmail = false"
            placeholder="novak@email.cz"></b-input>
      </b-field>
      <b-field
          label="Heslo"
          :type="errorsPasswd.type"
          :message="errorsPasswd.message">
        <b-input
            type="password"
            class="form__input"
            v-model="passwd"
            v-focus="focusedPasswd"
            @focus="focusedPasswd = true"
            @blur="focusedPasswd = false"></b-input>
      </b-field>
      <b-field
          label="Heslo znovu"
          :type="errorsPasswdRetype.type"
          :message="errorsPasswdRetype.message">
        <b-input
            type="password"
            class="form__input"
            v-model="passwdRetype"
            v-focus="focusedPasswdRetype"
            @focus="focusedPasswdRetype = true"
            @blur="focusedPasswdRetype = false"></b-input>
      </b-field>
      <b-checkbox v-model="sendNewsletter" class="newsletter">Chci si nechat zasílat pravidelnou dávku mimoškolních aktivit do svého e-mailu.</b-checkbox>
      <b-checkbox v-model="giveConsent" style="margin-left:0" class="newsletter">Souhlasím se zpracováním svých <a href="https://drive.google.com/file/d/1-MDM8wdW7xctBT3kmrq6FSI_48nl-2BB/view?usp=sharing" target="_blank">osobních údajů</a>.</b-checkbox>
      <message type="error" :message="message"/>
      <button class="button is-primary" @click="signUp">Zaregistrovat se</button>
    </div>
  </div>
</template>

<script>
import fb from '../../firebase.js'
import ValidationUtils from '../../utils/validationUtils'
import { required, email, sameAs } from 'vuelidate/lib/validators'
import { UPDATE_USER } from '../../types'
import { mapMutations } from 'vuex'
import { mixin as focusMixin } from 'vue-focus'
import Message from '../common/Message'
import config from '../../config/default'

export default {
  name: 'sign-up',
  components: { Message },
  mixins: [focusMixin],
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
      jobs: config.consts.jobs
    }
  },
  computed: {
    errorsFirstName: function () {
      this.focusedFirstName
      this.$v.user.firstName.$invalid
      this.submitStatus
      return ValidationUtils.validate(this, 'firstName', 'focusedFirstName')
    },
    errorsLastName: function () {
      this.focusedLastName
      this.$v.user.lastName.$invalid
      this.submitStatus
      return ValidationUtils.validate(this, 'lastName', 'focusedLastName')
    },
    errorsEmail: function () {
      this.focusedEmail
      this.$v.user.email.$invalid
      this.submitStatus
      return ValidationUtils.validate(this, 'email', 'focusedEmail')
    },
    errorsPasswd: function () {
      this.focusedPasswd
      this.$v.passwd.$invalid
      this.submitStatus
      return ValidationUtils.validateBasic(this, 'passwd', 'focusedPasswd')
    },
    errorsPasswdRetype: function () {
      this.focusedPasswdRetype
      this.$v.passwdRetype.$invalid
      this.submitStatus
      return ValidationUtils.validateBasic(this, 'passwdRetype', 'focusedPasswdRetype')
    }
  },
  methods: {
    ...mapMutations([UPDATE_USER]),
    async signUp () {
      this.message = ''
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else if (!this.giveConsent) {
        this.message = 'Musíte souhlasit se zpracováním údajů.'
      } else {
        this.submitStatus = ''
        const status = await fb.createUser({
          occupation: this.user.occupation,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          sendNewsletter: this.sendNewsletter
        }, this.passwd)
        if (status !== 'OK') {
          this.message = status
        } else {
          this.updateUser({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email
          })
          this.cleanForm()
          this.showSuccess = true
        }
      }
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

<style scoped lang="scss">
.title {
  font-size: 30px;
}

.button {
  margin: 20px 0;
}

.wrapper {
  max-width: 43%;
  height: 779px;
  background: white;
  border-radius: 10px;

  @media (max-width: 650px) {
    max-width: 100%;
    margin-top: 180px;
  }

  .login-wrapper {
    padding: 30px 30px;

    .success-message {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 160px;

      .tick {
        background-image: url(~@/assets/tick.png);
        background-size: cover;
        background-position: center;
        width: 100px;
        height: 100px;
      }
      .text {
        padding-top: 20px;
        font-size: 20px;
      }
    }

    @media (max-width: 800px) {
      padding: 30px 20px;
    }
  }
  .newsletter {
    margin-bottom: 10px
  }

}
</style>
