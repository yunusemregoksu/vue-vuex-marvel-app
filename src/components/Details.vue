<template>
  <div class="col-md-12">
    <loader v-if="isLoading"></loader>
    <div class="details" v-else>
      <div class="row">
        <div class="col-md-12">
          <h1>
            {{character.name}}
            <hr>
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <img :src="characterImage" :alt="character.name">
        </div>
        <div class="col-md-7">
          <p>{{character.description}}</p>
          <h4>Comics({{character.series.available}})</h4>
          <ul v-if="character.comics">
            <li :key="comic.resourceURI" v-for="comic in character.comics.items">{{comic.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
import md5 from "md5";

const API_URL = "https://gateway.marvel.com:443/v1/public/";
const publicKey = process.env.VUE_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.VUE_APP_MARVEL_PRIVATE_KEY;
const ts = "1";
const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5(
  `${ts}${privateKey}${publicKey}`
)}`;

export default {
  components: {
    Loader
  },
  data() {
    return {
      isLoading: true
    };
  },
  created() {
    //this.fetchCharacter();
    this.$store
      .dispatch("fetchSelectedCharacter", this.$route.params.id)
      .then(() => {
        this.isLoading = false;
      });
  },
  computed: {
    characterImage() {
      return `${this.character.thumbnail.path}/portrait_uncanny.${
        this.character.thumbnail.extension
      }`;
    },
    character() {
      return this.$store.state.selectedCharacter;
    }
  },
  methods: {
    fetchCharacter() {
      fetch(`${API_URL}/characters/${this.$route.params.id}?${auth}`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.isLoading = false;
          this.character = res.data.results[0];
        });
    }
  }
};
</script>

<style>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.details img {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.details h1 {
  text-align: center;
}
</style>


