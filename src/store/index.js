import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import userAuth from './modules/user'
import modal from './modules/modal'

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userAuth,
    modal
  }
})
