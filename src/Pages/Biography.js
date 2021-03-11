import React from "react";
import Nav from "../Components/Nav";
import styles from "./Biography.module.css";
import Bio from "./bio.png";

function Biography() {
  return (
    <div>
      <Nav />
      <article className={styles.bioArticle}>
        <h1 className={styles.bioHeadline}>Biography</h1>
        <img src={Bio} className={styles.bioImage} alt="Photo of outer space" />
        <p className={styles.bioText}>
          Pau Marinello is originally from Barcelona (born September 1990) and
          an awarded painter who has studied realism in Florence. He has
          previously worked as a teacher, instructor and director of the drawing
          program at the Barcelona Academy of Art.
        </p>
        <p className={styles.bioText}>
          After a few years he decided to pursue his dream and started a new
          project as an independent artist creating “Geode Art Space“ next to
          the sculptor Eudald de Juana in a renewed farm on a 240.000 square
          feet (22000 m²) land in l’Empordà, next to the Dalí Museum. In this
          setting, he found the perfect environment to create the "human"
          series. This represents the expressivity of the human body using a mix
          of contemporary sensibilities with a strong base on technique, he
          acquired from studying classical painters deeply. Charcoal and Oil
          painting are his favourite materials. Pau’s art has been shown in
          different countries throughout Europe and can be found in different
          collections around the whole world.
        </p>
      </article>
    </div>
  );
}

export default Biography;
