import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Twelve from '../Components/HomeGrid/paintings/12.jpg';

function HumanTwelve(props) {
  return ( <
    PaintingPage title = 'Human 12'
    size = '38x56'
    medium = 'Charcoal, white chalk'
    price = '1.064,00 €'
    painting = {
      Twelve
    }
    />
  );
}

export default HumanTwelve;