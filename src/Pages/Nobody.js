import React from "react";
import PaintingPage from "../Components/PaintingPage";
import Nobody from "../Components/HomeGrid/paintings/nobody.jpg";

function HumanTwentyTwo(props) {
  return (
    <PaintingPage
      title="Nobody"
      medium="Charcoal, white chalk"
      price="6.237,00 €"
      painting={Nobody}
    />
  );
}

export default HumanTwentyTwo;
