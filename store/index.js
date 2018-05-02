import Vuex from "vuex";

const store = () =>
  new Vuex.Store({
    state: {
      ideas: null
    },
    getters: {
      ideasx: state => state.ideas
    },
    mutations: {
      saveIdeas(state, { ideas }) {
        state.ideas = ideas;
      }
    },
    actions: {
      async getIdeas({ commit }, { ideas }) {
        if (!ideas) {
          const api_ideas = await this.$axios.$get(
            "https://dock-hack.herokuapp.com/api/general"
          );
        }
        ideas = api_ideas;
        commit("saveIdeas", { ideas });
      },
      async initIdeas({ commit }) {
        if (this.state.ideas) {
          return;
        }

        const ideas = await this.$axios.$get(
          "https://dock-hack.herokuapp.com/api/general"
        );
        //ideaをランダムに並び替えます
        for (let i = ideas.length - 1; i >= 0; i--) {
          let rand = Math.floor(Math.random() * (i + 1));
          [ideas[i], ideas[rand]] = [ideas[rand], ideas[i]];
        }

        commit("saveIdeas", { ideas });
      }
    }
  });

export default store;
