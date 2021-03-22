import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Eleven from '../Components/HomeGrid/paintings/11.jpg';

function HumanEleven(props) {
  return ( <
    PaintingPage title = 'Human 11'
    size = '33x43'
    medium = 'Charcoal, white chalk'
    price = '790,00 €'
    painting = {
      Eleven
    }
    />
  );
}

export default HumanEleven;