import axios from 'axios'

const POSTS = 'POSTS'
const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const DELETE_POST = 'DELETE_POST'


export const getPosts = (cb, blog_id) => {
  return (dispatch) => {
    axios.get(`/api/blogs/${blog_id}/posts`)
      .then( res => dispatch({ type: POSTS, posts: res.data }) )
        .then(cb)

  }
}

export const addPost = (post) => {
  return (dispatch) => {
    axios.post(`/api/blogs/${post.blog_id}/posts`, post )
      .then( res => dispatch({ type: ADD_POST, post: res.data}) )
  }
}

// export const updateBlog = (blog) => {
//   return (dispatch) => {
//     axios.put(`/api/blogs/${blog.id}`, blog )
//       .then( res => dispatch({ type: UPDATE_BLOG, blog: res.data}))
//   }
// }

export const deletePost = (post) => {
  return (dispatch) => {
    axios.delete(`/api/blogs/${post.blog_id}/posts/${post.id}`)
      .then( res => dispatch({ type: DELETE_POST, post: res.data }))
  }   
}

const posts = ( state = [], action ) => {
  switch(action.type) {
    case 'POSTS':
      return action.posts
    case 'ADD_POST':
      return [...state, action.post]
    case 'DELETE_POST':
      const updatePosts = state.filter(p => {
        if (p.id === action.post.id) 
          return null
        return p
      })

      return updatePosts
//     case 'UPDATE_BLOG':
//       return state.map((b => {
//         if (b.id === action.blog.id) 
//           return action.blog
//         return b
//       }))
//     case 'ADD_POST':
//       const updateBlogPosts = state.map(b => {
//         if (b.id === action.post.blog_id)
//           return { name: b.name, id: b.id, posts: [...b.posts, action.post] }
//         return b  
//         })
//       return updateBlogPosts
    default:
      return state
  }
}

export default posts