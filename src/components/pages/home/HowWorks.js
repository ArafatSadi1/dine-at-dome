import React from "react";

const HowWorks = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mt-16">How it works?</h1>
      <p className="text-lg text-center font-sans mt-2">
        Book your private dining pod for magical evenings, relaxing lunches and
        all kinds of celebrations.
      </p>
      <div className="w-full lg:w-[1000px] mx-auto my-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div class="card card-compact rounded-1 w-80 bg-base-100 shadow-xl border-2 border-gray-300 py-8 px-4">
          <figure>
            <img
              className="w-full h-48 object-cover"
              loading="lazy"
              src={
                "https://dineatdome.com/wp-content/uploads/2020/06/Dine-at-dome_006-300x225.jpg"
              }
              alt="dom"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-center">Bring in your "social-bubble"</h2>
            <p className="font-sans font-light text-base text-center">
              Book your own, private dome for a memorable and safe dining
              experience
            </p>
          </div>
        </div>

        <div class="card card-compact rounded-1 w-80 bg-base-100 shadow-xl border-2 border-gray-300 py-8 px-4">
          <figure>
            <img
              className="w-full h-48 object-cover"
              loading="lazy"
              src={
                "https://dineatdome.com/wp-content/uploads/2020/06/Dine-at-dome_003-300x225.jpg"
              }
              alt="dom"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-center">Al-fresco dining in any weather</h2>
            <p className="font-sans font-light text-base text-center">
            Enjoy eating outside, yet stay sheltered from the elements
            </p>
          </div>
        </div>

        <div class="card card-compact rounded-1 w-80 bg-base-100 shadow-xl border-2 border-gray-300 py-8 px-4">
          <figure>
            <img
              className="w-full h-48 object-cover"
              loading="lazy"
              src={
                "https://dineatdome.com/wp-content/uploads/2020/06/Dine-at-dome_002-300x225.jpg"
              }
              alt="dom"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-center">Extraordinary way to dine out</h2>
            <p className="font-sans font-light text-base text-center">
            Admire 360° panoramic views from the comfort of your invisible pod
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
