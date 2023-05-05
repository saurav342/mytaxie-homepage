import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import server_url from "../config/config.json";

const ContactUs = () => {
  const navigate= useNavigate()
  const [name, setName] = useState("");
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
    name === "" ||
    phoneNum === null ||
    query === "" 
  ) {
    setMsg("Please fill the required details")
  } 
  else{
    axios.post(`${server_url}/v1/contactus`, {
      name: name,
      phoneNumber: phoneNum,
      email: email,
     message: query
    })
    .then(function (response) {
      console.log("...........response", response);
    })
    .finally(function () {
      navigate("/querySuccess");
    });
  
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
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="contact-md-4ths"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <PhoneInput
              className="ajaxField flightDetails required contact-md-4ths"
              placeholder="Enter phone number"
              defaultCountry="IN"
              value={phoneNum}
              onChange={setValue}
              style={{ display: "flex" }}
              maxLength="11"
              onInput={handleLength}
            />
            </div>
            <div>
            <input
              type="email"
              placeholder="Enter email address"
              className="contact-md-4ths required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div>
            <input
              type="text"
              className="contact-md-4ths required"
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

export default ContactUs;
