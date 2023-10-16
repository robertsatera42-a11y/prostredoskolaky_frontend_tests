<template>
  <div class="change-password-page">
    <section class="main-container">
      <div class="content">
        <h2 class="title">Změnit heslo</h2>
        <div style="margin-bottom: 10px">Změnte své heslo zadáním původního hesla a nového hesla.</div>
        <b-field
            label="Vaše heslo"
            :type="errorsOldPasswd.type"
            :message="errorsOldPasswd.message">
          <b-input
              type="password"
              class="form__input"
              v-model="oldPasswd"
              v-focus="focusedOldPasswd"
              @focus="focusedOldPasswd = true"
              @blur="focusedOldPasswd = false"></b-input>
        </b-field>
        <b-field
            label="Nové heslo"
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
            label="Nové heslo znovu"
            :type="errorsRetypePasswd.type"
            :message="errorsRetypePasswd.message">
          <b-input
              type="password"
              class="form__input"
              v-model="retypePasswd"
              v-focus="focusedRetypePasswd"
              @focus="focusedRetypePasswd = true"
              @blur="focusedRetypePasswd = false"></b-input>
        </b-field>
        <message :type="messageType" :message="message"/>
        <div class="buttons">
          <button @click="goToProfile" class="button">Zpět</button>
          <button @click="changePassword" class="button is-primary">Uložit</button>
        </div>
      </div>
    </section>

    <footer-block/>

  </div>
</template>

<script>
import fb from '../../firebase'
import { USER } from '../../types'
import { mapGetters } from 'vuex'
import router from '../../router'
import ValidationUtils from '../../utils/validationUtils'
import { required, sameAs } from 'vuelidate/lib/validators'
import { mixin as focusMixin } from 'vue-focus'
import FooterBlock from '../../components/common/Footer'
import Message from '../../components/common/Message'

export default {
  name: 'change-password-page',
  mixins: [focusMixin],
  components: {
    FooterBlock,
    Message
  },
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
      messageType: 'error'
    }
  },
  computed: {
    ...mapGetters([USER]),
    errorsOldPasswd: function () {
      this.focusedOldPasswd
      this.$v.oldPasswd.$invalid
      this.submitStatus
      return ValidationUtils.validateBasic(this, 'oldPasswd', 'focusedOldPasswd')
    },
    errorsPasswd: function () {
      this.focusedPasswd
      this.$v.passwd.$invalid
      this.submitStatus
      return ValidationUtils.validateBasic(this, 'passwd', 'focusedPasswd')
    },
    errorsRetypePasswd: function () {
      this.focusedRetypePasswd
      this.$v.retypePasswd.$invalid
      this.submitStatus
      return ValidationUtils.validateBasic(this, 'retypePasswd', 'focusedRetypePasswd')
    }
  },
  methods: {
    async changePassword () {
      this.message = ''
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = ''
        const status = await fb.changePassword(this.user.email, this.oldPasswd, this.passwd)
        if (status !== 'OK') {
          this.messageType = 'error'
          this.message = status
          return
        }
        this.messageType = 'success'
        this.message = 'Heslo bylo uloženo'
        this.cleanForm()
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

<style scoped lang="scss">
.change-password-page {
  position: relative;
}

.title {
  font-size: 30px;
  color: #F06027;
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
