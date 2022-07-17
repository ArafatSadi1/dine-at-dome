import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <img
          className="w-full h-[450px] object-cover"
          src="https://app-60c33512c1ac185aa47dd053.closte.com/wp-content/uploads/2020/08/Dine-at-dome_007.jpg"
          alt=""
        />
        <h1 className="text-center text-4xl my-16">Contact Dine at Dome</h1>
        <p className="my-8 text-center font-sans mt-2">
          Questions about bookings -
          <span className="font-bold"> support@dineatdome.com</span>
        </p>
        <p className="my-16 text-center font-sans mt-2">
          General questions, cooperation, etc -
          <span className="font-bold"> info@dineatdome.com</span>
        </p>
        <p className="text-center font-sans mb-16">
          <span className="font-bold">Telephone: </span> +44 20 3608 2097
        </p>
      </div>
      <form className="max-w-sm mx-auto font-sans my-8">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" class="input input-bordered w-full" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" class="input input-bordered w-full" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            class="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label class="label">
            <span class="label-text">Where would you like to dine?</span>
          </label>
          <select class="select select-bordered w-full text-black text-lg font-sans font-light">
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
        </div>
        <div className="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea
            class="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary w-full text-white">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
