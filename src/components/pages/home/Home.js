import React from "react";
import NavBar from "../../header-footer/NavBar";
import Banner from "./Banner";
import Services from "../home/service-section/Services";
import HowWorks from "./HowWorks";
import Footer from "../../header-footer/Footer";

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
