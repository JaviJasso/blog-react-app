import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreatePost from '../components/CreatePost'
import BaseLayout from './BaseLayout'
import PostList from './PostList'
import ShowPost from './ShowPost'
import Home from './Home'


class App extends Component {

  state= {
    posts: []
  }

  _addPosts = (post) => {
    this.steState({
      posts: [post, ...this.state.posts]
    })
  }

  render = () =>
      <div className="App">
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/" component={Home}/>
              <Route  path="/" component={Home}/>
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
}

export default App;
