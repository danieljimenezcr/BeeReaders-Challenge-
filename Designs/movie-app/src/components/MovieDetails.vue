<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img :src="movie.poster" :alt="movie.title" class="img-fluid" />
        </div>
        <div class="col-md-8">
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'MovieDetails',
    data() {
      return {
        movie: null,
      };
    },
    mounted() {
      axios
        .get(`https://wookie.codesubmit.io/movies/${this.$route.params.id}`, {
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