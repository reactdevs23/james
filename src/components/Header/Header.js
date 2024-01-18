import React from "react";
import styles from "./Header.module.css";
import { ape, bar, logo, tg } from "../../images";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <header className={["container", styles.header].join(" ")}>
        <img src={logo} alt="#" className={styles.logo} />

        <div className={styles.buttonContainer}>
          <a href="#/">
            <img src={ape} alt="#" className={styles.ape} />
          </a>
          <a href="#/">
            <img src={tg} alt="#" className={styles.tg} />
          </a>
        </div>
      </header>
      <div className={styles.barContainer}>
        <img src={bar} alt="#" className={styles.bar} />
      </div>
    </div>
  );
};

export default Header;
