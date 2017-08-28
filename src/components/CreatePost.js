import React, {Component} from 'react';


const INITIAL_STATE = {
  name: '',
  title: '',
  blog: '',
}

class CreatePost extends Component {

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  _onChange = (key, value) => {
    this.steState({[key]: value});
  }

  _onSubmit = (event) => {
    event.preventDefault();
    this.props.addPosts(this.state)
    this.steState(INITIAL_STATE)
  }

  render(){
    return(
      <div>
        <form onSubmit={this._onSubmit} >
          <label>Author</label>
          <input type="text"  name="authors" value=""/>
          <label>Title</label>
          <input type="text" name="title" value="" />
          <label>Blog</label>
          <textarea onChange={this._onChange} name="Blog" value=""/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreatePost
