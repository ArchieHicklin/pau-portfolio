import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import TwentySeven from '../Components/HomeGrid/paintings/27.jpg';

function HumanTwentySeven(props) {
  return ( <
    PaintingPage title = 'Human 27'
    size = '76x56'
    medium = 'Charcoal, white chalk'
    price = '1.990,00 €'
    painting = {
      TwentySeven
    }
    />
  );
}

export default HumanTwentySeven;