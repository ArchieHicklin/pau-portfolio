import React from "react";

function card(props) {
  return (
    <div class="masonry-content">
      <img src={props.painting} alt="Dummy Image" />
      <h3 class="masonry-title">{props.title}</h3>
      <p class="masonry-description">{props.medium}</p>
      <p class="masonry-description">{props.size}</p>
      <p class="masonry-description">{props.price}</p>
    </div>
  );
}

export default card;
