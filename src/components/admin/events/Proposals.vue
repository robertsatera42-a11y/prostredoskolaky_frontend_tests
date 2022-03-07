<template>
  <div>
    <p>Celkem návrhů: {{count}}</p>
    <div class="u-table">
      <div class="u-table-row">
        <div class="u-table-head">id</div>
        <div class="u-table-head">Název</div>
        <div class="u-table-head">Věková skupina</div>
        <div class="u-table-head">Váha</div>
        <div class="u-table-head">Status</div>
        <div class="u-table-head">Vytvořeno</div>
        <div class="u-table-head">Akce</div>
      </div>
      <div v-for="(event, index) in events" :key="event.id" class="u-table-row">
        <div class="u-table-cell">{{index}}</div>
        <div class="u-table-cell">{{event.name}}</div>
        <div class="u-table-cell">{{event.ageGroup.map(c => c).join(', ')}}</div>
        <div class="u-table-cell">{{event.weight}}</div>
        <div class="u-table-cell green">{{event.status}}</div>
        <div class="u-table-cell">{{transformDate(event.createdAt)}}</div>
        <div class="u-table-cell proposal">
          <button
            class="button"
            @click="editAndPublish(event.id)"
          >Zkontrolovat</button>
          <button
            class="button red"
            @click="deleteEvent(event.id)"
          >Vymazat</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import client from '../../../client/client'
import transformerUtils from '../../../utils/transformerUtils'
import ActivityForm from '../../database/ActivityForm'

export default {
  name: 'proposals',
  data () {
    return {
      events: [],
      count: 0
    }
  },
  async mounted () {
    await this.fetchProposals()
  },
  methods: {
    async fetchProposals () {
      const { events, totalEvents } = await client.getProposalsListing()
      this.events = events
      this.count = totalEvents
    },
    editAndPublish (id) {
      this.$modal.open({
        parent: this,
        component: ActivityForm,
        hasModalCard: true,
        canCancel: ['escape', 'x'],
        props: {
          id,
          status: 'publish'
        },
        events: {
          'refetch': (ev) => {
            this.fetchProposals()
          }
        }
      })
    },
    async deleteEvent (id) {
      const result = window.confirm('Opravdu chcete aktivitu vymazat?')
      if (result) {
        await client.deleteEvent(id)
        await this.fetchProposals()
      }
    },
    transformDate (stringDate) {
      return transformerUtils.transformDate(stringDate)
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

    &.green {
      color: green;
    }

    &.proposal {
      .button {
        margin-right: 10px;
        &.red {
          background: #E42424;
          color: white;
        }
      }
    }
  }
}

</style>
