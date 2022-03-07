<template>
  <div class="about-us-page">
    <main-block/>
    <who-are-we-block/>
    <contact-block/>
    <team-block/>
    <gallery-block/>
    <footer-block/>
  </div>
</template>

<script>
import MainBlock from '../components/aboutUs/MainBlock'
import WhoAreWeBlock from '../components/aboutUs/WhoAreWeBlock'
import ContactBlock from '../components/aboutUs/ContactBlock'
import TeamBlock from '../components/aboutUs/TeamBlock'
import GalleryBlock from '../components/aboutUs/GalleryBlock'
import FooterBlock from '../components/common/Footer'

export default {
  name: 'about-us-page',
  metaInfo: {
    title: 'O nás',
    titleTemplate: null
  },
  components: {
    MainBlock,
    TeamBlock,
    ContactBlock,
    WhoAreWeBlock,
    GalleryBlock,
    FooterBlock
  }
}
</script>

<style scoped>

</style>
