import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import TwentyOne from '../Components/HomeGrid/paintings/21.jpg';

function HumanTwentyOne(props) {
  return ( <
    PaintingPage title = 'Human 21'
    size = '56x76'
    medium = 'Charcoal, white chalk'
    price = '1.990,00 €'
    painting = {
      TwentyOne
    }
    />
  );
}

export default HumanTwentyOne;