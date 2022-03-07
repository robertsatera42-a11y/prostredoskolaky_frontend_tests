<template>
  <section class="activities-step">
    <div class="content">
      <div class="header-text">
        <h1>Vítáme tě v soutěži Středoškolák&nbsp;roku
          <span class="orange">2021</span>
        </h1>
        <h2>
          Uveď aktivity, kterých ses zúčastnil/a. Můžeš jich přidat maximálně deset.
        </h2>
      </div>
    </div>

    <div class="content step">
      <h2>Ještě <span class="orange">jeden</span> krok</h2>
    </div>
    <div class="loader-block"></div>

    <div class="add-activities">
      <a v-if="!activities" class="button a-orange" @click="addItem">Přidat aktivitu</a>
      <a v-else-if="activities.length < 10" class="button a-orange" @click="addItem">Přidat aktivitu</a>

      <slot v-if="!activities || activities.length === 0">
        <div>Žádné aktivity</div>
      </slot>
      <slot v-else-if="activities && activities.length === 1">
        <div>{{activities.length}} z 10 aktivit přidána</div>
      </slot>
      <slot v-else>
        <div>{{activities.length}} z 10 aktivit přidány</div>
      </slot>
    </div>

    <div class="content">
      <div v-if="activities && activities.length" class="activities">
        <slot v-for="(activity, index) in activities">
          <div :class="['activity activity-' + index]" :key="index">
            <div class="activity-info">
              <span class="activity-name" v-line-clamp:40="2">{{ activity.name }}</span>
              <div class="activity-description" v-line-clamp:40="3">{{ activity.result }}</div>
              <div class="activity-link" v-line-clamp:0="1">{{ activity.link }}</div>
            </div>
            <div class="activity-buttons">
              <div class="activity-delete" @click="deleteItem(index)"></div>
              <div class="activity-edit" @click="editItem(index)"></div>
            </div>
          </div>
        </slot>
      </div>

    <!--<div class="tile is-ancestor" v-for="(activity, index) in activities" :key="activity.name">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <p class="title">{{ activity.name }}</p>
          <p class="subtitle">{{ activity.results}}</p>
          <button class="button" @click="deleteItem(index)">Delete</button>
          <button class="button is-primary"  style="margin-left: 10px" @click="editItem(index)">Edit</button>
        </article>
      </div>
    </div>-->
    <error-message :message="error"/>
    <div class="help-link">
        <p>Zaznamenal/a jsi nějaké potíže s přihláškou, dej nám prosím vědět na <span class="orange">info@prostredoskolaky.cz</span>.</p>
    </div>
    </div>

    <div class="submit-block">
      <div class="submit-actions content">
        <a class="button a-orange" @click="goToFirstStep">Zpět na 1. krok</a>
        <a class="button a-orange" @click="goToFinalise">Přejít ke kontrole a uložení</a>
        <small v-if="user.lastSaved">Naposledy uloženo: {{ transformDate(user.lastSaved) }}</small>
      </div>
    </div>

  </section>
</template>
<script>
import FirstStep from './FirstStep'
import ActivityForm from './ActivityForm'
import FinaliseStep from './FinaliseStep'
import ErrorMessage from '../common/ErrorMessage'
import config from '../../config/default'
import { mapFields } from 'vuex-map-fields'
import { mapGetters } from 'vuex'
import tracking from '../../utils/tracking'
import { USER } from '../../types'
import transformerUtils from '../../utils/transformerUtils'

export default {
  name: 'activities-step',
  data () {
    return {
      showActivityForm: false,
      error: ''
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    tracking.track('competition', 'entrance_page', 'form_activities')
  },
  components: { FirstStep, ActivityForm, FinaliseStep, ErrorMessage },
  computed: {
    ...mapFields({
      activities: 'user.activities'
    }),
    ...mapGetters([USER])
  },
  updated () {
    if (this.activities && this.activities.length > 0) {
      this.error = ''
    }
  },
  methods: {
    goToFirstStep () {
      this.$emit('changeView', FirstStep.name)
    },
    goToFinalise () {
      if (this.activities && this.activities.length > 0) {
        this.$emit('changeView', FinaliseStep.name)
      } else this.error = config.errors.requiredActivity
    },
    addItem () {
      this.openModal(null)
    },
    deleteItem (index) {
      this.activities.splice(index, 1)
    },
    editItem (index) {
      this.openModal(index)
    },
    openModal (index) {
      this.$modal.open({
        parent: this,
        component: ActivityForm,
        hasModalCard: true,
        canCancel: ['escape', 'x'],
        props: {
          index: index !== null ? index : null,
          act: {
            name: index !== null ? this.activities && this.activities[index] && this.activities[index].name : '',
            link: index !== null ? this.activities && this.activities[index] && this.activities[index].link : '',
            result: index !== null ? this.activities && this.activities[index] && this.activities[index].result : '',
            start: index !== null ? this.activities && this.activities[index] && this.activities[index].start : '',
            learning: index !== null ? this.activities && this.activities[index] && this.activities[index].learning : ''
          }
        }
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

section.activities-step {
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
        line-height: 1.5;
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

  .a-orange {
    margin-right: 20px;
    border: 1px solid #f55c23;
    background: white;
    color: #f55c23;
  }

  .loader-block {
    background: url(~@/assets/loader-second.svg) no-repeat;
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

  .add-activities {
    margin-left: auto;
    margin-right: auto;
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 400px) {
      flex-direction: column;

      a, div {
        margin: 0 0 5px;
      }
    }
  }

  .help-link {
    padding: 30px 0 30px 0;
    text-align: center;
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
