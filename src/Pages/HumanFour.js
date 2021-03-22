import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Four from '../Components/HomeGrid/paintings/4.jpg';

function HumanFour(props) {
  return ( <
    PaintingPage title = 'Human 4'
    size = '56x76'
    medium = 'Charcoal, white chalk'
    price = '1.990,00 €'
    painting = {
      Four
    }
    />
  );
}

export default HumanFour;