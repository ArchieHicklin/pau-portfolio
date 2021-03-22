import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Eight from '../Components/HomeGrid/paintings/8.jpg';

function HumanEight(props) {
  return ( <
    PaintingPage title = 'Human 8'
    size = '60x95'
    medium = 'Charcoal, white chalk'
    price = '2.860,00 €'
    painting = {
      Eight
    }
    />
  );
}

export default HumanEight;