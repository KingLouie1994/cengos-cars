import React from "react";
import Slider from "infinite-react-carousel";
import styles from "./Carousel.module.css";
import mercedes from "../../images/Mercedes.png";
import ferrari from "../../images/Ferrari.png";
import lambo from "../../images/Lambo.jpeg";

const Carousel = () => (
  <div className={styles.container}>
    <Slider dots className={styles.carousel}>
      <div>
        <img src={mercedes} alt="mercedes" className={styles.image}/>
      </div>
      <div>
        <img src={ferrari} alt="mercedes" className={styles.image}/>
      </div>
      <div>
        <img src={lambo} alt="mercedes" className={styles.image}/>
      </div>
    </Slider>
  </div>
);

export default Carousel;
