import axios from 'axios';

const BLOGS = 'BLOGS';
const ADD_BLOG = 'ADD_BLOG';
const UPDATE_BLOG = 'UPDATE_BLOG';
const DELETE_BLOG = 'DELETE_BLOG'


export const getBlogs = (cb) => {
  return (dispatch) => {
    axios.get('/api/blogs')
      .then( res => dispatch({ type: BLOGS, blogs: res.data }) )
        .then(cb)

  }
}

export const addBlog = (blog) => {
  return (dispatch) => {
    axios.post('/api/blogs', blog )
      .then( res => dispatch({ type: ADD_BLOG, blog: res.data}) )
  }
}

export const updateBlog = (blog) => {
  return (dispatch) => {
    axios.put(`/api/blogs/${blog.id}`, blog )
      .then( res => dispatch({ type: UPDATE_BLOG, blog: res.data}))
  }
}

export const deleteBlog = (id) => {
  return (dispatch) => {
    axios.delete(`/api/blogs/${id}`)
      .then( res => dispatch({ type: DELETE_BLOG, blogs: res.data }))
  }   
}

const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state]
    case 'DELETE_BLOG':
      const updateBlogs = state.filter(b => {
        if (b.id === action.blogs.id) 
          return null
        return b
      })
      return updateBlogs
    case 'UPDATE_BLOG':
      return state.map((b => {
        if (b.id === action.blog.id) 
          return action.blog
        return b
      }))
    default:
      return state
  }
}

export default blogs