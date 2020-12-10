import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login'),
        meta: {
            auth: false
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../pages/Home'),
        meta: {
            auth: true
        }
    },
    {
        path: '/currency',
        name: 'currency',
        component: () => import('../pages/Currency'),
        meta: {
            auth: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active',
    scrollBehavior() {
        window.scrollTo(0, 0)
    }
})

export default router
