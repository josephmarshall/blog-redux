import React, { Component } from 'react';
import { Route, Switch, } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import NoMatch from './NoMatch'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/blogs/:blog_id' component={Blog} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}


export default App;
