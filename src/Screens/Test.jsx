import { useState, useEffect } from "react";
import Select from 'react-select';
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { flightData } from "../Utils/constants.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";

const Test = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};
export default Test;
