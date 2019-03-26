import React from 'react'
import { Icon, } from 'semantic-ui-react'
import { deletePost } from './reducers/posts'
import { connect, } from 'react-redux'


const Post = ({postData, dispatch}) => (
  <div style={postStyle}>
    <h5>{postData.datePosted}
      <Icon onClick={() => console.log("editPost")} name="edit" />
      <Icon onClick={() => dispatch(deletePost(postData))} name="delete" />
    </h5>
    <div >{postData.body}</div>
  </div>
)

const postStyle = {
  border: "solid black 1px",
  borderRadius: "10px",
  minHeight: "50px",
  padding: "10px",
  margin: "10px"
}


export default connect()(Post)