import React, {Component} from 'react';


const initial_state = {
  name: '',
  title: '',
  blog: '',
}

class CreatePost extends Component {

  constructor(props) {
    super(props);
    this.state = initial_state;
  }

  _onChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
  }

  _onSubmit = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return(
      <div>
        <form onSubmit={this._onSubmit} >
          <label>Author</label>
          <input type="text"  name="authors" value={this.state.value}/>
          <label>Title</label>
          <input type="text" name="title" value={this.state.value} />
          <label>Blog</label>
          <textarea onChange={this._onChange} name="Blog" value={this.state.value}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreatePost
