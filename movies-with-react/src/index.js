import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home';
import Movie from './components/Movie/Movie';
import './index.css';

class App extends Component {
  render() {
    console.log('Made by Shahram Ghassemi - http://www.shahramghassemi.com/');
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/movie/:id" component={Movie} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
