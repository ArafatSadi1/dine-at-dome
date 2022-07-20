import React from "react";

const About = () => {
  return (
    <div>
      <div
        className="w-full h-[900px] text-white"
        style={{
          backgroundImage:
            "url(https://app-60c33512c1ac185aa47dd053.closte.com/wp-content/uploads/2020/07/5ebac565bef6efe7754e143e_Dineatdome_Splash-p-1600.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-96 mx-auto pt-28">
          <img
            className="block mx-auto"
            src="https://dineatdome.com/wp-content/uploads/elementor/thumbs/5ebacac6489d4751be461924_Dine_at_dome_logo-p93iek36w7wo7o3f14we997n8uudyla223x38fay1c.png"
            alt=""
          />
          <h1 className="font-sans text-center text-4xl font-bold mt-4">
            Safe and unique dining experience for the new reality
          </h1>
        </div>
      </div>
      <div className="bg-neutral py-12 text-white font-sans">
        <div class="hero w-full h-[400px] mt-12">
          <div class="hero-content flex-col lg:flex-row-reverse gap-28">
            <img
              src="https://dineatdome.com/wp-content/uploads/2020/07/5ebae9e95e1e542b382c304d_Hypedome_GardenDome_009-p-800.jpg"
              class="w-[500px] h-[370px] rounded-lg shadow-2xl object-cover"
              alt=""
            />
            <div className="w-2/6">
              <p className="mb-4 font-light">
                POSSIBLY THE SAFEST WAY TO DINE OUT
              </p>
              <h1 class="text-4xl font-semibold">
                Enjoy dining out without compromises on safety and comfort
              </h1>
              <p class="py-6 text-base font-light">
                Our new reality doesn't mean you should be getting less from
                life by staying at home. Now you can dine out with your close
                ones in a clean and safe private space.
              </p>
            </div>
          </div>
        </div>

        <div class="hero w-full h-[400px] my-12">
          <div class="hero-content flex-col lg:flex-row gap-28">
            <img
              src="https://dineatdome.com/wp-content/uploads/2020/07/5ebb04bd61cddc0c656d552d_Dine-at-dome_001-p-800.jpg"
              class="w-[500px] h-[370px] rounded-lg shadow-2xl object-cover"
              alt=""
            />
            <div className="w-2/6">
              <p className="mb-4 font-light">
                UP TO 2.5 HOURS LONG DINING EXPERIENCE
              </p>
              <h1 class="text-4xl font-semibold">
                Book your own, private dome for a memorable and safe dining
                experience
              </h1>
            </div>
          </div>
        </div>

        <div class="hero w-full h-[400px] mb-12">
          <div class="hero-content flex-col lg:flex-row-reverse gap-28">
            <img
              src="https://dineatdome.com/wp-content/uploads/2020/07/5ebb04b9c48459dbbb5e8d7f_Dine-at-dome_003-p-1080.jpg"
              class="w-[500px] h-[370px] rounded-lg shadow-2xl object-cover"
              alt=""
            />
            <div className="w-2/6">
              <p className="mb-4 font-light">MAXIMUM OF 6 ADULTS + 2 KIDS</p>
              <h1 class="text-4xl font-semibold">
                Bring in your closest family or your “social-bubble”
              </h1>
            </div>
          </div>
        </div>

        <div class="hero w-full h-[400px] mb-12">
          <div class="hero-content flex-col lg:flex-row gap-28">
            <img
              src="https://dineatdome.com/wp-content/uploads/2020/07/5ebb04be016a4565122defa9_Dine-at-dome_008-p-500.jpg"
              class="w-[500px] h-[370px] rounded-lg shadow-2xl object-cover"
              alt=""
            />
            <div className="w-2/6">
              <p className="mb-4 font-light">
                AL-FRESCO DINING IN ANY WEATHER & ANY CLIMATE
              </p>
              <h1 class="text-4xl font-semibold">
                Enjoy eating outside, yet stay sheltered from the elements and
                other guests
              </h1>
            </div>
          </div>
        </div>

        <div class="hero w-full h-[400px] mb-12">
          <div class="hero-content flex-col lg:flex-row-reverse gap-28">
            <img
              src="https://dineatdome.com/wp-content/uploads/2020/07/5ebb04bd5d0c8842a37f8943_Dine-at-dome_002-p-500.jpg"
              class="w-[500px] h-[370px] rounded-lg shadow-2xl object-cover"
              alt=""
            />
            <div className="w-2/6">
              <p className="mb-4 font-light">EXTRAORDINARY WAY TO DINE OUT</p>
              <h1 class="text-4xl font-semibold">
                Admire 360° panoramic views from the comfort of your invisible
                pod
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        {/* Customers Safety Section */}
        <div>
          <h1 className="text-center font-bold text-4xl mt-4 mb-16">
            We care about your safety
          </h1>
          <div className="mx-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center gap-4 mt-12">
              <img
                className="w-10 mb-4"
                src="https://uploads-ssl.webflow.com/5ebaa5ffe047bc06c0c8af79/5ebbe76f1471a6cc290e25dd_005-distance.svg"
                alt=""
                srcset=""
              />
              <h3 className="text-2xl font-semibold">
                Social distancing from other groups
              </h3>
              <p className="text-gray-400 text-center">
                Dine in a dome experience strictly follows and complies with
                official regulations regarding social distancing at restaurants
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 mt-12">
              <img
                className="w-10 mb-4"
                src="https://uploads-ssl.webflow.com/5ebaa5ffe047bc06c0c8af79/5ebbe794e2d1d5a1cab3af74_003-hand-sanitizer.svg"
                alt=""
                srcset=""
              />
              <h3 className="text-2xl font-semibold">
                Sanitising after each and every guest
              </h3>
              <p className="text-gray-400 text-center">
                All domes are thoroughly cleaned, sanitised and ventilated for
                30 minutes after each group of guests. We take hygiene seriously
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 mt-12">
              <img
                className="w-10 mb-4"
                src="https://uploads-ssl.webflow.com/5ebaa5ffe047bc06c0c8af79/5ebbe82806d43f4f493cbeec_006-patient.svg"
                alt=""
                srcset=""
              />
              <h3 className="text-2xl font-semibold">
                Maintaining safe distance at all times
              </h3>
              <p className="text-gray-400 text-center">
                Your designated waiter will wear a mask and single-use
                hand-gloves. Complete no-contact dining is also possible.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 mt-12">
              <img
                className="w-10 mb-4"
                src="https://uploads-ssl.webflow.com/5ebaa5ffe047bc06c0c8af79/5ebbe86db46b181dc324f9bd_019-elbow.svg"
                alt=""
                srcset=""
              />
              <h3 className="text-2xl font-semibold">
                Further safety measures
              </h3>
              <p className="text-gray-400 text-center">
                Liquid disinfectants are provided in each dome, we accept only
                cashless payments and provide safe way to use on-site restrooms.
              </p>
            </div>
          </div>
        </div>
        {/* Customers Section end */}
      </div>
      {/* Owner/Manger Section */}
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://app-60c33512c1ac185aa47dd053.closte.com/wp-content/uploads/2020/07/5ebb04b9c48459dbbb5e8d7f_Dine-at-dome_003.jpg)",
        }}
      >
        <div class="hero-content text-center text-white font-sans">
          <div class="">
            <h1 class="mb-2 text-3xl font-bold">
              Are you a restaurant owner / manager?
            </h1>
            <h3 class="mb-2 text-2xl font-semibold">
              Introduce Dine at Dome to your restaurant
            </h3>
            <p class="mb-5">
              We are now on the lookout for new restaurants across Europe to
              join our programme. We will provide you with a turn-key solution
              to create a positive and exciting dining experience, in line with
              social distancing regulations and without any investments on your
              part.
            </p>
            <button class="btn btn-warning text-white font-bold">
              Learn more about Dine at Dome for Restaurateurs
            </button>
          </div>
        </div>
      </div>

      <div
        class="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://app-60c33512c1ac185aa47dd053.closte.com/wp-content/uploads/2020/08/PATIO_DOME_13_1920x1080-1.jpg)",
        }}
      >
        <div class="hero-content text-center text-white font-sans">
          <div class="">
            <h1 class="mb-2 text-3xl font-bold">
              Wish to build a dome in your own garden?
            </h1>
            <h3 class="mb-2 text-2xl font-semibold">
              Our domes are also available for purchase
            </h3>
            <p class="mb-5">
              Dining in the domes, as memorable as it is, is just one of many
              possible applications including: Patio Lounge, Personal Garden
              Gym, Yoga/Meditation Studio, Kids Playroom, Hot Tub Enclosure,
              Home Office Pod and many more.
            </p>
            <button class="btn btn-error text-white font-bold">
              Visit Hypedome website to learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
