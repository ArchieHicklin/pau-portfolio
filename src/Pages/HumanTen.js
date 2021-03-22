import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Ten from '../Components/HomeGrid/paintings/10.jpg';

function HumanTen(props) {
  return ( <
    PaintingPage title = 'Human 10'
    size = '41x50'
    medium = 'Charcoal, white chalk'
    price = '1.026,00 €'
    painting = {
      Ten
    }
    />
  );
}

export default HumanTen;