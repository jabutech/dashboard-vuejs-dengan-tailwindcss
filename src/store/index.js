import Vue from 'vue'
import Vuex from 'vuex'
// import modules auth
import auth from '@/store/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // daftarkan modules auth
    auth
  }
})
