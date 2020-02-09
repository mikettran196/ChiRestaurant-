import React, {Component} from 'react';
import {Row, Col, Jumbotron, Image} from 'react-bootstrap';
import PhoPic from '../assets/images/pho-open-pic2.jpg';
import Maps from '../assets/images/map.png';
/**
 * @return {*} Container for Home Page
 */
class Location extends Component {
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
          <Jumbotron className={'locationHolder'}>
            <Row>
              <Col md={9} className={'locationAddressHolder'}>
                <Row>
                  <Col md={6} className={'mapHolder'}>
                    <Image src={Maps} className={'mapImage'}/>
                  </Col>
                  <Col md={6} className={'mapTextHolder'}>
                    <h3 className={'mapTitle'}>Address</h3>
                    <p className={'mapAddress'} >12345 some address dr Houston, TX 77777</p>
                    <p className={'mapAddressInfo'} >We are located Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar et dolor sit amet finibus. </p>
                  </Col>
                </Row>
              </Col>
              <Col md={3} className={'locateHoursHolder'}>
                <h1 className={'locateHoursTitle'}>Hours</h1>
                <p className={'locateHoursP'}>Open everday from 9AM to 9PM</p>
              </Col>
            </Row>
          </Jumbotron>
          <Image src={PhoPic} className={'backgroundPics'}/>
        </Col>
      </Row>
    );
  }
}

export default Location;
