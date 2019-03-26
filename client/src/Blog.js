import React from 'react'
import { connect, } from 'react-redux'
import PostForm from './PostForm'
import Post from './Post'
import { Container, Icon, } from 'semantic-ui-react'
import BlogForm from './BlogForm'
import { deleteBlog, } from './reducers/blogs'
import { getPosts, } from './reducers/posts'

class Blog extends React.Component {
 state = {editBlogName: false}

 componentDidMount() {
  this.props.dispatch(getPosts(this.setLoaded, this.props.match.params.blog_id));
}

setLoaded = () => {
  this.setState({ loaded: true, });
}

 toggleEditBlogName = () => {
   this.setState({editBlogName: !this.state.editBlogName})
 }

 delete = (id) => {
  this.props.dispatch(deleteBlog(id))
  this.props.history.push('/')
}

  render(){
    return(
      <Container>
        {this.props.blogs.map( b =>
        { if (b.id === parseInt(this.props.match.params.blog_id)) 
          return (
            <div key={b.id}>
              <h1>
                { this.state.editBlogName ? <BlogForm name={b.name} id={b.id} toggleEditForm={this.toggleEditBlogName} /> : b.name } 
                { !this.state.editBlogName && <Icon name="edit" onClick={this.toggleEditBlogName}></Icon> }
                { !this.state.editBlogName && <Icon name="delete" onClick={()=>this.delete(b.id)} ></Icon> }
              </h1>
              <div style={{height: "90vh", overflow: "auto", border: "solid red 1px"}}>
                {this.props.posts.map( p => <Post postData={p} />)}
                <PostForm blog_id={this.props.match.params.blog_id} />
              </div>
            </div>)
            return null
          }
        )}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {blogs: state.blogs,
          posts: state.posts}
}

export default connect(mapStateToProps)(Blog)


//bits from previous version

// <div style={{height: "90vh", overflow: "auto", border: "solid red 1px"}}>
//   {b.posts.map(p=> <Post key={p.id} postdata={p}/>)}