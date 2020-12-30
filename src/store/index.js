import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: '',
  },
  mutations: {
    updateData(state, value) {
      state.data = value;
    },
  },
  actions: {
    getData(context) {
      return new Promise((resolve, reject) => {
        let url = '/data.json';
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              reject();
            }
            response.json().then((data) => {
              context.commit('updateData', data);
              resolve(data);
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  modules: {},
});
