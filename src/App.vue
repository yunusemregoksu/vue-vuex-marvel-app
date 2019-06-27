<template>
  <div id="app">
    <div class="container">
      <search-bar></search-bar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
export default {
  name: "app",
  components: {
    SearchBar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "./styles/custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
