import { createRouter, createWebHashHistory } from "vue-router"

import { useUserStore } from '../stores/user'

const Login = () => import('../views/Login.vue')
const MainBaseLayout = () => import('../views/layout/MainBaseLayout.vue')
const Home = () => import('../views/Home.vue')

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/base',
        name: 'Base',
        component: MainBaseLayout,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home,
            },
        ],
        meta: {
            requiresAuth: true
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active-link'
})

router.beforeEach((to, from, next) => {

    const store = useUserStore()
    
    if(to.meta.requiresAuth && !store.accessed) next('/')
    else next()


})

export default router