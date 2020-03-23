import React from "react";
import Greeting from "./Greeting/Greeting";
import Carousel from "./Carousel/Carousel";
import HomeContent from "./HomeContent/HomeContent";

const Homepage = () => {
  return (
    <>
      <Greeting />
      <Carousel />
      <HomeContent />
    </>
  );
};

export default Homepage;
