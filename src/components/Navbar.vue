<template>
  <div class="navbar navbar-inverse bg-inverse">
    <div class="container d-flex justify-content-between">
      <router-link to="/" class="navbar-brand">Marvel App</router-link>
      <search-bar></search-bar>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
  components: {
    SearchBar
  }
};
</script>

