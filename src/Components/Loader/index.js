import React from "react";
import { motion } from "framer-motion";
import Pau from "./pau.svg";
import Marinello from "./marinello.svg";

window.onload = function() {
  var myobj = document.getElementById("loaderContainer");
  setTimeout(function() {
    myobj.remove();
  }, 2000);
};

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0,
      when: "beforeChildren",
      staggerChildren: 1
    }
  }
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 1,
    opacity: 1
  }
};

function Loader() {
  return (
    <motion.div
      id="loaderContainer"
      className="loaderContainer"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div variants={item} className="aspect-ratio aspect-ratio--1x1">
        <img className="loaderImage" src={Pau} />
      </motion.div>
      <motion.div variants={item} className="aspect-ratio aspect-ratio--1x1">
        <img className="loaderImage" src={Marinello} />
      </motion.div>
    </motion.div>
  );
}

export default Loader;
