import React, {Component} from 'react';
import PhoPic from './assets/images/pho-open-pic2.jpg';
import {Container, Row, Col, Navbar, Nav, Image, Jumbotron, ListGroup, Button} from 'react-bootstrap';
import {NavigationBar} from './components';
import {Switch, Route} from 'react-router-dom';
import {Home, About, Contact, Location, Menu} from './Pages';
import PropTypes from 'prop-types';

const propTypes = {
};
/**
 * @return {*} Container for wrapper
 */
class Wrapper extends Component {
  /**
   * Constructor function for setting state
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      scrollHeight: 0,
    };
  }

  /**
   * function to get scroll height
   */
  componentDidMount() {
    window.onscroll =()=> {
      this.setState({scrollHeight: window.scrollY});
    };
  }
  /**
   * @return {*} Container
   */
  render() {
    return (
      <Container fluid className="App">
        <NavigationBar currentPage={window.location.pathname}/>
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route path ='/menu' component={Menu} />
          <Route exact path ='/location' component={Location} />
          <Route exact path ='/contact' component={Contact} />
          <Route exact path ='/about' component={About} />
        </Switch>
      </Container>
    );
  }
}

export default Wrapper;
