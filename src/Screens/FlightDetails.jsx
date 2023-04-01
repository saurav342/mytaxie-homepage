import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { flightData } from "../Utils/constants.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FlightDetails = () => {
  const navigate = useNavigate();
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [fromCityList, setFromCityList] = useState(flightData);
  const [toCityList, setToCityList] = useState(flightData);
  const [phoneNum, setValue] = useState();
  const [startDate, setStartDate] = useState();

  const handleLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      setValue("enter valid number");
    }
  };  

  const handleFromCity =(e) =>{
    setFromCity(e.target.value)
    var fromCityListArr = flightData;
    var newarr = [];
    for (let i = 0; i < fromCityListArr.length-1; i++) {
      if (e.target.value != fromCityListArr[i]) {
        newarr = [...newarr, fromCityListArr[i]];
      }
    }
    setToCityList(newarr);
  };
  
  const handleToCity =(e)=>{
    setToCity(e.target.value)
    var cityListArr = flightData;
    var newarr = [];
    for (let i = 0; i < cityListArr.length-1; i++) {
      if (e.target.value != cityListArr[i]) {
        newarr = [...newarr, cityListArr[i]];
      }
    }
    setFromCityList(newarr);
  }

  const handleData = (e) => {
    e.preventDefault();
    if (
      fromCity === "From ...." ||
      toCity === "To...." ||
      phoneNum === null ||
      startDate === ""
    ) {
      return false;
    } else {
      const backendUrl = "https://api.mytaxie.com/v1/flight";
      const whatsappCBUrl =
        "https://graph.facebook.com/v16.0/113290301716804/messages";
      const headers = {
        "Content-type": "application/json",
        Authorization:
          "Bearer EAAOh1MtDJVQBAPUaWHHpUubrKhEC7GsHZCSqIERazBXTj3zkuFd6Hc4tBco7TP10u9p77xDFS9M10CFgthham70X477UHFKqQgYKF212pwYCwjWs7T6BbMqMMZCFP18h4wHSfTqa0pZAx7y6lgMcCp55UiyqOwUFyCVXPsMPVLaCWOTV4ik92BMZCwdZBd84f0GZBigM5oWwZDZD",
      };
      const dataBodyForWhatsappMsg = {
        messaging_product: "whatsapp",
        to: "919155524079",
        type: "template",
        template: {
          name: "hello_world",
          language: {
            code: "en_US",
          },
        }    
      };

      axios
        .all([
          axios.post(backendUrl, {
            from: fromCity,
            to: toCity,
            phoneNumber: phoneNum,
            date: startDate,
          }),
          axios.post(whatsappCBUrl, dataBodyForWhatsappMsg, {
            headers: headers,
          }),
        ])
        .then(function (response) {
          console.log("...........response", response);
        })
        .finally(function () {
          navigate("/flightsuccess");
        });
    }
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
            noValidate="novalidate"
            onSubmit={handleData}
          >
            <div className="row forms FlightWidth">
              <div className="col-md-5ths">
                <div className="form-group">
                  <select
                    className="ajaxField flightDetails"
                    // onChange={handleFromCity}
                    onClick={handleFromCity}
                    value={fromCity}
                    isOptionDisabled = {true}

                    // defaultValue = {"From...."}
                    // required
                  >
                    {/* <option value="" selected disabled> {fromCity}</option> */}
                    {/* <option  selected disabled> From...</option> */}
                    {fromCityList.map((city, index) => (
                      <option>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-5ths">
                <div className="form-group">
                  <select
                    className="ajaxField flightDetails"
                    value={toCity}
                    // onChange={handleToCity}
                    onClick={handleToCity}
                  >
                    {/* <option value="" selected disabled>{toCity}</option> */}
                    {/* <option selected disabled>To...</option> */}
                    {toCityList.map((city, index) => (
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
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    placeholderText="Select a date"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
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
            {/* <div className="dialog">
              <span className="fa fa-phone"></span>
              <h4 className="white">Call TAXI Now</h4>
              <h3 className="yellow">800-5-800</h3>
            </div> */}
          </div>
        </div>
      </div>
      <div className="homepage-block-yellow-2"></div>
    </>
  );
};
export default FlightDetails;
