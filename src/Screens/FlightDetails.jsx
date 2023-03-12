import { useState } from "react";
import data from "./data.json";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";

const FlightDetails = () => {
  console.log("this data.......", data);
  const [fromCity, setFromCity] = useState("From ....");
  const [toCity, setToCity] = useState("To....");
  const [cityList, setCityList] = useState(data);
  const [phoneNum, setValue] = useState();
  const [flightDate, setFlightDate] = useState("");

  const handleLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      setValue("enter valid number");
    }
  };

  const handleFromCity =(e) =>{
    setFromCity(e.target.value)
    var cityListArr = cityList;

    var newarr = [];
    console.log("........fromCity",fromCity)
    
    for (let i = 0; i < cityListArr.length; i++) {
      console.log("........fromCity", fromCity);
      if (e.target.value != cityListArr[i]) {
        newarr = [...newarr, cityListArr[i]];
      }
    }
    setCityList(newarr);
  console.log("................",newarr)
  }

  const handleValidation = () => {
    if (
      fromCity == "From ...." ||
      toCity == "To...." ||
      phoneNum == null ||
      flightDate == ""
    ) {
      return false;
    } else return true;
  };

  const handleData = (e) => {
    e.preventDefault();
    axios
      .post("http://13.127.5.69:4000/v1/flight", {
        from: fromCity,
        to: toCity,
        phoneNumber: phoneNum,
        date: flightDate,
      })
      .then(function (response) {
        console.log("...........response", response);
      })
      .finally(function () {
        console.log("ok");
      });
  };

  return (
    <>
      <div
        id="homepage-block-2"
        className="bgMove"
        style={{ backgroundImage: "url(assets/images/_homepage-1-bg.jpg)" }}
      >
        <div className="container">
          <h2>Book Your Flight Tickets</h2>
          <form
            className="form-validate"
            novalidate="novalidate"
            onSubmit={handleData}
          >
            <div className="row forms FlightWidth">
              <div className="col-md-5ths">
                <div className="form-group">
                  <select
                    className="ajaxField flightDetails"
                    onChange={handleFromCity}
                    value=""
                    required
                  >
                    <option value="From"> {fromCity}</option>
                    {cityList.map((city, index) => (
                      <option>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-5ths">
                <div className="form-group">
                  <select
                    className="ajaxField flightDetails"
                    value=""
                    onChange={(e) => setToCity(e.target.value)}
                  >
                    <option value="">{toCity}</option>
                    {cityList.map((city, index) => (
                      <option>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-5ths">
                <div className="form-group">
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
              </div>
              <div className="col-md-5ths">
                <div className="form-group">
                  <input
                    type="date"
                    onChange={(e) => setFlightDate(e.target.value)}
                    value={flightDate}
                    className="flightDetails ajaxFeild"
                  />
                </div>
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-yellow btn-bg-dark btn-lg"
              value="Submit"
            />
            <input
              type="hidden"
              id="type"
              name="type"
              value="2"
              className="ajaxField"
            />
          </form>

          <div id="large-image">
            <img src="assests/TaxiPark_files/_car-big-2.png" alt="Taxi" />
            <div className="dialog">
              <span className="fa fa-phone"></span>
              <h4 className="white">Call TAXI Now</h4>
              <h3 className="yellow">800-5-800</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-block-yellow-2"></div>
    </>
  );
};
export default FlightDetails;
