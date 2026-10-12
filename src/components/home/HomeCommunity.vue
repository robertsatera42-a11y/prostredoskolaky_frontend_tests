<template>
  <section id="komunita" class="home-section home-community" aria-labelledby="community-title">
    <div class="home-container">
      <div class="home-section-heading">
        <div>
          <p class="home-eyebrow">Zůstaňme v kontaktu</p>
          <h2 id="community-title">Buď součástí komunity</h2>
          <p>Potkávej se s námi na akcích, sleduj novinky a inspiruj se příběhy ostatních.</p>
        </div>
      </div>
      <div class="home-community-grid">
        <div class="home-newsletter">
          <div class="home-newsletter-top"><span class="home-icon-tile"><home-icon name="mail" /></span><span class="home-eyebrow">Newsletter</span></div>
          <h3>Příležitosti přímo<br>do tvého e-mailu.</h3>
          <p>Pravidelná dávka mimoškolních aktivit, odkazy na zajímavé knihy a další vzdělávací tipy.</p>
          <div class="home-newsletter-bottom">
            <router-link class="home-button home-button-teal" :to="isLoggedIn ? '/profil' : '/login'" @click.native="trackNewsletter">
              {{ isLoggedIn ? 'Nastavit odběr' : 'Chci odebírat newsletter' }} <home-icon name="arrow-right" />
            </router-link>
            <p class="home-newsletter-note">{{ isLoggedIn ? 'Odběr můžeš kdykoliv změnit v nastavení svého profilu.' : 'Odběr si zvolíš při registraci. Máš už účet? Nastavíš ho ve svém profilu.' }}</p>
          </div>
        </div>
        <div class="home-channel-grid">
          <a v-for="channel in channels" :key="channel.id" class="home-channel" :href="channel.href" target="_blank" rel="noopener noreferrer" @click="trackChannel(channel.id)">
            <span class="home-channel-top"><home-icon :name="channel.icon" /><home-icon name="external" /></span>
            <h3>{{ channel.title }}</h3>
            <p>{{ channel.description }}</p>
            <span class="home-sr-only">Otevře se v nové kartě.</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeIcon from './HomeIcon'
import { communityChannels } from './homeContent'
import tracking from '@/utils/tracking'

export default {
  name: 'HomeCommunity',
  components: { HomeIcon },
  props: { isLoggedIn: { type: Boolean, default: false } },
  data () { return { channels: communityChannels } },
  methods: {
    trackNewsletter () {
      tracking.track('homepage', 'link', this.isLoggedIn ? 'newsletter_profile' : 'login')
    },
    trackChannel (label) {
      // Retain the shared footer's event names for the existing destinations.
      tracking.track('footer', 'link', label)
      if (label === 'blog') tracking.track('homepage', 'link', 'blog')
    }
  }
}
</script>
