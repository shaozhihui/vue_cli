import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import User from '@/components/User';
import Mall from '@/components/mall';
import Head from '@/components/head';
import List from '@/components/list'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',redirect: 'Home' },
    { path: '/home',name: 'Home',component: Home },
    { path: '/user',name: 'User',component: User },
    { path: '/mall',name: 'Mall',component: Mall },
    { path: '/head',name: 'Head',component: Head },
    { path: '/list',name: 'List',component: List }
  ]
})
