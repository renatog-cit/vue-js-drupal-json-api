import '@babel/polyfill'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// Components
import CardProduct from  './components/CardProduct.vue'

Vue.config.productionTip = false
Vue.component('card-product', CardProduct)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
