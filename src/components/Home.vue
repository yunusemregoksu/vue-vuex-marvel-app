<template>
  <div>
    <loader v-if="isLoading"></loader>
    <template v-else>
      <div class="row">
        <character-list :characters="groupedCharacters"></character-list>
      </div>
    </template>
  </div>
</template>

<script>
import CharacterList from "./CharacterList.vue";
import CharacterDetails from "./Details.vue";
import Loader from "./Loader.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    CharacterList,
    CharacterDetails,
    Loader
  },
  data() {
    return {
      isLoading: true,
      characters: null
    };
  },
  created() {
    this.$store.dispatch("fetchCharacters").then(() => {
      this.isLoading = null;
    });
  },
  computed: {
    ...mapGetters(["groupedCharacters"])
  }
};
</script>

