import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import updateMeta from './updateMeta';

class Redirect extends Component {
  componentDidMount(){
    updateMeta('redirect');
  }
  render() {
    return (
      <div className="App">
        Redirect Page Metas Loaded into DOM <br/>
        <Link to="/">GO TO Landing Page</Link> <br/>
        <Link to="/login">GO TO Login Page</Link> <br/>
      </div>
    );
  }
}

export default Redirect;
