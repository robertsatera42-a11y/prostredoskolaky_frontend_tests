<template>
  <div v-if="!this.cookie">
    <div class="cookie-bar">
      <button type="button" class="close" aria-label="Zavřít informaci o cookies" @click="this.hideCookie"></button>
      <p>Procházením tohoto webu souhlasíte s používáním souborů cookies. <a href="https://www.vimkamklikam.cz/zajimavosti/k-cemu-jsou-a-jak-funguji-cookies" target="_blank">Více informací.</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cookies',
  data () {
    return {
      cookie: this.getCookie('cookie') || false
    }
  },
  methods: {
    hideCookie () {
      this.cookie = true
      this.setCookie('cookie', true, 30)
    },
    setCookie (name, value, exdays) {
      var d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      var expires = 'expires=' + d.toUTCString()
      document.cookie = name + '=' + value + ';' + expires + ';path=/'
    },
    getCookie (cname) {
      var name = cname + '='
      var decodedCookie = decodeURIComponent(document.cookie)
      var ca = decodedCookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') {
          c = c.substring(1)
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length)
        }
      }
      return ''
    }
  }
}
</script>

<style scoped lang="scss">
.cookie-bar {
  background: #FFF;
  position: fixed;
  padding-top: 40px;
  bottom: 20px;
  right: 20px;
  border-radius: 9px;
  box-shadow: 0 0 4px 0px #ed4f10;
  max-width: 300px;
  width: 100%;

  @media (max-width: 400px) {
    right: initial;
    left: initial;
    margin: 0 10px;
    max-width: calc(100% - 20px);
  }
}

.close {
  background: transparent url(~@/assets/svg/close.svg) no-repeat center;
  background-size: 20px;
  border: 0;
  padding: 0;
  width: 44px;
  height: 44px;
  position: absolute;
  right: 0;
  top: 0;
  transition: .3s;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }

  &:focus-visible {
    outline: 2px solid #1B1B1D;
    outline-offset: -4px;
  }
}

p {
  font-size: 15px;
  background-color: #ffd9ca;
  padding: 20px;
  border-radius: 0 0 9px 9px;

  a {
    color: #1B1B1D;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:focus-visible {
      outline: 2px solid #1B1B1D;
      outline-offset: 3px;
    }
  }
}
</style>
