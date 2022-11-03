import Vue from 'vue'
import Router from 'vue-router'

const Button = () => import('../views/Button.vue')
const Icon = () => import('../views/Icon.vue')
Vue.use(Router);

const routes = [
    {
        path: '/button',
        component: Button
    },
    {
        path: '/icon',
        component: Icon
    },
];

const router = new Router({
    routes,
    mode: 'hash'
})

export default router