import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import One from '../Components/HomeGrid/paintings/1.jpg';

function HumanOne(props) {
  return ( <
    PaintingPage title = 'Human 1'
    size = '113x160'
    medium = 'Charcoal, white chalk'
    price = '7.780,00 €'
    painting = {
      One
    }
    />
  );
}

export default HumanOne;