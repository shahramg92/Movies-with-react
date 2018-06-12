import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Nav} from './Nav';
import logo from '../../logo.svg';
import './Header.css';

export class Header extends React.Component {
  render() {
    return(
      <header>
        <Link to={'/'}><h1><img src={logo} alt="Movies With React Logo" /> Moviee</h1></Link>
        <Nav />
      </header>
    );
  }
}
