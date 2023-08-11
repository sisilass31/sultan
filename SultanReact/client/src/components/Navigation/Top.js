import React from "react";
import styles from "./Navigation.module.css";
import "../../App.js";

const Top = () => {
  return (
    <div className={styles.containerColumnCenter}>
      <h1 className="title">LE SULTAN</h1>
      <div className={styles.laCarte}>
        <div className={styles.redBox} />
        <h2>LA CARTE</h2>
        <div className={styles.redBox} />
      </div>
    </div>
  );
};

export default Top;
