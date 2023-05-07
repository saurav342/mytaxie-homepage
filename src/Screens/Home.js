import PhoneInput from "react-phone-number-input";
import React, { useState } from "react";
import Modal from 'react-modal';
import  TaxiDetails  from "./TaxiDetails";
import axios from "axios";

const Home = () => {
	const customStyles = {
		content: {
		  top: '50%',
		  left: '50%',
		  right: 'auto',
		  width: '600px',
		//   height: '400px',
		  bottom: 'auto',
		  marginRight: '-50%',
		  transform: 'translate(-50%, -50%)',
		  backgroundColor: 'black'
		},
	  };

	  const [name, setName] = useState("");
	  const[phoneNum, setValue] = useState("");
	  const[msg,setMsg]=useState("")
	
	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
  
	function openModal() {
	  setIsOpen(true);
	}
  
	function afterOpenModal() {
	  // references are now sync'd and can be accessed.
	  subtitle.style.color = '#f00';
	}
  
	function closeModal() {
	  setIsOpen(false);
	  setMsg("")
	}
  
	function handleClick(cell) {
	  setIsOpen(true);
	//   setRowTaxiData(obj);
	}
    const handleClickModal =(e) =>{
		e.preventDefault();
		if(name === ""||phoneNum === ""){
			setMsg("fill the details")
		}else{
           setMsg("done")
		}
	}
	return  (
		<>
		<TaxiDetails/>
		<section id="services">
		<div className="container">
			<h4 className="yellow">Welcome</h4>
			<h2 className="h1">Our Services</h2>
			<div className="row">
				<div className="col-md-3 col-sm-6 col-ms-6 matchHeight" style={{height: "222px"}}>	
					<div className="image"><img src="assests/TaxiPark_files/_services-1.png" alt="Service"/></div>
					<h5>Rapid city transfer</h5>
					<p>We will bring you quickly and comfortably to anywhere in your city</p>
				</div>
				<div className="col-md-3 col-sm-6 col-ms-6 matchHeight" style={{height: "222px"}}>	
					<div className="image"><img src="assests/TaxiPark_files/_services-3.png" alt="Service"/></div>
					<h5>Airport transfer</h5>
					<p>We will bring you quickly and comfortably to anywhere in your city</p>
				</div>

				<div className="col-md-3 col-sm-6 col-ms-6 matchHeight" style={{height: "222px"}}>	
					<div className="image"><img src="assests/TaxiPark_files/_services-3.png" alt="Service"/></div>
					<h5>Flight Booking</h5>
					<p>Discover the world with ease-book flights to your dream destinations with our fast and reliable flight booking service</p>
				</div>
				<div className="col-md-3 col-sm-6 col-ms-6 matchHeight" style={{height: "222px"}}>	
					<div className="image"><img src="assests/TaxiPark_files/_services-1.png" alt="Service"/></div>
					<h5>Hourly Booking</h5>
					<p>Get where you need to be, when you need to be there - book a ride with our hourly cab service provider and enjoy flexible transportation on your terms.</p>
				</div>

			</div>
		</div>
	</section>
			
				<section id="tariffs">
			<div className="container">
			<h4 className="yellow">See Our</h4>
			<h2 className="h1">Pricing</h2>
			<div className="row">
				<div className="col-md-3 col-sm-6">
					<div className="item matchHeight" style={{height: "372px"}}>
						<div className="image">
						<img src="assests/TaxiPark_files/_tariff-1.png" className="full-width" alt="Tariff"/></div>
						<h4>MINI</h4>
						<p>Standard mini for a drive around the city at your service</p>
						<div className="price">11-12rs<span>/km</span></div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="item matchHeight" style={{ height: "371px" }}>
						<div className="image"><img src="assests/TaxiPark_files/_tariff-2.png" className="full-width" alt="Tariff"/></div>
						<h4>Sedan</h4>
						<p>Standard sedan for a drive around the city at your service</p>
						<div className="price">14-15rs<span>/km</span></div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="item matchHeight vip" style={{ height: "371px" }}>
						<div className="image"><img src="assests/TaxiPark_files/_tariff-3.png" className="full-width" alt="Tariff"/></div>
						<h4 className="red">SUV</h4>
						<p>Standard SUV for a drive around the city at your service</p>
						<div className="price">20-21rs<span>/km</span></div>
					</div>
				</div>
			</div>
		</div>
			</section>
			
			<section id="download" className="parallax" style={{ backgroundImage: "url(assets/images/_download-bg.jpg)" }}>
		<div className="container">
			<h4 className="yellow">Get More Benefits</h4>
			<h2 className="h1">Download The App</h2>
			<div className="row">
				<div className="col-md-4 col-sm-12">
					<div className="items row">
						<div className="col-md-2 visible-md visible-lg mrgAuto"><span className="num">01.</span></div>
						<div className="col-md-10">
							<h5 className="yellow">Fast booking</h5>
						</div>
						<div className="col-md-2 visible-md visible-lg"><span className="num">02.</span></div>
						<div className="col-md-10">
							<h5 className="yellow">Easy to use</h5>
						</div>						
					</div>
				</div>
				<div className="col-md-4 col-md-push-4 col-sm-12">
					<div className="items items-right row">
						<div className="col-md-10">
							<h5 className="yellow">GPS searching</h5>
						</div>
						<div className="col-md-2 visible-md visible-lg"><span className="num">03.</span></div>
						<div className="col-md-10">
							<h5 className="yellow">Bonuses for ride</h5>
						</div>						
						<div className="col-md-2 visible-md visible-lg"><span className="num">04.</span></div>
					</div>				
				</div>				
				<div className="col-md-4 col-md-pull-4 col-sm-12">
					<div className="mob">
						<a href="#"><img src="assests/TaxiPark_files/_app-google.png" alt="App"/></a>
						<a href="#"><img src="assests/TaxiPark_files/_app-apple.png" alt="App"/></a>
					</div>
				</div>

			</div>
		</div>
	</section>			<section id="car-block">
	 	<div className="car-right animation-block"><img src="assests/TaxiPark_files/_car-big-side.png" alt="Car"/></div>
		<div className="container">
			<div className="row">
				<div className="col-md-7">
					<h4 className="yellow">For Drivers</h4>
					<h2 className="h1">Do You Want To Earn With Us?</h2>
				</div>
				<div className="col-md-6">

					<ul className="check two-col strong">
						<li>Luxury cars</li>
						<li>No fee</li>
						<li>Weekly payment</li>
						<li>Fixed price</li>
						<li>Good application</li>
						<li>Stable orders</li>
					</ul>			
					<button  className="btn btn-yellow btn-lg btn-white" onClick={handleClick}>Become a Driver </button>
					{/* <a href="#" className="btn btn-yellow btn-lg btn-white">Become a Driver</a> */}
				</div>
			</div>
		</div>
	</section>		
	
{/* 		
			<div id="homepage-banners">
		<div className="container">
			<div className="row">
				<a href="#" className="col-md-6 col-sm-6 col-ms-6"><img src="TaxiPark_files/_banner-1.png" className="full-width" alt="Banner"/></a>
				<a href="#" className="col-md-6 col-sm-6 col-ms-6"><img src="TaxiPark_files/_banner-2.png" className="full-width" alt="Banner"/></a>
			</div>
		</div>
	</div>

	<section id="partners">
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-12">
					<h4 className="black margin-0">Our partners</h4>
					<h2 className="white margin-0">and clients</h2>
				</div>
				<div className="col-md-9 col-sm-12">
					<div className="row items">
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="#"><img src="TaxiPark_files/_partner-1.png" alt="Partner"/></a></div>
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="#"><img src="TaxiPark_files/_partner-2.png" alt="Partner"/></a></div>
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="#"><img src="TaxiPark_files/_partner-3.png" alt="Partner"/></a></div>
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="#"><img src="TaxiPark_files/_partner-4.png" alt="Partner"/></a></div>
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="#"><img src="TaxiPark_files/_partner-5.png" alt="Partner"/></a></div>
					</div>				
				</div>				
			</div>
		</div>
	</section> */}

	<section id="block-footer">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-ms-6">
					<h4>About us</h4>
					<p>In our cab and flight booking service, we strive to provide a seamless travel experience for our customers. With a user-friendly platform and reliable traffic, we aim to make travel planning simple and stress-free. Our team is dedicated to ensuring customer satisfaction by offering competitive pricing, excellent customer service and a wide range of travel options.</p>

					<div className="social-small social-yellow">
						<a href="#" className="fa fa-twitter"></a>
						<a href="#" className="fa fa-facebook"></a>
						<a href="#" className="fa fa-instagram"></a>
						<a href="#" className="fa fa-google-plus"></a>
						<a href="#" className="fa fa-pinterest"></a>
					</div>					
				</div>
				<div className="col-lg-5 col-md-5 hidden-md hidden-sm hidden-xs hidden-ms">					
					<h4>Explore</h4>
					<div className="row">
						<div className="col-md-5">
							<ul className="nav navbar-nav">
								<li className="active"><a href="#">Get Taxi</a></li>
								<li><a href="#">Services</a></li>
								<li><a href="#">Tariffs</a></li>
								<li><a href="#">Application</a></li>

							</ul>						
						</div>
						<div className="col-md-5">
							<ul className="nav navbar-nav">
								<li><a href="#">Become a driver</a></li>
								<li><a href="#">Testimonials</a></li>
								<li><a href="#">Contacts</a></li>
								<li><a href="#">Pages</a></li>
							</ul>						
						</div>						
					</div>

				</div>
				<div className="col-lg-3 col-md-6 col-sm-6 col-ms-6">					
					<h4>Contact us</h4>
					<p><span className="yellow">Address:</span> Patna</p>

					<ul className="address">
						<li><span className="fa fa-phone"></span>9620868501</li>
						<li><span className="fa fa-phone"></span>9801891099</li>

						<li><span className="fa fa-envelope"></span><a href="#">mytaxie2022@gmail.com</a></li>
					</ul>					
				</div>		
			</div>
		</div>
	</section>
{/* 
			<footer>
				<div className="container">
					<a href="http://like-themes.com/">Like-themes</a> 2017 © All Rights Reserved <a href="http://like-themes.com/taxipark/homepage-2.html#">Terms of use</a>
					<a href="http://like-themes.com/taxipark/homepage-2.html#" className="go-top hidden-xs hidden-ms">1</a>
				</div>
			</footer> */}
			  <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=""
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)} className="modalHeading">Enter Your Contact Details</h2>
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
            //   onInput={handleLength}
            /><button  className="btn btn-yellow btn-lg btn-white btn-modal" onClick={handleClickModal}>Submit </button>
			<br/>
			<hr/>
           <button onClick={closeModal} style={{color:"yellow"}}>close</button>
		   <p style={{color:"#FFC61A",textAlign:"center"}}>{msg}</p>
            </div>
            
       
      </Modal>
    </div>
		</>
		
	) 
}

export default Home;