<template>
    <div class="finalists-page">
        <main-block />
        <finalists-block />
        <footer-block/>
    </div>
</template>
<script>
import MainBlock from '../components/finalists/MainBlock'
import FinalistsBlock from '../components/finalists/FinalistsBlock'
import FooterBlock from '../components/common/Footer'

export default {
  name: 'finalists-page',
  metaInfo: {
    title: 'Finalisté soutěže Středoškolák roku',
    titleTemplate: null,
    meta: [
      { name: 'description', content: 'Bývalí finalisté všech ročníků soutěže Středoškolák roku.' }
    ]
  },
  components: { MainBlock, FinalistsBlock, FooterBlock }
}
</script>
<style scoped>

</style>
