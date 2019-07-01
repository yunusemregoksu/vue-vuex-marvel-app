<template>
  <div class="search-bar">
    <div class="input-group">
      <input
        class="form-control input-lg"
        v-model="term"
        @keypress="handleKeyPress"
        placeholder="Karakter ara"
      >
      <span class="input-group-btn">
        <button class="btn btn-info input-lg" @click="onSearchButtonClick">Ara</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      term: ""
    };
  },
  created() {
    if (this.$route.params.term) {
      this.term = this.$route.params.term;
    }
  },
  methods: {
    handleKeyPress(event) {
      if (event.key === "Enter") {
        return this.onSearchButtonClick(this.term);
      }
    },

    onSearchButtonClick() {
      window.location.replace(`/search/${this.term}`);
    }
  }
};
</script>


<style>
.search-bar {
  margin: 20px;
  text-align: center;
}

.search-bar input {
  width: 75%;
}
</style>

