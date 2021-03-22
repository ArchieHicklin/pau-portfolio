import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Six from '../Components/HomeGrid/paintings/6.jpg';

function HumanSix(props) {
  return ( <
    PaintingPage title = 'Human 6'
    size = '96x89'
    medium = 'Charcoal, white chalk'
    price = '3.500,00 €'
    painting = {
      Six
    }
    />
  );
}

export default HumanSix;