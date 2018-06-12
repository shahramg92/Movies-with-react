import React, { Component } from 'react';
import {Header} from './components/Header/Header';
import {Form} from './components/Form/Form';
import {NewMovies} from './components/NewMovies/NewMovies';

class App extends Component {
  render() {
    return(
      <div className="container">
        <Header />
        <Form />
        <NewMovies />
      </div>
    );
  }
}

export default App;
