import React, {Component} from 'react';
import {Row, Col, Jumbotron, Image} from 'react-bootstrap';
import PhoPic from '../assets/images/pho-open-pic2.jpg';

/**
 * @return {*} Container for Home Page
 */
class Home extends Component {
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
              <Col md={9} className={'nameAdressHolder'}>
                <h1 className={'homeName'}>Pho Express</h1>
                <p className={'homeAdress'}>12345 some address dr Houston, TX 77777</p>
              </Col>
              <Col md={3} className={'hoursHolder'}>
                <h1 className={'hoursTitle'}>Hours</h1>
                <p className={'hoursP'}>Open everday from 9AM to 9PM</p>
              </Col>
            </Row>
          </Jumbotron>
          <Image src={PhoPic} className={'backgroundPics'}/>
        </Col>
      </Row>
    );
  }
}

export default Home;
