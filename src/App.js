import React, { useContext } from "react";
import { Route } from "react-router-dom";
import SpecialRoute from "./components/SpecialRoute";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage";
import { ProductsContext } from "./components/Products/ProductsContext";
import Cars from "./components/Cars";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import OneCar from "./components/Products/OneCar"

function App() {
  const [cars, setCars] = useContext(ProductsContext);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <Header />
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/caroffers" component={Cars} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={AboutUs} />
        {cars.map((car, index) => {
          return (
            <SpecialRoute
              key={index}
              carId={car.id}
              exact
              path={`/car/${car.id}`}
              component={OneCar}
            />
          );
        })}
        <Footer />
      </div>
    </div>
  );
};

export default App;
