import React from 'react'

const Post = ({postData}) => (
  <div style={postStyle}>
    <h5>{postData.datePosted}</h5>
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


export default Post