import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://pure-brushlands-85913.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  console.log(service);
  return (
    <div className="py-20 bg-gray-100">
      <div class="carousel w-full h-[400px]">
        <div class="carousel-item">
          <img className="object-cover" src={service.picture} alt="Burger" />
        </div>
        <div class="carousel-item">
          <img className="object-cover" src={service.pic1} alt="Burger" />
        </div>
        <div class="carousel-item">
          <img className="object-cover" src={service.pic2} alt="Burger" />
        </div>
        <div class="carousel-item">
          <img className="object-cover" src={service.pic3} alt="Burger" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl text-primary pt-8">{service.name}</h1>
        <p className="text-lg font-sans mt-4 mb-8 font-light">
          From farm to the plate
        </p>
      </div>
      <div className="mx-8">
        <div className="bg-base-100 p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-primary p-2">
            <h3 className="text-xl font-bold">About Restaurant</h3>
            <p className="font-sans mt-2">{service.aboutDom}</p>
          </div>
          <div className="border border-primary p-2">
            <h3 className="text-xl font-bold">Dine at Dome Experience</h3>
            <p className="font-sans mt-2">{service.DaDExperience}</p>
          </div>
          <div className="border border-primary p-2">
            <h3 className="text-xl font-bold">About the Area</h3>
            <p className="font-sans mt-2">{service.aboutArea}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
