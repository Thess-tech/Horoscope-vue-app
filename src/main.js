import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Zodiac from './components/Zodiacs.vue'
import Details from './components/Details.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.use(VueRouter)

const routes = [{
  path: '/main',
  name: 'main',
  component: Main
}, {
  path: '/',
  component: Zodiac
}, {
  path: '/zodiacs',
  name: 'zodiacs',
  component: Zodiac
}, {
  path: '/',
  component: Zodiac
},{
  path: '/Details/:id',
  name: 'details',
  component: Details,
  props: true,
}, {
  path: '/',
  component: Zodiac
}]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, savedPosition){
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        };
      }
      if (savedPosition) {
        return (savedPosition);
      }
      return {};
  }
});

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

new Vue({
  router: router,
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')

