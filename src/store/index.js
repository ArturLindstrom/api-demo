import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    posts: [],
    loggedIn: false
  },
  mutations: {
    saveAuthData(state, authData){
      state.token = authData.token
      state.loggedIn = true
    },
    addPost(state, payload){
      state.posts.push(payload)
    },
    listPosts(state, payload){
      state.posts = payload.data.posts
    }
  },
  actions: {
    async login(context, credentials){
      const response = await API.login(
        credentials.email,
        credentials.password
      )
      API.saveToken(response.data.token)
        context.commit('saveAuthData', response.data)
    },
    async createPost(context, post){
      const response = await API.createPost(
        post.title,
        post.content
      )
      context.commit('addPost', response.data.post)
    },
    async getPosts(context){
      const response = await API.getPosts()
      context.commit('listPosts', response)
    },

    async deletePost(context, id){
      await API.deletePost(id)
      // await context.actions.getPosts(context)
    },

    async updatePost(context, post){
      await API.updatePost(
        post.title,
        post.content,
        post.id
      )
    }
  },
  modules: {
  }
})
