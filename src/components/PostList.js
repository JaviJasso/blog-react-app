import React, {Component} from 'react'

class PostList extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/')
    .then(response => response.json())
    .then(posts => {
      this.setState({posts: posts})
    })
  }

  render() {
    return(
      <div>
        {this.state.posts.map((post) => (
          <div className="id_class" key="(post._id)">
          </div>
        ))}
      </div>
    )
  }
}

export default PostList
