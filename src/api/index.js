import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/v1'
axios.defaults.headers.common['Content-Type'] = `application/json`;

export function saveToken(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export async function login(email, password){
  return await axios.post('/auth', 
    {email, password})
   
  }

  export async function createPost(title, content){
    return await axios.post('/posts',
      {title, content})
  }

  export async function getPosts(){
    return await axios.get('/posts')
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