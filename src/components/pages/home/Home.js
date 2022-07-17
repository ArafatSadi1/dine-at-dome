import React from "react";
import Banner from "./Banner";
import Services from "../home/service-section/Services";
import HowWorks from "./HowWorks";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services/>
      <HowWorks/>
    </div>
  );
};

export default Home;
