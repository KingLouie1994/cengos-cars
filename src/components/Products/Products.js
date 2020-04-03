import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ProductsContext } from "./ProductsContext";
import styles from "./Products.module.css";
import Filter from "../Filter/Filter";

const Products = () => {
  const [sort, setSort] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const [cars, setCars] = useContext(ProductsContext);

  useEffect(() => {
    axios
      .get("https://cengo-cars.herokuapp.com/api/cars")
      .then(res => {
        setFilteredCars(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const lowest = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  };

  const highest = (a, b) => {
    if (a.price > b.price) {
      return -1;
    }
    if (a.price < b.price) {
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
      filteredCars.sort(lowest);
    } else if (e.target.value === "highestprice") {
      cars.sort(highest);
      filteredCars.sort(highest);
    } else {
      cars.sort(sortId);
      filteredCars.sort(sortId);
    }
  };

  const handleManufacturerChange = e => {
    setManufacturer(e.target.value);
    if (e.target.value !== "") {
      setFilteredCars(
        cars.filter(a => a.manufacturer.indexOf(e.target.value) >= 0)
      );
    } else {
      setFilteredCars(cars);
    }
  };

  return (
    <>
      <div className={styles.page}>
        <h1>Unser regelmäßig wechselndes Fahrzeugangebot</h1>
        <Filter
          handleSortChange={handleSortChange}
          handleManufacturerChange={handleManufacturerChange}
        />
        <div className={styles.container}>
          {filteredCars.map(car => {
            return (
              <div className={styles.cardContainer} key={car.id}>
                <Link to={`/car/${car.id}`} className={styles.link}>
                  <div className={styles.card}>
                    <h3>Hersteller: {car.manufacturer}</h3>
                    <p>Modell: {car.model}</p>
                    <p>Kilometerstand: {car.km}km</p>
                    <p>Farbe: {car.color}</p>
                    <img
                      src={`cars/${car.id}_1.jpeg`}
                      alt={car.Modell}
                      className={styles.imageOne}
                    />
                    <h4>Preis: {car.price} Euro</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
