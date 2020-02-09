import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import {PropTypes} from 'prop-types';

const propTypes = {
  sectionName: PropTypes.string,
  isActive: PropTypes.bool,
};

/**
 * @return {*} MenuSelection Item
 */
class MenuSelection extends Component {
  /**
   * Constructor function for setting state
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      sectionName: props.sectionName,
      isActive: props.isActive,
    };
  }
}