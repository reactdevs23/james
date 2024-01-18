import React from "react";
import styles from "./HeroSection/HeroSection.module.css";

const templat = () => {
  return (
    <div className={styles.wrapper}>
      <div className={["container", styles.container].join(" ")}></div>
    </div>
  );
};

export default templat;
