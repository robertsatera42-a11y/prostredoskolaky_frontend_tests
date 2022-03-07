<template>
  <div class="search-container">
      <input v-model="search" v-on:keyup="getEvents" name="search" placeholder="Hledat aktivitu">
      <!-- <clear-box :name="'search'"></clear-box> -->
      <div class="button" @keyup.enter="getEvents" @click="getEvents">Vyhledat</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { FETCH_EVENTS } from '../../types'
import { debounce } from 'debounce'
import { mapFields } from 'vuex-map-fields'
import ClearBox from '../common/ClearBox'

export default {
  name: 'search-block',
  components: { ClearBox },
  methods: {
    ...mapActions({ fetchEvents: FETCH_EVENTS }),
    getEvents: debounce(async function () {
      this.fetchEvents(1)
    }, 500)
  },
  computed: {
    ...mapFields({
      search: 'search'
    })
  },
  updated () {
    if (!this.search) {
      this.getEvents()
    }
  }
}
</script>

<style scoped lang="scss">
  .search-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  input {
    outline: none;
    border-radius: 20px;
    border: 1px solid #979797;
    padding: 5px 10px 5px 15px;
    font-family: 'NunitoLight', sans-serif;
    font-style: italic;
  }
  .button {
    font-family: 'NunitoLight', sans-serif;
    font-weight: normal;
    margin-left: 24px;
    border-radius: 6px;
    font-size: 14px;
    padding: 6px 12px;
    background: transparent;
    border-color: #979797;
  }
</style>
