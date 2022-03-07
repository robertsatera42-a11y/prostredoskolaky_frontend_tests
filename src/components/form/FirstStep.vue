<template>
  <section class="first-step">
    <div class="content">
      <div class="header-text">
        <h1>Vítáme tě v soutěži Středoškolák&nbsp;roku
          <span class="orange">2021</span>
        </h1>
        <h2>
          Začni vyplněním svých základních údajů. <b>Přihlášku uložíš v posledním kroku. Po uložení se můžeš k přihlášce až do deadlinu kdykoliv vrátit a upravovat ji.</b>
        </h2>
      </div>
    </div>

    <div class="content step">
      <h2>Krok <span class="orange">1.</span> z <span class="orange">3</span></h2>
    </div>
    <div class="loader-block"></div>

    <div class="content form">
      <h3>Základní údaje</h3>

      <div class="form-block">
        <div class="half-block">
          <b-field
            class="half-input"
            label="Jméno"
            :type="errorsFirstName.type"
            :message="errorsFirstName.message"
          >
            <b-input
              v-model="user.firstName"
              v-focus="focusedFirstName"
              @focus="focusedFirstName = true"
              @blur="focusedFirstName = false"
              placeholder="např. Josef"
            ></b-input>
          </b-field>

          <b-field
            class="half-input"
            label="Příjmení"
            :type="errorsLastName.type"
            :message="errorsLastName.message"
          >
            <b-input
              v-model="user.lastName"
              v-focus="focusedLastName"
              @focus="focusedLastName = true"
              @blur="focusedLastName = false"
              placeholder="např. Novák"
            ></b-input>
          </b-field>
        </div>

        <div class="half-block">
          <b-field
            class="half-input"
            label="Emailová adresa"
            :type="errorsEmail.type"
            :message="errorsEmail.message"
          >
            <b-input
              :value="user.email"
              v-focus="focusedEmail"
              @focus="focusedEmail = true"
              @blur="focusedEmail = false"
              disabled
              placeholder="např. josef.novak@seznam.cz"
            ></b-input>
          </b-field>

          <b-field
            class="half-input"
            label="Rok narození"
            :type="errorsDob.type"
            :message="errorsDob.message"
          >
            <b-datepicker
            readonly
              v-model="user.dob"
              v-focus="focusedDob"
              @focus="focusedDob = true"
              @blur="focusedDob = false"
              placeholder="např. 1.8.2001"
              editable
              :mobile-native=true
            ></b-datepicker>
          </b-field>
        </div>
      </div>

      <div class="form-block">
        <div class="half-block">
          <b-field
            class="third-input"
            label="Ročník střední školy"
            :type="errorsGrade.type"
            :message="errorsGrade.message"
          >
            <b-select
              placeholder="vyber svůj ročník"
              v-model="user.grade"
              v-focus="focusedGrade"
              @focus="focusedGrade = true"
              @blur="focusedGrade = false"
            >
              <optgroup label="Čtyřleté">
                <option
                  v-for="option in consts.grades.four"
                  :key="option.value"
                  :value="option.value"
                >{{ option.name }}</option>
              </optgroup>
              <optgroup label="Šestileté">
                <option
                  v-for="option in consts.grades.six"
                  :key="option.value"
                  :value="option.value"
                >{{ option.name }}</option>
              </optgroup>
              <optgroup label="Osmileté">
                <option
                  v-for="option in consts.grades.eight"
                  :key="option.value"
                  :value="option.value"
                >{{ option.name }}</option>
              </optgroup>
            </b-select>
          </b-field>

          <b-field
            class="two-third-input"
            label="Název střední školy"
            :type="errorsSchool.type"
            :message="errorsSchool.message"
          >
            <b-autocomplete
              v-model="user.school"
              v-focus="focusedSchool"
              @focus="focusedSchool = true"
              @blur="focusedSchool = false"
              @input="getSchools"
              ref="autocomplete"
              :data="schools"
              placeholder="Vyber svou střední školu"
              @select="option => selected = option"
            >
              <template slot="header">
                <a @click="showAddSchool">
                  <span>Přidej novou školu ...</span>
                </a>
              </template>
              <template slot="empty">Žádný výsledek pro {{ user.school }}</template>
            </b-autocomplete>
          </b-field>
        </div>

        <div class="half-block">
          <b-field
            style="padding-top: 10px"
            label="Kraj"
            :type="errorsRegion.type"
            :message="errorsRegion.message"
          >
            <b-select
              placeholder="Vyber svůj kraj"
              v-model="user.region"
              v-focus="focusedRegion"
              @focus="focusedRegion = true"
              @blur="focusedRegion = false"
            >
              <option v-for="option in consts.regions" :value="option" :key="option">{{ option }}</option>
            </b-select>
          </b-field>
          <b-field
            class="two-third-input"
            label="Kontakt na učitele/školu (pokud nám chceš poskytnout)"
          >
            <b-input
              v-model="user.schoolContact"
              placeholder="email či telefonní číslo"
            ></b-input>
          </b-field>
        </div>
      </div>

      <div class="form-block">
        <b-field
          label="LinkedIn účet"
        >
          <b-input
            v-model="user.linkedin"
            placeholder="např. www.linkedin.com/josefnovak"
          ></b-input>
        </b-field>

        <b-field label="Obory zájmu">
          <b-taginput
            v-model="user.interests"
            :data="inters"
            autocomplete
            placeholder="např. filozofie, matematika či tanec"
            field="interest"
            :open-on-focus="true"
            @typing="getFilteredInterests"
          ></b-taginput>
        </b-field>

        <b-field
          label="Jak ses dozvěděl/a o soutěži Středoškolák roku?"
        >
          <b-select
            v-model="user.knowledge"
            placeholder="vyber z možností"
          >
            <option v-for="option in consts.knowledge" :value="option" :key="option">{{ option }}</option>
          </b-select>
        </b-field>
      </div>
      <div class="help-link">
        <p>Zaznamenal/a jsi nějaké potíže s přihláškou, dej nám prosím vědět na <span class="orange">info@prostredoskolaky.cz</span>.</p>
      </div>

      <!--<pre style="max-height: 400px"><b>Tags:</b>{{ user.interests }}</pre>-->
      <!--<pre>$xv: {{ $v.user }}</pre>-->
    </div>

    <div class="submit-block">
      <div class="submit-actions content">
        <router-link class="button a-gray" to="/soutez">Zavřít</router-link>
        <a class="button a-orange" @click="goToActivities">Přejít na 2. krok</a>
        <small v-if="user.lastSaved">Naposledy uloženo: {{ transformDate(user.lastSaved)}}</small>
      </div>
    </div>
  </section>
</template>
<script>
import ActivitiesStep from './ActivitiesStep'
import config from '../../config/default'
import ValidationUtils from '../../utils/validationUtils'
import transformerUtils from '../../utils/transformerUtils'
import client from '../../client/client'
import { mapFields } from 'vuex-map-fields'
import { required, email } from 'vuelidate/lib/validators'
import { mixin as focusMixin } from 'vue-focus'
import { debounce } from 'debounce'
import tracking from '../../utils/tracking'
import { mapActions } from 'vuex'
import { FETCH_USER } from '../../types'

export default {
  name: 'first-step',
  components: { ActivitiesStep },
  mixins: [focusMixin],
  data () {
    return {
      selected: '',
      schools: [],
      consts: {
        grades: {
          four: config.consts.grades.four,
          six: config.consts.grades.six,
          eight: config.consts.grades.eight
        },
        regions: config.consts.regions,
        interests: config.consts.interests,
        knowledge: config.consts.knowledge
      },
      message: '',
      focusedFirstName: '',
      focusedLastName: '',
      focusedSchool: '',
      focusedGrade: '',
      focusedEmail: '',
      focusedDob: '',
      focusedRegion: '',
      submitStatus: ''
    }
  },
  async mounted () {
    tracking.track('competition', 'entrance_page', 'form_entrance')
    await this.fetchUser('full')
    // console.log(this.user)
  },
  computed: {
    ...mapFields({
      user: 'user'
    }),
    inters: function () {
      // TODO: should interests be from `database interests`? (but sport -> individual/team -> BAD)
      return this.consts.interests.map(i => i.name)
    },
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
    errorsDob: function () {
      this.focusedDob
      this.$v.user.dob.$invalid
      this.submitStatus
      return ValidationUtils.validate(this, 'dob', 'focusedDob')
    },
    errorsRegion: function () {
      this.focusedRegion
      this.$v.user.region.$invalid
      this.submitStatus
      return ValidationUtils.validate(this, 'region', 'focusedRegion')
    },
    errorsSchool: function () {
      this.focusedSchool
      this.$v.user.school.$invalid
      this.submitStatus
      return ValidationUtils.validate(this, 'school', 'focusedSchool')
    },
    errorsGrade: function () {
      this.focusedGrade
      this.$v.user.grade.$invalid
      this.submitStatus
      return ValidationUtils.validate(this, 'grade', 'focusedGrade')
    }
  },
  methods: {
    ...mapActions({ fetchUser: FETCH_USER }),
    goToActivities () {
      if (this.$v.user.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'OK'
        this.$emit('changeView', ActivitiesStep.name)
      }
    },
    getFilteredInterests (text) {
      this.consts.interests = config.consts.interests.filter(option => {
        return (
          option.name
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        )
      })
    },
    showAddSchool () {
      this.$dialog.prompt({
        message: `Škola`,
        inputAttrs: {
          placeholder: 'např. střední škola života',
          maxlength: 100,
          value: this.user.school
        },
        confirmText: 'Přidat',
        onConfirm: value => {
          this.user.school = value
          this.$refs.autocomplete.setSelected(value)
        }
      })
    },
    transformDate (dateString) {
      return transformerUtils.transformDate(dateString)
    },
    getSchools: debounce(async function () {
      try {
        this.schools = await client.getSchools(this.user.school)
      } catch (err) {
        console.log(err)
      }
    }, 500)
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
        email,
        required
      },
      grade: {
        required
      },
      dob: {
        required
      },
      school: {
        required
      },
      region: {
        required
      }
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

section.first-step {
  padding-top: 100px;
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
    background: url(~@/assets/loader.svg) no-repeat;
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

  .form {
    padding-bottom: 60px;

    h3 {
      font-weight: normal;
    }

    .form-block {
      padding-top: 30px;

      .half-block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 10px;

        .half-input {
          width: 45%;
        }

        .third-input {
          width: 25%;
        }

        .two-third-input {
          width: 65%;
        }
      }

      @media (max-width: 700px) {
        padding-top: 10px;
        .half-block {
          flex-direction: column;

          .half-input, .third-input, .two-third-input {
            width: 100%;
          }
        }
      }
    }
    @media (max-width: 700px) {
      h3 {
        text-align: center;
      }
    }

    .help-link {
      padding: 30px 0 30px 0;
      text-align: center;
    }
  }

  .submit-block {
    background-color: #f9f4f4;

    .submit-actions {
      padding-bottom: 40px;

      .a-orange {
        margin-right: 20px;
        border: 1px solid #f55c23;
        background: white;
        color: #f55c23;
      }

      .a-gray {
        margin-right: 20px;
        border: 1px solid #979797;
        background: white;
        color: #979797;
      }

      small {
        font-size: 15px;
        line-height: 35px;
        text-align: center;
        white-space: nowrap;
      }

      @media (max-width: 400px) {
        a {
          margin: 0 auto 10px;
        }
      }
    }
  }
}
</style>
