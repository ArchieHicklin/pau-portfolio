import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Five from '../Components/HomeGrid/paintings/5.jpg';

function HumanFive(props) {
  return ( <
    PaintingPage title = 'Human 5'
    size = '56x76'
    medium = 'Charcoal, white chalk'
    price = '1.990,00 €'
    painting = {
      Five
    }
    />
  );
}

export default HumanFive;