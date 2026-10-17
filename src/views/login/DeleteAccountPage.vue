<template>
  <div class="delete-account-page">
    <section class="main-container">
      <div class="content">
        <h2 class="title">Smazání účtu</h2>
        <b-field
            label="Vaše heslo"
            :type="errorsPassword.type"
            :message="errorsPassword.message">
          <b-input
              type="password"
              class="form__input"
              v-model="password"
              v-focus="focusedPasswd"
              @focus="focusedPasswd = true"
              @blur="focusedPasswd = false"></b-input>
        </b-field>
        <message :type="messageType" :message="message"/>
        <div class="buttons">
          <button class="button" @click="goBack">Zpět</button>
          <button class="button is-primary" @click="submit">Vymazat účet</button>
        </div>
      </div>
    </section>

    <footer-block/>

  </div>
</template>

<script>
import router from '../../router'
import ValidationUtils from '../../utils/validationUtils'
import { required } from 'vuelidate/lib/validators'
import { mixin as focusMixin } from 'vue-focus'
import fb from '../../firebase'
import { USER, DELETE_USER } from '../../types'
import { mapGetters, mapActions } from 'vuex'
import FooterBlock from '../../components/common/Footer'
import Message from '../../components/common/Message'
import { requestErrorMessage } from '../../components/login/authPresentation'

export default {
  name: 'delete-account-page',
  mixins: [focusMixin],
  components: {
    FooterBlock,
    Message
  },
  data () {
    return {
      password: '',
      focusedPasswd: '',
      submitStatus: '',
      message: '',
      messageType: 'error'
    }
  },
  computed: {
    ...mapGetters([USER]),
    errorsPassword: function () {
      this.focusedPasswd
      this.$v.password.$invalid
      this.submitStatus
      return ValidationUtils.validateBasic(this, 'password', 'focusedPasswd')
    }
  },
  methods: {
    ...mapActions([DELETE_USER]),
    goBack () {
      router.push('/profil')
    },
    async submit () {
      this.message = ''
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = ''
        try {
          const status = await fb.reauthenticate(this.user.email, this.password)
          if (status !== 'OK') {
            this.messageType = 'error'
            this.message = status
            return
          }
          await this.deleteUser()
          this.messageType = 'success'
          this.message = 'Účet byl vymazán'
          router.push('/')
        } catch (error) {
          this.messageType = 'error'
          this.message = requestErrorMessage
        }
      }
    }
  },
  validations: {
    password: {
      required
    }
  }

}
</script>

<style scoped lang="scss">
.delete-account-page {
  position: relative;
}

.title {
  font-size: 30px;
  color: #F06027;
}

.content {
  width: 80%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px 40px 0;
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
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
      width: 90%;
      padding: 20px;
    }

    @media (max-width: 650px) {
      flex-direction: column;
    }

    .field {
      width: 100%;
      max-width: 50%;

      @media (max-width: 650px) {
        max-width: 100%;
      }
    }

    .buttons {
      .button {
        margin: 0 .5rem .5rem;
      }

      @media (max-width: 550px) {
        flex-direction: column;
      }
    }
  }
}
</style>
