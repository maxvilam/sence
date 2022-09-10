import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    URL: "equipos.json",
    equipos: [],
    dataLocal: [],
  },
  getters: {},
  mutations: {
    SETLOCAL(state, payload) {
      state.dataLocal = payload;
    },
    SET_EQUIPOS(state, equipos) {
      state.equipos = equipos;
    },
  },
  actions: {
    async getEquipos({ commit, state }) {
      try {
        const request = await axios(state.URL);
        commit("SET_EQUIPOS", request);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
