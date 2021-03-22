import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import TwentyFour from '../Components/HomeGrid/paintings/24.jpg';

function HumanTwentyFour(props) {
  return ( <
    PaintingPage title = 'Human 24'
    size = '33x43'
    medium = 'Charcoal, white chalk'
    price = '790,00 €'
    painting = {
      TwentyFour
    }
    />
  );
}

export default HumanTwentyFour;