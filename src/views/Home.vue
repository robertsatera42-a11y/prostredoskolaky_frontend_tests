<template>
  <div class="home-page">
    <main id="home-main" tabindex="-1">
      <section class="home-hero" aria-labelledby="home-title">
        <div class="home-container home-hero-grid">
          <div class="home-hero-copy">
            <h1 id="home-title">ProStředoškoláky</h1>
            <p class="home-hero-lead">Tvoříme komunitu<br>aktivních středoškoláků.</p>
            <p class="home-hero-description">Podporujeme středoškoláky v tom, co je baví i mimo školu. Přinášíme příležitosti k rozvoji, mentoring a setkání s dalšími aktivními studenty.</p>
            <div class="home-hero-actions">
              <a href="#aktivity" class="home-button home-button-orange" @click="trackHero">Objev naše aktivity <home-icon name="arrow-right" /></a>
              <router-link to="/databaze" class="home-text-link" @click.native="trackLink('database')">Otevřít databázi <home-icon name="arrow-right" /></router-link>
            </div>
          </div>
          <figure class="home-hero-photo">
            <img src="~@/assets/mainheader.jpg" alt="Účastníci Středoškoláka roku při společném fotografování v sále" width="2881" height="1921" fetchpriority="high">
            <figcaption><span class="home-brand-dot" />Naše komunita na Středoškolákovi roku</figcaption>
          </figure>
        </div>
      </section>

      <activity-carousel :items="activities" />

      <section id="platforma" class="home-platform" aria-labelledby="platform-title">
        <div class="home-container">
          <div class="home-platform-panel">
            <div class="home-platform-intro">
              <h2 id="platform-title">Naše platforma</h2>
              <p class="home-platform-description">Najdi si, co dělat. Objevuj možnosti podle toho, co tě baví.</p>
              <router-link to="/databaze" class="home-button home-button-ink" @click.native="trackLink('database')">Otevřít databázi <home-icon name="arrow-right" /></router-link>
              <p v-if="!isLoggedIn" class="home-platform-note">Pro přístup do databáze se přihlas nebo si vytvoř účet.</p>
            </div>
            <div class="home-platform-features">
              <article>
                <span class="home-icon-tile"><home-icon name="grid" /></span>
                <div>
                  <h3>Databáze aktivit</h3>
                  <p>Prozkoumej vzdělávací programy, soutěže, dobrovolnictví a další příležitosti pro středoškoláky.</p>
                  <router-link class="home-text-link" to="/databaze" @click.native="trackLink('database')">Prohlédnout aktivity <home-icon name="arrow-right" /></router-link>
                </div>
              </article>
              <article>
                <span class="home-icon-tile"><home-icon name="search" /></span>
                <div>
                  <h3>Vyhledávání a filtrování</h3>
                  <p>Hledej podle názvu a filtruj podle předmětu nebo typu aktivity. V detailu najdeš informace i odkaz na pořadatele.</p>
                  <router-link class="home-text-link" to="/databaze" @click.native="trackLink('database_filters')">Najít svou příležitost <home-icon name="arrow-right" /></router-link>
                </div>
              </article>
              <article>
                <span class="home-icon-tile"><home-icon name="user" /></span>
                <div>
                  <h3>Účet a newsletter</h3>
                  <p>Účet ti otevře přístup do databáze. Ve svém profilu můžeš upravit osobní údaje i odběr newsletteru.</p>
                  <router-link class="home-text-link" :to="isLoggedIn ? '/profil' : '/login'" @click.native="trackLink(isLoggedIn ? 'profile' : 'login')">{{ isLoggedIn ? 'Nastavit profil' : 'Vytvořit účet' }} <home-icon name="arrow-right" /></router-link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <home-community :is-logged-in="Boolean(isLoggedIn)" />

      <section class="home-section home-partners" aria-labelledby="partners-title">
        <div class="home-container">
          <div class="home-partners-heading">
            <p class="home-eyebrow">Děkujeme za podporu</p>
            <h2 id="partners-title">Podporují nás</h2>
          </div>
          <ul class="home-partner-grid">
            <li v-for="partner in partners" :key="partner.id">
              <a :href="partner.href" class="home-partner" :class="'home-partner-' + partner.id" target="_blank" rel="noopener noreferrer">
                <img :src="partner.image" :alt="partner.title" :width="partner.width" :height="partner.height" loading="lazy" decoding="async">
                <span class="home-sr-only">Otevře se v nové kartě.</span>
              </a>
            </li>
          </ul>
          <div class="home-patronage">
            <p>Pod záštitou</p>
            <img src="~@/assets/partners/msmt.svg" alt="Ministerstvo školství, mládeže a tělovýchovy" width="827" height="413" loading="lazy" decoding="async">
          </div>
        </div>
      </section>
    </main>
    <home-footer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { IS_LOGGED_IN } from '@/types'
import ActivityCarousel from '@/components/home/ActivityCarousel'
import HomeCommunity from '@/components/home/HomeCommunity'
import HomeFooter from '@/components/home/HomeFooter'
import HomeIcon from '@/components/home/HomeIcon'
import { activities, partners } from '@/components/home/homeContent'
import tracking from '@/utils/tracking'

export default {
  name: 'Home',
  metaInfo: { htmlAttrs: { lang: 'cs' } },
  components: { ActivityCarousel, HomeCommunity, HomeFooter, HomeIcon },
  data () { return { activities, partners } },
  computed: { ...mapGetters([IS_LOGGED_IN]) },
  methods: {
    trackHero () { tracking.track('homepage', 'button', 'main_cta') },
    trackLink (label) { tracking.track('homepage', 'link', label) }
  }
}
</script>
