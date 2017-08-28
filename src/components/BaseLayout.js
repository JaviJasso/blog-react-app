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
              <li><NavLink to="/create">Create</NavLink></li>
              <li><NavLink to="/show">Show All Posts</NavLink></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default BaseLayout;
