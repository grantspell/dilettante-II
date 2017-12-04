import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// COMPONENTS
import HomeView from './components/home/HomeView'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomeView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
