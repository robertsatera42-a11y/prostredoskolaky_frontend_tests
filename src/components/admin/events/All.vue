<template>
  <div>
    <p>Celkem aktivit: {{count}}</p>
    <p>Active: {{countActive}}</p>
    <p>Inactive: {{countInactive}}</p>
    <div class="u-table">
      <div class="u-table-row">
        <div class="u-table-head">id</div>
        <div class="u-table-head">Název</div>
        <div class="u-table-head">Věková skupina</div>
        <div class="u-table-head">Váha</div>
        <div class="u-table-head">Status</div>
        <div class="u-table-head">Akce</div>
      </div>
      <div v-for="(event, index) in events" :key="event.id" class="u-table-row">
        <div class="u-table-cell">{{index}}</div>
        <div class="u-table-cell">{{event.name}}</div>
        <div class="u-table-cell">{{event.ageGroup.map(c => c).join(', ')}}</div>
        <div class="u-table-cell">{{event.weight}}</div>
        <div :class="getStatusClass(event.status)">{{event.status}}</div>
        <div class="u-table-cell">
          <button
            class="button"
            @click="editEvent(event.id)"
          >Upravit</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import client from '../../../client/client'
import ActivityForm from '../../../components/database/ActivityForm'

export default {
  name: 'all',
  components: { ActivityForm },
  data () {
    return {
      events: [],
      count: 0,
      countActive: 0,
      countInactive: 0,
      view: 'all'
    }
  },
  async mounted () {
    this.fetchEvents()
  },
  methods: {
    async fetchEvents () {
      const { events, totalEvents } = await client.getEventsListing()
      this.events = events
      this.count = totalEvents
      const active = this.events.filter(e => e.status === 'active')
      const inactive = this.events.filter(e => e.status === 'inactive')
      this.countActive = active.length
      this.countInactive = inactive.length
    },
    getStatusClass (status) {
      if (status === 'inactive') {
        return 'u-table-cell red'
      } return 'u-table-cell'
    },
    changeView (newView) {
      this.view = newView
    },
    editEvent (id) {
      this.$modal.open({
        parent: this,
        component: ActivityForm,
        hasModalCard: true,
        canCancel: ['escape', 'x'],
        props: {
          id
        },
        events: {
          'refetch': (ev) => {
            this.fetchEvents()
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.u-table {
    display: table;
    width: 100%;
    padding-top: 30px;

    .u-table-row {
      display: table-row;
      height: 45px;
    }

    .u-table-head {
      display: table-cell;
      border-bottom: 2px solid #99999980;
      font-weight: 700;
    }

    .u-table-cell {
      display: table-cell;
      border-bottom: 1px solid #99999980;
      padding: 10px 0 5px 0;

      &.red {
        color: red;
      }
    }
  }

</style>
