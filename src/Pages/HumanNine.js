import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Nine from '../Components/HomeGrid/paintings/9.jpg';

function HumanNine(props) {
  return ( <
    PaintingPage title = 'Human 9'
    size = '35x45'
    medium = 'Charcoal, white chalk'
    price = '824,00 €'
    painting = {
      Nine
    }
    />
  );
}

export default HumanNine;