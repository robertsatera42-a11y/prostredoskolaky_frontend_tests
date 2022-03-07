<template>
  <section class="event-section" id="event-section">
    <div class="content">
      <slot v-if="isLoading">
        <h3>Načítání...</h3>
      </slot>
      <slot v-else-if="events.length === 0">
        <h3>Aktivitu, kterou hledáš, jsme bohužel <span class="orange">nenalezli</span>, dej nám o ní vědět.</h3>
        <button class="button" @click="addEvent">Přidat aktivitu</button>
      </slot>
      <slot v-else-if="totalEvents === 1">
        <h3>nalezena <span class="orange">1</span> aktivita</h3>
      </slot>
      <slot v-else-if="totalEvents > 1 && totalEvents < 5">
        <h3>nalezeny <span class="orange">{{totalEvents}}</span> aktivity</h3>
      </slot>
      <slot v-else-if="totalEvents > 4">
        <h3>nalezeno <span class="orange">{{totalEvents}}</span> aktivit</h3>
      </slot>

      <div :class="eventsClass">
        <slot v-for="(event, index) in events">
          <event :event="event" :eventKey="index" :events="events"/>
        </slot>
      </div>

      <pagination v-if="this.totalPages" :total="this.totalPages"/>

    </div>
  </section>
</template>

<script>
import Event from './Event'
import Pagination from './Pagination'
import { EVENTS, FETCH_EVENTS, TOTAL_PAGES, TOTAL_EVENTS } from '../../types'
import { mapGetters, mapActions } from 'vuex'
import ActivityForm from '../database/ActivityForm'

export default {
  name: 'events-list',
  components: { Event, ActivityForm, Pagination },
  data () {
    return {
      isLoading: true,
      eventsClass: 'found-events hide'
    }
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
    }
  },
  async mounted () {
    await this.fetchEvents(1)
    this.isLoading = false
    this.eventsClass = 'found-events'
  },
  computed: {
    ...mapGetters([EVENTS, TOTAL_PAGES, TOTAL_EVENTS])
  }
}
</script>

<style scoped lang="scss">
  section.event-section {
    .content {
      width: 80%;
      max-width: 1200px;
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 30px auto 0;
      padding: 40px;

      button {
        background-color: #F06027;
        color: white;
        border-color: white;
      }

      @media (max-width: 800px) {
        width: 90%;
        padding: 20px;
      }

      .found-events {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;
        max-width: 100%;

        &.hide {
          display: none;
        }
      }
    }
  }
</style>
