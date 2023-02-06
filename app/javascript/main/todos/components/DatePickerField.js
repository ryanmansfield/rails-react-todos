import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ name, value, onChange }) => {
  const [dueDate, setDueDate] = useState(value);
  return (
    <DatePicker 
      selected={dueDate} 
      onChange={val => { 
        onChange(name, val);
        setStartDate(val); 
      }}
    />
  );
};

export default DatePickerField;