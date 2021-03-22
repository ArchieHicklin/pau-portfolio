import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import TwentyNine from '../Components/HomeGrid/paintings/29.jpg';

function HumanTwentyNine(props) {
  return ( <
    PaintingPage title = 'Human 29'
    size = '113x160'
    medium = 'Charcoal, white chalk'
    price = '7.780,00 €'
    painting = {
      TwentyNine
    }
    />
  );
}

export default HumanTwentyNine;