<template>
  <section id="mentori" class="home-section public-mentors" aria-labelledby="mentors-title">
    <div class="home-container">
      <div class="home-section-heading">
        <div>
          <p class="home-eyebrow">Lidé, kteří tě podpoří</p>
          <h2 id="mentors-title">Naši mentoři</h2>
          <p>Prohlédni si jejich zkušenosti a vyber si, s kým chceš svůj rozlet probrat.</p>
        </div>
      </div>
      <div class="public-mentor-grid">
        <article v-for="mentor in mentors" :key="mentor.id" class="public-mentor">
          <img class="public-mentor-photo" :src="mentor.image" :alt="'Fotografie: ' + mentor.name" :width="mentor.width" :height="mentor.height" loading="lazy" decoding="async">
          <div class="public-mentor-copy">
            <h3>{{ mentor.name }}</h3>
            <p v-if="mentor.hashtags" class="public-mentor-tags">{{ mentor.hashtags }}</p>
            <p v-if="isMobile || activeMentor !== mentor.id" class="public-mentor-preview">{{ mentor.paragraphs.find(paragraph => paragraph.trim()) || '' }}</p>
            <div v-show="!isMobile && activeMentor === mentor.id" :id="'mentor-' + mentor.id" class="public-mentor-bio">
              <ul><li v-for="(paragraph, index) in mentor.paragraphs" :key="index">{{ paragraph }}</li></ul>
            </div>
            <button type="button" class="public-mentor-toggle" :aria-expanded="activeMentor === mentor.id ? 'true' : 'false'" :aria-controls="isMobile ? 'mentor-dialog' : 'mentor-' + mentor.id" :aria-haspopup="isMobile ? 'dialog' : null" @click="activeMentor = activeMentor === mentor.id ? '' : mentor.id">
              {{ activeMentor === mentor.id ? 'Zobrazit méně' : 'Celý medailonek' }}<home-icon :name="activeMentor === mentor.id ? 'close' : 'arrow-right'" />
            </button>
          </div>
        </article>
      </div>
      <dialog id="mentor-dialog" ref="mentorDialog" class="public-mentor-dialog" aria-labelledby="mentor-dialog-title" @cancel.prevent="activeMentor = ''" @close="activeMentor = ''" @keydown="trapDialogFocus">
        <template v-if="isMobile && selectedMentor">
          <button type="button" class="public-mentor-dialog-close" aria-label="Zavřít medailonek" autofocus @click="activeMentor = ''"><home-icon name="close" /></button>
          <img class="public-mentor-dialog-photo" :src="selectedMentor.image" :alt="'Fotografie: ' + selectedMentor.name" width="128" height="160">
          <h3 id="mentor-dialog-title">{{ selectedMentor.name }}</h3>
          <p v-if="selectedMentor.hashtags" class="public-mentor-tags">{{ selectedMentor.hashtags }}</p>
          <div class="public-mentor-bio"><ul><li v-for="(paragraph, index) in selectedMentor.paragraphs" :key="index">{{ paragraph }}</li></ul></div>
          <button type="button" class="home-button home-button-outline public-mentor-dialog-done" @click="activeMentor = ''">Zavřít medailonek</button>
        </template>
      </dialog>
    </div>
  </section>
</template>

<script>
import HomeIcon from '@/components/home/HomeIcon'

export default {
  name: 'MentorGrid',
  components: { HomeIcon },
  props: { mentors: { type: Array, required: true } },
  data () { return { activeMentor: '', isMobile: false } },
  computed: {
    selectedMentor () { return this.mentors.find(mentor => mentor.id === this.activeMentor) }
  },
  watch: {
    activeMentor () {
      this.$nextTick(() => {
        const dialog = this.$refs.mentorDialog
        if (!dialog) return
        if (this.isMobile && this.selectedMentor) {
          if (!dialog.open) dialog.showModal()
        } else if (dialog.open) {
          dialog.close()
        }
      })
    }
  },
  mounted () {
    if (!window.matchMedia) return
    this.mobileQuery = window.matchMedia('(max-width: 600px)')
    this.isMobile = this.mobileQuery.matches
    this.mobileQuery.addEventListener('change', this.onViewportChange)
  },
  beforeDestroy () {
    if (this.mobileQuery) this.mobileQuery.removeEventListener('change', this.onViewportChange)
    if (this.$refs.mentorDialog.open) this.$refs.mentorDialog.close()
  },
  methods: {
    trapDialogFocus (event) {
      if (event.key !== 'Tab') return
      const buttons = this.$refs.mentorDialog.querySelectorAll('button')
      const first = buttons[0]
      const last = buttons[buttons.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    },
    onViewportChange (event) {
      this.activeMentor = ''
      this.isMobile = event.matches
    }
  }
}
</script>
