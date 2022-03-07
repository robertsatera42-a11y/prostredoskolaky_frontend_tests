<template>
  <section>
    <div v-if="submitStatus === 'OK'" class="modal-card">
      <header class="modal-card-head">
        <h1 class="modal-card-title">Přidat novou aktivitu</h1>
      </header>
      <section class="modal-card-body">
        <div v-if="status==='proposal'" class="success-message">Děkujeme Vám za návrh nové aktivity. Na aktivitu se podíváme a přidáme ji do databáze.</div>
        <div v-else class="success-message">Změny byly uloženy.</div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="$parent.close()">
          Zavřít
        </button>
      </footer>
    </div>

    <div v-else class="modal-card">
      <header class="modal-card-head">
        <h1 class="modal-card-title">{{status === 'publish' ? 'Publikovat aktivitu' : 'Přidat novou aktivitu'}}</h1>
      </header>
      <!--<form @submit.prevent="submit">-->
      <section class="modal-card-body">
        <b-field
            label="Název aktivity"
            :type="errorsName.type"
            :message="errorsName.message">
          <b-input
              class="form__input"
              v-model="activity.name"
              v-focus="focusedName"
              @focus="focusedName = true"
              @blur="focusedName = false"
              placeholder="Např. Olympiáda lidských práv"></b-input>
        </b-field>

        <b-field v-if="status !== 'proposal'" label="Status">
          <b-select
              v-model="activity.status">
            <option
                v-for="status in statuses"
                :value="status"
                :key="status">
              {{ status }}
            </option>
          </b-select>
        </b-field>

        <b-tooltip v-if="status !== 'proposal'" label="Určete jak je aktivita důležitá."
                   multilined
                   position="is-right">
          <b-field label="Váha (1=nejvyšší, 3=nejnižší)">
            <b-select
                v-model="activity.weight">
              <option
                  v-for="weight in weights"
                  :value="weight"
                  :key="weight">
                {{ weight }}
              </option>
            </b-select>
          </b-field>
        </b-tooltip>

        <b-field
            label="Krátký popis"
            :type="errorsDescription.type"
            :message="errorsDescription.message">
          <b-input
              type="textarea"
              :maxlength="descriptionMaxLength"
              class="form__input"
              v-model="activity.description"
              v-focus="focusedDescription"
              @focus="focusedDescription = true"
              @blur="focusedDescription = false"
              placeholder="Co aktivita nabízí a čím se zabývá."></b-input>
        </b-field>

        <b-field
            label="Webová stránka"
            :type="errorsLink.type"
            :message="errorsLink.message">
          <b-input
              class="form__input"
              v-model="activity.link"
              v-focus="focusedLink"
              placeholder="Zadejte včetně http://"
              @focus="focusedLink = true"
              @blur="focusedLink = false"></b-input>
        </b-field>
        <b-field
            label="Kontakt"
            :type="errorsContact.type"
            :message="errorsContact.message">
          <b-input
              class="form__input"
              v-model="activity.contact"
              v-focus="focusedContact"
              placeholder="Email nebo telefonní číslo"
              @focus="focusedContact = true"
              @blur="focusedContact = false"></b-input>
        </b-field>

        <h2>Pro který vzdělávací stupeň je aktivita určena?</h2>
        <div class="block">
          <span v-for="age in ageGroups">
            <b-checkbox style="margin-right: 5px"
                        v-model="activity.ageGroup"
                        :native-value="age.short">
                {{age.full}}
            </b-checkbox>
          </span>
        </div>

        <b-tooltip label="Obsahuje aktivita například další mezinárodní kola či možnost vyjet do zahraničí?"
                   multilined
                   position="is-right">
          <h2 class="one-liner" style="margin-right: 5px">Jedná se o zahraniční aktivitu?</h2>
          <div class="block">
            <b-checkbox v-model="activity.isForeign"/>
          </div>
        </b-tooltip>

        <h2>Je aktivita individualní či týmová?</h2>
        <div class="block">
          <span v-for="group in groups">
            <b-checkbox style="margin-right: 5px"
                        v-model="activity.group"
                        :native-value="group">
                  {{ group }}
              </b-checkbox>
          </span>
        </div>

        <b-field label="Deadline pro přihlášení">
          <b-select
              v-model="activity.deadline">
            <option
                v-for="period in periods"
                :value="period.short"
                :key="period.full">
              {{ period.full }}
            </option>
          </b-select>
        </b-field>

        <b-field label="Je aktivita placená?">
          <b-select
              v-model="activity.price">
            <option
                v-for="price in prices"
                :value="price"
                :key="price">
              {{ price }}
            </option>
          </b-select>
        </b-field>

        <b-field label="Obor"
                 :type="errorsCategories.type"
                 :message="errorsCategories.message">
          <b-taginput
              v-model="activity.categories"
              :data="getInterests"
              autocomplete
              field="interest"
              :open-on-focus="true"
              placeholder="Např. psychologie či matematika"
              @typing="getFilteredInterests">
          </b-taginput>
        </b-field>

        <b-field label="Typ"
                 :type="errorsTypes.type"
                 :message="errorsTypes.message">
          <b-taginput
              v-model="activity.types"
              :data="getTypes"
              autocomplete
              field="type"
              :open-on-focus="true"
              placeholder="Např. soutěž či vzdělávací program"
              @typing="getFilteredTypes">
          </b-taginput>
        </b-field>

        <b-field class="logo-label" label="Vyberte úvodní fotografii">
          <div class="logos-wrapper">
            <div class="logo" v-for="logo in logos" :key="logo.full">
              <img class="logo-img" :src="getLogoUrl(logo.full)">
              <b-radio v-model="activity.logo"
                  :native-value="logo.full">
                  {{ logo.name }}
              </b-radio>
            </div>
          </div>
        </b-field>

        <b-field
            label="Poznámka na závěr">
          <b-input
              type="textarea"
              :maxlength="descriptionMaxLength"
              class="form__input"
              v-model="activity.note"
              placeholder="Další informace, které bychom o aktivitě měli vědět. Nebude zobrazeno na webu."></b-input>
        </b-field>

      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="$parent.close()">
          Zavřít
        </button>
        <button class="button is-primary" @click="submit">
          {{status === 'publish' ? 'Publikovat a zavřít' : 'Uložit a zavřít'}}
        </button>
        <error-message :message="error"/>
      </footer>
    </div>
  </section>
</template>
<script>
import { mixin as focusMixin } from 'vue-focus'
import { required } from 'vuelidate/lib/validators'
import config from '../../config/default'
import transformerUtils from '../../utils/transformerUtils'
import client from '../../client/client'
import ErrorMessage from '../common/ErrorMessage'
import ValidationUtils from '../../utils/validationUtils'

export default {
  name: 'activity-form',
  mixins: [focusMixin],
  components: { ErrorMessage },
  props: {
    id: {
      type: Number
    },
    status: {
      type: String
    }
  },
  data () {
    return {
      error: '',
      ageGroups: config.consts.ageGroups,
      prices: config.consts.prices,
      nationalities: config.consts.nationalities,
      groups: config.consts.groups,
      periods: config.consts.periods,
      interests: config.consts.interests,
      types: config.consts.types,
      statuses: config.consts.statuses,
      weights: config.consts.weights,
      logos: config.consts.logos,
      logoUrl: config.consts.logoUrl,
      descriptionMaxLength: config.consts.descriptionMaxLength,
      group: [],
      activity: {
        id: '',
        name: '',
        status: 'active',
        description: '',
        link: '',
        categories: [],
        types: [],
        note: '',
        contact: '',
        deadline: 9,
        ageGroup: ['SŠ'],
        isForeign: '',
        group: ['individuální'],
        logo: 'other.jpg',
        price: 'zdarma',
        weight: 1
      },
      focusedName: undefined,
      focusedDescription: undefined,
      focusedLink: undefined,
      focusedContact: undefined,
      focusedCategories: undefined,
      focusedTypes: undefined,
      submitStatus: ''
    }
  },
  async mounted () {
    if (this.id) {
      const event = await client.getEvent(this.id)
      this.activity = {
        id: event.id,
        name: event.name,
        status: event.status,
        description: event.description,
        link: event.eventUrl,
        categories: event.categories.map(c => c.full),
        types: event.types.map(t => t.full),
        note: event.note,
        contact: event.contact,
        deadline: event.deadlines[0],
        ageGroup: event.ageGroup,
        isForeign: event.isForeign,
        group: event.group,
        logo: event.logo,
        price: event.price,
        weight: event.weight
      }
    } else if (this.status === 'proposal') {
      this.activity.status = 'proposal'
    }

    if (this.status === 'publish') {
      this.activity.status = 'active'
    }
  },
  methods: {
    async submit () {
      try {
        if (this.$v.activity.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          this.transform()
          await client.sendEvent(this.activity)
          this.submitStatus = 'OK'
          if (this.$parent && this.$parent.events) {
            this.$parent.events.refetch()
          }
        }
      } catch (err) {
        console.log(err)
        this.transformBack()
        this.error = ValidationUtils.getError(err.response)
      }
    },
    validate (input, focused) {
      if (!this.$v.activity[input].$invalid) {
        return { message: '', type: '' }
      }
      if (this[focused] === false && this.$v.activity[input].$invalid) {
        return { message: config.errors.required, type: config.errors.type }
      } else if (this.submitStatus === 'ERROR') {
        return { message: config.errors.required, type: config.errors.type }
      } else return { message: '', type: '' }
    },
    getFilteredInterests (text) {
      this.interests = config.consts.interests.filter((option) => {
        return option.name
          .toString()
          .toLowerCase()
          .indexOf(text.toLowerCase()) >= 0
      })
    },
    getFilteredTypes (text) {
      this.types = config.consts.types.filter((option) => {
        return option.full
          .toString()
          .toLowerCase()
          .indexOf(text.toLowerCase()) >= 0
      })
    },
    transform () {
      this.activity.categories = this.activity.categories.map(category => {
        return transformerUtils.transformCategories(category)
      })
      this.activity.types = this.activity.types.map(type => {
        return transformerUtils.transformTypes(type)
      })
    },
    transformBack () {
      this.activity.categories = this.activity.categories.map(category => {
        return transformerUtils.transformCategoriesBack(category)
      })
      this.activity.types = this.activity.types.map(type => {
        return transformerUtils.transformTypesBack(type)
      })
    },
    getLogoUrl (logo) {
      return `${this.logoUrl}/${logo}`
    }
  },
  computed: {
    getInterests: function () {
      return this.interests.map(i => i.name)
    },
    getTypes: function () {
      return this.types.map(i => i.full)
    },
    errorsName: function () {
      this.focusedName
      this.$v.activity.name.$invalid
      this.submitStatus
      return this.validate('name', 'focusedName')
    },
    errorsDescription: function () {
      this.focusedDescription
      this.$v.activity.description.$invalid
      this.submitStatus
      return this.validate('description', 'focusedDescription')
    },
    errorsLink: function () {
      this.focusedLink
      this.$v.activity.link.$invalid
      this.submitStatus
      return this.validate('link', 'focusedLink')
    },
    errorsContact: function () {
      this.focusedContact
      this.$v.activity.contact.$invalid
      this.submitStatus
      return this.validate('contact', 'focusedContact')
    },
    errorsCategories: function () {
      this.focusedCategories
      this.$v.activity.categories.$invalid
      this.submitStatus
      return this.validate('categories', 'focusedCategories')
    },
    errorsTypes: function () {
      this.focusedTypes
      this.$v.activity.types.$invalid
      this.submitStatus
      return this.validate('types', 'focusedTypes')
    }
  },
  validations: {
    activity: {
      name: {
        required
      },
      description: {
        required
      },
      link: {
        required
      },
      contact: {
        required
      },
      categories: {
        required
      },
      types: {
        required
      }
    }
  }
}
</script>
<style scoped lang="scss">
.modal-card {
  width: 90%;
  margin: auto !important;
  max-width: 800px;
  border-radius: 18px;
  font-size: 13px;
  padding-top: 30px;

  .modal-card-body {
    padding: 20px;

    .success-message{
      font-size: 16px;
    }

    h2 {
      font-weight: 600;
      font-size: 1rem;
      padding-bottom: 5px;

      &.one-liner {
        padding-bottom: 20px;
      }
    }

    .b-checkbox {
      padding-right: 10px;
    }
  }

  .modal-card-head {
    color: #FFF;
    font-size: 30px;
  }

  .logo-label {
    padding-top: 15px;
  }

  .logos-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 20px;

    .logo {
      display: flex;
      flex-direction: column;
      padding: 10px;
      img {
        height: 100px;
      }
      .radio {
        padding-top: 8px;
      }
    }
  }
}
</style>
