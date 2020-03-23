import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Products.module.css";
import Filter from "../Filter/Filter";

const Products = () => {
  const [cars, setCars] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then(res => res.json())
      .catch(err =>
        fetch("db.json")
          .then(res => res.json())
          .then(data => data.products)
      )
      .then(data => {
        setCars(data);
      });
  }, []);

  const lowest = (a, b) => {
    if (a.Price < b.Price) {
      return -1;
    }
    if (a.Price > b.Price) {
      return 1;
    }
    return 0;
  };

  const highest = (a, b) => {
    if (a.Price > b.Price) {
      return -1;
    }
    if (a.Price < b.Price) {
      return 1;
    }
    return 0;
  };

  const sortId = (a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  };

  const handleSortChange = e => {
    setSort(e.target.value);
    if (e.target.value === "lowestprice") {
      cars.sort(lowest);
    } else if (e.target.value === "highestprice") {
      cars.sort(highest);
    } else {
      cars.sort(sortId);
    }
  };

  return (
    <>
      <div className={styles.page}>
        <h1>Unser regelmäßig wechselndes Fahrzeugangebot</h1>
        <Filter handleSortChange={handleSortChange} />
        <div className={styles.container}>
          {cars.map(car => {
            return (
              <div className={styles.cardContainer} key={car.id}>
                <div className={styles.card}>
                  <h3>Hersteller: {car.Hersteller}</h3>
                  <p>Modell: {car.Modell}</p>
                  <p>Kilometerstand: {car.KM}km</p>
                  <p>Farbe: {car.Farbe}</p>
                  <img
                    src={`cars/${car.id}_1.jpeg`}
                    alt={car.Modell}
                    className={styles.imageOne}
                  />
                  <h4>Preis: {car.Price} Euro</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;