import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const CarProvider = props => {
  const [cars, setCars] = useState([]);

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

  return (
    <ProductsContext.Provider value={[cars, setCars]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
