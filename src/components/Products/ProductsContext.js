import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const CarProvider = props => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("https://cengo-cars.herokuapp.com/api/cars")
      .then(res => {
        setCars(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ProductsContext.Provider value={[cars, setCars]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
