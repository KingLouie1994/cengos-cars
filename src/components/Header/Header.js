import React from "react";
import styles from "./Header.module.css";
import Flag from "react-country-flags";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>I'll be a Logo!</h1>
      <span className={styles.flags}>
        <Flag className={styles.languageFlag} country="de"/>
        <Flag className={styles.languageFlag} country="gb"/>
      </span>
    </div>
  );
};

export default Header;
