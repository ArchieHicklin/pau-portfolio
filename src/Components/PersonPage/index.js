import React from "react";
import Nav from "../Nav";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import shippingIcon from "./shippingIcon.svg";

function PersonPage(props) {
  return (
    <>
      <Nav />
      <div class="columnsContainer">
        <div class="rightColumn">
          <InnerImageZoom
            src={props.painting}
            zoomSrc={props.painting}
            zoomScale="2"
          />
        </div>
        <div class="leftColumn">
          <h2>{props.title}</h2>
          <p>{props.size}</p>
          <p>{props.medium}</p>
          <hr></hr>
          <p className="shippingText">
            <img className="shippingIcon" src={shippingIcon} />
            Ships wordwide from Barcelona, Spain
          </p>
          <p className="price">{props.price}</p>
          <a
            className="peepeeButton"
            href={"mailto:afphicklin@gmail.com?subject=" + props.title}
          >
            Make an enquiry
          </a>
        </div>
      </div>
    </>
  );
}

export default PersonPage;
