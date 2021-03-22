import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import TwentyFive from '../Components/HomeGrid/paintings/25.jpg';

function HumanTwentyFive(props) {
  return ( <
    PaintingPage title = 'Human 25'
    size = '50x71'
    medium = 'Charcoal, white chalk'
    price = '1.774,00 €'
    painting = {
      TwentyFive
    }
    />
  );
}

export default HumanTwentyFive;