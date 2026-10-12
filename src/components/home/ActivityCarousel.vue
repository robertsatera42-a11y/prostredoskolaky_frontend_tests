<template>
  <section id="aktivity" class="home-section home-activities" aria-labelledby="activities-title">
    <div class="home-container">
      <div class="home-section-heading">
        <div>
          <p class="home-eyebrow">Zkušenosti, které si odneseš</p>
          <h2 id="activities-title">Naše aktivity</h2>
          <p>Soutěže, mentoring i setkání. Vyber si, co tě posune dál.</p>
        </div>
      </div>
      <p id="activity-instructions" class="home-sr-only">Seznam aktivit lze posouvat přejetím, tlačítky nebo šipkami na klávesnici. Klávesy Home a End přejdou na začátek a konec seznamu.</p>
      <div class="home-activity-carousel">
        <button type="button" class="home-round-button home-carousel-previous" aria-label="Předchozí aktivita" aria-controls="activity-list" :disabled="atStart" @click="move(-1, $event.detail !== 0)">
          <home-icon name="arrow-left" />
        </button>
      <ul id="activity-list" ref="track" class="home-activity-track" tabindex="0" aria-label="Všechny naše aktivity" aria-describedby="activity-instructions" @scroll.passive="updateBounds" @keydown="onKeydown">
        <li v-for="item in items" :key="item.id" class="home-activity-card">
          <component :is="item.external ? 'a' : 'router-link'" class="home-activity-link" v-bind="item.external ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : { to: item.href }" @click.native="!item.external && trackClick(item.trackingLabel)" @click="item.external && trackClick(item.trackingLabel)">
            <img :src="item.image" :alt="item.imageAlt" :width="item.imageWidth" :height="item.imageHeight" loading="lazy" decoding="async">
            <div class="home-card-copy">
              <p class="home-eyebrow">{{ item.category }}</p>
              <h3>{{ item.title }}</h3>
              <p class="home-card-description">{{ item.description }}</p>
              <span class="home-card-action">Zjistit více <home-icon :name="item.external ? 'external' : 'arrow-right'" /><span v-if="item.external" class="home-sr-only"> (otevře se v nové kartě)</span></span>
            </div>
          </component>
        </li>
      </ul>
        <button type="button" class="home-round-button home-carousel-next" aria-label="Další aktivita" aria-controls="activity-list" :disabled="atEnd" @click="move(1, $event.detail !== 0)">
          <home-icon name="arrow-right" />
        </button>
      </div>
      <div class="home-activity-footnote"><span>{{ items.length }} možností, jak se zapojit</span><span>Procházej a najdi tu svoji <home-icon name="arrow-right" /></span></div>
    </div>
  </section>
</template>

<script>
import HomeIcon from './HomeIcon'
import tracking from '@/utils/tracking'

export default {
  name: 'ActivityCarousel',
  components: { HomeIcon },
  props: {
    items: { type: Array, required: true }
  },
  data () {
    return { atStart: true, atEnd: false }
  },
  mounted () {
    this.$nextTick(this.updateBounds)
    window.addEventListener('resize', this.updateBounds)
    if (window.ResizeObserver) {
      this.resizeObserver = new window.ResizeObserver(this.updateBounds)
      this.resizeObserver.observe(this.$refs.track)
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.updateBounds)
    if (this.resizeObserver) this.resizeObserver.disconnect()
  },
  watch: {
    items () { this.$nextTick(this.updateBounds) }
  },
  methods: {
    updateBounds () {
      const track = this.$refs.track
      if (!track) return
      const maximum = Math.max(0, track.scrollWidth - track.clientWidth)
      this.atStart = track.scrollLeft <= 2
      this.atEnd = track.scrollLeft >= maximum - 2
    },
    scrollTo (left, animate = true) {
      const track = this.$refs.track
      const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const maximum = Math.max(0, track.scrollWidth - track.clientWidth)
      const destination = Math.max(0, Math.min(left, maximum))
      if (track.scrollTo) track.scrollTo({ left: destination, behavior: reduced || !animate ? 'auto' : 'smooth' })
      else track.scrollLeft = destination
      this.updateBounds()
    },
    move (direction, animate = true) {
      const track = this.$refs.track
      const cards = Array.from(track.children)
      if (!cards.length) return
      const positions = cards.map(card => card.offsetLeft - cards[0].offsetLeft)
      const current = track.scrollLeft
      const next = direction > 0
        ? positions.find(position => position > current + 2)
        : positions.reverse().find(position => position < current - 2)
      this.scrollTo(next === undefined ? current : next, animate)
      tracking.track('homepage', 'button', direction > 0 ? 'activities_next' : 'activities_previous')
    },
    onKeydown (event) {
      if (event.target !== event.currentTarget) return
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
      event.preventDefault()
      if (event.key === 'Home') this.scrollTo(0, false)
      else if (event.key === 'End') this.scrollTo(this.$refs.track.scrollWidth, false)
      else this.move(event.key === 'ArrowRight' ? 1 : -1, false)
    },
    trackClick (label) {
      tracking.track('homepage', 'link', label)
    }
  }
}
</script>
