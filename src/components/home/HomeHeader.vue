<template>
  <header ref="header" class="home-header" @keydown.esc="closeWithFocus">
    <a class="home-skip-link" href="#home-main">Přejít na obsah</a>
    <div class="home-container home-header-inner">
      <router-link class="home-logo" to="/" aria-label="ProStředoškoláky — domů" @click.native="closeMenus">
        <img src="~@/assets/logo_new.svg" alt="ProStředoškoláky" width="1380" height="371">
      </router-link>
      <button ref="menuButton" type="button" class="home-menu-button" :aria-expanded="menuOpen ? 'true' : 'false'" aria-controls="home-navigation" @click="menuOpen = !menuOpen">
        {{ menuOpen ? 'Zavřít' : 'Menu' }} <home-icon :name="menuOpen ? 'close' : 'menu'" />
      </button>
      <nav id="home-navigation" class="home-navigation" :class="{ 'is-open': menuOpen }" aria-label="Hlavní navigace">
        <component :is="link.external ? 'a' : 'router-link'" v-for="link in navigation" :key="link.id" v-bind="link.external ? { href: link.href } : { to: link.href, exactPath: true }" :aria-current="!link.external && activePath === link.href ? 'page' : null" @click.native="!link.external && followLink(link)" @click="link.external && followLink(link)">{{ link.title }}</component>
        <div v-if="isLoggedIn" class="home-account">
          <button ref="accountButton" type="button" class="home-button home-button-outline home-account-button" :aria-expanded="accountOpen ? 'true' : 'false'" aria-controls="home-account-links" @click="accountOpen = !accountOpen">
            <home-icon name="user" /><span>{{ user.firstName || 'Můj účet' }}</span><home-icon name="chevron" />
          </button>
          <div v-if="accountOpen" id="home-account-links" class="home-account-links">
            <router-link to="/profil" @click.native="closeMenus">Profil</router-link>
            <template v-if="user.role === 'admin' || user.role === 'manager'">
              <router-link to="/users" @click.native="closeMenus">Zobrazit uživatele</router-link>
              <router-link to="/competition" @click.native="closeMenus">Zobrazit soutěžící</router-link>
              <router-link to="/events" @click.native="closeMenus">Správa databáze</router-link>
            </template>
            <button type="button" @click="logout">Odhlásit se</button>
          </div>
        </div>
        <router-link v-else class="home-button home-button-outline" to="/login" @click.native="closeMenus">Přihlášení <home-icon name="arrow-right" /></router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import HomeIcon from './HomeIcon'
import { publicNavigation, styledPagePath } from './publicNavigation'
import tracking from '@/utils/tracking'

export default {
  name: 'HomeHeader',
  components: { HomeIcon },
  props: {
    isLoggedIn: { type: Boolean, default: false },
    user: { type: Object, default: () => ({}) }
  },
  data () {
    return { menuOpen: false, accountOpen: false, navigation: publicNavigation }
  },
  computed: {
    activePath () { return styledPagePath(this.$route) }
  },
  watch: { '$route.fullPath': 'closeMenus' },
  mounted () {
    document.addEventListener('click', this.closeOutside)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.closeOutside)
  },
  methods: {
    followLink (link) {
      tracking.track('menu', 'link', link.trackingLabel)
      this.closeMenus()
    },
    closeMenus () {
      this.menuOpen = false
      this.accountOpen = false
    },
    closeOutside (event) {
      if (!this.$refs.header.contains(event.target)) this.closeMenus()
    },
    closeWithFocus () {
      if (this.accountOpen) {
        this.accountOpen = false
        this.$refs.accountButton.focus()
      } else if (this.menuOpen) {
        this.menuOpen = false
        this.$refs.menuButton.focus()
      }
    },
    logout () {
      this.closeMenus()
      this.$emit('logout')
    }
  }
}
</script>
