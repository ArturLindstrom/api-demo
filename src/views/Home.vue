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
    <div v-if="$store.state.posts.data">
      <div v-for="blogPost in posts" :key="blogPost.id">
        {{blogPost.title}}
      </div>
    </div>
    </form>
  </div>
</template>

<script>

export default {
  data(){return{
    email: '',
    password: '',
    title: '',
    content: ''
  }},
  name: 'Home',
  methods:{
    async login(){
      await this.$store.dispatch('login', {email: this.email, password: this.password})
      await this.showPosts()
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
      if(this.$store.state.posts.data.posts){
        return this.$store.state.posts.data.posts
      } else {
        return 'No posts'
      }
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