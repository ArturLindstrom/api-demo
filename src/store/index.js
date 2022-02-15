import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api'
// import { artist } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artists: [],
    token: '',
    posts: []
  },
  mutations: {
    addArtist(state, payload) {
      state.artists.push(payload)
    },
    addToken(state, payload){
      state.token = payload
      // localStorage.setItem('token', payload.token )
    },
    addPost(state, payload){
      state.posts.push(payload)
    }
  },
  actions: {
    async artist(context){
      const response = await API.artist()
      context.commit('addArtist', response.data)
      
    },

    async login(context, credentials){
      const response = await API.login(
        credentials.email,
        credentials.password
      )
        context.commit('addToken', response.data)
    },
    async createPost(context, post){
      const response = await API.createPost(
        post.title,
        post.content,
        context.state.token.token
      )
      context.commit('addPost', response.data.post)
    }
  },
  modules: {
  }
})
