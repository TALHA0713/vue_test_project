import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ProductsPage from '../components/ProductsPage.vue'
import ContactPage from '../components/ContactPage.vue'
import LoginPage from '../components/LoginPage.vue'
import SignupPage from '../components/SignupPage.vue'
import ProductDetails from '../components/ProductDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', name: 'HomePage', component: HomePage },
    { path: '/products', name: 'ProductsPage', component: ProductsPage },
    { path: '/contact-us', name: 'ContactPage', component: ContactPage },
    { path: '/login', name: 'LoginPage', component: LoginPage },
    { path: '/signup', name: 'SignupPage', component: SignupPage },
    { path: '/product/:id', name: 'ProductDetails', component: ProductDetails },
    { path: '*', redirect: '/home' }
  ]
})
