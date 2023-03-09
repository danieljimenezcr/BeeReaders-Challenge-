import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import MovieDetails from './components/MovieDetails.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/movie-details/:id', name: 'MovieDetails', component: MovieDetails },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;