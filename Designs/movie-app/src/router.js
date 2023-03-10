import Movie from '@/components/Movie.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/Home.vue'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/movie/:movieId',
            name: 'movie',
            component: Movie,
            props: true,
        },
    ]
})


export default router