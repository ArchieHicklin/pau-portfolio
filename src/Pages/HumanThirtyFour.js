import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import ThirtyFour from '../Components/HomeGrid/paintings/34.jpg';

function HumanThirtyFour(props) {
  return ( <
    PaintingPage title = 'Human 34'
    size = '113x160'
    medium = 'Charcoal, white chalk'
    price = '7.780,00 €'
    painting = {
      ThirtyFour
    }
    />
  );
}

export default HumanThirtyFour;