<template v-if="event.name">
  <div>
    <div class="modal-card" style="max-width: 800px">
      <div v-if="actualKey !== 0" class="arrow-wrap left">
        <div class="arrow" @click="goToPrevious"/>
      </div>
      <div v-if="actualKey !== events.length - 1" class="arrow-wrap right">
        <div class="arrow" @click="goToNext"/>
      </div>
      <header :class="`type-${event.types[0] && event.types[0].short} modal-card-head`">
        <h1>{{event.name}}</h1>
      </header>
      <section class="modal-card-body">
        <div class="flex intro flex-half">
          <div>
            <img :src="event.logoUrl + event.logo" alt>
          </div>
          <div>
            <p>{{event.description}}</p>

            <div class="more-info">
              <slot>
                <div v-if="event.group && event.group.length">
                  <b>{{event.group[0]}} aktivity</b>
                </div>
              </slot>
              <slot v-if="event.isForeign === true">
                <div>
                  <b>zahraniční aktivity</b>
                </div>
              </slot>
              <slot v-else>
                <div>
                  <b>aktivity v ČR</b>
                </div>
              </slot>
            </div>
          </div>
        </div>

        <div class="table">
          <div class="row" v-if="event.deadlines && event.deadlines.length">
            <div class="cell">Deadline pro přihlášení:</div>
            <div class="cell">{{transformDeadline(event.deadlines)}}</div>
          </div>
          <div class="row" v-if="event.eventUrl">
            <div class="cell">Webové stránky:</div>
            <div class="cell">
              <a :href="event.eventUrl" target="_blank">{{event.eventUrl || 'neuvedeno'}}</a>
            </div>
          </div>
          <div class="row" v-if="event.contact">
            <div class="cell">Kontakt:</div>
            <div class="cell">{{event.contact}}</div>
          </div>
          <div class="row" v-if="event.ageGroup && event.ageGroup.length">
            <div class="cell">Věková skupina:</div>
            <div class="cell">{{event.ageGroup.map(c => c).join(', ')}}</div>
          </div>
          <div class="row" v-if="event.price">
            <div class="cell">Cena:</div>
            <div class="cell">{{event.price}}</div>
          </div>
          <div class="row" v-if="event.categories && event.categories.length">
            <div class="cell">Kategorie:</div>
            <div class="cell">{{event.categories.map(c => c.full).join(', ')}}</div>
          </div>
        </div>

        <div class="report-activity orange">
          <p>Něco se vám na aktivitě nezdá? Pomozte nám ji vylepšit či o ní získat aktuální informace.</p>
          <button class="button" @click="openReport">Nahlásit/Upravit aktivitu</button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import ReportActivity from './ReportActivity'
import transformerUtils from '../../utils/transformerUtils'

export default {
  name: 'detail',
  components: { ReportActivity },
  data () {
    return {
      actualKey: this.eventKey,
      event: {
        ageGroup: [],
        categories: [],
        contact: '',
        deadlines: '',
        description: '',
        eventUrl: '',
        group: '',
        id: null,
        isForeign: false,
        logo: '',
        logoUrl: '',
        name: '',
        types: []
      }
    }
  },
  created: function () {
    window.addEventListener('keydown', this.handleKey)
  },
  beforeDestroy: function () {
    window.removeEventListener('keydown', this.handleKey)
  },
  mounted () {
    this.event = this.events[this.eventKey]
  },
  props: {
    eventKey: {
      type: Number,
      required: true
    },
    events: {
      type: Array,
      required: true
    }
  },
  methods: {
    openReport () {
      this.$modal.open({
        parent: this,
        component: ReportActivity,
        hasModalCard: true,
        canCancel: ['escape', 'x'],
        props: {
          name: this.event.name,
          eventId: this.event.id
        }
      })
    },
    goToPrevious () {
      if (this.actualKey !== 0) {
        this.actualKey = this.actualKey - 1
        this.event = this.events[this.actualKey]
      }
    },
    goToNext () {
      if (this.actualKey !== this.events.length - 1) {
        this.actualKey = this.actualKey + 1
        this.event = this.events[this.actualKey]
      }
    },
    handleKey (e) {
      if (e.key === 'ArrowRight') {
        this.goToNext()
      }
      if (e.key === 'ArrowLeft') {
        this.goToPrevious()
      }
    },
    transformDeadline (dealines) {
      return transformerUtils.transformPeriods(dealines[0])
    }
  }
}
</script>

<style lang="scss">
.modal-card {
  width: 92%;
  margin: auto !important;
  max-width: 800px;
  border-radius: 18px;
  font-size: 13px;

  .arrow-wrap {
    position: fixed;
    top: 50%;
    width: 62px;
    height: 62px;
    padding: 10px;
    border-radius: 50%;
    z-index: 1;
    @media (max-width: 500px) {
      top: 60%;
      background-color: #cacaca;
    }
    .arrow {
      background-size: cover;
      transition: all 0.2s ease-in-out;
      width: 40px;
      height: 40px;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }

    &.left {
      left: 10px;
      .arrow {
        background: url(~@/assets/svg/back.svg) no-repeat;
        background-size: cover;
      }
    }

    &.right {
      right: 10px;
      .arrow {
        background: url(~@/assets/svg/next.svg) no-repeat;
        background-size: cover;
      }
    }
  }

  .table {
    display: table;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;

    .row {
      display: table-row;

      .cell {
        display: table-cell;
        padding: 5px 3px;
        max-width: 150px;
        word-wrap: break-word;

        &:first-child {
          text-align: right;
        }

        &:nth-child(2) {
          text-align: left;
          padding-left: 8px;
        }
      }
    }
  }

  .flex {
    display: flex;
    flex: 1;
    flex-direction: row;

    &.intro {
      @media (max-width: 500px) {
        flex-direction: column;
      }
    }

    &.flex-half {
      > div {
        flex: 0.5;
        display: flex;
        flex-direction: column;
        font-size: 14px;

        > p,
        > div {
          padding-left: 10px;
          padding-bottom: 5px;

          @media (max-width: 500px) {
            padding-top: 15px;
          }
        }

        img {
          margin-right: 10px;
          border-radius: 5px;
        }
      }
    }
  }

  .more-info {
    margin-top: 20px;
  }
  .center-items {
    margin-top: 40px;
  }
  .left-items {
    text-align: right;
    padding-right: 10px;
  }

  .report-activity {
    margin: 20px auto;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 500px) {
      flex-direction: column;
    }

    p {
      max-width: 50%;
      text-align: right;
      padding-right: 10px;
      @media (max-width: 500px) {
        max-width: 90%;
        text-align: left;
        padding-bottom: 10px;
      }
    }

    .button {
      margin-left: 10px;
      font-size: 13px;
      margin-right: auto;
      @media (max-width: 500px) {
        margin-left: 20px;
      }
    }
  }
}

.modal-card-body {
  padding: 20px;
}

.modal-card-head {
  color: #fff;
  font-size: 30px;

  &.type-SO {
    background: #3e2f5b;
  }

  &.type-VK {
    background: #efca08;
  }

  &.type-PR {
    background: #17bebb;
  }

  &.type-EV {
    background: #eb5757;
  }

  &.type-OS {
    background: #15be5a;
  }

  &.type-other {
    background: #2f80ed;
  }
}
</style>
