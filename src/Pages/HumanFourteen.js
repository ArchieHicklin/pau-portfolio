import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Fourteen from '../Components/HomeGrid/paintings/14.jpg';

function HumanFourteen(props) {
  return ( <
    PaintingPage title = 'Human 14'
    size = '27x56'
    medium = 'Charcoal, white chalk'
    price = '756,00 €'
    painting = {
      Fourteen
    }
    />
  );
}

export default HumanFourteen;