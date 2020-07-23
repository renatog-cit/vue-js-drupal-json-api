import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import Developers from './views/Developers.vue'
import About from './views/About.vue'
import ProductInfo from './views/ProductInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/developers',
      name: 'developers',
      component: Developers
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/productinfo/:id',
      name: 'productinfo',
      component: ProductInfo,
      props: true
    }
  ]
})
