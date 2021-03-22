import React from "react";
import PaintingPage from "../Components/PaintingPage";
import Three from "../Components/HomeGrid/paintings/3.jpg";

function HumanThree(props) {
  return ( <
    PaintingPage title = "Human 3"
    size = "113x160"
    medium = "Charcoal, white chalk"
    price = "7.780,00 €"
    painting = {
      Three
    }
    />
  );
}

export default HumanThree;