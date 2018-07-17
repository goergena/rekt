import React from 'react';
import './Jumbotron.css';
import Bowling from './Bowling.jpg'
import Wood from './Wood.jpg'

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
