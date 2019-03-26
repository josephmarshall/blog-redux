import React from 'react'
import { connect, } from 'react-redux'
import BlogForm from './BlogForm'
import { Link, } from 'react-router-dom'
import { Container, Header, } from 'semantic-ui-react'
import { deleteBlog, getBlogs, } from './reducers/blogs'

class Home extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getBlogs(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true, });
  }

  delete = (id) => {
    this.props.dispatch(deleteBlog(id))
  }

  render(){
    return (

      <Container>
        <h1>This are your blogs</h1>
        <BlogForm />
        {this.props.blogs.map(b=> 
          <div key={b.id}>
            <Header as={Link} to={`/blogs/${b.id}`} >{b.name}</Header>
            <button onClick={()=>this.delete(b.id)}>x</button>
          </div>)}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {blogs: state.blogs}
}

export default connect(mapStateToProps)(Home)