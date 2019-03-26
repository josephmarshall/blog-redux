import axios from 'axios';

const POSTS = 'POSTS';
const ADD_POST = 'ADD_POST';
// const UPDATE_BLOG = 'UPDATE_BLOG';
// const DELETE_BLOG = 'DELETE_BLOG'


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

// export const deleteBlog = (id) => {
//   return (dispatch) => {
//     axios.delete(`/api/blogs/${id}`)
//       .then( res => dispatch({ type: DELETE_BLOG, blogs: res.data }))
//   }   
// }

const posts = ( state = [], action ) => {
  switch(action.type) {
    case 'POSTS':
      return action.posts
    case 'ADD_POST':
      return [...state, action.post]
    // case 'DELETE_BLOG':
    //   const updateBlogs = state.filter(b => {
    //     if (b.id === action.blogs.id) 
    //       return null
    //     return b
    //   })
//       return updateBlogs
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