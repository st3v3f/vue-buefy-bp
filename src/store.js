import Vue from 'vue'
import Vuex from 'vuex'
import TodosService from './services/TodosService';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      { id: 1, name: 'Taxi Driver', watched: true },
      { id: 2, name: 'Return of the Jedi', watched: false }
    ],
    genres: [
      { id: 1, name: 'Comedy' },
      { id: 2, name: 'Drama' }
    ],
    todos: [],
  },
  mutations: {
    SET_TODOS (state, todos) {
      state.todos = todos
    }
  },
  actions: {
    loadTodos ({ commit }) {
      TodosService.getAllTodos()
      .then(r => r.data)
      .then(todos => {
        commit('SET_TODOS', todos)
      })
    }
  }
})
