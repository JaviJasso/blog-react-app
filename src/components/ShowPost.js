import React, { Component } from 'react'

class ShowPost extends Component {
  constructor(props){
    super(props)
    this.state = {
      _id: '',
      title: '',
      author: '',
      blogPost: ''
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/' + id)
    .then(response => response.json())
    .then(post => {
      this.setState({ ...post })
    })
  }

  render () {
    return (
      <article>
        <h1>{this.state.title}</h1>
        <p>{this.state.blogPost}</p>
      </article>
    )
  }

}

export default ShowPost
