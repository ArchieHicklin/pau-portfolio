import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import TwentyThree from '../Components/HomeGrid/paintings/23.jpg';

function HumanTwentyThree(props) {
  return ( <
    PaintingPage title = 'Human 23'
    size = '50x71'
    medium = 'Charcoal, white chalk'
    price = '1.774,00 €'
    painting = {
      TwentyThree
    }
    />
  );
}

export default HumanTwentyThree;