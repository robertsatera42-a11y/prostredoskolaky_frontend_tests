<template>
  <div class="amigo-page">
    <main-block/>
    <info-block/>
    <footer-block/>
  </div>
</template>

<script>
import MainBlock from '../components/amigo/MainBlock'
import InfoBlock from '../components/amigo/InfoBlock'
import FooterBlock from '../components/common/Footer'

export default {
  name: 'amigo-page',
  metaInfo: {
    title: 'AMIGO',
    titleTemplate: '%s | mentoringový program pro středoškoláky',
    meta: [
      { name: 'description', content: 'Dali jsme dohromady ty nejaktivnější bývalé středoškoláky, aby ti pomohli s tvým rozletem. Ať už chceš poradit se svým projektem, hledáš rady a tipy jak dělat něco navíc a nebo si chceš popovídat, co s životem po střední.' }
    ]
  },
  components: {
    MainBlock,
    InfoBlock,
    FooterBlock
  }
}
</script>

<style scoped>

</style>
