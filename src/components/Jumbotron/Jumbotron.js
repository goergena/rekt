import React from 'react';
import './Jumbotron.css';
import Bowling from '../../../public/images/Bowling.jpg'

const items = [
  {
    src: Bowling,
    altText: '',
    caption: ''
  },
 
];

const Jumbotron = () => <jumbotron items={items} />;

export default Jumbotron;
