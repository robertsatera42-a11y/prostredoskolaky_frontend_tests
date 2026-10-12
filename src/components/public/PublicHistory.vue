<template>
  <section id="historie" class="home-section public-history" aria-labelledby="history-title">
    <div class="home-container">
      <div class="home-section-heading">
        <div><p class="home-eyebrow">Ohlédnutí za společnými zážitky</p><h2 id="history-title">Historický koutek</h2><p>Setkání, soutěže a projekty, které tvoří příběh ProStředoškoláků.</p></div>
      </div>
      <div class="public-history-highlights">
        <article v-for="event in history.slice(0, 3)" :key="event.id" class="public-history-highlight">
          <div v-if="event.video" class="public-history-video"><iframe :src="event.video" :title="'Video: ' + event.title" width="560" height="315" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></div>
          <img v-else-if="event.image" :src="event.image" :alt="event.title" :width="event.width" :height="event.height" loading="lazy">
          <div class="public-history-copy">
            <p class="home-eyebrow">{{ event.date }}</p><h3>{{ event.title }}</h3><p>{{ event.description }}</p>
            <a v-for="link in event.links" :key="link.href" class="home-text-link" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.title }}<home-icon name="external" /><span class="home-sr-only"> (otevře se v nové kartě)</span></a>
          </div>
        </article>
      </div>
      <details class="public-history-archive" @toggle="archiveOpen = $event.target.open">
        <summary>Zobrazit celý archiv <span>{{ history.length - 3 }} dalších událostí</span><home-icon name="chevron" /></summary>
        <div v-if="archiveOpen" class="public-history-list">
          <article v-for="event in history.slice(3)" :key="event.id" class="public-history-entry">
            <img v-if="event.image" :src="event.image" :alt="event.title" :width="event.width" :height="event.height" loading="lazy" decoding="async">
            <div>
              <p class="home-eyebrow">{{ event.date }}</p><h3>{{ event.title }}</h3><p>{{ event.description }}</p>
              <div class="public-history-links">
                <a v-for="link in event.links" :key="link.href" class="home-text-link" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.title }}<home-icon name="external" /><span class="home-sr-only"> (otevře se v nové kartě)</span></a>
                <a v-if="event.video" class="home-text-link" :href="event.video" target="_blank" rel="noopener noreferrer">Přehrát video <home-icon name="external" /><span class="home-sr-only"> (otevře se v nové kartě)</span></a>
              </div>
            </div>
          </article>
        </div>
      </details>
    </div>
  </section>
</template>

<script>
import HomeIcon from '@/components/home/HomeIcon'

export default {
  name: 'PublicHistory',
  components: { HomeIcon },
  props: { history: { type: Array, required: true } },
  data () { return { archiveOpen: false } }
}
</script>
