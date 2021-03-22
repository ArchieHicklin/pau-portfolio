import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Seventeen from '../Components/HomeGrid/paintings/17.jpg';

function HumanSeventeen(props) {
  return ( <
    PaintingPage title = 'Human 17'
    size = '50x71'
    medium = 'Charcoal, white chalk'
    price = '1.774,00 €'
    painting = {
      Seventeen
    }
    />
  );
}

export default HumanSeventeen;