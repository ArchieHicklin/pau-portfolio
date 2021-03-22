import React from 'react';
import PaintingPage from '../Components/PaintingPage';
import Seven from '../Components/HomeGrid/paintings/7.jpg';

function HumanSeven(props) {
  return ( <
    PaintingPage title = 'Human 7'
    size = '90x130'
    medium = 'Charcoal, white chalk'
    price = '5.470,00 €'
    painting = {
      Seven
    }
    />
  );
}

export default HumanSeven;