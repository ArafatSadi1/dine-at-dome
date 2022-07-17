import React from "react";
import NavBar from "../../header-footer/NavBar";
import Banner from "./Banner";
import Services from "../home/service-section/Services";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Services/>
    </div>
  );
};

export default Home;
