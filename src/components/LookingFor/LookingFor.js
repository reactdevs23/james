import React from "react";
import styles from "./LookingFor.module.css";
import { kiwi } from "../../images";

const LookingFor = () => {
  return (
    <div className={styles.wrapper}>
      <div className={["container", styles.container].join(" ")}>
        <img
          src={kiwi}
          alt="#"
          className={[styles.image, styles.dekstopImage].join(" ")}
        />
        <div className={styles.textContainer}>
          <p className={styles.info}>
            Just like you, he’s looking for the big X’s but he’s not ready to{" "}
            put in any kind of work.{" "}
            <img
              src={kiwi}
              alt="#"
              className={[styles.image, styles.mobileImage].join(" ")}
            />
          </p>
          <p className={styles.info}>I mean WTF he’s a SLOTH.</p>
          <p className={[styles.info, styles.info3].join(" ")}>
            PS: James likes those juicy Kiwis
          </p>
        </div>
      </div>
    </div>
  );
};

export default LookingFor;
