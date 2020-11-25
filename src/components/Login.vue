<template>
    <div class="bg-teal-100">
        <div class="container flex items-center justify-center h-screen antialiased font-sans">
            <div class="w-full max-w-xs">
                <p class="text-center text-2xl items-center justify-center mb-2 font-bold text-shadow text-gray-800">Jabutech</p>

                <form method="post" class="bg-white shadow-md rounded px-8  pt-6 pb-8 mb-4" @submit.prevent="store">

                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">email</label>
                        <input type="text" v-model="form.email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autofocus autocomplete="off" placeholder="email">
                    </div>

                    <div class="mb-4">
                        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" v-model="form.password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autofocus autocomplete="off" placeholder="**********">
                    </div>

                    <div class="flex items-center justify-between">
                        <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-none items-center inline-flex justify-center transition-colors duration-150" type="submit">
                            <svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
// import gatters mengirim data user login
import { mapGetters } from 'vuex'
// import mapAction
import { mapActions } from 'vuex'

export default {
    data(){
        return{
            // form input untuk login
            form: {
                email: 'letenk@jabutech.com',
                password: '12345678',
            }
        }
    },

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

    mounted(){
        // console.log(this.check);
        // merubah title
        document.title = "JNE Express | Login"
    },

    methods: {
        // mapAction untuk mengambil data fungsi login di auth.js
        ...mapActions({
            // auth adalah nama file auth.js
            // login adalah nama method didalamnya
            login: 'auth/login',
        }),
        // method store untuk login
        async store(){
            // panggil method login diatas, dan masukkan data form yang akan login
            await this.login(this.form)
            // ketika login berhasil arahkan ke home
            this.$router.replace('/')
        }
    }
}
</script>
