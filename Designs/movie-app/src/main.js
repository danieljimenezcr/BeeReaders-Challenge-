import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

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

createApp(App).mount('#app')
