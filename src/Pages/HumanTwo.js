import React from "react";
import PaintingPage from "../Components/PaintingPage";
import Two from "../Components/HomeGrid/paintings/2.jpg";

function HumanTwo(props) {
    return ( <
        PaintingPage title = "Human 2"
        size = "113x160"
        medium = "Charcoal, white chalk"
        price = "7.780,00 €"
        painting = {
            Two
        }
        />
    );
}

export default HumanTwo;