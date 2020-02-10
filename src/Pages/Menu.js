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
        name: 'The Un-Pho-gettable Pho',
        description: 'Eye round beef, brisket, beef balls & rice noodles in beef broth',
        picture: PlaceholderImg,
      },
      {
        name: 'The Best Chicken Pho',
        description: 'Shredded chicken breast and rice noodles in beef broth',
        picture: PlaceholderImg,
      },
      {
        name: 'The Green Pho',
        description: 'Vegatable and rice noodles in beef broth',
        picture: PlaceholderImg,
      },
      {
        name: 'The Vegan Pho',
        description: 'Vegetables and rice noodles in vegetable broth',
        picture: PlaceholderImg,
      },
      {
        name: 'Hue Spicy Noodle Soup',
        description: 'Brisket, beef shank, Vietnamese ham, & thick rice noodles in a spicy beef-pork broth.',
        picture: PlaceholderImg,
      },
      {
        name: 'Saigon Egg Noodle Soup',
        description: 'BBQ pork, shrimp, and egg noodles in chicken broth',
        picture: PlaceholderImg,
      },
      {
        name: 'Jasmine Chicken Noodle Soup',
        description: 'Shredded chicken breast & rice noodles in chicken broth',
        picture: PlaceholderImg,
      },
      {
        name: 'Roaming Ramen Noodle',
        description: 'Pork base ramen with braised pork belly, ground pork, boiled egg, and mushroom',
        picture: PlaceholderImg,
      },
    ],
  },
  {
    link: '/platters',
    name: 'Rice Platters & V-Bowls',
    items: [
      {
        name: 'Rice Platters',
        description: 'Long grain rice stir-fried with sweet onion sauce, served with mixed vegetables and your choice of grilled protein. *Brown or white rice may be substituted',
        picture: PlaceholderImg,
      },
      {
        name: 'V-Bowls',
        description: 'Rice vermicelli noodles, fresh bean sprouts, cucumber, lettuce, carrots, crushed peanuts, green onions, and topped with your choice of grilled protein',
        picture: PlaceholderImg,
      },
      {
        name: 'Choice of Meats (Up to 3)',
        description: 'Lemongrass Chicken, Marinated Pork, Lemongrass Beef, Honey-Glazed Shrimp, Seven Spices Tofu',
        picture: PlaceholderImg,
      },
    ],
  },
  {
    link: '/other',
    name: 'Other Dishes',
    items: [
      {
        name: 'Side Viet-Ton Soup',
        description: 'Shrimp & pork filled wontons, ground pork, BBQ pork, and mixed greens in a savory chicken broth',
        picture: PlaceholderImg,
      },
      {
        name: 'Grilled Lemongrass Chicken Salad',
        description: 'Lemongrass chicken, chopped romaine, spring mix, cucumbers, cherry tomatoes, and wonton chips. Served with miso ginger dressing. *Substitute beef for or Pan-seared Whitefish for $1',
        picture: PlaceholderImg,
      },
      {
        name: 'Banh Mi',
        description: 'Crispy French baguette with a light pate and mayo spread. Dressed with pickled carrots, cucumber, jalapenos, cilantro, and choice of protein',
        picture: PlaceholderImg,
      },
    ],
  },
  {
    link: '/drinks',
    name: 'Drinks',
    items: [
      {
        name: 'Bottled Drinks',
        description: '',
        picture: PlaceholderImg,
      },
      {
        name: 'Iced Tea',
        description: '',
        picture: PlaceholderImg,
      },
      {
        name: 'Vietnamese Iced Coffee',
        description: '',
        picture: PlaceholderImg,
      },
      {
        name: 'Thai Tea',
        description: '',
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
                      <Card key={i.name}className={'menuItemCard col-md-4'}>
                        <Row className={'menuItemCardContent'}>
                          <Card.Img src={i.picture} className={'menuItemImg col-md-4'}/>
                          <Card.Body className={'menuItemText col-md-8'}>
                            <Row className={'menuItemTextRow'}>
                              <h1>{i.name}</h1>
                              <div className={'menuItemInfo'}>
                                <p>
                                  {i.description}
                                </p>
                              </div>
                            </Row>
                          </Card.Body>
                        </Row>
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
