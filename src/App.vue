<template>
    <div id="app">
      <Login v-if="!check"/>
      <router-view v-else/>
    </div>
</template>

<script>
// import gatters mengirim data user login
import { mapGetters } from 'vuex'
import Login from './components/Login.vue'

export default {
    components: { Login },
    computed: {
      // init gatters
      ...mapGetters({
          // auth adalah nama file auth.js
          // check adalah fungsi check didalam auth,js
          check: 'auth/check',
          // auth adalah nama file auth.js
          // user adalah fungsi user didalam auth,js
          user: 'auth/user',
      })
  }, 
}
</script>