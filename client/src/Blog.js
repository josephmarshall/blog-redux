import React from 'react'
import { connect, } from 'react-redux'
import PostForm from './PostForm'
import Post from './Post'
import { Container, Icon, } from 'semantic-ui-react'
import BlogForm from './BlogForm'

class Blog extends React.Component {
 state = {editBlogName: false}

 toggleEditBlogName = () => {
   this.setState({editBlogName: !this.state.editBlogName})
 }

  render(){
    return(
      <Container>
        {this.props.blogs.map( b =>
        { if (b.id === parseInt(this.props.match.params.blog_id)) 
          return (
            <div key={b.id}>
              <h1>{b.id}
                { this.state.editBlogName ? <BlogForm name={b.name} id={b.id} toggleEditForm={this.toogleEditBlogName} /> : b.name } 
                <Icon name="edit" onClick={this.toggleEditBlogName}></Icon>
                <Icon name="delete" ></Icon>
              </h1>
                <PostForm blog_id={this.props.match.params.blog_id} />
            </div>)
            return null
          }
        )}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {blogs: state.blogs}
}

export default connect(mapStateToProps)(Blog)


//bits from previous version

// <div style={{height: "90vh", overflow: "auto", border: "solid red 1px"}}>
//   {b.posts.map(p=> <Post key={p.id} postdata={p}/>)}