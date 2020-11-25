<template>
<!-- ketika belum login menampilkan form login -->
      <div class="flex flex-col lg:flex-row">
        <!-- sidebar -->
        <div class="w-full lg:w-1/5">
          <Sidebar/>
        </div>
        <!-- content -->
        <div class="p-4 w-full lg:w-4/5 mt-16 lg:mt-0">
          <div class="lg:container">
          <div class="bg-white p-4 w-full rounded shadow-md lg:mt-6">
            <div class="mb-2 text-2xl font-medium border-b border-gray-400 border-dashed">
              Homepage
            </div>
            <div class="mt-3">
              <h1>Selamat datang <b>{{ user.name }}</b></h1>
            </div>
          </div>
        </div>
        </div>
      </div>
</template>

<script>
// import Component
import Sidebar from '@/components/Sidebar'
// import getters mengirim data user login
import { mapGetters } from 'vuex'

export default {
    // Init Component
    components: {
      Sidebar
    },
  computed:{
    // init gatters untuk mengambil data login dari auth.js
    ...mapGetters({
      checkAuth: 'auth/check',
      user: 'auth/user',
    })
  },
  mounted(){
    // merubah title
      document.title = "JNE Express | Home"
  },
}
</script>
