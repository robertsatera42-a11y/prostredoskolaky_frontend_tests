<template>
  <section class="finalise-step" id="finalise-step">
    <div class="content">
      <slot v-if="showSuccess">
        <div class="header-text">
          <h1>
            Vítáme tě v soutěži Středoškolák&nbsp;roku
            <span class="orange">2021</span>
          </h1>
          <h2>
            Děkujeme za tvou přihlášku, dotazník byl uložen a na {{user.email}} zaslán potvrzovací email. Přihlášku můžeš až do deadlinu kdykoliv otevřít a upravit ji.
          </h2>
        </div>
      </slot>
      <slot v-else>
        <div class="header-text">
          <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
          <h1>Vítáme tě v soutěži Středoškolák roku
            <span class="orange">2021</span>
          </h1>
          <h2>
            Nyní si zkontroluj všechny uvedené údaje a aktivity. Po uložení se můžeš k přihlášce až do deadlinu kdykoliv vrátit a upravovat ji.
          </h2>
        </div>
      </slot>
    </div>
    <div v-if="!showSuccess">
    <div class="content step">
      <h2>Poslední <span class="orange">krok</span>. HURÁ!</h2>
    </div>
    <div class="loader-block"></div>

    <div class="content">

    <div class="basic-info">
      <h3>Základní údaje</h3>
      <div class="info-row">
        <p>Jméno :</p>
        <p>{{ user.firstName }}</p>
      </div>
      <div class="info-row">
        <p>Příjmení :</p>
        <p>{{ user.lastName }}</p>
      </div>
      <div class="info-row">
        <p>E-mail :</p>
        <p>{{ user.email }}</p>
      </div>
      <div class="info-row">
        <p>Škola:</p>
        <p>{{ user.school }}</p>
      </div>
      <div class="info-row">
        <p>Ročník střední školy :</p>
        <p>{{ year[0] }}. ročník {{ year[1] }}letého studia</p>
      </div>
      <div class="info-row">
        <p>Kraj :</p>
        <p>{{ user.region }}</p>
      </div>
      <div class="info-row">
        <p>Datum narození :</p>
        <p>{{ birthDate.getDate() }}. {{ birthDate.getMonth() + 1 }}. {{ birthDate.getFullYear() }}</p>
      </div>
      <div class="info-row">
        <p>Link na LinkedIn :</p>
        <p>{{ user.linkedin }}</p>
      </div>
      <div class="info-row">
        <p>Jak ses o soutěži dozvěděl/a? :</p>
        <p>{{ user.knowledge }}</p>
      </div>
      <a class="button a-orange" @click="goToFirstStep">Zpět k úpravám</a>
    </div>

    <h3>Aktivity</h3>
    <div class="activities">
      <slot v-for="(activity, index) in activities">
        <div :class="['activity activity-' + index]" :key="index">
          <div class="activity-info">
            <span class="activity-name" v-line-clamp:40="2">{{ activity.name }}</span>
            <div class="activity-description" v-line-clamp:40="3">{{ activity.result }}</div>
            <div class="activity-link" v-line-clamp:20="1">{{ activity.link }}</div>
          </div>
        </div>
      </slot>
    </div>
    <a class="button a-orange" @click="goToEditActivities">Zpět k úpravám</a>

    <div class="consent">
      <b-checkbox v-model="isAgree">Souhlasím s <a href="https://drive.google.com/file/d/1Jq48GaNIC-yhYy583tWcLdhWL3_6NIX9/view?usp=sharing" target="_blank">podmínkami soutěže</a> a uděluji <a href="https://drive.google.com/file/d/1-bEgTzhrrQahPBU0wRtNJ5bE-phOChO9/view?usp=sharing" target="_blank">souhlas se zpracováním osobních údajů</a>.</b-checkbox>
    </div>

    <div class="help-link">
      <p>Zaznamenal/a jsi nějaké potíže s přihláškou, dej nám prosím vědět na <span class="orange">info@prostredoskolaky.cz</span>.</p>
    </div>

    </div>
    <div class="error-message">
      <error-message :message="error"/>
    </div>
    </div>
    <!--<div v-if="error">-->
    <!--<p>{{ error }}</p>-->
    <!--</div>-->
    <div class="submit-block">
      <div class="submit-actions content">
        <a v-if="!showSuccess" class="button a-orange" @click="goToEditActivities">Zpět na 2. krok</a>
        <router-link v-if="showSuccess" class="button a-gray" to="/soutez">Zavřít</router-link>
        <a v-if="!showSuccess" class="button a-orange-full" @click="submit">Uložit přihlášku</a>
        <small v-if="user.lastSaved && !showSuccess">Naposledy uloženo: {{ transformDate(user.lastSaved) }}</small>
      </div>
    </div>

  </section>
</template>
<script>
import ActivitiesStep from './ActivitiesStep'
import FirstStep from './FirstStep'
import ErrorMessage from '../common/ErrorMessage'
import ValidationUtils from '../../utils/validationUtils'
import config from '../../config/default'
import client from '../../client/client'
import { mapFields } from 'vuex-map-fields'
import transformerUtils from '../../utils/transformerUtils'
import tracking from '../../utils/tracking'
import fb from '../../firebase'

export default {
  name: 'finalise-step',
  data () {
    return {
      isLoading: false,
      isAgree: false,
      error: '',
      showSuccess: false,
      registrationId: null,
      birthDate: new Date(),
      year: []
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.birthDate = new Date(this.user.dob)
    this.year = this.user.grade.split('-')
    tracking.track('competition', 'entrance_page', 'form_activities_check')
  },
  components: { ActivitiesStep, FirstStep, ErrorMessage },
  computed: {
    ...mapFields({
      user: 'user',
      activities: 'user.activities'
    })
  },
  watch: {
    isAgree: function () {
      if (this.isAgree) {
        this.error = ''
      }
    }
  },
  methods: {
    async submit () {
      try {
        if (this.isAgree) {
          this.isLoading = true
          this.transform()
          const result = await client.createRegistration(this.user)
          this.isLoading = false
          this.showSuccess = true
          this.registrationId = result.registrationId
          await fb.updateProfileForCurrentUser(this.user)
          this.user.hasRegistration = true
          tracking.track('competition', 'entrance_page', 'form_finished')
        } else this.error = config.errors.requiredTerms
      } catch (err) {
        this.isLoading = false
        this.transformBack()
        this.error = ValidationUtils.getError(err.response)
        console.log(err)
      }
    },
    goToEditActivities () {
      this.$emit('changeView', ActivitiesStep.name)
    },
    goToFirstStep () {
      this.$emit('changeView', FirstStep.name)
    },
    transform () {
      this.user.interests = this.user.interests.map(interest => {
        return transformerUtils.transformCategories(interest)
      })
    },
    transformBack () {
      this.user.interests = this.user.interests.map(interest => {
        return transformerUtils.transformCategoriesBack(interest)
      })
    },
    transformDate (dateString) {
      return transformerUtils.transformDate(dateString)
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px 40px 0;

  @media (max-width: 800px) {
    width: 90%;
    padding: 40px 20px 0;
  }
}

section.finalise-step {
  padding-top: 120px;
  position: relative;

  .header-text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
    flex: 1;

    h1 {
      flex: .5;
      font-size: 34px;
      margin: 0 20px 0 0;
      line-height: 1.2;
      font-weight: normal;
    }

    h2 {
      flex: .5;
      font-size: 18px;
      margin: 0 0 0 20px;
      line-height: 1.2;
      font-weight: normal;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      h1, h2 {
        margin: 0 0 20px 0;
        flex: 1;
      }
    }
  }

  .loader-block {
    background: url(~@/assets/loader-third.svg) no-repeat;
    background-size: contain;
    max-width: 100%;
    height: 50px;
    margin-bottom: 30px;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .step {
    display: none;
    text-align: center;
    h2 {
      font-weight: normal;
    }

    @media (max-width: 900px) {
      display: block;
    }
  }

  h3 {
    text-align: center;
    padding: 40px 0 20px 0;
    font-size: 34px;
  }

  .a-orange {
    border: 1px solid #f55c23;
    background: white;
    color: #f55c23;
    width: 150px;
    margin: 20px auto 0;
    display: block;
  }

  .activities {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .activity {
      color: #FFF;
      padding: 20px;
      border-radius: 12px;
      display: flex;
      flex-direction: row;
      margin: 0 10px 20px;
      flex: 1 0 30%;
      max-width: 33%;
      max-width: calc(33.3% - 20px);
      max-height: 250px;
      height: 250px;

      &:nth-child(3n + 1) {
        background: #E82346;
      }

      &:nth-child(3n + 2) {
        background: #F53A23;
      }

      &:nth-child(3n + 3) {
        background: #F52323;
      }

      &-info {
        display: flex;
        flex: .8;
        flex-direction: column;
      }

      &-buttons {
        display: flex;
        flex: .2;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
      }

      &-name {
        font-size: 32px;
        line-height: 1.1;
        margin-bottom: 10px;
      }
      &-description {
        margin-bottom: 10px;
      }
      &-link {
        margin-top: auto;
      }

      &-delete {
        width: 18px;
        height: 18px;
        background: url(~@/assets/svg/activity-delete.svg) no-repeat;
        background-size: contain;
        cursor: pointer;
      }
      &-edit {
        width: 18px;
        height: 18px;
        background: url(~@/assets/svg/activity-edit.svg) no-repeat;
        background-size: contain;
        cursor: pointer;
      }

      @media (max-width: 900px) {
        flex: 1 0 45%;
        max-width: 50%;
        max-width: calc(50% - 20px);
      }
      @media (max-width: 500px) {
        flex: 1 0 100%;
        max-width: 100%;
        margin: 0 0 20px;
      }
    }
  }

  .basic-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .info-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-bottom: 8px;

      p {
        padding-right: 5px;
      }
    }
  }

  .consent {
    text-align: center;
    padding: 20px 0 20px 0;
  }

  .help-link {
    padding-bottom: 30px;
    text-align: center;
  }

  .error-message {
    text-align: center;
  }

  .submit-block {
    background-color: #f9f4f4;

    .submit-actions {
      padding-bottom: 40px;

      .a-orange {
        margin-right: 20px;
        margin-top: 0;
        border: 1px solid #f55c23;
        background: white;
        color: #f55c23;
        display: inline-flex;
      }

      .a-orange-full {
        margin-right: 20px;
        border: 1px solid #f55c23;
        background: #f55c23;
        color: #FFF;
      }

      small {
        font-size: 15px;
        line-height: 35px;
        text-align: center;
        white-space: nowrap;
      }

      @media (max-width: 450px) {
        a {
          margin: 0 auto 10px;
        }
      }
    }
  }
}
</style>
