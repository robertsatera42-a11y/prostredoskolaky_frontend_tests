<template>
  <div class="forgotten-password-page">
    <div class="overlay"></div>

    <section class="main-container">
      <div class="content">
        <div class="renew-password">
          <b-field
              label="Zadejte Váš email"
              :type="errorsEmail.type"
              :message="errorsEmail.message">
            <b-input
                type="email"
                class="form__input"
                v-model="email"
                v-focus="focusedEmail"
                @focus="focusedEmail = true"
                @blur="focusedEmail = false"
                placeholder="novak@email.cz"></b-input>
          </b-field>
          <message :type="messageType" :message="message"/>
          <button @click="goToLogin" class="button">Zpět</button>
          <button @click="renewPassword" class="button is-primary">Odeslat</button>
          <div>Na zadanou adresu Vám zašleme email s proklikem, kde si budete moct změnit Vaše heslo.</div>
          <div>{{message}}</div>
        </div>
      </div>
    </section>

    <footer-block/>

  </div>
</template>

<script>
import fb from '../../firebase.js'
import ValidationUtils from '../../utils/validationUtils'
import { required, email } from 'vuelidate/lib/validators'
import { mixin as focusMixin } from 'vue-focus'
import router from '../../router'
import FooterBlock from '../../components/common/Footer'
import Message from '../../components/common/Message'

export default {
  name: 'renew-password-page',
  mixins: [focusMixin],
  components: {
    FooterBlock,
    Message
  },
  data () {
    return {
      email: '',
      focusedEmail: '',
      submitStatus: '',
      message: '',
      messageType: 'error'
    }
  },
  computed: {
    errorsEmail: function () {
      this.focusedEmail
      this.$v.email.$invalid
      this.submitStatus
      return ValidationUtils.validateBasic(this, 'email', 'focusedEmail')
    }
  },
  methods: {
    async renewPassword () {
      this.message = ''
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = ''
        const status = await fb.renewPassword(this.email)
        if (status !== 'OK') {
          this.messageType = 'error'
          this.message = status
        } else {
          this.messageType = 'success'
          this.message = 'Email byl odeslán. Podívejte se do své pošty.'
          this.cleanForm()
        }
      }
    },
    goToLogin () {
      router.push('/login')
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

<style scoped lang="scss">
.forgotten-password-page {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 72%;
  background: linear-gradient(160deg, rgba(127, 97, 250, 0.8) 25%, rgba(215, 109, 124, 0.8) 75%);
  z-index: -1;
  opacity: .25
}
.content {
  width: 80%;
  max-width: 1200px;
  margin: 60px auto;
  padding: 40px 40px 0;
}

.main-container {
  padding: 100px 0 20px;
  min-height: 100vh;
  position: relative;
  display: flex;

  @media (max-width: 600px) {
    padding: 100px 0 50px;
  }

  .content {
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
      width: 90%;
      padding: 20px;
    }
  }
}

.renew-password {
  max-width: 50%;
  width: 100%;
  margin: auto;
  background: white;
  border-radius: 10px;
  padding: 30px;

  button {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 650px) {
    max-width: 100%;
  }
}
</style>
