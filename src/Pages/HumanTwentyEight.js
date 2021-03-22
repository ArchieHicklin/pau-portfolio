import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import TwentyEight from '../Components/HomeGrid/paintings/28.jpg';

function HumanTwentyEight(props) {
  return ( <
    PaintingPage title = 'Human 28'
    size = '179x250'
    medium = 'Acrylic on linen'
    price = '12.800,00 €'
    painting = {
      TwentyEight
    }
    />
  );
}

export default HumanTwentyEight;