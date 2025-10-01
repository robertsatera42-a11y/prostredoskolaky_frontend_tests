<template>
  <div id="app">
    <header class="app-header" v-bind:class="{
      sticky: this.stickyHeader,
      'open-menu': this.mobileOpen,
      white: this.$route.path !== '/',
      hidden: this.$route.path === '/abffd7'
    }">
      <div class="content">
        <div @click="goToHome" class="logo">
          <img src="~@/assets/logo_new.svg" alt="Prostředoškoláky">
        </div>

        <span
          @click="toggleMenu"
          class="mobile-menu-opener"
        >MENU</span>

        <nav :class="mobileOpen && 'mobile-open'">
          <div class="menu-bottom-link">
            <router-link @click.native="closeMenu" to="/">Domů</router-link>
            <span class="link-underline"/>
          </div>
          <div class="menu-bottom-link">
            <a href="https://stredoskolakroku.cz">Středoškolák roku</a>
            <!-- <router-link @click.native="closeMenu" to="/soutez">Středoškolák roku</router-link> -->
            <span class="link-underline"/>
          </div>
          <div class="menu-bottom-link">
            <router-link @click.native="closeMenu" to="/amigo">AMIGO</router-link>
            <span class="link-underline"/>
          </div>
          <div class="menu-bottom-link">
            <router-link @click.native="closeMenu" to="/databaze">Databáze</router-link>
            <span class="link-underline"/>
          </div>
          <div class="menu-bottom-link">
            <router-link @click.native="closeMenu" to="/ivp">Vše o IVP</router-link>
            <span class="link-underline"/>
          </div>
          <div class="menu-bottom-link">
            <a @click="goToBlogAndTrack">Blog</a>
            <span class="link-underline"/>
          </div>
          <div class="menu-bottom-link">
            <router-link @click.native="closeMenu" to="/o-nas">O nás</router-link>
            <span class="link-underline"/>
          </div>
          <div v-if="isLoggedIn">
            <b-dropdown hoverable aria-role="list">
                <button class="button login-button" slot="trigger">
                    <span>{{user.firstName}}</span>
                    <b-icon icon="menu-down"></b-icon>
                </button>

                <b-dropdown-item @click="goToProfile" aria-role="listitem">Profil</b-dropdown-item>
                <!-- <b-dropdown-item v-if="user.hasRegistration" @click="changeRegistration(); closeMenu()" aria-role="listitem">Upravit přihlášku</b-dropdown-item> -->
                <b-dropdown-item v-if="user.role==='admin' || user.role === 'manager'" @click="showUsers(); closeMenu()" aria-role="listitem">Zobrazit uživatele</b-dropdown-item>
                <b-dropdown-item v-if="user.role==='admin' || user.role === 'manager'" @click="showCompetition(); closeMenu()" aria-role="listitem">Zobrazit soutěžící</b-dropdown-item>
                <b-dropdown-item v-if="user.role==='admin' || user.role === 'manager'" @click="showDatabase(); closeMenu()" aria-role="listitem">Správa databáze</b-dropdown-item>
                <b-dropdown-item @click="logout(); closeMenu()" aria-role="listitem">Odhlásit se</b-dropdown-item>
            </b-dropdown>
          </div>
          <div v-else>
            <button @click="goToLogin(); closeMenu()" class="button login-button">Přihlášení</button>
          </div>
        </nav>
      </div>
    </header>

    <router-view/>
    <cookies/>
  </div>
</template>

<script>
import router from './router'
import tracking from './utils/tracking'
import { USER, IS_LOGGED_IN } from './types'
import { mapGetters } from 'vuex'
import fb from './firebase.js'
import Cookies from './components/common/Cookies'

export default {
  name: 'App',
  metaInfo: {
    title: 'ProStředoškoláky',
    titleTemplate: '%s | Podporujeme středoškoláky v mimoškolních aktivitách',
    meta: [
      { name: 'description', content: 'Jsme organizace propojující středoškoláky, kteří jsou aktivní mimo školu. Pořádáme soutěž Středoškolák roku a poskytuje informace o možnostech mimoškolního vzdělávání.' }
    ]
  },
  data () {
    return {
      stickyHeader: false,
      mobileOpen: false
    }
  },
  methods: {
    handleScroll () {
      this.stickyHeader = window.scrollY > 140
    },
    toggleMenu () {
      this.mobileOpen = !this.mobileOpen
    },
    closeMenu () {
      this.mobileOpen = false
    },
    goToHome () {
      router.push('/')
      window.scrollTo(0, 0)
    },
    goToLogin () {
      router.push('/login')
    },
    goToProfile () {
      router.push('/profil')
    },
    goToBlogAndTrack () {
      tracking.track('menu', 'link', 'blog')
      this.closeMenu()
      window.open('https://prostredoskolaky-cz.medium.com/', '_blank')
    },
    async logout () {
      await fb.logoutUser()
      router.push('/')
    },
    showUsers () {
      router.push('/users')
    },
    showCompetition () {
      router.push('/competition')
    },
    showDatabase () {
      router.push('/events')
    },
    changeRegistration () {
      router.push('/form')
    }
  },
  computed: {
    ...mapGetters([USER, IS_LOGGED_IN])
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  components: { Cookies }
}
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/all';

  $primary: #F06027;
  $dark: #4A4A4A;

  $primary-invert: findColorInvert($primary);
  $dark-invert: findColorInvert($dark);
  $success: #16a085;
  $success-invert: findColorInvert($success);

  // e.g is-white
  $colors: (
    'white': ($white, $black),
    'black': ($black, $white),
    'light': ($light, $light-invert),
    'dark': ($dark, $dark-invert),
    'primary': ($primary, $primary-invert),
    'info': ($info, $info-invert),
    'success': ($success, $success-invert),
    'warning': ($warning, $warning-invert),
    'danger': ($danger, $danger-invert)
  );

  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  $dimensions: (48);

  @import '~bulma';
  @import '~buefy/src/scss/buefy';

  @font-face {
    font-family: 'EuclidCircularB';
    src: local('EuclidCircularB'),
    url('~@/assets/fonts/EuclidCircularB-Medium.otf') format('opentype');
  }
  @font-face {
    font-family: 'NunitoLight';
    src: local('NunitoLight'),
    url('~@/assets/fonts/NunitoLight.ttf') format('truetype');
  }
  @font-face {
    font-family: 'NunitoExtraLight';
    src: local('NunitoExtraLight'),
    url('~@/assets/fonts/NunitoExtraLight.ttf') format('truetype');
  }

  * {
    box-sizing: border-box;
  }

  #app {
    font-family: 'EuclidCircularB', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $dark;
  }

  .orange {
    color: $primary;
  }

  .login-button {
    border-color: #4A4A4A;
    background: none;
    font-family: 'NunitoLight', sans-serif;

    &:hover {
      border-color: #F06027;
    }

    .icon {
      display: none;
    }
  }

  .database-page {
    label.b-checkbox {
      margin-left: 15px !important;

      &:first-child {
        margin-left: 0 !important;
      }
    }

    /* color of checkbox label */
    .control-label {
      font-family: 'NunitoLight', sans-serif;
      font-weight: normal;
      font-size: 14px;
    }

    /* border of checkbox */
    input[type=checkbox]:not(:checked) + .check {
      border-color: #FFF !important;
    }
    .check {
      transition: .2s !important;
    }
  }

  .app-header {
    position: fixed;
    width: 100%;
    transition: .3s;
    z-index: 9; /* due to modal box */

    &.white {
      background: #FFF;
    }
    &.sticky {
      background: #FFF;

      .content {
        padding: 10px 20px;
      }

      @media (max-width: 1050px) {
        &.open-menu {

          nav.mobile-open {
            height: calc(100vh - 53px) !important;
            top: 53px !important;
          }
        }
      }
    }

    // hidden for amos page
    &.hidden {
      .content {
        .logo {
          pointer-events: none;
        }
        nav {
          display: none;
        }
      }
    }
    @media (max-width: 900px) {
      &.open-menu {
        background: #FFF;
      }
    }

    .content {
      transition: .3s;
      width: 100%;
      max-width: 1200px;
      margin: auto;
      overflow: hidden;
      padding: 20px 40px;
      display: flex;
      flex: 1;
      justify-content: space-between;

      .logo {
        align-items: center;
        display: flex;
        cursor: pointer;

        img {
          max-width: 170px;
          height: auto;
          vertical-align: middle;
          border-style: none;
        }
      }

      .mobile-menu-opener {
        align-items: center;
        display: none;
        cursor: pointer;

        @media (max-width: 1050px) {
          display: flex;
        }
      }

      nav {
        align-items: center;
        display: flex;

        @media (max-width: 1050px) {
          display: none;

          &.mobile-open {
            display: flex;
            position: absolute;
            transition: .3s;
            background: rgba(255, 255, 255, 0.9);
            width: 100%;
            height: calc(100vh - 83px);
            left: 0;
            top: 83px;
            flex-direction: column;
            justify-content: center;

            > div {
              margin-right: 0;
            }
          }
        }

        .menu-bottom-link {
          position: relative;
          display: flex;
          justify-content: center;
          margin-right: 15px;

          .link-underline {
            width: 80%;
            height: 2px;
            position: absolute;
            background: $primary;
            bottom: 0;
            visibility: hidden;
          }

          a {
            padding: 20px;
            transition: .3s;
            color: $dark;
            font-family: 'NunitoLight', sans-serif;

            /*&.router-link-exact-active {
              color: green
            }*/
            &.router-link-exact-active ~ .link-underline {
              visibility: visible;
            }
          }
        }

        // TODO: udelat poradne
        .dropdown-content {
          position: fixed;
        }
      }
    }
  }

  .animation-content {
    width: 100%;
  }
  </style>
