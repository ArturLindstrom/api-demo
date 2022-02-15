import axios from 'axios'

// axios.defaults.baseURL = 'http://ws.audioscrobbler.com/2.0/'


// const token = this.$store.state.token.token

export async function artist (){
    try{
      const response = await axios.get('http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=Cher&api_key=eb2781535b778ed5f33e8d041955fba2&format=json')
        return response
  
}catch(error){
console.log(error);
}
}


export async function login(email, password){
    try{
      const response = await axios.post('http://localhost:8000/api/v1/auth/', 
        {email, password},
      )
      
      return response
  
    }catch(error){
      console.log(error);
    }
  }

  export async function createPost(title, content, token){
    console.log(token)
      try{
          const response = await axios.post('http://localhost:8000/api/v1/posts',
          {title, content},
          {headers: {Authorization: 'Bearer ' + token}})
          return response
      }catch(error){
          console.log(error)
      }

  }







// export async function login(email, password){
//     try{
//       const response = await axios.post('/auth', 
//         {email, password}
//       )
//       return response
  
//     }catch(error){
//       console.log(error);
//     }
//   }