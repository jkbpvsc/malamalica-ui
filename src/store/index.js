import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      accessToken: null,
    }
  },
  mutations: {
    authenticate(state, accessToken) {
      state.auth.accessToken = accessToken;
    },
    logout(state) {
      state.auth.accessToken = null;
    },
  },
  getters: {
    accessToken: state => state.auth.accessToken,
    authenticated: state => state.auth.accessToken !== null,
  },
  actions: {
  },
  modules: {
  }
})
