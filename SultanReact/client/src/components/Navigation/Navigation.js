import React from "react";
import styles from "./Navigation.module.css";
import Top from "./Top.js";

const Navigation = () => {
  return (
    <div className={styles.headeur}>
      <Top />
      <ul className={styles.barreNav}>
        <li>
          <a href="#">Sandwichs</a>
        </li>
        <li>
          <a href="#">Assiettes</a>
        </li>
        <li>
          <a href="#">Barquettes</a>
        </li>
        <li>
          <a href="#">Entrées</a>
        </li>
        <li>
          <a href="#">Burgers</a>
        </li>
        <li>
          <a href="#">Desserts</a>
        </li>
        <li>
          <a href="#">Boissons</a>
        </li>
        <li>
          <a href="#">Bières</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
