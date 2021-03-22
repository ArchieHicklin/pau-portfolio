import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import ThirtyThree from '../Components/HomeGrid/paintings/33.jpg';

function HumanThirtyThree(props) {
  return ( <
    PaintingPage title = 'Human 33'
    size = '113x160'
    medium = 'Charcoal, white chalk'
    price = '7.780,00 €'
    painting = {
      ThirtyThree
    }
    />
  );
}

export default HumanThirtyThree;