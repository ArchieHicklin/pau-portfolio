import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Fifteen from '../Components/HomeGrid/paintings/15.jpg';

function HumanFifteen(props) {
  return ( <
    PaintingPage title = 'Human 15'
    size = '78x83'
    medium = 'Charcoal, white chalk'
    price = '3.180,00 €'
    painting = {
      Fifteen
    }
    />
  );
}

export default HumanFifteen;