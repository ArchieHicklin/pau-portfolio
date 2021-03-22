import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import TwentySix from '../Components/HomeGrid/paintings/26.jpg';

function HumanTwentySix(props) {
  return ( <
    PaintingPage title = 'Human 26'
    size = '56x76'
    medium = 'Charcoal, white chalk'
    price = '1.990,00 €'
    painting = {
      TwentySix
    }
    />
  );
}

export default HumanTwentySix;