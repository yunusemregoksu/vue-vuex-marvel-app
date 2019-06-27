<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-4" v-for="group in characters" :key="group.index">
        <character-list-item
          v-for="char in group"
          :key="char.id"
          :character="char"
        ></character-list-item>
      </div>
    </div>
  </div>
</template>

<script>
import CharacterListItem from "./CharacterListItem.vue";

export default {
  props: ["characters"],
  components: { CharacterListItem }
};
</script>

