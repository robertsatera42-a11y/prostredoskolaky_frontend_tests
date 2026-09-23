<template>
  <footer>
    <div class="content">
      <div class="row"
      v-bind:class="{hidden: this.$route.path === '/abffd7'}">
        <div class="links">
          <router-link to="/">Domů</router-link>
          <a @click="goToAndTrack('https://stredoskolakroku.cz/', 'link', 'soutez')">Středoškolák roku</a>
          <router-link to="/vysokoskolak-roku-2027">Vysokoškolák roku</router-link>
          <!-- <router-link to="/finaliste">Finalisté</router-link> -->
          <router-link to="/amigo">AMIGO</router-link>
          <router-link to="/databaze">Databáze</router-link>
          <router-link to="/o-nas">O nás</router-link>
          <a @click="goToAndTrack('https://prostredoskolaky-cz.medium.com/', 'link', 'blog')">Blog</a>
        </div>
        <div class="social">
          <a @click="goToAndTrack('https://www.youtube.com/channel/UCzE5_oYsLRIYB5ej35unTBw', 'link', 'youtube')" class="yu"></a>
          <a @click="goToAndTrack('https://www.instagram.com/prostredoskolaky/', 'link', 'instagram')" class="ig"></a>
          <a @click="goToAndTrack('https://www.facebook.com/prostredoskolaky/?fref=ts', 'link', 'facebook')" class="fb"></a>
          <a @click="goToAndTrack('https://cz.linkedin.com/company/prost%C5%99edo%C5%A1kol%C3%A1ky-z-s-', 'link', 'linkedin')" class="li"></a>
        </div>
      </div>
      <div class="copy">&copy; ProStředoškoláky {{new Date().getFullYear()}}</div>
    </div>
  </footer>
</template>
<script>
import tracking from '../../utils/tracking'

export default {
  name: 'footer-block',
  methods: {
    goToAndTrack (path, action, label) {
      tracking.track('footer', action, label)
      window.open(path, '_blank')
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px 40px 0;

  @media (max-width: 800px) {
    width: 90%;
    padding: 40px 20px 0;
  }
}

footer {
  background: #EFEEFE;
  width: 100%;
  padding: 20px 0 50px;

  .copy {
    text-align: center;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;

    // for amos page
    &.hidden {
      display: none;
    }

    .links {
      display: flex;

      a {
        margin-right: 40px;
        color: #4A4A4A;
      }
    }

    .social {
      a {
        &:not(:first-child) {
          margin-left: 20px;
        }
        width: 45px;
        height: 45px;
        display: inline-block;
      }

      .yu {
        background: url(~@/assets/youtube.svg) no-repeat center;
        background-size: contain;
      }

      .ig {
        background: url(~@/assets/instagram.svg) no-repeat center;
        background-size: contain;
      }

      .fb {
        background: url(~@/assets/facebook.svg) no-repeat center;
        background-size: contain;
      }
      .li {
        background: url(~@/assets/linkedin.svg) no-repeat center;
        background-size: contain;
      }
    }

    @media (max-width: 1300px) {
      flex-direction: column;
      align-items: center;

      .social {
        margin-top: 20px;
      }
    }
    @media (max-width: 600px) {
      .links {
        a {
          margin: 10px
        }
      }
    }
    @media (max-width: 500px) {
      .links {
        flex-direction: column;
        text-align: center;
      }
    }
  }
}
</style>
