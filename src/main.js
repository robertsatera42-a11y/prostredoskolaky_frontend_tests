import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Vuelidate from 'vuelidate'
import lineClamp from 'vue-line-clamp'
import fb from './firebase.js'
import VueMeta from 'vue-meta'

Vue.use(Vuex)
Vue.use(VueMeta)
Vue.use(Buefy)
Vue.use(Vuelidate)
Vue.use(lineClamp, { importCss: true })

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
