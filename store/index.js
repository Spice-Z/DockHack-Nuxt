import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      ideas: null
    },
    getters: {
      ideas: state => state.ideas
    },
    mutations: {
      saveIdeas (state, { ideas }) {
        state.ideas = ideas
      },
      addIdea (state, newIdea) {
        console.log('addIdea')
        console.log(newIdea)
        state.ideas.unshift(newIdea)
      }
    },
    actions: {
      async initIdeas ({ commit }) {
        if (this.state.ideas) {
          return
        }
        const ideas = await this.$axios.$get('https://dock-hack.herokuapp.com/api/general')
        // ideaをランダムに並び替えます
        for (let i = ideas.length - 1; i >= 0; i--) {
          let rand = Math.floor(Math.random() * (i + 1));
          [ideas[i], ideas[rand]] = [ideas[rand], ideas[i]]
        }
        commit('saveIdeas', { ideas })
      },
      addIdea ({ commit }, newIdea) {
        commit('addIdea', newIdea)
      }
    }
  })

export default store
