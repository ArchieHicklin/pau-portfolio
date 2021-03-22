import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import ThirtyTwo from '../Components/HomeGrid/paintings/32.jpg';

function HumanThirtyTwo(props) {
  return ( <
    PaintingPage title = 'Human 32'
    size = '113x160'
    medium = 'Charcoal, white chalk'
    price = '7.780,00 €'
    painting = {
      ThirtyTwo
    }
    />
  );
}

export default HumanThirtyTwo;