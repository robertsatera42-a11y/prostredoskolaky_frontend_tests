<template>
  <div>
    <button class="button" @click="backToList">Zpět</button>
    <h3>Detail přihlášeného</h3>
    <div class="u-table">
      <div class="u-table-row">
        <div class="u-table-cell right">Id:</div>
        <div class="u-table-cell">{{index}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell right">Jméno a příjmení:</div>
        <div class="u-table-cell">{{registration.firstName}} {{registration.lastName}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell right">E-mail:</div>
        <div class="u-table-cell">{{registration.email}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell right">Škola:</div>
        <div class="u-table-cell">{{registration.school}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell right">Kontakt na učitele/školu:</div>
        <div class="u-table-cell">{{registration.schoolContact}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell right">Kraj:</div>
        <div class="u-table-cell">{{registration.region}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell right">Datum narození:</div>
        <div class="u-table-cell">{{transformDate(registration.dob)}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell right">Kde se o soutěži dozvěděl/a:</div>
        <div class="u-table-cell">{{registration.knowledge}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell right">Updatováno:</div>
        <div class="u-table-cell">{{transformDate(registration.updatedAt)}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell right">Vytvořeno:</div>
        <div class="u-table-cell">{{transformDate(registration.createdAt)}}</div>
      </div>
    </div>
    <div v-for="(activity, index) in registration.activities" :key="activity.name" class="u-table">
      <b>{{index}}. aktivita</b>
      <div class="u-table-row">
        <div class="u-table-cell">Název:</div>
        <div class="u-table-cell">{{activity.name}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell">Link:</div>
        <div class="u-table-cell"><a :href="activity.link" target="_blank">{{activity.link}}</a></div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell">Výsledek:</div>
        <div class="u-table-cell">{{activity.result}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell">Jak začal/a:</div>
        <div class="u-table-cell">{{activity.start}}</div>
      </div>
      <div class="u-table-row">
        <div class="u-table-cell">Co se naučil/a:</div>
        <div class="u-table-cell">{{activity.learning}}</div>
      </div>
    </div>
    <button class="button" @click="backToList">Zpět</button>
  </div>
</template>

<script>
import client from '../../../client/client'
import transformerUtils from '../../../utils/transformerUtils'

export default {
  name: 'detail',
  props: {
    id: {
      type: Number,
      required: true
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      registration: {}
    }
  },
  async mounted () {
    await this.fetchRegistration()
  },
  methods: {
    async fetchRegistration () {
      const registration = await client.getRegistration(this.id)
      this.registration = registration
    },
    backToList () {
      this.$emit('changeView')
    },
    transformDate (stringDate) {
      return transformerUtils.transformDate(stringDate)
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 20px;
}

.button {
  margin: 10px 0 20px 0;
}
.u-table {
  display: table;
  width: 100%;
  padding-top: 30px;
  width: 70%;

  .u-table-row {
    display: table-row;
    height: 45px;
  }

  .u-table-cell {
    display: table-cell;
    padding: 10px 0 5px 0;

    &:first-child {
      width: 30%;
    }

    &.right {
      text-align: left;
      padding-right: 15px;
    }

    &.red {
      color: red;
    }
  }
}
</style>
