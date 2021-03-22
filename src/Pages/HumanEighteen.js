import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Eighteen from '../Components/HomeGrid/paintings/18.jpg';

function HumanEighteen(props) {
  return ( <
    PaintingPage title = 'Human 18'
    size = '50x56'
    medium = 'Charcoal, white chalk'
    price = '1.400,00 €'
    painting = {
      Eighteen
    }
    />
  );
}

export default HumanEighteen;