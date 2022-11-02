import Vue from 'vue'
import Router from 'vue-router'

const Button = () => import('../views/Button.vue')
Vue.use(Router);

const routes = [
    {
        path: '/button',
        component: Button
    }
];

const router = new Router({
    routes,
    mode: 'hash'
})

export default router