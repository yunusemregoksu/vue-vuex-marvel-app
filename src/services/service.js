import md5 from "md5";

const API_URL = "https://gateway.marvel.com:443/v1/public/";
const publicKey = process.env.VUE_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.VUE_APP_MARVEL_PRIVATE_KEY;
const ts = "1";
const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5(
  `${ts}${privateKey}${publicKey}`
)}`;

export default {
  async fetchCharacters() {
    return fetch(`${API_URL}/characters?${auth}&limit=15`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        return res.data.results;
      });
  },

  async fetchSearchedCharacters(term) {
    return fetch(
      `${API_URL}/characters?${auth}&limit=15&nameStartsWith=${term}`
    )
      .then(res => res.json())
      .then(res => {
        return res.data.results;
      });
  },

  async fetchSelectedCharacter(id) {
    return fetch(`${API_URL}/characters/${id}?${auth}`)
      .then(res => res.json())
      .then(res => {
        return res.data.results[0];
      });
  }
};
