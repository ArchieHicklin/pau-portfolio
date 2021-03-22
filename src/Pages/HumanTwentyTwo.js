import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import TwentyTwo from '../Components/HomeGrid/paintings/22.jpg';

function HumanTwentyTwo(props) {
  return ( <
    PaintingPage title = 'Human 22'
    size = '56x76'
    medium = 'Charcoal, white chalk'
    price = '1.990,00 €'
    painting = {
      TwentyTwo
    }
    />
  );
}

export default HumanTwentyTwo;