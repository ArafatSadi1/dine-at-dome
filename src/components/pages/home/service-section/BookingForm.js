import React, { useRef } from "react";
import Calender from "./Calender";

const BookingForm = ({ service }) => {
  const phoneNumberInput = useRef();
  const fullNameInput = useRef();
  const companyNameInput = useRef();
  const emailInput = useRef();

  const confirmBooking = (e) => {
    e.preventDefault();
    const number = phoneNumberInput.current.value;
    const fullName = fullNameInput.current.value;
    const companyName = companyNameInput.current.value;
    const email = emailInput.current.value;
  };
  return (
    <div class="flex-shrink-0 w-full bg-base-100 font-sans p-4 border-2 border-primary mt-[-210px] rounded">
      <div className=" h-full rounded border-2 border-gray-400">
        <div className="bg-gray-100">
          <h3 className="text-xl px-2 py-4">{service.name}</h3>
        </div>
        <div className="card shadow-lg m-2">
          <Calender></Calender>
        </div>
        <form onSubmit={(e) => confirmBooking(e)} className="p-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Select Your Time</span>
            </label>
            <select class="select select-bordered focus:border-none">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              ref={phoneNumberInput}
              required
              class="input input-bordered focus:border-none"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Full Name</span>
            </label>
            <input
              type="text"
              ref={fullNameInput}
              required
              class="input input-bordered focus:border-none"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Company Name</span>
            </label>
            <input
              type="text"
              ref={companyNameInput}
              class="input input-bordered focus:border-none"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              ref={emailInput}
              required
              class="input input-bordered focus:border-none"
            />
          </div>
          <div class="form-control mt-6">
            <input
              type="submit"
              value="Book"
              class="btn btn-primary text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
