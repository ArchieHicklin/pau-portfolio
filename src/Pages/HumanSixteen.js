import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Sixteen from '../Components/HomeGrid/paintings/16.jpg';

function HumanSixteen(props) {
  return ( <
    PaintingPage title = 'Human 16'
    size = '36x76'
    medium = 'Charcoal, white chalk'
    price = '1.275,00 €'
    painting = {
      Sixteen
    }
    />
  );
}

export default HumanSixteen;