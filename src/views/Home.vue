<template>
  <div class="home">
    <h1>HEJ BLOGGEN</h1>
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
    <div v-if="$store.state.loggedIn">
      <button @click="showPosts">Show posts</button>
      <div v-for="post in posts.data.posts" :key="post.id">
        <h1>{{post.title}}</h1>
        <p>{{post.content}}</p>
      </div>
    </div>
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
  // beforeMount() {
  //   this.$store.dispatch('getPosts')
  // },
  methods:{
    login(){
      this.$store.dispatch('login', {email: this.email, password: this.password})
    },
    createPost(){
      this.$store.dispatch('createPost', {title: this.title, content: this.content})
  },
    showPosts(){
      this.$store.dispatch('getPosts')
    }
},
  computed: {
    posts(){
      return this.$store.state.posts
    }
  }
}
</script>

<style lang="scss" scoped>

div {
  border: 2px black solid;
  background: lemonchiffon
}

</style>