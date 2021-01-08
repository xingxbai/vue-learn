import Vue from "vue";
import Vuex from "./kvuex.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    add(state, payload) {
      state.counter++;
    },
  },
  actions: {
    // 结构上下文
    add({ commit }) {
      setTimeout(() => {
        commit("add");
      }, 1000);
    },
  },
  modules: {},
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
  },
});
