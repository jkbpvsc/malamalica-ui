import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/oauth/connect',
    name: 'OAuth2 Connect',
    component: () => import(/* webpackChunkName: "connect" */ '../views/Connect.vue')
  },
  {
    path: '/post/new',
    name: 'New post',
    component: () => import(/* webpackChunkName: "new post" */ '../views/NewPost.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router
