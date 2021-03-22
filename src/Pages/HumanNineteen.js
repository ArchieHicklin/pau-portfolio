import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Nineteen from '../Components/HomeGrid/paintings/19.jpg';

function HumanNineteen(props) {
  return ( <
    PaintingPage title = 'Human 19'
    size = '71x50'
    medium = 'Charcoal, white chalk'
    price = '1.774,00 €'
    painting = {
      Nineteen
    }
    />
  );
}

export default HumanNineteen;