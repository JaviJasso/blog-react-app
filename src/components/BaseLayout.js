import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/CreatePost">Create</NavLink></li>
              <li><NavLink to="/PostList">Show All Posts</NavLink></li>
            </ul>
          </nav>
        </header>
        {this.props.children}
      </div>

    );
  }
}

export default BaseLayout;
