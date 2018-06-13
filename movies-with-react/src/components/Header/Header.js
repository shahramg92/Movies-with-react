import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import logo from '../../logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header>
        <Link to={'/'}>
        <h1><img src={logo} alt="Movies With React Logo"/> Movies With React</h1>
        </Link>
        <Nav />
      </header>
    );
  }
}

export default Header;
