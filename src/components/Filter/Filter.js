import React from "react";
import styles from "./Filter.module.css";

const Filter = props => {
  return (
    <div className={styles.container}>
      <div>
        <label>
          Sortieren nach:
          <select
            value={props.sort}
            onChange={props.handleSortChange}
            className={styles.select}
          >
            <option value="">...</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Hersteller:
          <select
            className={styles.select}
            value={props.size}
            onChange={props.handleManufacturerChange}
          >
            <option value="">ALL</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Lamborghini">Lamborghini</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filter;
