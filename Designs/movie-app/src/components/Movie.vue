<template>
  <div>
    <h2>{{ movie.title }}</h2>
    <p>{{ movie.overview }}</p>

    <router-link to='/'>Return</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Movie',
  data() {
    return {
      movie: {},
    };
  },
  mounted() {
    axios
      .get(`https://wookie.codesubmit.io/movies/${this.$route.params.movieId}`, {
        headers: {
          Authorization: 'Bearer Wookie2021',
        },
      })
      .then((response) => {
        this.movie = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>