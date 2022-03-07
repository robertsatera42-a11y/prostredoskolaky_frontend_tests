<template>
  <div class="database-page">
    <main-block/>
    <filter-block/>
    <!-- <search-block/> -->
    <events-list/>
    <footer-block/>
  </div>
</template>

<script>
import EventsList from '../components/database/EventsList'
import MainBlock from '../components/database/MainBlock'
import SearchBlock from '../components/database/SearchBlock'
import FilterBlock from '../components/database/FilterBlock'
import FooterBlock from '../components/common/Footer'

export default {
  name: 'database-page',
  metaInfo: {
    title: 'Databáze mimoškolních aktivit',
    titleTemplate: null,
    meta: [
      { name: 'description', content: 'Shromáždili jsme všechny zajímavé aktivity v ČR i zahraničí. Ať už chceš dělat vědu, sportovat nebo podnikat, u nás najdeš nekonečně mnoho příležitostí.' }
    ]
  },
  components: { FilterBlock, EventsList, MainBlock, SearchBlock, FooterBlock }
}
</script>

<style scoped>

</style>
