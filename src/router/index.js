import {createRouter, createWebHistory} from 'vue-router'
import AboutView from '../views/AboutView'
import HomeView from '../views/HomeView'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router 