import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/min.css'

// import & init axios
import axios from 'axios'
axios.defaults.withCredentials = true;
// setting base default url
axios.defaults.baseURL = "http://api.salescorporate.test/"

// panggil state login agar tidak hilang ketika di refresh
store.dispatch('auth/user').finally(()=>{
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
})

Vue.config.productionTip = false


