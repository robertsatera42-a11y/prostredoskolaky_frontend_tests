<template>
  <div>
    <p>Počet přihlášených: {{ count }}</p>
    <div class="u-table">
      <div class="u-table-row">
        <div class="u-table-head">id</div>
        <div class="u-table-head">Jméno a příjmení</div>
        <div class="u-table-head">E-mail</div>
        <div class="u-table-head">Vytvořeno</div>
        <div class="u-table-head">Updatováno</div>
        <div class="u-table-head">Počet aktivit</div>
        <div class="u-table-head">Akce</div>
      </div>
      <div v-for="(registration, index) in registrations" :key="registration.id" class="u-table-row">
        <div class="u-table-cell">{{index}}</div>
        <div class="u-table-cell">{{registration.firstName}} {{registration.lastName}}</div>
        <div class="u-table-cell">{{registration.email}}</div>
        <div class="u-table-cell">{{transformDate(registration.createdAt)}}</div>
        <div class="u-table-cell">{{transformDate(registration.updatedAt)}}</div>
        <div class="u-table-cell">{{registration.totalActivities}}</div>
        <div class="u-table-cell">
          <button
            class="button"
            @click="openRegistration(registration.id, index)"
          >Otevřít</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import client from '../../../client/client'
import transformerUtils from '../../../utils/transformerUtils'

export default {
  name: 'list',
  data () {
    return {
      registrations: [],
      count: 0
    }
  },
  async mounted () {
    const registrations = await client.getRegistrations()
    this.count = registrations && registrations.length
    this.registrations = registrations
  },
  methods: {
    transformDate (stringDate) {
      return transformerUtils.transformDate(stringDate)
    },
    openRegistration (id, index) {
      this.$emit('changeView', { id, index })
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
