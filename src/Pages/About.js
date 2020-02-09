import React, {Component} from 'react';
import {Row, Col, Jumbotron, Image} from 'react-bootstrap';
import PhoPic from '../assets/images/pho-open-pic2.jpg';

/**
 * @return {*} Container for Home Page
 */
class About extends Component {
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
      <Row>
        <Col className={'imageHolder'}>
          <Jumbotron className={'homeNameHolder'}>
            <Row>
              <Col>
                About Page
              </Col>
            </Row>
          </Jumbotron>
          <Image src={PhoPic} className={'backgroundPics'}/>
        </Col>
      </Row>
    );
  }
}

export default About;
