<template>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Přidat novou aktivitu</p>
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
            placeholder="např. Středoškolská odborná činnost"></b-input>
      </b-field>
      <b-field
          label="Webová stránka aktivity"
          :type="errorsLink.type"
          :message="errorsLink.message">
        <b-input
            v-model="activity.link"
            v-focus="focusedLink"
            @focus="focusedLink = true"
            @blur="focusedLink = false"
            placeholder="např. http://www.soc.cz">
        </b-input>
      </b-field>
      <b-field
          label="Proč jsem začal/a?"
          :type="errorsStart.type"
          :message="errorsStart.message">
        <b-input
            maxlength="500"
            type="textarea"
            v-model="activity.start"
            v-focus="focusedStart"
            @focus="focusedStart = true"
            @blur="focusedStart = false"
            placeholder="Napiš, proč jsi s mimoškolní aktivitou začal/a.">
        </b-input>
      </b-field>
      <b-field
          label="Co jsem dělal/a a s jakým výsledkem?"
          :type="errorsResult.type"
          :message="errorsResult.message">
        <b-input
            maxlength="500"
            type="textarea"
            v-model="activity.result"
            v-focus="focusedResult"
            @focus="focusedResult = true"
            @blur="focusedResult = false"
            placeholder="Napiš, jakých výsledků jsi dosáhl/a a jaký měla pro tebe aktivita přínos.">
        </b-input>
      </b-field>
      <b-field
          label="Co mě to naučilo?"
          :type="errorsLearning.type"
          :message="errorsLearning.message">
        <b-input
            maxlength="500"
            type="textarea"
            v-model="activity.learning"
            v-focus="focusedLearning"
            @focus="focusedLearning = true"
            @blur="focusedLearning = false"
            placeholder="Napiš, co ses při mimoškolní aktivitě naučila.">
        </b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" @click="$parent.close()">
        Zavřít
      </button>
      <button class="button is-primary" @click="submit">
        Uložit a zavřít
      </button>
    </footer>
    <!--</form>-->
    <!--<pre>$xv: {{ $v.activity }}</pre>-->
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import { required } from 'vuelidate/lib/validators'
import { mixin as focusMixin } from 'vue-focus'
import config from '../../config/default'

export default {
  name: 'activity-form',
  mixins: [ focusMixin ],
  props: {
    index: {
      type: Number
    },
    act: {
      type: Object
    }
  },
  data () {
    return {
      activity: {
        name: '',
        link: '',
        result: '',
        learning: '',
        start: ''
      },
      focusedName: undefined,
      focusedLink: undefined,
      focusedResult: undefined,
      focusedStart: undefined,
      focusedLearning: undefined,
      submitStatus: ''
    }
  },
  mounted () {
    if (this.index !== null) {
      this.activity = this.act
    }
  },
  computed: {
    ...mapFields({
      activities: 'user.activities'
    }),
    errorsName: function () {
      this.focusedName
      this.$v.activity.name.$invalid
      this.submitStatus
      return this.validate('name', 'focusedName')
    },
    errorsLink: function () {
      this.focusedLink
      this.$v.activity.link.$invalid
      this.submitStatus
      return this.validate('link', 'focusedLink')
    },
    errorsResult: function () {
      this.focusedResult
      this.$v.activity.result.$invalid
      this.submitStatus
      return this.validate('result', 'focusedResult')
    },
    errorsLearning: function () {
      this.focusedLearning
      this.$v.activity.learning.$invalid
      this.submitStatus
      return this.validate('learning', 'focusedLearning')
    },
    errorsStart: function () {
      this.focusedStart
      this.$v.activity.start.$invalid
      this.submitStatus
      return this.validate('start', 'focusedStart')
    }
  },
  methods: {
    submit () {
      if (this.$v.activity.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'OK'
        if (this.index != null) {
          this.activities.splice(this.index, 1, this.activity)
        } else this.activities.push(this.activity)
        this.$parent.close()
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
    }
  },
  validations: {
    activity: {
      name: {
        required
      },
      link: {
        required
      },
      result: {
        required
      },
      learning: {
        required
      },
      start: {
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
}
</style>
