import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import router from './router';


axios.defaults.baseURL = 'https://wookie.codesubmit.io/movies'
axios.defaults.headers.common['Authorization'] = 'Bearer Wookie2021'



export default {
  
  data() {
    return {
      moviesByCategory: []
    };
  },
  created() {
    axios.get('https://wookie.codesubmit.io/movies', {
      headers: {
        Authorization: 'Bearer Wookie2021'
      }
    })
      .then(response => {
        const movies = response.data.movies;
        const moviesByCategory = {};

        movies.forEach(movie => {
          if (!moviesByCategory[movie.genres]) {
            moviesByCategory[movie.genres] = [movie];
          } else {
            moviesByCategory[movie.genres].push(movie);
          }
        });

        this.moviesByCategory = moviesByCategory;
      })
      .catch(error => console.log(error));
  }
  
};

const app = createApp(App)

app.use(router)

app.mount('#app')

// const app = Vue.createApp({})
// // Make sure to _use_ the router instance to make the
// // whole app router-aware.
// app.use(router)

// app.mount('#app')