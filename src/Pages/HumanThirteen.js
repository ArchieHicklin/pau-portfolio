import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Thirteen from '../Components/HomeGrid/paintings/13.jpg';

function HumanThirteen(props) {
  return ( <
    PaintingPage title = 'Human 13'
    size = '33x42'
    medium = 'Charcoal, white chalk'
    price = '780,00 €'
    painting = {
      Thirteen
    }
    />
  );
}

export default HumanThirteen;