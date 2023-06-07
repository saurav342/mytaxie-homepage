import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const DriverKyc = () => {
  const navigate= useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [phoneNum, setValue] = useState(null);
  const [msg,setMsg]= useState("");
 
  const handleLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      setValue("enter valid number");
    }
  };
  const handleSubmit = (e) => {
   e.preventDefault();
   if (
    firstName === "" ||
    phoneNum === null ||
    query === "" 
  ) {
    setMsg("Please fill the required details")
  } 
  else{
    navigate("/")
  }
  };
  return (
    <>
      <div
        id="homepage-block-3"
        className="bgMove loginBackground loginPage"
        style={{ backgroundImage: "url(assets/images/_homepage-1-bg.jpg)" }}
      >
        <div className="container login">
          <div className="login-header">
            <h1> Contact Us </h1>
          </div>
          <div className="login-form">
          <div className="contact-md-4ths">
            <input
              type="text"
              placeholder="First Name"
              className=""
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div className="contact-md-4ths">
            <input
              type="text"
              placeholder="Last Name"
              className=""
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            </div>
            <div className="contact-md-4ths">
            <PhoneInput
              className="ajaxField flightDetails required"
              placeholder="Enter phone number"
              defaultCountry="IN"
              value={phoneNum}
              onChange={setValue}
              style={{ display: "flex" }}
              maxLength="11"
              onInput={handleLength}
            />
            </div>
            <div className="contact-md-4ths">
            <input
              type="email"
              placeholder="Enter email address"
              className="ajaxField flightDetails required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="contact-md-4ths">
            <input
              type="text"
              className="ajaxField flightDetails required"
              placeholder="Mention Your Query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            </div>
            <br/>
            <input
              type="submit"
              className="btn btn-yellow btn-bg-dark btn-lg"
              value="Submit" onClick={handleSubmit}
            />
            <p style={{color:"#FFC61A"}}>{msg}</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default DriverKyc;
