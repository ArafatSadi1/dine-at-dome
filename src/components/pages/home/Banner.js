import React from "react";
import { Link } from "react-router-dom";
import cat_1 from "../../../images/icons/chef.png";
import cat_2 from "../../../images/icons/cocktail.png";
import cat_3 from "../../../images/icons/beer.png";
import cat_4 from "../../../images/icons/hotel-sign.png";
import cat_5 from "../../../images/icons/green-house.png";
import cat_6 from "../../../images/icons/golfing.png";
import cat_7 from "../../../images/icons/distillation.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] text-white" style={{  
      backgroundImage: "url(https://dineatdome.com/wp-content/uploads/2021/11/021_reverie_dine_at_dome-14.jpg)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="bg-black/60 top-0 left-0 w-full h-[600px]">
        <div className="absolute w-full h-screen">
          <div className="h-full flex justify-center items-center">
            <div>
              <h1 className="text-5xl text-center">Dine at Dome</h1>
              <p className="text-xl mt-2 text-center font-sans font-thin">
                Unique and memorable dining experiences, near you.
              </p>
              <div className="my-2 text-center">
                <select class="select w-full max-w-xs text-black text-lg font-sans font-light">
                  <option disabled selected>
                    All Region
                  </option>
                  <option className="font-light">Asia</option>
                  <option className="font-light">India</option>
                  <option className="font-light">Canada</option>
                  <option className="font-light">Quebec</option>
                  <option className="font-light">Ireland</option>
                  <option className="font-light">Oceania</option>
                  <option className="font-light">New Zealand</option>
                  <option className="font-light">United Kingdom</option>
                  <option className="font-light">England</option>
                </select>
                <button className="btn btn-primary ml-2 text-lg text-white font-sans font-light">
                  Search
                </button>
              </div>
              {/* home banner catalog */}
              <div className="w-full h-full mt-36 mb-[-130px]">
                <div class="flex">
                  <Link
                    className="bg-white/10 p-2 flex flex-col justify-center items-center mr-1"
                    to="/about"
                  >
                    <img className="w-8 z-10" src={cat_1} alt="" />
                    <p className="font-sans font-light">Restaurants</p>
                  </Link>
                  <Link
                    className="bg-white/10 p-2 flex flex-col justify-center items-center mr-1"
                    to="/about"
                  >
                    <img src={cat_2} alt="" />
                    <p className="font-sans font-light">Drinks Bars</p>
                  </Link>
                  <Link class="bg-white/10 p-2 flex flex-col justify-center items-center mr-1" to="/contact">
                    <img src={cat_3} alt="" />
                    <p className="font-sans font-light">Pubs & Inns</p>
                  </Link>

                  <Link class="bg-white/10 p-2 flex flex-col justify-center items-center mr-1" to="/contact">
                    <img src={cat_4} alt="" />
                    <p className="font-sans font-light">Hotels</p>
                  </Link>

                  <Link class="bg-white/10 p-2 flex flex-col justify-center items-center mr-1" to="/contact">
                    <img src={cat_5} alt="" />
                    <p className="font-sans font-light">Country Home</p>
                  </Link>

                  <Link class="bg-white/10 p-2 hidden lg:flex flex-col justify-center items-center mr-1" to="/contact">
                    <img src={cat_6} alt="" />
                    <p className="font-sans font-light">Golf Courses</p>
                  </Link>

                  <Link class="bg-white/10 p-2 hidden lg:flex flex-col justify-center items-center" to="/contact">
                    <img src={cat_7} alt="" />
                    <p className="font-sans font-light">Distilleries</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
