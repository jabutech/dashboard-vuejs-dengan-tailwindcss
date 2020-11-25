<template>
    <div class="flex flex-col justify-between bg-gray-800 lg:h-screen fixed w-full lg:w-1/5 shadow-xl">
        <div class="flex justify-between p-4 border-b border-gray-700">
            <div class="text-lg text-white font-medium flex items-center lg:justify-between w-full">
                <span class="font-bold">Jabutech</span>
                <span class="text-sm inline-flex justify-center items-center ml-2">
                    <svg class="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {{ user.name }}
                </span>
            </div>
            <button @click="isMobile = !isMobile" class="block lg:hidden focus:outline-none text-white">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path :class="isMobile ? 'hidden' : 'block'"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    <path :class="isMobile ? 'block' : 'hidden'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <div :class="isMobile ? 'block' : 'hidden'" class="lg:block overflow-y-auto h-screen lg:h-full p-4 leading-relaxed">
            <router-link to="/" exact class="px-4 py-2 my-1 flex items-center rounded block text-white hover:bg-gray-700">
            <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
                Home
            </router-link>

            <router-link to="/posts" class="px-4 py-2 my-1 flex items-center rounded block text-white hover:bg-gray-700">
            <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
                Posts
            </router-link>

            <a href="#" @click.prevent="logout" class="px-4 py-2 my-1 flex items-center rounded block text-white hover:bg-gray-700">
                <svg class="w-5 h-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
            </a>
        </div> 
    </div>
</template>
    
<script>
// import getters, dan mapActions mengirim data user login
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return{
            isMobile: false,
        }
    },
    methods: {
        // method dropdown untuk dipanggil pada event onClik diatas
        dropdown(e){    
            // ambil event target yaitu button
            let element = e.target;

            // ambil element svg yang kedua untuk tanda panah, 
            let svg = element.getElementsByTagName('svg')[1]
            // tambahkan class rotate-90 ketika button di klik
            svg.classList.add('rotate-90')

            // cek element selanjutnya dari button dengan next sibling dan didapatkan div yang berisi menu dropdown
            let nextSibling = element.nextSibling;

            // cek apakah didalam div ada class hidden dengan contains (ini bisa dipakai juga untuk id), untuk mengetahui panggil containsHidden dengan console.log hasilnya adalah bolean true or false
            let containsHidden = nextSibling.classList.contains('hidden')
            
            // jika didalam containsHidden hasilnya false
            if(!containsHidden){
                // tambahkan class hidden
                nextSibling.classList.add('hidden')
                // dan hapus class rotate-90 untuk mengembalikkan tanda panah
                svg.classList.remove('rotate-90')
            }else{
                // jika true hapus hidden
                nextSibling.classList.remove('hidden');
            }
            // Nb: if diatas untuk membuka dropdown
        },

        // method untuk logout 
        // menjalankan aksi dengan menghubungkan ke auth.js
        ...mapActions({
            // memanggil method signout di auth,js
            signoutAuth: 'auth/signout'
        }),

        async logout(){
            // panggil signoutAuth
            await this.signoutAuth();
            // ketika berhasil arahkan ke login
            this.$router.replace({name: 'login'})
        }
    },

    computed:{
    // init gatters untuk mengambil data login dari auth.js
    ...mapGetters({
        checkAuth: 'auth/check',
        user: 'auth/user',
    })
    }
}
</script>
