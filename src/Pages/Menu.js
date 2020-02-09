import React, {Component} from 'react';
import {Row, Col, Jumbotron, Image, ListGroup, CardColumns, Card} from 'react-bootstrap';
import PhoPic from '../assets/images/pho-open-pic2.jpg';
import PlaceholderImg from '../assets/images/placeholder.png';
/**
 * @return {*} Container for Home Page
 */
class Menu extends Component {
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
          <Jumbotron className={'menuHolder'}>
            <Row>
              <Col md={3} className={'menuSelectHolder'}>
                <ListGroup as="ul" className={'menuSelectionListHolder'}>
                  <ListGroup.Item action variant="secondary" as="li" className={'menuSelectItem'} active>
                    Appetizer
                  </ListGroup.Item>
                  <ListGroup.Item action variant="secondary" as="li" className={'menuSelectItem'}>
                    Noodle Soup Bowls
                  </ListGroup.Item>
                  <ListGroup.Item action variant="secondary" as="li" className={'menuSelectItem'}>
                    Rice Platters & V-Bowls
                  </ListGroup.Item>
                  <ListGroup.Item action variant="secondary" as="li" className={'menuSelectItem'}>
                    Other Dishes
                  </ListGroup.Item>
                  <ListGroup.Item action variant="secondary" as="li" className={'menuSelectItem'}>
                    Kid's Menu
                  </ListGroup.Item>
                  <ListGroup.Item action variant="secondary" as="li" className={'menuSelectItem'}>
                    Drinks
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={9} className={'menuItemsHolder'}>
                <CardColumns className={'menuItemsCardHolder'}>
                  <Card className={'menuItemCard'}>
                    <Card.Img src={PlaceholderImg} className={'menuItemImg'}/>
                    <Card.Body className={'menuItemText'}>
                      <h1 className={'menuItemTitle'}>Spring Rolls</h1>
                      <p className={'menuItemInfo'}>
                        Shrimp or Tofu wrapped in fresh rice paper with beansprouts vermicili and lettuce
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className={'menuItemCard'}>
                    <Card.Img src={PlaceholderImg} className={'menuItemImg'}/>
                    <Card.Body className={'menuItemText'}>
                      <h1 className={'menuItemTitle'}>Spring Rolls</h1>
                      <p className={'menuItemInfo'}>
                        Shrimp or Tofu wrapped in fresh rice paper with beansprouts vermicili and lettuce
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className={'menuItemCard'}>
                    <Card.Img src={PlaceholderImg} className={'menuItemImg'}/>
                    <Card.Body className={'menuItemText'}>
                      <h1 className={'menuItemTitle'}>Spring Rolls</h1>
                      <p className={'menuItemInfo'}>
                        Shrimp or Tofu wrapped in fresh rice paper with beansprouts vermicili and lettuce
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className={'menuItemCard'}>
                    <Card.Img src={PlaceholderImg} className={'menuItemImg'}/>
                    <Card.Body className={'menuItemText'}>
                      <h1 className={'menuItemTitle'}>Spring Rolls</h1>
                      <p className={'menuItemInfo'}>
                        Shrimp or Tofu wrapped in fresh rice paper with beansprouts vermicili and lettuce
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className={'menuItemCard'}>
                    <Card.Img src={PlaceholderImg} className={'menuItemImg'}/>
                    <Card.Body className={'menuItemText'}>
                      <h1 className={'menuItemTitle'}>Spring Rolls</h1>
                      <p className={'menuItemInfo'}>
                        Shrimp or Tofu wrapped in fresh rice paper with beansprouts vermicili and lettuce
                      </p>
                    </Card.Body>
                  </Card>
                  <Card className={'menuItemCard'}>
                    <Card.Img src={PlaceholderImg} className={'menuItemImg'}/>
                    <Card.Body className={'menuItemText'}>
                      <h1 className={'menuItemTitle'}>Spring Rolls</h1>
                      <p className={'menuItemInfo'}>
                        Shrimp or Tofu wrapped in fresh rice paper with beansprouts vermicili and lettuce
                      </p>
                    </Card.Body>
                  </Card>
                </CardColumns>
              </Col>
            </Row>
          </Jumbotron>
          <Image src={PhoPic} className={'backgroundPics'}/>
        </Col>
      </Row>
    );
  }
}

export default Menu;
