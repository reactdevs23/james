import React from "react";
import styles from "./Loader.module.css"; // Import the corresponding CSS file
import { loader } from "../../images";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
