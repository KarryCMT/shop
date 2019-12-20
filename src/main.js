import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

import { Button,Icon,NavBar,Tabbar,TabbarItem,Swipe,SwipeItem,Lazyload,Tab,Tabs,Field,CellGroup,Toast } from 'vant'
Vue.use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Tab).use(Tabs).use(Field).use(CellGroup).use(Toast);

import '@/mock/mock.js';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
