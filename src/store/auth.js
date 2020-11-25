// import axios
import axios from 'axios'

export default {
    namespaced: true,
    state: {
        // state authenticated buat default false
        authenticated: false,
        user: []
    },
    getters:{
        // mengambil data state ketika proses login
        // check state diatas apakah ada proses login
        check(state){
            // jika ada ambil data status yang sedang login
            return state.authenticated
        },
        // check state diatas apakah data user yang akan login
        user(state){
            // jika ada ambil data user yang sedang login
            return state.user
        }
    },
    mutations: {
        // merubah value dari state diatas
        SET_AUTHENTICATED(state, value){
            state.authenticated = value
        },

        SET_USER(state, value){
            state.user = value
        },
    },
    
    actions: {
        // login process
        async login({dispatch}, credentials){
            // Jika ingin melakukkan login harus akses sanctum ccrf cookie dengan cara berikut
            await axios.get('sanctum/csrf-cookie');
            // akses url login dengan mengambil data user dari data form dicomponent Login
            await axios.post('login', credentials);

            // yang akan dikirim ke method user
            dispatch('user')
        },

        async user({commit}){
            // jika berhasil login
            try{
                // ambil data user yang berhasil login
                let { data } = await axios.get('api/auth-user')
                // rubah state authenticated menjadi true
                commit('SET_AUTHENTICATED', true)
                // rubah state user yang tadinya kosong masukkan data user yang login
                commit('SET_USER', data.data)
            }catch(e){
                // jika gagal kembalikan state seperti awal
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', [])
            }
        },
        // logout process
        async signout({dispatch}){
            // arahkan ke route logout backend
            await axios.post('logout');
            // panggil dispatch user diatas untuk melakukkan prosesnya
            dispatch('user')
        },
    },
}