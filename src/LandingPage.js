import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import updateMeta from './updateMeta';

class LandingPage extends Component {
  componentDidMount(){
    updateMeta('landing');
  }
  render() {
    return (
      <div className="App">
        Landing Page Metas Loaded into DOM <br/>
        <Link to="/login">GO TO Login Page</Link> <br/>
        <Link to="/redirect">GO TO Redirect</Link> <br/>
      </div>
    );
  }
}

export default LandingPage;
