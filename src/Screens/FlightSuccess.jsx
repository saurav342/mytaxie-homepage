import { useState } from "react";
import data from "./data.json";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";


const FlightSuccess = () => {


  return (
    <>
      <h2>
        Your flight request has been taken, Please allow us some time to get back to you. 
        <b />
        Thank you!
      </h2>
    </>
  );
};
export default FlightSuccess;
