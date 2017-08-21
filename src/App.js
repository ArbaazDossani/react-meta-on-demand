import React, { Component } from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { BrowserRouter } from 'react-router-dom'

import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import RedirectionsCheckPage from './Redirect';
import updateMeta from './updateMeta';

const loginURL = "/login";
const redirectCheckURL = "/redirect";

class App extends Component {
  componentDidMount(){
    updateMeta('index');
  }
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path={loginURL} component={LoginPage} />
          <Route path={redirectCheckURL} component={RedirectionsCheckPage} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
