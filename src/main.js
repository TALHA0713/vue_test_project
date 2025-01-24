/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/main.css'

// Import Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Use Vuetify
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(), // Initialize Vuetify
  components: { App },
  template: '<App/>'
})
