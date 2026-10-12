<template>
  <div class="database-page" :class="{ 'platform-page': appearance === 'platform' }">
    <component :is="appearance === 'platform' ? 'main' : 'div'" :id="appearance === 'platform' ? 'home-main' : null" :tabindex="appearance === 'platform' ? -1 : null">
      <main-block :appearance="appearance"/>
      <filter-block :appearance="appearance"/>
      <events-list :appearance="appearance"/>
    </component>
    <home-footer v-if="appearance === 'platform'" :social-links="socialLinks"/>
    <footer-block v-else/>
  </div>
</template>

<script>
import EventsList from '../components/database/EventsList'
import MainBlock from '../components/database/MainBlock'
import FilterBlock from '../components/database/FilterBlock'
import FooterBlock from '../components/common/Footer'
import HomeFooter from '../components/home/HomeFooter'
import { styledPagePath } from '../components/home/publicNavigation'
import { platformSocialLinks } from '../components/platform/presentation'

export default {
  name: 'database-page',
  metaInfo: {
    title: 'Databáze mimoškolních aktivit',
    titleTemplate: null,
    meta: [
      { name: 'description', content: 'Shromáždili jsme všechny zajímavé aktivity v ČR i zahraničí. Ať už chceš dělat vědu, sportovat nebo podnikat, u nás najdeš nekonečně mnoho příležitostí.' }
    ]
  },
  components: { FilterBlock, EventsList, MainBlock, FooterBlock, HomeFooter },
  data () { return { socialLinks: platformSocialLinks } },
  computed: {
    appearance () { return styledPagePath(this.$route) === '/databaze' ? 'platform' : 'legacy' }
  }
}
</script>

<style scoped>

</style>
