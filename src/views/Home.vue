<template>
  <div class="home">
    <form action="" @submit.prevent="login">
      <label for="">email: </label>
      <input type="text" v-model="email">
      <label for="">password: </label>
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
      <div v-for="blogPost in posts" :key="blogPost.id" class="blog-post">
        <h1 v-if="updateView != blogPost.id">{{blogPost.title}}</h1>
        <p v-if="updateView != blogPost.id">{{blogPost.content}}</p>
        <form action="" @submit.prevent="updatePost(blogPost.id)" v-else>
          <input type="text" v-model="updateTitle" class="title-input">
          <textarea name="" id="" cols="30" rows="10" v-model="updateContent" class="content-input"></textarea>
          <button>Upload</button>
        </form>
        <div>
          <button @click="deletePost(blogPost.id)">Delete post</button>
          <button @click="updateViewToggle(blogPost)">Update post</button>
        </div>
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
    content: '',
    updateTitle: '',
    updateContent: '',
    updateView: null
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
    },
    async updatePost(postId){
      await this.$store.dispatch('updatePost', {title: this.updateTitle, content: this.updateContent, id: postId})
      this.updateView = null
    },
    updateViewToggle(blogPost){
      this.updateView = blogPost.id
      this.updateTitle = blogPost.title
      this.updateContent = blogPost.content
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
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');

body {
  background: #EEEEEE
}

div {
  border-radius: 1rem;
  margin: 1rem;
}

button {
  margin: 0rem .5rem;
  border-radius: 5px
}

input {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
}

.blog-post {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Josefin Sans', sans-serif;
  padding: 2rem;
  text-align: left;
  background: linear-gradient(#EEEEEE, white);
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.blog-post p {
  font-size: 1.2rem
}

.title-input {
  width: 100%;
  padding: 2rem;
  font-size: 2rem;
  border: 0;
}
.content-input {
  width: 100%;
  height: 50rem;
  padding: 0rem;
  font-size: 1rem;
  border: 0;
}

</style>