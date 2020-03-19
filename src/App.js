import React from "react";
import { Route } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage";
import Cars from "./components/Cars";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <Header />
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/caroffers" component={Cars} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={AboutUs} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
