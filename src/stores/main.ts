import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', {
  state: () => ({
    interviews: [],
    descriptems: [],
    counter: 0
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2;
    }
  },

  actions: {
    increment () {
      this.counter++;
    }
  }
});
