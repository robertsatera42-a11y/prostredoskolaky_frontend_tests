<template>
  <div class="profile-page">
    <section class="main-container">
      <div class="content">
        <h2 class="title">Profil</h2>
        <b-field
          label="Povolání"
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
              @blur="focusedFirstName = false"></b-input>
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
                @blur="focusedLastName = false"></b-input>
          </b-field>
          <b-field
              label="Email">
            <b-input
                class="form__input"
                :value="currentUser.email" disabled></b-input>
          </b-field>
          <b-checkbox v-model="sendNewsletter">Chci si nechat zasílat pravidelnou dávku mimoškolních aktivit do svého e-mailu.</b-checkbox>
          <message :type="messageType" :message="message"/>

          <div class="buttons">
            <button class="button" @click="deleteAccount">Vymazat účet</button>
            <button @click="changePassword" class="button">Změnit heslo</button>
            <button class="button is-primary" @click="update">Uložit</button>
          </div>
      </div>
    </section>

    <footer-block/>

  </div>
</template>

<script>
import { USER, UPDATE_USER, FETCH_USER } from '../../types'
import { mapGetters, mapMutations, mapActions } from 'vuex'
import fb from '../../firebase'
import router from '../../router'
import ValidationUtils from '../../utils/validationUtils'
import { required } from 'vuelidate/lib/validators'

import { mixin as focusMixin } from 'vue-focus'
import Message from '../../components/common/Message'
import FooterBlock from '../../components/common/Footer'
import config from '../../config/default'

export default {
  name: 'profile-page',
  components: { Message, FooterBlock },
  mixins: [focusMixin],
  data () {
    return {
      user: {
        firstName: '',
        lastName: '',
        occupation: ''
      },
      sendNewsletter: false,
      focusedFirstName: '',
      focusedLastName: '',
      submitStatus: '',
      message: '',
      messageType: 'error',
      jobs: config.consts.jobs
    }
  },
  async mounted () {
    await this.fetchUser('profile')
    this.user = {
      ...this.currentUser
    }
    this.sendNewsletter = this.currentUser.sendNewsletter
  },
  computed: {
    ...mapGetters({ 'currentUser': USER }),
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
    }
  },
  methods: {
    ...mapMutations([UPDATE_USER]),
    ...mapActions({ fetchUser: FETCH_USER }),
    async update () {
      this.message = ''
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = ''
        status = await fb.updateUser(this.currentUser.email, {
          occupation: this.user.occupation,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          sendNewsletter: this.sendNewsletter
        })
        this.updateUser(this.user)
        if (status !== 'OK') {
          this.messageType = 'error'
          this.message = status
        } else {
          this.messageType = 'success'
          this.message = 'Změny byly uloženy'
        }
      }
    },
    changePassword () {
      router.push('/change-password')
    },
    deleteAccount () {
      router.push('/delete-account')
    }
  },
  validations: {
    user: {
      firstName: {
        required
      },
      lastName: {
        required
      }
    }
  }
}
</script>

<style scoped lang="scss">
.profile-page {
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
      padding-top: 20px;
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
