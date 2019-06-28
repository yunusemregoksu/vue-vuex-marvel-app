<template>
  <div>
    <template v-if="searchFoundData">
      <character-list :characters="groupedCharacters"></character-list>
    </template>
    <h1 v-else-if="searchCannotFoundData">Karakter bulunamadı...</h1>
    <loader v-else></loader>
  </div>
</template>

<script>
import CharacterList from "./CharacterList";
import Loader from "./Loader.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CharacterList,
    Loader
  },
  data() {
    return {
      searchFoundData: false,
      searchCannotFoundData: false
    };
  },
  computed: {
    ...mapGetters(["groupedCharacters"])
  },
  created() {
    this.characterSearch(this.$route.params.term);
  },
  methods: {
    characterSearch(term) {
      this.searchFoundData = false;
      this.searchCannotFoundData = false;

      if (term === undefined || term === "") {
        window.location.replace("/");
      } else {
        this.$store.dispatch("fetchSearchedCharacters", term).then(() => {
          if (this.$store.state.characters) {
            this.searchFoundData = true;
          } else {
            this.searchCannotFoundData = true;
          }
        });
      }
    }
  }
};
</script>

