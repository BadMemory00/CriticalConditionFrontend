import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/subuser',
        name: 'subuser',
        component: () =>
            import ('../views/SubuserHomeView.vue')
    },

    {
        path: '/signup',
        name: 'signup',
        component: () =>
            import ('../views/SignUpView.vue')
    },

    {
<<<<<<< HEAD
        path: '/adddevice',
        name: 'AddNewDevice',
        component:()=>
        import ('../views/AddNewDevice.vue')
=======
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/LoginView.vue')
>>>>>>> ac1ddda7764bb78f2557c469c621d19dae91742d
    }
]

const router = new VueRouter({
    routes
})

export default router