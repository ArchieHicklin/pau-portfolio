import React from "react";
import Logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function index() {
  return (
    <div>
      <nav className="db dt-l w-100 border-box pa3 ph5-l">
        <Link
          className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"
          to="/"
          title="Home"
        >
          <img src={Logo} alt="Site Name" />
        </Link>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <Link
            className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
            to="/biography"
            title="Home"
          >
            Biography
          </Link>
          <a
            className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
            href="#"
            title="How it Works"
          >
            Paintings
          </a>
          <a
            className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
            href="#"
            title="Blog"
          >
            Drawings
          </a>
          <a
            className="link dim dark-gray f6 f5-l dib mr3 mr4-l"
            href="#"
            title="Press"
          >
            Prints
          </a>
          <a
            className="link dim dark-gray f6 f5-l dib"
            href="#"
            title="Contact"
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default index;
