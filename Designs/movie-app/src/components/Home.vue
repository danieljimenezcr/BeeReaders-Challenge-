<template>
  <div class="container-fluid bg-light">
    <nav class=" navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">Wookie Movies</a>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-dark" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div v-for="(movies, category) in categorizedMovies" :key="category">
      <h2 class="display-6 bg-secondary text-white">{{ category }}</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div v-for="movie in movies" :key="movie.id" class="col">
          <router-link :to="{ name: 'Movie', params: { id: movie.id } }">
            <div class="card shadow-sm h-100">
              <img
                :src="movie.poster"
                :alt="movie.title"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">{{ movie.title }}</h5>
                <!-- <p class="card-text">{{ movie.overview }}</p> -->
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      movies: [],
    };
  },
  computed: {
    categorizedMovies() {
      const categorized = {};
      this.movies.forEach((movie) => {
        if (!categorized[movie.genres]) {
          categorized[movie.genres] = [movie];
        } else {
          categorized[movie.genres].push(movie);
        }
      });
      return categorized;
    },
  },
  mounted() {
    axios
      .get("https://wookie.codesubmit.io/movies", {
        headers: {
          Authorization: "Bearer Wookie2021",
        },
      })
      .then((response) => {
        this.movies = response.data.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
.card {
    max-height: 400px;
    max-width: 200px;
}
</style>>