import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-12">
      <h1 className="text-center text-4xl mt-16">Where to Dine at Dome?</h1>
      <p className="text-lg text-center font-sans mt-2">
        Find the Dine at Dome experience near you:
      </p>
      <div className="w-full lg:w-[1000px] mx-auto my-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
