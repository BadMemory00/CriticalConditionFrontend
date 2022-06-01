import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () =>
            import ('../components/navbar.vue'),
        children: [{
                path: '/',
                name: 'home',
                component: HomeView
            },

            {
                path: '/signup',
                name: 'signup',
                component: () =>
                    import ('../views/SignUpView.vue')
            },

            {
                path: '/login',
                name: 'login',
                component: () =>
                    import ('../views/LoginView.vue')
            },
        ]
    },

    {
        path: '/superuser',
        name: 'SuperuserSidebar',
        component: () =>
            import ('../components/SuperuserSidebar.vue'),
        children: [{
                path: '/superuser/home',
                name: 'SuperuserHomeView',
                component: () =>
                    import ('../views/SuperuserHomeView.vue'),
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem('isSuperuserAuthorized') == 'true') {
                        next();
                    } else {
                        next('/login');
                    }
                }
            },
            {
                path: '/superuser/devices',
                name: 'SuperuserDevicesView',
                component: () =>
                    import ('../views/SuperuserDevicesView.vue'),
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem('isSuperuserAuthorized') == 'true') {
                        next()
                    } else {
                        next('/login')
                    }
                }
            },
            {
                path: '/superuser/archiveddevices',
                name: 'SuperuserArchivedDevicesView',
                component: () =>
                    import ('../views/SuperuserArchivedDevicesView.vue'),
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem('isSuperuserAuthorized') == 'true') {
                        next()
                    } else {
                        next('/login')
                    }
                }
            },
            {
                path: '/superuser/profile',
                name: 'SuperuserProfileView',
                component: () =>
                    import ('../views/SuperuserProfileView.vue'),
                beforeEnter: (to, from, next) => {
                    if (localStorage.getItem('isSuperuserAuthorized') == 'true') {
                        next()
                    } else {
                        next('/login')
                    }
                }
            },
        ]
    },

    {
        path: '/subuser',
        name: 'subuser',
        component: () =>
            import ('../views/SubuserHomeView.vue')
    },

    {
        path: '/subuser/adddevice',
        name: 'adddevice',
        component: () =>
            import ('../views/SubuserAddDeviceView.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router