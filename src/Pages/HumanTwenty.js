import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Twenty from '../Components/HomeGrid/paintings/20.jpg';

function HumanTwenty(props) {
  return ( <
    PaintingPage title = 'Human 20'
    size = '50x71'
    medium = 'Charcoal, white chalk'
    price = '1.774,00 €'
    painting = {
      Twenty
    }
    />
  );
}

export default HumanTwenty;