import React from "react";
import styles from "./NoTax.module.css";
import {
  bar,
  ca,
  cigerate,
  footer,
  james,
  lpBurn,
  noTax,
  snake2,
} from "../../images";
import CopyToClipboard from "react-copy-to-clipboard";

const NoTax = () => {
  return (
    <div className={styles.wrapper}>
      {" "}
      <img src={snake2} alt="#" className={styles.image} />
      <div className="container">
        <div className={[styles.titleContainer].join(" ")}>
          <img src={noTax} alt="#" className={styles.noTax} />{" "}
          <img src={lpBurn} alt="#" className={styles.lpBurn} />
          <CopyToClipboard text="2s37iUf6g98as4o6283BJ1RUvLKr5ocHr5hpHXiYoHAk">
            <img src={ca} alt="#" className={styles.ca} />{" "}
          </CopyToClipboard>
          <img src={james} alt="#" className={styles.james} />
        </div>

        <img src={cigerate} alt="#" className={styles.cigerate} />
      </div>
      <div className={styles.footerContainer}>
        <img src={footer} alt="#" className={styles.footerImage} />
        <img src={bar} alt="#" className={styles.bar} />
      </div>
    </div>
  );
};

export default NoTax;
