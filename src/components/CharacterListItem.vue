<template>
  <div class="list-item">
    <div class="row">
      <div class="col-md-4">
        <router-link :to="characterDetailsPath">
          <img :src="characterImage" :alt="characterName">
        </router-link>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-12">
            <h3>
              <router-link :to="characterDetailsPath">{{character.name}}</router-link>
            </h3>
            <hr v-if="character.description">
            {{character.description && character.description.length > 50
            ? character.description.substr(0, 50) + '...'
            : character.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
  computed: {
    characterName() {
      return this.character.name;
    },
    characterImage() {
      return `${this.character.thumbnail.path}/portrait_medium.${
        this.character.thumbnail.extension
      }`;
    },
    characterDetailsPath() {
      return `/character/${this.character.id}`;
    }
  }
};
</script>

<style>
.list-item {
  cursor: pointer;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.list-item:hover {
  background-color: #fefefe;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.list-item img {
  border: 1px solid #ddd;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.08);
  border-radius: 50%;
}

.list-item.active {
  background-color: #fefefe;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>


