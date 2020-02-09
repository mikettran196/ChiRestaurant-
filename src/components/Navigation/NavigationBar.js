import React, {Component} from 'react';
import {Row, Col, Navbar, Nav} from 'react-bootstrap';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

const propTypes = {
  currentPage: PropTypes.string,
};

/**
 * @return {&} Container for NavigationBar
   */
class NavigationBar extends Component {
  /**
   * Constructor function for setting state
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.currentPage,
      navOptions: [
        {
          link: '/',
          name: 'Home',
        },
        {
          link: '/menu',
          name: 'Menu',
        },
        {
          link: '/location',
          name: 'Hours & Location',
        },
        {
          link: '/contact',
          name: 'Contact',
        },
        {
          link: '/about',
          name: 'About Us',
        },
      ],
    };
  }
  /**
   *  @param {*} pathname Function to refresh this component
   */
  refresh(pathname) {
    this.setState({currentPage: pathname});
  }
  /**
   * @return {*} Container
   */
  render() {
    const skipPage = this.state.currentPage;
    const newArray = this.state.navOptions.filter(function(obj) {
      return obj.link !== skipPage;
    });
    console.log(newArray);
    console.log(this.state.currentPage);
    return (
      <Row className="App-header">
        <Col className={'navigationsBarHolder'}>
          <Navbar fixed='top' className={'navigationsBar justify-content-center ' + this.state.scrollHeight}>
            {newArray.map((i) => {
              return (
                <Nav.Item key={i.link} className={'navItemHolders'}>
                  <Link to={i.link} onClick={() => this.refresh(i.link)} className={'navLinks'}>{i.name}</Link>
                </Nav.Item>
              );
            })}
          </Navbar>
        </Col>
      </Row>
    );
  }
}

export default NavigationBar;
