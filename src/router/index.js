import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/'
import Cart from '../views/cart/'
import Category from '../views/category/'
import Profile from '../views/profile/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    //首页
  },
  {
    path: '/category',
    name: 'category',
    component: Category
    //分类
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
    //购物车
  },
  
  {
    path: '/profile',
    name: 'profile',
    component: Profile
    //我的
  },
]

const router = new VueRouter({
  routes
})

export default router
