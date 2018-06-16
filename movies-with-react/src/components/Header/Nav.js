import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
          <li><a href="http://www.shahramghassemi.com/" target="_blank" rel="noopener noreferrer">Made by Shahram Ghassemi</a></li>
          <li><a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">API: The Movie Database</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
