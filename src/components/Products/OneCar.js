import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Products.module.css";

const OneCar = (props) => {
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`https://cengo-cars.herokuapp.com/api/cars/${props.carId}`)
      .then((res) => {
        setCar(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);

  return (
    <div>
      <div className={styles.carContainer}>
        <h1>
          {car.manufacturer} {car.model}
        </h1>
      </div>
    </div>
  );
};

export default OneCar;
