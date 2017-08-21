import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import updateMeta from './updateMeta';

class LoginPage extends Component {
  componentDidMount(){
    updateMeta('login');
  }
  render() {
    return (
      <div className="App">
        Login Page Metas Loaded into DOM <br/>
        <Link to="/">GO TO Landing Page</Link> <br/>
        <Link to="/redirect">GO TO Redirect</Link> <br/>
      </div>
    );
  }
}

export default LoginPage;
