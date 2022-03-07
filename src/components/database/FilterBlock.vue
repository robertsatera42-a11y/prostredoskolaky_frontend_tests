<template>
  <section class="search-section">
    <div class="content">
      <h2>Zvol si předmět</h2>
      <div class="buttons-container interests-container">
        <div :data-badge="showInterests.nature.checked" :class="showInterests.nature.style" @click="selectInterests('nature')">Přírodní vědy</div>
        <div :data-badge="showInterests.sport.checked" :class="showInterests.sport.style" @click="selectInterests('sport')">Sport</div>
        <div :data-badge="showInterests.business.checked" :class="showInterests.business.style" @click="selectInterests('business')">Podnikání</div>
        <div :data-badge="showInterests.art.checked" :class="showInterests.art.style" @click="selectInterests('art')">Umění</div>
        <div :data-badge="showInterests.humanity.checked" :class="showInterests.humanity.style" @click="selectInterests('humanity')">Humanitní vědy</div>
        <div :data-badge="showInterests.language.checked" :class="showInterests.language.style" @click="selectInterests('language')">Jazyky</div>
        <div :data-badge="showInterests.it.checked" :class="showInterests.it.style" @click="selectInterests('it')">IT a robotika</div>
        <div :data-badge="showInterests.other.checked" :class="showInterests.other.style" @click="selectInterests('other')">Ostatní</div>

        <div class="interest-selection" v-if="showInterests[this.activeInterest] && showInterests[this.activeInterest].isOpen">
          <slot v-for="(interest) in interests[this.activeInterest]">
            <b-checkbox v-model="checkedCategories" :native-value="interest.short">{{interest.name}}</b-checkbox>
          </slot>
        </div>
      </div>

      <h2>a typ aktivity...</h2>
        <div class="buttons-container types-container">
          <slot v-for="type in types">
            <div :class="showTypes[type.name].style" @click="selectTypes(type)">{{type.full}}</div>
          </slot>
          <div class="button remove-filters" @click="clearAll">Odstranit filtry</div>
          <div class="button is-primary" style="background: #F06027" @click="addEvent">Přidat aktivitu</div>
        </div>

      <search-block/>
    </div>
  </section>
</template>

<script>
import config from '../../config/default'
import { FETCH_EVENTS } from '../../types'
import { mapActions } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import SearchBlock from './SearchBlock'
import tracking from '../../utils/tracking'
import ActivityForm from '../database/ActivityForm'

export default {
  name: 'filter-block',
  components: { SearchBlock, ActivityForm },
  data () {
    return {
      interests: config.consts.interestsMapping,
      types: config.consts.types,
      activeInterest: '',
      totalCountOfInterests: 0,
      isClearing: false,
      showInterests: {
        nature: {
          style: 'button',
          isOpen: false,
          checked: 0
        },
        sport: {
          style: 'button',
          isOpen: false,
          checked: 0
        },
        business: {
          style: 'button',
          isOpen: false,
          checked: 0
        },
        art: {
          style: 'button',
          isOpen: false,
          checked: 0
        },
        language: {
          style: 'button',
          isOpen: false,
          checked: 0
        },
        humanity: {
          style: 'button',
          isOpen: false,
          checked: 0
        },
        it: {
          style: 'button',
          isOpen: false,
          checked: 0
        },
        other: {
          style: 'button',
          isOpen: false,
          checked: 0
        }
      },
      showTypes: {
        contest: {
          style: 'button',
          isOpen: false
        },
        course: {
          style: 'button',
          isOpen: false
        },
        program: {
          style: 'button',
          isOpen: false
        },
        conference: {
          style: 'button',
          isOpen: false
        },
        other: {
          style: 'button',
          isOpen: false
        }
      }
    }
  },
  watch: {
    checkedTypes: async function () {
      await this.fetchEvents(1)
    },
    checkedCategories: async function (value) {
      if (!this.isClearing) {
        const updateCount = this.totalCountOfInterests < value.length ? 1 : -1
        this.showInterests[this.activeInterest].checked += updateCount
        this.totalCountOfInterests = value.length

        this.showInterests[this.activeInterest].style = this.showInterests[this.activeInterest].checked > 0
          ? `button is-active badge`
          : `button is-active`
      }
      this.isClearing = false
      await this.fetchEvents(1)
    }
  },
  computed: {
    ...mapFields({
      checkedCategories: 'checkedCategories',
      checkedTypes: 'checkedTypes',
      search: 'search'
    })
  },
  methods: {
    ...mapActions({ fetchEvents: FETCH_EVENTS }),
    addEvent () {
      this.$modal.open({
        parent: this,
        component: ActivityForm,
        hasModalCard: true,
        canCancel: ['escape', 'x'],
        props: {
          status: 'proposal'
        }
      })
    },
    clearAll () {
      this.checkedCategories = []
      this.checkedTypes = []
      this.totalCountOfInterests = 0
      this.activeInterest = ''
      this.isClearing = true
      this.search = ''
      Object.keys(this.showInterests).forEach(type =>
        this.showInterests[type] = {
          style: 'button',
          checked: 0,
          isOpen: false
        })
      Object.keys(this.showTypes).forEach(type =>
        this.showTypes[type] = {
          style: 'button',
          isOpen: false
        })
      tracking.track('database', 'filter', 'delete')
    },
    selectInterests (type) {
      tracking.track('database', 'filter_subject', type.name)
      if (this.activeInterest !== type && this.activeInterest !== '') {
        this.showInterests[this.activeInterest] = {
          ...this.showInterests[this.activeInterest],
          style: this.showInterests[this.activeInterest].style.includes('badge')
            ? `badge button`
            : `button`,
          isOpen: false
        }
      }

      this.showInterests[type].isOpen = !this.showInterests[type].isOpen

      // is not checked, not open, not same
      if (this.showInterests[type].checked === 0 && (this.activeInterest !== type || this.showInterests[type].isOpen)) {
        const allTypeInterests = this.interests[type].map(i => i.short)
        // avoid calling watcher checkedCategories
        this.isClearing = true
        this.checkedCategories = [...allTypeInterests, ...this.checkedCategories]
        this.totalCountOfInterests += allTypeInterests.length
        this.showInterests[type].checked = allTypeInterests.length
      }

      let interestStyle = `button`
      if (this.showInterests[type].isOpen) {
        interestStyle += ' is-active'
      }
      if (this.showInterests[type].checked > 0) {
        interestStyle += ' badge'
      }
      this.showInterests[type].style = interestStyle

      this.activeInterest = type
    },
    selectTypes (type) {
      tracking.track('database', 'filter_type', type.name)
      let isOpenedType = this.showTypes[type.name].isOpen
      this.showTypes[type.name] = {
        isOpen: !isOpenedType,
        style: isOpenedType
          ? `type-${type.name} button`
          : `type-${type.name} button is-active`
      }
      if (this.checkedTypes.includes(type.short)) {
        const index = this.checkedTypes.indexOf(type.short)
        this.checkedTypes.splice(index, 1)
      } else {
        this.checkedTypes.push(type.short)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  section.search-section {
    background: linear-gradient(160deg, rgba(127, 97, 250, 0.3) 25%, rgba(215, 109, 124, 0.3) 75%);

    .content {
      width: 80%;
      max-width: 1200px;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px auto 0;
      padding: 40px;

      @media (max-width: 800px) {
        width: 90%;
        padding: 40px 20px;
      }

      h2 {
        font-size: 20px;
        margin-bottom: 20px;
        color: #4A4A4A;
      }

      .button {
        font-family: 'NunitoLight', sans-serif;
        font-weight: normal;
        border-radius: 6px;
        font-size: 14px;
        transition: .3s;
        padding: 6px 12px;
        background: #FFF;
        margin: 0 10px 10px;

        &:first-child {
          margin-left: 0;
        }
      }

      .buttons-container {
        text-align: center;
      }

      .interests-container {
        .is-active {
          color: #FFF;
          background: #F06027;
          border-color: #F06027;
        }
      }

      .interest-selection {
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        > label {
          margin-bottom: 4px;
        }
      }
      .types-container {
        .is-active {
          color: #FFF;

          &.type-contest {
            background: #3E2F5B;
            border-color: #3E2F5B;
          }

          &.type-course {
            background: #EFCA08;
            border-color: #EFCA08;
          }

          &.type-program {
            background: #17BEBB;
            border-color: #17BEBB;
          }

          &.type-conference {
            background: #EB5757;
            border-color: #eb5757;
          }

          &.type-other {
            background: #15BE5A;
            border-color: #15BE5A;
          }

          &.type-other {
            background: #2F80ED;
            border-color: #2F80ED;
          }
        }

        .remove-filters {
          border-color: #E42424;
          padding-left: 30px;
          background: url(~@/assets/svg/recycle-bin.svg) #FFF no-repeat 8px center;
          background-size: 16px;
          color: #E42424;
        }
      }
    }
  }
</style>
