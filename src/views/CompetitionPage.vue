<template>
  <div class="competition-page">
    <main-block/>
    <what-to-expect-block/>
    <last-year-block/>
    <video-block/>
    <pictures-block/>
    <important-questions-block/>
    <!-- <more-questions-block/> -->
    <prices-block/>
    <sign-up-now-block/>
    <our-partners-block/>
    <footer-block/>
  </div>
</template>

<script>
import MainBlock from '../components/competition/MainBlock'
import WhatToExpectBlock from '../components/competition/WhatToExpectBlock'
import LastYearBlock from '../components/competition/LastYearBlock'
import PricesBlock from '../components/competition/PricesBlock'
import SignUpNowBlock from '../components/competition/SignUpNowBlock'
import MoreQuestionsBlock from '../components/competition/MoreQuestionsBlock'
import ImportantQuestionsBlock from '../components/competition/ImportantQuestionsBlock'
import OurPartnersBlock from '../components/competition/OurPartnersBlock'
import VideoBlock from '../components/competition/VideoBlock'
import PicturesBlock from '../components/competition/PicturesBlock'
import FooterBlock from '../components/common/Footer'

export default {
  name: 'competition-page',
  metaInfo: {
    title: 'Středoškolák roku 2021',
    titleTemplate: null,
    meta: [
      { name: 'description', content: 'Soutěž pro všechny aktivní středoškoláky, kteří dělají něco nad rámec povinné školní výuky.' }
    ]
  },
  components: {
    OurPartnersBlock,
    ImportantQuestionsBlock,
    MoreQuestionsBlock,
    MainBlock,
    WhatToExpectBlock,
    LastYearBlock,
    PricesBlock,
    SignUpNowBlock,
    VideoBlock,
    PicturesBlock,
    FooterBlock
  }
}
</script>

<style scoped>

</style>
