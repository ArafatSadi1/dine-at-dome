import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import wind from "../../../../images/icons/wind.png";
import heat from "../../../../images/icons/heat.png";
import light from "../../../../images/icons/light-bulb.png";
import chair from "../../../../images/icons/bar-stool.png";
import leaf from "../../../../images/icons/leaf.png";
import mountain from "../../../../images/icons/mountain.png";
import music from "../../../../images/icons/sound.png";
import menu from "../../../../images/icons/menu.png";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://pure-brushlands-85913.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
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
      <div className="px-20 py-6 bg-base-100">
        <div class="text-sm breadcrumbs font-sans">
          <ul>
            <li>
              <Link className="hover:text-primary duration-300" to="/">
                Listing
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300" to="/catalog">
                Restaurant
              </Link>
            </li>
            <li>
              <Link className="hover:text-primary duration-300" to="/catalog">
                Drink Bars
              </Link>
            </li>
          </ul>
        </div>
        <h1 className="text-5xl text-primary pt-3">{service.name}</h1>
        <p className="text-lg font-sans mt-4 mb-8 font-light">
          {service.cardText}
        </p>
      </div>
      <div className="grid grid-cols-3 px-20 mt-8">
        <div className="col-span-2">
          <div className="mx-8">
            <div className="bg-base-100 p-4">
              <div className="p-2">
                <h3 className="text-xl font-sans font-bold">About Restaurant</h3>
                <p className="font-sans mt-2">{service.aboutDom}</p>
              </div>
              <div className="p-2 py-6">
                <h3 className="text-xl font-sans font-bold">Dine at Dome Experience</h3>
                <p className="font-sans mt-2">{service.DaDExperience}</p>
              </div>
              <div className="p-2">
                <h3 className="text-xl font-sans font-bold">About the Area</h3>
                <p className="font-sans mt-2">{service.aboutArea}</p>
                <div className="text-center font-sans grid grid-cols-4 py-4">
                  <div className="m-2">
                    <div className="w-10 h-10 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="p-1" src={wind} alt="" />
                    </div>
                    <p className="font-semibold text-gray-500 mt-2">
                      Air Purification
                    </p>
                  </div>
                  <div className="m-2">
                    <div className="w-10 h-10 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="p-1" src={heat} alt="" />
                    </div>
                    <p className="font-semibold text-gray-500 mt-2">Heating</p>
                  </div>
                  <div className="m-2">
                    <div className="w-10 h-10 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="p-1" src={light} alt="" />
                    </div>
                    <p className="font-semibold text-gray-500 mt-2">
                      Ambient / Fairy Lights
                    </p>
                  </div>
                  <div className="m-2">
                    <div className="w-10 h-10 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="p-1" src={chair} alt="" />
                    </div>
                    <p className="font-semibold text-gray-500 mt-2">
                      High Chair
                    </p>
                  </div>
                  <div className="m-2">
                    <div className="w-10 h-10 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="p-1" src={leaf} alt="" />
                    </div>
                    <p className="font-semibold text-gray-500 mt-2">
                      Vegan/Vegetarian Friendly
                    </p>
                  </div>
                  <div className="m-2">
                    <div className="w-10 h-10 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="p-1" src={mountain} alt="" />
                    </div>
                    <p className="font-semibold text-gray-500 mt-2">
                      Scenic Views
                    </p>
                  </div>
                  <div className="m-2">
                    <div className="w-10 h-10 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="p-1" src={music} alt="" />
                    </div>
                    <p className="font-semibold text-gray-500 mt-2">
                      Play Your Own Music
                    </p>
                  </div>
                  <div className="m-2">
                    <div className="w-10 h-10 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img className="p-1" src={menu} alt="" />
                    </div>
                    <p className="font-semibold text-gray-500 mt-2">
                      Standard Menu Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ServiceDetails;
