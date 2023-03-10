<template>
  <div class="container-fluid bg-light">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <h6 class="navbar-brand" to="/">Wookie Movies</h6>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchTerm"
          />
          <button
            class="btn btn-dark"
            type="submit"
            @click.prevent="searchMovies"
          >
            Search
          </button>
          <button
            class="btn btn-secondary ms-2"
            @click.prevent="resetearSearch"
          >
            Reset
          </button>
        </form>
      </div>
    </nav>
    <div v-for="( movies, category ) in categorizedMovies" :key="category">
    
      <h2 class="my-2 display-6 bg-secondary text-white">{{ category }}</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div v-for="movie in movies" :key="movie.id" class="col">
        
          <div
            :id="'movie-card-' + movie.id"
            class="card shadow-sm h-100"
          >
            <img :src="movie.poster" :alt="movie.title" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ movie.title }}</h5>
            
              <div>
              
                <router-link :to="{ name: 'movie', params: { movieId: movie.slug } }">{{ movie.title }}</router-link>
                
          
              </div>
            </div>
          </div>
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
      searchTerm: "",
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
      console.log(categorized)
      return categorized;
      
    },
  },
  methods: {
    searchMovies() {
      axios
        .get(`https://wookie.codesubmit.io/movies?q=${this.searchTerm}`, {
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
    resetearSearch() {
      axios
        .get("https://wookie.codesubmit.io/movies", {
          headers: {
            Authorization: "Bearer Wookie2021",
          },
        })
        .then((response) => {
          this.movies = response.data.movies;
          this.searchTerm = "";
        })
        .catch((error) => {
          console.error(error);
        });
    },
    handleClick() {
      console.log(this.$router)
      router.push({ name: "movie" });;
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
  max-height: 420px;
  max-width: 200px;
}
</style>
