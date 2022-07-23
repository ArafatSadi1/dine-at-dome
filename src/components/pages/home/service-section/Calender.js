import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);

  let footer = <p>Please pick a day.</p>;
  if (selectedDay) {
    footer = <p>You picked {format(selectedDay, "PP")}.</p>;
  }
  return (
    <DayPicker
      className="mx-auto p-3 font-sans"
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
};

export default Calender;
