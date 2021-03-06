import React, {Component} from 'react';
import './assets/scss/styles.scss';
import Wrapper from './Wrapper';
import {BrowserRouter as Router} from 'react-router-dom';

/**
 * @return {*} Container
 */
class App extends Component {
  /**
   * Constructor function for setting state
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  /**
   * @return {*} Container
   */
  render() {
    return (
      <Router>
        <Wrapper />
      </Router>
    );
  }
}

export default App;
