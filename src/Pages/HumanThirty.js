import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Thirty from '../Components/HomeGrid/paintings/30.jpg';

function HumanThirty(props) {
  return ( <
    PaintingPage title = 'Human 30'
    size = '113x160'
    medium = 'Charcoal, white chalk'
    price = '7.780,00 €'
    painting = {
      Thirty
    }
    />
  );
}

export default HumanThirty;