import React from "react";
import cat_1 from "../../../../images/icons/cocktail.png";
import cat_2 from "../../../../images/icons/beer.png";
import cat_3 from "../../../../images/icons/chef.png";

const Service = ({ service }) => {
  const { picture, name, about, ratings, location } = service;
  return (
    <div class="card card-compact w-80 bg-base-100 shadow-xl border-2 border-gray-300">
      <figure>
        <img
          className="w-full h-48 object-cover"
          loading="lazy"
          src={picture}
          alt="dom"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-primary">{name}</h2>
        <p className="font-sans font-light text-base">{about}</p>
        <div className="flex">
          <div class="w-6 h-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <p className="text-center text-primary font-sans">{ratings}</p>
          </div>
          <p className="font-sans font-light text-base ml-3">{location}</p>
        </div>
        <div class="card-actions justify-end">
          <div className="flex gap-4">
            <div class="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="p-1" src={cat_1} alt="" />
            </div>
            <div class="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="p-1" src={cat_2} alt="" />
            </div>
            <div class="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="p-1" src={cat_3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
