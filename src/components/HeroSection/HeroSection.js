import React from "react";
import styles from "./HeroSection.module.css";
import { heroJames, meetJames } from "../../images";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={["container", styles.container].join(" ")}>
        <div className={styles.textContainer}>
          <img src={meetJames} alt="Meet James" className={styles.meetJames} />
          <p className={styles.info}>
            James is a lazy MFR. All he wants is pump’n’chill.{" "}
          </p>
        </div>

        <img src={heroJames} alt="#" className={styles.jamesImage} />
      </div>
    </div>
  );
};

export default HeroSection;
