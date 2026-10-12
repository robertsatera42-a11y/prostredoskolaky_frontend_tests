<template>
  <section :id="isPlatform ? 'platform-report-dialog' : null" :class="{ 'platform-dialog': isPlatform }" :role="isPlatform ? 'dialog' : null" :aria-modal="isPlatform ? 'true' : null" :aria-labelledby="isPlatform ? 'platform-report-title' : null" @keydown="trapDialogFocus">
    <div v-if="submitStatus === 'OK'" class="modal-card" style="width: 800px">
      <header class="modal-card-head">
        <component :is="isPlatform ? 'h2' : 'p'" class="modal-card-title" :id="isPlatform ? 'platform-report-title' : null" :tabindex="isPlatform ? -1 : null" :data-dialog-heading="isPlatform ? '' : null">Nahlásit aktivitu</component>
        <button v-if="isPlatform" type="button" class="platform-dialog-close" aria-label="Zavřít nahlášení aktivity" @click="$parent.cancel('x')"/>
      </header>
      <section class="modal-card-body">
        <div class="success-message" :role="isPlatform ? 'status' : null">Děkujeme, Vaší zpětnou vazbou se budeme zabývat.</div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="$parent.close()">
          Zpět na aktivitu
        </button>
      </footer>
    </div>

    <div v-else class="modal-card" style="width: 800px">
      <header class="modal-card-head">
        <component :is="isPlatform ? 'h2' : 'p'" class="modal-card-title" :id="isPlatform ? 'platform-report-title' : null" :tabindex="isPlatform ? -1 : null" :data-dialog-heading="isPlatform ? '' : null">Nahlášení aktivity: {{name}}</component>
        <button v-if="isPlatform" type="button" class="platform-dialog-close" aria-label="Zavřít nahlášení aktivity" @click="$parent.cancel('x')"/>
      </header>
      <!--<form @submit.prevent="submit">-->
      <section class="modal-card-body">
        <h2>Nalezli jste v aktivitě nějakou chybu či nepřesnost či již aktivita neexistuje? Dejte nám o tom vědět.</h2>
        <b-field
            label="Popis"
            :label-for="fieldId('description')"
            :type="errorsDescription.type"
            :message="errorsDescription.message">
          <b-input
              :id="fieldId('description')"
              :readonly="disableInputs"
              type="textarea"
              :maxlength="reportMaxLength"
              class="form__input"
              v-model="report.description"
              v-focus="focusedDescription"
              @focus="focusedDescription = true"
              @blur="focusedDescription = false"
              placeholder="Např. faktické chyby v popisu aktivity, změny deadlinů či překlepy."></b-input>
        </b-field>
        <b-field
            label="Chcete nám na sebe zanechat kontakt pro další komunikaci?"
            :label-for="fieldId('contact')"
        >
          <b-input
              :id="fieldId('contact')"
              :readonly="disableInputs"
              class="form__input"
              v-model="report.contact">
          </b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="$parent.close()">
          Zpět
        </button>
        <button v-if="this.status !== 'show'" class="button is-primary" @click="submit">
          Uložit a zpět
        </button>
        <div v-if="isPlatform && error" class="platform-dialog-error" role="alert"><error-message :message="error"/></div>
        <error-message v-else-if="!isPlatform" :message="error"/>
      </footer>
    </div>
  </section>
</template>
<script>
import { mixin as focusMixin } from 'vue-focus'
import { required } from 'vuelidate/lib/validators'
import config from '../../config/default'
import client from '../../client/client'
import ValidationUtils from '../../utils/validationUtils'
import ErrorMessage from '../common/ErrorMessage'
import { platformDialogMixin } from '../platform/presentation'

export default {
  props: {
    name: {
      type: String
    },
    eventId: {
      type: Number
    },
    description: {
      type: String
    },
    contact: {
      type: String
    },
    status: {
      type: String
    }
  },
  name: 'report-activity',
  components: { ErrorMessage },
  data () {
    return {
      reportMaxLength: config.consts.reportMaxLength,
      report: {
        description: '',
        contact: ''
      },
      focusedDescription: undefined,
      disableInputs: false,
      submitStatus: '',
      error: ''
    }
  },
  mounted () {
    if (this.status === 'show') {
      this.disableInputs = true
      this.report = {
        description: this.description,
        contact: this.contact
      }
    }
  },
  mixins: [focusMixin, platformDialogMixin],
  methods: {
    async submit () {
      try {
        this.error = ''
        if (this.$v.report.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          await client.saveReport({
            ...this.report,
            name: this.name,
            eventId: this.eventId
          })
          this.submitStatus = 'OK'
        }
      } catch (err) {
        console.log(err)
        this.error = ValidationUtils.getError(err.response)
      }
    },
    validate (input, focused) {
      if (!this.$v.report[input].$invalid) {
        return { message: '', type: '' }
      }
      if (this[focused] === false && this.$v.report[input].$invalid) {
        return { message: config.errors.required, type: config.errors.type }
      } else if (this.submitStatus === 'ERROR') {
        return { message: config.errors.required, type: config.errors.type }
      } else return { message: '', type: '' }
    }
  },
  computed: {
    errorsDescription: function () {
      this.focusedDescription
      this.$v.report.description.$invalid
      this.submitStatus
      return this.validate('description', 'focusedDescription')
    }
  },
  validations: {
    report: {
      description: {
        required
      }
    }
  }
}
</script>
<style scoped lang="scss">
h2 {
  font-size: 1rem;
  padding-bottom: 5px;
  font-weight: 600;
  word-wrap: break-word;
}

.success-message{
  font-size: 16px;
}

.modal-close {
  background-color: black;
}

.modal-card {
  max-width: 100%;
  padding-top: 30px;

  header {
    p {
      max-width: 90%;
    }
  }
}
</style>
