import React from 'react'
import { Icon, } from 'semantic-ui-react'
import { deletePost } from './reducers/posts'
import { connect, } from 'react-redux'
import PostForm from './PostForm'

class Post extends React.Component {
  
  state = { editPost: false }

  toggleEditPost = () => {
    this.setState({ editPost: !this.state.editPost})
  }

  render(){
    const { postData, dispatch } = this.props
    if (this.state.editPost) {
      return <PostForm postData={this.props.postData} toggleEditPost={this.toggleEditPost} />
    } else {
      return(
        <div style={postStyle}>
      <h5>{postData.datePosted}
        <Icon onClick={() => this.toggleEditPost()} name="edit" />
        <Icon onClick={() => dispatch(deletePost(postData))} name="delete" />
      </h5>
      <div >{postData.body}</div>
    </div>
     )
    }
  }
}

const postStyle = {
  border: "solid black 1px",
  borderRadius: "10px",
  minHeight: "50px",
  padding: "10px",
  margin: "10px"
}


export default connect()(Post)