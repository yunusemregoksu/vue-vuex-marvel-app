<template>
  <div id="app">
    <div class="container">
      <navbar></navbar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
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
