import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  // logiin
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  },
  // Home
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    // halaman ini hanya bisa di akses jika authnya true dengan cara ini
    meta: {
      auth: true,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'bg-gray-700',
  routes
})

// proteksi halaman login ketika sudah login
router.beforeEach((to, from, next)=>{
  // console.log(to) // to mengembalikkan informasi route maka arahkan kembali ke login page

    // jika to.meta.auth = true dicocokkan dengan path diatas dan ketika sedang tidak login
    if(to.meta.auth && !store.getters['auth/check']) next('/login')
    else next()

  // jika mengangkes to.name(isinya name path) sama dengan name login diatas dan check getter apakah status authenticated di auth.js true dan sedang login maka arahkan ke next home
  if(to.name == 'login' && store.getters['auth/check']) next('/')
  else next()
})

export default router
