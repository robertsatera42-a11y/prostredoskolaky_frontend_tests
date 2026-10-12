<template>
  <footer class="home-footer">
    <div class="home-container">
      <div class="home-footer-grid">
        <div class="home-footer-contact">
          <router-link class="home-logo" to="/" aria-label="ProStředoškoláky — domů"><img src="~@/assets/logo_new.svg" alt="ProStředoškoláky" width="1380" height="371" loading="lazy"></router-link>
          <p>Tvoříme komunitu aktivních<br>středoškoláků.</p>
          <a href="mailto:info@prostredoskolaky.cz">info@prostredoskolaky.cz</a>
          <address>ProStředoškoláky, z. s.<br>Kolová 1480/32, Praha 5 Radotín<br>IČO: 02655047</address>
          <nav v-if="socialLinks.length" class="home-footer-social" aria-label="Sociální sítě">
            <a v-for="link in socialLinks" :key="link.id" :href="link.href" target="_blank" rel="noopener noreferrer" @click="track(link)">
              <home-icon :name="link.id" />{{ link.title }}<span class="home-sr-only"> (otevře se v nové kartě)</span>
            </a>
          </nav>
        </div>
        <nav v-for="group in groups" :key="group.title" :aria-label="group.title">
          <h2>{{ group.title }}</h2>
          <ul>
            <li v-for="link in group.links" :key="link.href">
              <component :is="link.external ? 'a' : 'router-link'" v-bind="link.external ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' } : { to: link.href }" @click.native="!link.external && track(link)" @click="link.external && track(link)">
                {{ link.title }}<span v-if="link.external" class="home-sr-only"> (otevře se v nové kartě)</span>
              </component>
            </li>
          </ul>
        </nav>
      </div>
      <div class="home-footer-bottom">
        <p>© {{ year }} ProStředoškoláky</p>
        <a :href="privacyHref" target="_blank" rel="noopener noreferrer">Ochrana osobních údajů<span class="home-sr-only"> (otevře se v nové kartě)</span></a>
        <a href="#home-main">Zpět nahoru <home-icon name="arrow-right" /></a>
      </div>
    </div>
  </footer>
</template>

<script>
import HomeIcon from './HomeIcon'
import { footerGroups, privacyHref } from './homeContent'
import { platformSocialLinks } from '@/components/platform/presentation'
import tracking from '@/utils/tracking'

export default {
  name: 'HomeFooter',
  components: { HomeIcon },
  props: { socialLinks: { type: Array, default: () => platformSocialLinks } },
  data () {
    return { groups: footerGroups, privacyHref, year: new Date().getFullYear() }
  },
  methods: {
    track (link) {
      if (!link.trackingLabel) return
      tracking.track('footer', 'link', link.trackingLabel)
      if (link.trackingLabel === 'about_us') tracking.track('homepage', 'link', 'about_us')
    }
  }
}
</script>
