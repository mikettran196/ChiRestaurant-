import React, {Component} from 'react';
import {Row, Col, Jumbotron, Image, ListGroup, CardColumns, Card} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import PhoPic from '../assets/images/pho-open-pic2.jpg';
import PlaceholderImg from '../assets/images/placeholder.png';

const menuSelection = [
  {
    link: '/appetizers',
    name: 'Appetizers',
    items: [
      {
        name: 'Edamame',
        description: 'Steamed, tender Edamame with coral sea salt',
        picture: PlaceholderImg,
      },
      {
        name: 'Shrimp Spring Rolls',
        description: 'Hand-wrapped in rice paper with lettuce, bean sprouts, and rice vermicelli, served with peanute sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Egg Rolls',
        description: 'Filled with pork, wood ear mushroom, fried \'til golden, and served with cilantro, green lettuce, and fish sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Crab-Tons',
        description: 'Blue crab meat and cream cheese tucked in a crispy fried wonton wrapper, and served with sweet and tangy sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Spicy Chicken Wings',
        description: 'Wings tossed in house-made spicy sauce, and served with wasabi mayo',
        picture: PlaceholderImg,
      },
      {
        name: 'Pork or Chicken Bao',
        description: 'Grilled honey glazed pork or lemon grass chicken, served with pickeled veggies, green onion, cucumbers, our unforgettable peking sauce, and sweet bun',
        picture: PlaceholderImg,
      },
    ],
  },
  {
    link: '/soups',
    name: 'Noodle Soup Bowls',
    items: [
      {
        name: 'Edamame',
        description: 'Steamed, tender Edamame with coral sea salt',
        picture: PlaceholderImg,
      },
      {
        name: 'Shrimp Spring Rolls',
        description: 'Hand-wrapped in rice paper with lettuce, bean sprouts, and rice vermicelli, served with peanute sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Egg Rolls',
        description: 'Filled with pork, wood ear mushroom, fried \'til golden, and served with cilantro, green lettuce, and fish sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Crab-Tons',
        description: 'Blue crab meat and cream cheese tucked in a crispy fried wonton wrapper, and served with sweet and tangy sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Spicy Chicken Wings',
        description: 'Wings tossed in house-made spicy sauce, and served with wasabi mayo',
        picture: PlaceholderImg,
      },
      {
        name: 'Pork or Chicken Bao',
        description: 'Grilled honey glazed pork or lemon grass chicken, served with pickeled veggies, green onion, cucumbers, our unforgettable peking sauce, and sweet bun',
        picture: PlaceholderImg,
      },
    ],
  },
  {
    link: '/platters',
    name: 'Rice Platters & V-Bowls',
    items: [
      {
        name: 'Edamame',
        description: 'Steamed, tender Edamame with coral sea salt',
        picture: PlaceholderImg,
      },
      {
        name: 'Shrimp Spring Rolls',
        description: 'Hand-wrapped in rice paper with lettuce, bean sprouts, and rice vermicelli, served with peanute sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Egg Rolls',
        description: 'Filled with pork, wood ear mushroom, fried \'til golden, and served with cilantro, green lettuce, and fish sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Crab-Tons',
        description: 'Blue crab meat and cream cheese tucked in a crispy fried wonton wrapper, and served with sweet and tangy sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Spicy Chicken Wings',
        description: 'Wings tossed in house-made spicy sauce, and served with wasabi mayo',
        picture: PlaceholderImg,
      },
      {
        name: 'Pork or Chicken Bao',
        description: 'Grilled honey glazed pork or lemon grass chicken, served with pickeled veggies, green onion, cucumbers, our unforgettable peking sauce, and sweet bun',
        picture: PlaceholderImg,
      },
    ],
  },
  {
    link: '/other',
    name: 'Other Dishes',
    items: [
      {
        name: 'Edamame',
        description: 'Steamed, tender Edamame with coral sea salt',
        picture: PlaceholderImg,
      },
      {
        name: 'Shrimp Spring Rolls',
        description: 'Hand-wrapped in rice paper with lettuce, bean sprouts, and rice vermicelli, served with peanute sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Egg Rolls',
        description: 'Filled with pork, wood ear mushroom, fried \'til golden, and served with cilantro, green lettuce, and fish sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Crab-Tons',
        description: 'Blue crab meat and cream cheese tucked in a crispy fried wonton wrapper, and served with sweet and tangy sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Spicy Chicken Wings',
        description: 'Wings tossed in house-made spicy sauce, and served with wasabi mayo',
        picture: PlaceholderImg,
      },
      {
        name: 'Pork or Chicken Bao',
        description: 'Grilled honey glazed pork or lemon grass chicken, served with pickeled veggies, green onion, cucumbers, our unforgettable peking sauce, and sweet bun',
        picture: PlaceholderImg,
      },
    ],
  },
  {
    link: '/kids',
    name: 'Kid\'s Menu',
    items: [
      {
        name: 'Edamame',
        description: 'Steamed, tender Edamame with coral sea salt',
        picture: PlaceholderImg,
      },
      {
        name: 'Shrimp Spring Rolls',
        description: 'Hand-wrapped in rice paper with lettuce, bean sprouts, and rice vermicelli, served with peanute sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Egg Rolls',
        description: 'Filled with pork, wood ear mushroom, fried \'til golden, and served with cilantro, green lettuce, and fish sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Crab-Tons',
        description: 'Blue crab meat and cream cheese tucked in a crispy fried wonton wrapper, and served with sweet and tangy sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Spicy Chicken Wings',
        description: 'Wings tossed in house-made spicy sauce, and served with wasabi mayo',
        picture: PlaceholderImg,
      },
      {
        name: 'Pork or Chicken Bao',
        description: 'Grilled honey glazed pork or lemon grass chicken, served with pickeled veggies, green onion, cucumbers, our unforgettable peking sauce, and sweet bun',
        picture: PlaceholderImg,
      },
    ],
  },
  {
    link: '/drinks',
    name: 'Drinks',
    items: [
      {
        name: 'Edamame',
        description: 'Steamed, tender Edamame with coral sea salt',
        picture: PlaceholderImg,
      },
      {
        name: 'Shrimp Spring Rolls',
        description: 'Hand-wrapped in rice paper with lettuce, bean sprouts, and rice vermicelli, served with peanute sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Egg Rolls',
        description: 'Filled with pork, wood ear mushroom, fried \'til golden, and served with cilantro, green lettuce, and fish sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Crab-Tons',
        description: 'Blue crab meat and cream cheese tucked in a crispy fried wonton wrapper, and served with sweet and tangy sauce',
        picture: PlaceholderImg,
      },
      {
        name: 'Spicy Chicken Wings',
        description: 'Wings tossed in house-made spicy sauce, and served with wasabi mayo',
        picture: PlaceholderImg,
      },
      {
        name: 'Pork or Chicken Bao',
        description: 'Grilled honey glazed pork or lemon grass chicken, served with pickeled veggies, green onion, cucumbers, our unforgettable peking sauce, and sweet bun',
        picture: PlaceholderImg,
      },
    ],
  },
];
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
      currentSelection: '',
      currentMenu: [],
    };
    console.log(window.location.pathname);
  }

  /**
   * function to set menuSelection to appitizer upon load
   */
  componentDidMount() {
    this.refresh('Appetizers');
  }

  /**
   * @param {*} selectionName function to set new pathname and refresh component
   */
  refresh(selectionName) {
    const selection = menuSelection.find(function(obj) {
      return obj.name === selectionName;
    });
    const newLink = '/menu' + selection.link;
    this.props.history.push(newLink);
    this.setState({
      currentSelection: selectionName,
      currentMenu: selection.items,
    });
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
                  {menuSelection.map((i) => {
                    const isActive = (this.state.currentSelection === i.name ? true : false);
                    return (
                      <ListGroup.Item key={i.link} action variant="secondary" as="li" className={'menuSelectItem'} active={isActive} onClick={() => this.refresh(i.name)}>
                        {i.name}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Col>
              <Col md={9} className={'menuItemsHolder'}>
                <CardColumns className={'menuItemsCardHolder row'}>
                  {this.state.currentMenu.map((i) => {
                    return (
                      <Card className={'menuItemCard col-md-4'}>
                        <Card.Img src={i.picture} className={'menuItemImg'}/>
                        <Card.Body className={'menuItemText'}>
                          <h1 className={'menuItemTitle'}>{i.name}</h1>
                          <p className={'menuItemInfo'}>
                            {i.description}
                          </p>
                        </Card.Body>
                      </Card>
                    );
                  })}
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

export default withRouter(Menu);
