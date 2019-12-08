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
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue')
  },
  {
    path: '/user/posts',
    name: 'My Posts',
    component: () => import(/* webpackChunkName: "my posts" */ '../views/MyPosts.vue')
  },
  {
    path: '/post/:id',
    name: 'My Post',
    component: () => import(/* webpackChunkName: "my post" */ '../views/Post.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router
