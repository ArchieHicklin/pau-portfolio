import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import ThirtyOne from '../Components/HomeGrid/paintings/31.jpg';

function HumanThirtyOne(props) {
  return ( <
    PaintingPage title = 'Human 31'
    size = '113x160'
    medium = 'Charcoal, white chalk'
    price = '7.780,00 €'
    painting = {
      ThirtyOne
    }
    />
  );
}

export default HumanThirtyOne;