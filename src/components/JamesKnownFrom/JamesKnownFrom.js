import React from "react";
import styles from "./JamesKnownFrom.module.css";
import {
  eight,
  eleven,
  five,
  four,
  jamesKnownFrom,
  nine,
  one,
  seven,
  six,
  ten,
  three,
  twelve,
  two,
} from "../../images";
import NoTax from "../NoTax/NoTax";

const JamesKnownFrom = () => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <img src={jamesKnownFrom} alt="#" className={styles.title} />
        <div className={["container", styles.container].join(" ")}>
          <div className={styles.left}>
            <img src={one} alt="#" className={styles.one} />
            <img src={three} alt="#" className={styles.three} />
            <img src={five} alt="#" className={styles.five} />
            <img src={seven} alt="#" className={styles.seven} />
            <img src={eleven} alt="#" className={styles.elevenMobile} />
          </div>
          <div className={styles.right}>
            <img src={two} alt="#" className={styles.two} />
            <img src={four} alt="#" className={styles.four} />
            <img src={six} alt="#" className={styles.six} />
            <img src={eight} alt="#" className={styles.seven} />
            <img src={nine} alt="#" className={styles.nine} />
          </div>
        </div>
        <div className="container">
          <img
            src={ten}
            alt="#"
            className={[styles.ten, styles.tenDekstop].join(" ")}
          />
        </div>
        <div className={[styles.imageContainer, "container"].join(" ")}>
          <img src={eleven} alt="#" className={styles.elevenDekstop} />
          <img src={twelve} alt="#" className={styles.tweleve} />
        </div>{" "}
        <div className="container">
          {" "}
          <img src={ten} alt="#" className={styles.tenMobile} />
        </div>
      </div>
      <NoTax />
    </section>
  );
};

export default JamesKnownFrom;
