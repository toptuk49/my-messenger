import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [],
    chats: [],
    currentUser: {}
  },
  getters: {
  },
  mutations: {
    SET_CONTACTS_TO_STORE(state, contacts) {
      state.contacts = contacts
    },
    SET_CHATS_TO_STORE(state, chats) {
      state.chats = chats
    },
    SET_USER_TO_HEAD(state, user) {
      user ? state.currentUser = user : state.currentUser = ''
    }
  },
  actions: {
    FETCH_CONTACTS({commit}) {
      return axios.get('http://localhost:3000/contacts')
        .then((contacts) => {
          commit('SET_CONTACTS_TO_STORE', contacts.data)
        })
    },
    FETCH_CHATS({commit}) {
      return axios.get('http://localhost:3000/chats')
        .then((chats) => {
          commit('SET_CHATS_TO_STORE', chats.data)
        })
    },
    SET_USER_TO_HEADER({commit}, user) {
      commit('SET_USER_TO_HEAD', user)
    },
    // eslint-disable-next-line
    SEND_MESSAGE({commit}, {user_id, chat}) {
      return axios.put('http://localhost:3000/chats/' + user_id, chat)
        .then((response) => {
          return response
        })
    }
  },
  modules: {
  }
})
