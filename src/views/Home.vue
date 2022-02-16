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
    <h1>Create post!</h1>
    <form action="" @submit.prevent="createPost">
      <label for="">title</label>
      <input type="text" v-model="title">
      <label for="">content</label>
      <input type="text" v-model="content">
      <button>Upload</button>
    </form>
    <div v-if="$store.state.posts">
      <div v-for="blogPost in posts" :key="blogPost.id">
        <h1>{{blogPost.title}}</h1>
        <h2>{{blogPost.id}}</h2>
        <p>{{blogPost.content}}</p>
        <button @click="deletePost(blogPost.id)">Delete post</button>
      </div>
    </div>
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
    },
    async deletePost(id){
      await this.$store.dispatch('deletePost', id)
      await this.showPosts()
    }
},
  computed: {
    posts(){
      if(this.$store.state.posts){
        return this.$store.state.posts
    } else{
    return []
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