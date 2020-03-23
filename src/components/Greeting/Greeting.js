import React from "react";
import styles from "./Greeting.module.css";

const ContentHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introduction}>
        <h1>
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old."
        </h1>
      </div>
    </div>
  );
};

export default ContentHome;
