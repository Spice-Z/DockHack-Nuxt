import Vuex from 'vuex'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

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
      },
      deleteIdea (state, ideaId) {
        console.log('delete')
        state.ideas.some(function (element, index) {
          if (element.id === ideaId) {
            console.log(state.ideas)
            console.log(element)
            state.ideas.splice(index, 1)
          }
        })
      },
      deleteIdeas (state) {
        state.ideas = null
      }
    },
    actions: {
      async initIdeas ({ commit }) {
        if (this.state.ideas) {
          return
        }
        const reqData = {
          userId: cookies.get('dockhack-userId')
        }
        const config = {
          headers: {
            'x-access-token': cookies.get('dockhack-x-access-token')
          }
        }
        const res = await this.$axios.get('https://quattorroserver.herokuapp.com/api/general/' + reqData.userId, config)
        const ideas = res.data
        // ideaをランダムに並び替えます
        for (let i = ideas.length - 1; i >= 0; i--) {
          let rand = Math.floor(Math.random() * (i + 1));
          [ideas[i], ideas[rand]] = [ideas[rand], ideas[i]]
        }
        commit('saveIdeas', { ideas })
      },
      addIdea ({ commit }, newIdea) {
        commit('addIdea', newIdea)
      },
      deleteIdea ({commit}, ideaId) {
        commit('deleteIdea', ideaId)
      },
      deleteIdeas ({ commit }) {
        commit('deleteIdeas')
      }
    }
  })

export default store
