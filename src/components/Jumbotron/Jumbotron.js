import React from 'react';
import './Jumbotron.css';
import Bowling from '../../images/Bowling.jpg'
import Wood from '../../images/Wood.jpg'

const items = [
  {
    src: Bowling,
    altText: '',
    caption: ''
  },
  {
    src: Wood,
    altText: '',
    caption: ''
  }
];

const Jumbotron = () => <jumbotron items={items} />;

export default Jumbotron;
