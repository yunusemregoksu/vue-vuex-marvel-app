import Vue from "vue";
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from "./App.vue";
import routerOptions from './router/routerOptions';
import storeOptions from './stores/store';

Vue.use(VueRouter);
Vue.use(Vuex);

const { state, getters, mutations, actions } = storeOptions;
const router = new VueRouter(routerOptions);
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
