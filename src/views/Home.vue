<template>
  <div class="home">
    <form action="" @submit.prevent="login">
      <label for="">email</label>
      <input type="text" v-model="email">
      <label for="">password</label>
      <input type="password" v-model="password">
      <button>login</button>
    </form>
    <form action="" @submit.prevent="createPost">
      <label for="">title</label>
      <input type="text" v-model="title">
      <label for="">content</label>
      <input type="text" v-model="content">
      <button>Upload</button>
    </form>
    <p v-for="post in posts" :key="post.id">
      {{post.title}}
      {{post.content}}
      {{post.createdAt}}
    </p>
    
    <button @click="artist"> test</button>
    <p v-for="artisto in artists" :key="artisto.artist.name">{{artisto.artist.name}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){return{
    email: '',
    password: '',
    title: '',
    content: ''
  }},
  name: 'Home',
  methods:{
    artist(){
      this.$store.dispatch('artist')
    },
    login(){
      this.$store.dispatch('login', {email: this.email, password: this.password})
    },
    createPost(){
      this.$store.dispatch('createPost', {title: this.title, content: this.content})
  },
},
  computed: {
    artists(){
      return this.$store.state.artists
    },
    posts(){
      return this.$store.state.posts
    }
  }
}
</script>
