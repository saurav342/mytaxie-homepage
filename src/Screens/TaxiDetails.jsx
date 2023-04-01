import { useState, useRef } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  LoadScript,
  StandaloneSearchBox, useLoadScript
} from "@react-google-maps/api";
import { taxiType } from "../Utils/constants.js"


const TaxiDetails = () => {
  const navigate = useNavigate()
  const [fromAddress, setFromAddress] = useState("")
  const [destAddress, setDestAddress] = useState("")
  const [phoneNum, setValue] = useState();
  const [taxiDate, setTaxiDate] = useState(new Date())
  const [carType, setCartype] = useState("");

  const bounds = {
    north: 23.63936,
    south: 28.20453,
    east: 68.14712,
    west: 97.34466
  }

  // var bangaloreBounds = new google.maps.LatLngBounds(
  //   new google.maps.LatLng(12.864162, 77.438610),
  //   new google.maps.LatLng(13.139807, 77.711895));

  const restrictions = {
    country: 'in'
  }

  const options = {
    strictBounds: true,
  };


  const searchFromBox = useRef(null)
  const onFromChanged = () => {
    const [place] = searchFromBox.current.getPlaces();
    if (place) {
      setFromAddress(place.formatted_address)
      console.log(place.formatted_address)
      console.log(place.geometry.location.lat())
      console.log(place.geometry.location.lng())
    }
  }


  const searchToBox = useRef(null)
  const onToChanged = () => {
    const [place] = searchToBox.current.getPlaces();
    if (place) {
      setDestAddress(place.formatted_address)
      console.log(place.formatted_address)
      console.log(place.geometry.location.lat())
      console.log(place.geometry.location.lng())
    }
  }
  const handleLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      setValue("Enter valid number")
    }
  }

  const handleData = (e) => {
    e.preventDefault();
    axios
      .post("https://api.mytaxie.com/v1/taxi", {
        from: fromAddress,
        to: destAddress,
        phoneNumber: phoneNum,
        date: taxiDate,
        typeOfCar: carType
      })
      .then(function (response) {
        console.log("...........response", response);
      })
      .finally(function () {
        navigate("/taxiSuccess");
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
          <h2>Book Your Taxi Now </h2>
          <form
            className="form-validate"
            noValidate="novalidate"
            onSubmit={handleData}
          >
            <div className="row forms">
              <div className="col-md-5ths">
                <div className="form-group">
                  <LoadScript libraries={["places"]} googleMapsApiKey="AIzaSyCv3GKI8_eQCSlfa9uHliYqy0_Y7o9bzMI">
                    <StandaloneSearchBox
                      onLoad={ref => searchFromBox.current = ref}
                      onPlacesChanged={onFromChanged}
                      bounds={bounds}
                      restrictions={restrictions}
                      options={options}
                    >
                      <input type="text"
                        // value={fromAddress}
                        name="from" placeholder="From Address..."
                        className="ajaxField"
                      // onChange={(e) => setFromAddress(e.target.value)} 
                      />
                    </StandaloneSearchBox>
                  </LoadScript>
                </div>
              </div>
              <div className="col-md-5ths">
                <div className="form-group">
                  <LoadScript libraries={["places"]} googleMapsApiKey="AIzaSyCv3GKI8_eQCSlfa9uHliYqy0_Y7o9bzMI">
                    <StandaloneSearchBox
                      onLoad={ref => searchToBox.current = ref}
                      onPlacesChanged={onToChanged}>
                      <input type="text"
                        // value={destAddress} 
                        placeholder="To....." name="to"
                        className="ajaxField"
                      // onChange={(e) => setDestAddress(e.target.value)}
                      />
                    </StandaloneSearchBox>
                  </LoadScript>

                </div>
              </div>
              <div className="col-md-5ths">
                <div className="form-group">
                  <PhoneInput
                    className="ajaxField flightDetails"
                    placeholder="Phone Number"
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
                  <input type="date" onChange={(e) => setTaxiDate(e.target.value)}
                    value={taxiDate}
                    className="ajaxFeild flightDetails"
                  />
                </div>
              </div>
              <div className="col-md-5ths">
                <div className="form-group">
                  <select className="ajaxField flightDetails"
                    onChange={(e) => setCartype(e.target.value)}>
                    <option value="">{carType}</option>{
                      taxiType.map((taxi, index) => (
                        <option>{taxi}</option>
                      ))
                    }
                  </select>
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
            </div>
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
export default TaxiDetails;
