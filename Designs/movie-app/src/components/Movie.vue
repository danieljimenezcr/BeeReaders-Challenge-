<template>
  <div class="card">
    <img :src="movie.poster" :alt="movie.title" class="img-poster" />
    <div class="card-body">
      <h2 class="card-title">{{ movie.title }}</h2>
      <p class="card-text">{{ movie.overview }}</p>
      <p class="card-text"><strong>Rating:</strong> {{ movie.rating }}/10</p>
      <p class="card-text"><strong>Length:</strong> {{ movie.length }} minutes</p>
      <router-link to="/" class="btn btn-primary">Return</router-link>
    </div>
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

<style scoped>
 .img-poster {
  width: 200px;
  height: 350px;
 }
</style>>