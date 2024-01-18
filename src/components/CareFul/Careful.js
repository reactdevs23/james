import React from "react";
import styles from "./Careful.module.css";
import { bar, hanging, hangingAndSanke, snake } from "../../images";

const CareFul = () => {
  return (
    <div className={styles.wrapper}>
      <img src={hangingAndSanke} alt="#" className={styles.hangingAndSnake} />
      <div className={styles.mobileContainer}>
        <img src={hanging} alt="#" className={styles.hanging} />
        <p className={styles.subInfo}>
          PS: James likes <br /> those juicy Kiwis
        </p>
        <img src={bar} alt="#" className={styles.bar} />
      </div>
      <div className={["containe", styles.container].join(" ")}>
        <div className={styles.infoContainer}>
          <p className={styles.info}>
            But hey, be careful of the evil Jeets. They are like snakes ready to
            inject that FUD into you. Like a poisonous, sneaky & deadly snake.
            Do not let them hypnotize you. REMEMBER the jungle is a dangerous
            place.
          </p>{" "}
          <img src={snake} alt="#" className={styles.snake} />
        </div>
      </div>
    </div>
  );
};

export default CareFul;
