import React from 'react'
import { connect, } from 'react-redux'
import { addBlog, updateBlog, } from './reducers/blogs'

class BlogForm extends React.Component {
  state = { name: this.props.name,
            id: "" }

  componentDidMount(){
    this.setState({id: this.props.id})
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id, } = this.props;
    const { name, } = this.state
    const blog = { name: this.state.name, id: this.state.id }
    if (this.props.name) { 
      const blog = { name: this.state.name, id: this.state.id }
      this.props.dispatch(updateBlog(blog)) 
      this.props.toggleEditForm()
    } else {
      const blog = { name: this.state.name }
        this.props.dispatch(addBlog(blog)) 
    this.setState({ name: '', }) }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  render() {
    const { name, } = this.state;

    return (
      <div>
        { !this.props.name && <h3>Add A Blog</h3> }
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}


export default connect()(BlogForm);