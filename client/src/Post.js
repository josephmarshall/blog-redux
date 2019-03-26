import React from 'react'

const Post = (props) => (
  <div style={postStyle}>
    <h5>{props.postdata.datePosted}</h5>
    <div >{props.postdata.body}</div>
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