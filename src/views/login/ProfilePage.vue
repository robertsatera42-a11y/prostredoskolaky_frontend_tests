<template>
  <div class="platform-page profile-page">
    <main id="home-main" class="home-container profile-main" tabindex="-1">
      <header class="profile-heading">
        <p class="home-eyebrow">Můj účet</p>
        <h1>Profil</h1>
      </header>
      <div class="profile-card">
        <section class="profile-form-section" aria-labelledby="profile-personal-title">
          <h2 id="profile-personal-title">Osobní údaje</h2>
        <b-field
          label="Povolání"
          label-for="profile-occupation"
        >
          <b-select
            id="profile-occupation"
            v-model="user.occupation"
            expanded
          >
            <option v-for="option in jobs" :value="option" :key="option">{{ option }}</option>
          </b-select>
        </b-field>
        <b-field
          label="Jméno"
          label-for="profile-first-name"
          :type="errorsFirstName.type"
          :message="errorsFirstName.message">
          <b-input
              id="profile-first-name"
              class="form__input"
              v-model="user.firstName"
              v-focus="focusedFirstName"
              @focus="focusedFirstName = true"
              @blur="focusedFirstName = false"></b-input>
          </b-field>
          <b-field
              label="Příjmení"
              label-for="profile-last-name"
              :type="errorsLastName.type"
              :message="errorsLastName.message">
            <b-input
                id="profile-last-name"
                class="form__input"
                v-model="user.lastName"
                v-focus="focusedLastName"
                @focus="focusedLastName = true"
                @blur="focusedLastName = false"></b-input>
          </b-field>
          <b-field
              label="Email" label-for="profile-email">
            <b-input
                id="profile-email"
                class="form__input"
                :value="currentUser.email" disabled></b-input>
          </b-field>
        </section>
        <section class="profile-newsletter profile-form-section" aria-labelledby="profile-newsletter-title">
          <h2 id="profile-newsletter-title">Newsletter</h2>
          <b-checkbox v-model="sendNewsletter">Chci si nechat zasílat pravidelnou dávku mimoškolních aktivit do svého e-mailu.</b-checkbox>
        </section>
        <div class="profile-feedback" :class="{ 'has-message': message }" role="status" aria-live="polite" aria-atomic="true">
          <message :type="messageType" :message="message"/>
        </div>
        <section class="profile-account profile-form-section" aria-labelledby="profile-account-title">
          <div class="profile-account-heading">
            <h2 id="profile-account-title">Správa účtu</h2>
            <button type="button" class="home-button home-button-orange" @click="update">Uložit</button>
          </div>
          <div class="profile-account-actions">
            <button type="button" @click="changePassword" class="home-button home-button-outline">Změnit heslo</button>
            <button type="button" class="home-text-link profile-delete" @click="deleteAccount">Vymazat účet</button>

          </div>
        </section>
      </div>
    </main>
    <home-footer :social-links="socialLinks"/>
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
import HomeFooter from '../../components/home/HomeFooter'
import { platformSocialLinks } from '../../components/platform/presentation'
import config from '../../config/default'

export default {
  name: 'profile-page',
  components: { Message, HomeFooter },
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
      jobs: config.consts.jobs,
      socialLinks: platformSocialLinks
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
        const status = await fb.updateUser(this.currentUser.email, {
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
