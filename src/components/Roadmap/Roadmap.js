import React from "react";
import styles from "./Roadmap.module.css";
import {
  bar,
  cashier,
  dreaming,
  flower,
  forgive,
  forgiveWith,
  lazy,
  pistol,
  reverse,
  roadmap,
  rocket,
} from "../../images";

const Roadmap = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={["container"].join(" ")}>
        <img src={roadmap} alt="#" className={styles.title} />
        <p className={styles.info}>Let’s just pomp that shit.</p>

        <div className={styles.imageContainer}>
          {" "}
          <img src={rocket} alt="#" className={styles.rocket} />
          <img src={flower} alt="#" className={styles.flower} />
        </div>
        <img src={dreaming} alt="#" className={styles.title} />
      </div> */}
      {/* <div className={styles.imageContainer2}>
        {" "}
        <img src={cashier} alt="#" className={styles.cashier} />
        <img src={reverse} alt="#" className={styles.reverse} />
      </div>{" "} */}
      <div className={[styles.imageContainer3, "container"].join(" ")}>
        <img src={forgive} alt="#" className={styles.forgive} />
        <img src={forgiveWith} alt="#" className={styles.forgiveWith} />
      </div>
      <div className="container">
        <img src={lazy} alt="#" />

        <div className={styles.container}>
          <div className={styles.pistolContainer}>
            <img src={pistol} alt="#" className={styles.pistol} />
            <p className={[styles.text, styles.mobileText].join(" ")}>
              Remember the paperhanded bitch?{" "}
            </p>
          </div>
          <div>
            <p className={[styles.text, styles.dekstopText].join(" ")}>
              Remember the paperhanded bitch?{" "}
            </p>
            <p className={styles.text}>
              Right, do not be that guy.. Just don’t. We got one rule. We even
              to lazy to dump our bags. Means we hit just once the button and
              that’s when we hit 1B in super juicy Kiwis. So just relax, fucking
              relax and be no freaking Jeet.{" "}
            </p>
          </div>
        </div>
      </div>
      <img src={bar} alt="#" className={styles.line} />
    </div>
  );
};

export default Roadmap;
