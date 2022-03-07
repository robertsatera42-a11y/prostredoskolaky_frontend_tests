<template>
  <div>
    <p>Celkem reportů: {{count}}</p>
    <div class="u-table">
      <div class="u-table-row">
        <div class="u-table-head">id</div>
        <div class="u-table-head">Název aktivity</div>
        <div class="u-table-head">Kontakt</div>
        <div class="u-table-head">Vytvořeno</div>
        <div class="u-table-head">Akce</div>
      </div>
      <div v-for="(report, index) in reports" :key="report.id" class="u-table-row">
        <div class="u-table-cell">{{index}}</div>
        <div class="u-table-cell">{{report.eventName}}</div>
        <div class="u-table-cell">{{report.contact}}</div>
        <div class="u-table-cell">{{transformDate(report.createdAt)}}</div>
        <div class="u-table-cell action">
          <button
            class="button"
            @click="openReport(report)"
          >Otevřít</button>
          <button
            class="button red"
            @click="deleteReport(report.id)"
          >Vymazat</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import client from '../../../client/client'
import transformerUtils from '../../../utils/transformerUtils'
import ReportActivity from '../../database/ReportActivity'

export default {
  name: 'reports',
  components: { ReportActivity },
  data () {
    return {
      reports: [],
      count: 0
    }
  },
  async mounted () {
    await this.fetchReports()
  },
  methods: {
    openReport (report) {
      this.$modal.open({
        parent: this,
        component: ReportActivity,
        hasModalCard: true,
        canCancel: ['escape', 'x'],
        props: {
          name: report.eventName,
          eventId: report.eventId,
          description: report.description,
          contact: report.contact,
          status: 'show'
        },
        events: {
          'refetch': (ev) => {
            this.fetchReports()
          }
        }
      })
    },
    async deleteReport (id) {
      const result = window.confirm('Opravdu chcete report vymazat?')
      if (result) {
        await client.deleteReport(id)
        await this.fetchReports()
      }
    },
    async fetchReports () {
      const reports = await client.getReports()
      this.reports = reports
      this.count = this.reports.length
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

    &.action {
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
