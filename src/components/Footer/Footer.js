import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topic}>
        <div className={styles.kontakt}>
          <h3 className={styles.footerHeading}>Kontakt</h3>
          <br />
          <br />
          <p>Cengo's Traumautos GmbH</p>
          <p>Milchstrasse 22</p>
          <p>220148 Hamburg</p>
          <br />
          <br />
          <p>Tel: +49 123 456 789 10</p>
          <p>cengo@traumautos.de</p>
        </div>
      </div>
      <div className={styles.topic}>
        <div className={styles.termin}>
          <h3 className={styles.footerHeading}>Termin</h3>
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
          <p>
            Bitte vereinbaren Sie mit uns einen <br /> <br />
            Besichtigungstermin, wir freuen uns auf Sie. <br /> <br /> <br />
            <br />
            Gerne erstellen wir Ihnen auch ein individuelles
            <br /> <br /> Finanzierungsangebot
          </p>
        </div>
      </div>
      <div className={styles.topic}>
        <div className={styles.rechtliches}>
          <h3 className={styles.footerHeading}>Rechtliches</h3>
          <br /> <br /> <br /> <br />
          <h4 className={styles.keypoints}>Impressum</h4>
          <br /> <br /> <br /> <br />
          <h4 className={styles.keypoints}>AGB Gebrauchtwagen</h4>
          <br /> <br /> <br /> <br />
          <h4 className={styles.keypoints}>AGB Neuwagen</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
