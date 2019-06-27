import service from "../services/service";

const state = {
  characters: [],
  selectedCharacter: null
};

const getters = {
  groupedCharacters(state) {
    const grouped = [];

    state.characters.forEach((item, index) => {
      if (index % 5 === 0) {
        grouped.push([]);
      }
      grouped[grouped.length - 1].push(item);
    });

    return grouped;
  }
};

const mutations = {
  setCharacters(state, characters) {
    state.characters = characters;
  },
  setSelectedCharacter(state, character) {
    state.selectedCharacter = character;
  }
};

const actions = {
  async fetchCharacters(context) {
    return service.fetchCharacters().then(snapshot => {
      context.commit("setCharacters", snapshot);
    });
  },
  async fetchSearchedCharacters(context, term) {
    return service.fetchSearchedCharacters(term).then(snapshot => {
      context.commit("setCharacters", snapshot);
    });
  },
  async fetchSelectedCharacter(context, id) {
    return service.fetchSelectedCharacter(id).then(snapshot => {
      context.commit("setSelectedCharacter", snapshot);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
