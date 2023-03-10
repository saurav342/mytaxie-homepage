const Home =()=>{
    return(
        <>

	<div id="homepage-block-2" className="bgMove" style={{backgroundImage: "url(assets/images/_homepage-1-bg.jpg)"}}>
		<div className="container">
			<h2>Get Taxi Online</h2>

			<form className="form-validate" novalidate="novalidate">
				<div className="row forms">
					<div className="col-md-5ths">
						<div className="form-group">
							<input type="text" value="" name="from" placeholder="From Address..." className="ajaxField"/><span className="fa fa-map-marker"></span>
						</div>
					</div>
					<div className="col-md-5ths">
						<div className="form-group">
							<input type="text" value="" name="to" placeholder="To..." className="ajaxField"/><span className="fa fa-map-marker"></span>
						</div>
					</div>
					<div className="col-md-5ths">
						<div className="form-group">
							<input type="text" value="" name="phone" placeholder="Phone Number" className="ajaxField required" aria-required="true"/><span className="fa fa-phone"></span>
						</div>
					</div>
					<div className="col-md-5ths">
						<div className="form-group">
							<input type="text" value="" name="text" placeholder="Date and Time" className="ajaxField"/><span className="fa fa-calendar"></span>
						</div>
					</div>
					<div className="col-md-5ths">
						<div className="form-group">
							<input type="text" value="" name="type-value" placeholder="Car Type" className="ajaxField"/><span className="fa fa-car"></span>
						</div>
					</div>
				</div>
				<input type="submit" className="btn btn-yellow btn-bg-dark btn-lg" value="Get Taxi"/>
				<input type="hidden" id="type" name="type" value="2" className="ajaxField"/>
			</form>

			<div id="large-image">
				<img src="assests/TaxiPark_files/_car-big-2.png" alt="Taxi"/>
				<div className="dialog">
					<span className="fa fa-phone"></span>
					<h4 className="white">Call TAXI Now</h4>
					<h3 className="yellow">800-5-800</h3>
				</div>
			</div>
		</div>
	</div>
	<div className="homepage-block-yellow-2">
	</div>

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
					<div className="image"><img src="assests/TaxiPark_files/_services-2.png" alt="Service"/></div>
					<h5>Booking a hotel</h5>
					<p>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</p>
				</div>
				<div className="col-md-3 col-sm-6 col-ms-6 matchHeight" style={{height: "222px"}}>	
					<div className="image"><img src="assests/TaxiPark_files/_services-3.png" alt="Service"/></div>
					<h5>Airport transfer</h5>
					<p>We will bring you quickly and comfortably to anywhere in your city</p>
				</div>
				<div className="col-md-3 col-sm-6 col-ms-6 matchHeight"  style={{height: "222px"}}>	
					<div className="image"><img src="assests/TaxiPark_files/_services-4.png" alt="Service"/></div>
					<h5>Baggage transport</h5>
					<p>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the address</p>
				</div>
			</div>
		</div>
	</section>		<section id="tariffs">
		<div className="container">
			<h4 className="yellow">See Our</h4>
			<h2 className="h1">Tariffs</h2>
			<div className="row">
				<div className="col-md-3 col-sm-6">
					<div className="item matchHeight"  style={{height: "371px"}}>
						<div className="image"><img src="assests/TaxiPark_files/_tariff-1.png" className="full-width" alt="Tariff"/></div>
						<h4>Standart</h4>
						<p>Standard sedan for a drive around the city at your service</p>
						<div className="price">$2<span>/km</span></div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="item matchHeight"  style={{height: "371px"}}>
						<div className="image"><img src="assests/TaxiPark_files/_tariff-2.png" className="full-width" alt="Tariff"/></div>
						<h4>Business</h4>
						<p>Standard sedan for a drive around the city at your service</p>
						<div className="price">$2,7<span>/km</span></div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="item matchHeight vip"  style={{height: "371px"}}>
						<div className="image"><img src="assests/TaxiPark_files/_tariff-3.png" className="full-width" alt="Tariff"/></div>
						<h4 className="red">Vip</h4>
						<p>Standard sedan for a drive around the city at your service</p>
						<div className="price">$5<span>/km</span></div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="item matchHeight"  style={{height: "371px"}}>
						<div className="image"><img src="assests/TaxiPark_files/_tariff-4.png" className="full-width" alt="Tariff"/></div>
						<h4>Bus-minivan</h4>
						<p>Standard sedan for a drive around the city at your service</p>
						<div className="price">$4,5<span>/km</span></div>
					</div>
				</div>												
			</div>
		</div>
	</section>		<section id="download" className="parallax" style={{backgroundImage: "url(assets/images/_download-bg.jpg)"}}>
		<div className="container">
			<h4 className="yellow">Get More Benefits</h4>
			<h2 className="h1">Download The App</h2>
			<div className="row">
				<div className="col-md-4 col-sm-12">
					<div className="items row">
						<div className="col-md-2 visible-md visible-lg"><span className="num">01.</span></div>
						<div className="col-md-10">
							<h5 className="yellow">Fast booking</h5>
							<p>Nam ac ligula congue, interdum enim sit amet, fermentum nisi.</p>
						</div>
						<div className="col-md-2 visible-md visible-lg"><span className="num">02.</span></div>
						<div className="col-md-10">
							<h5 className="yellow">Easy to use</h5>
							<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
						</div>						
					</div>
				</div>
				<div className="col-md-4 col-md-push-4 col-sm-12">
					<div className="items items-right row">
						<div className="col-md-10">
							<h5 className="yellow">GPS searching</h5>
							<p>Ut elementum tincidunt erat vel ornare. Suspendisse ac felis non diam pretium.</p>
						</div>
						<div className="col-md-2 visible-md visible-lg"><span className="num">03.</span></div>
						<div className="col-md-10">
							<h5 className="yellow">Bonuses for ride</h5>
							<p>Phasellus l et porta tortor dignissim at. Pellentesque gravida tortor at euismod mollis. </p>
						</div>						
						<div className="col-md-2 visible-md visible-lg"><span className="num">04.</span></div>
					</div>				
				</div>				
				<div className="col-md-4 col-md-pull-4 col-sm-12">
					<div className="mob">
						<a href="http://like-themes.com/taxipark/homepage-2.html#"><img src="assests/TaxiPark_files/_app-google.png" alt="App"/></a>
						<a href="http://like-themes.com/taxipark/homepage-2.html#"><img src="assests/TaxiPark_files/_app-apple.png" alt="App"/></a>
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
					<p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris. </p>

					<ul className="check two-col strong">
						<li>Luxury cars</li>
						<li>No fee</li>
						<li>Weekly payment</li>
						<li>Fixed price</li>
						<li>Good application</li>
						<li>Stable orders</li>
					</ul>

					<a href="http://like-themes.com/taxipark/homepage-2.html#" className="btn btn-yellow btn-lg btn-white">Become a Driver</a>
				</div>
			</div>
		</div>
	</section>			<section id="testimonials">
		<hr className="lg"/>
		<div className="container">
			<h4 className="yellow">Happy Client's</h4>
			<h2 className="h1">Testimonials</h2>
			
			<div className="swiper-container row swiper-container-horizontal" id="testimonials-slider">
				<div className="swiper-wrapper transtioning">
					<div className="col-md-4 col-sm-6 swiper-slide swiper-slide-active" style={{width: "380px"}}>
						<div className="inner matchHeight"  style={{height: "294px"}}>
							<div className="text">
								<p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.</p>
							</div>
							<div className="quote">
								<span className="fa fa-quote-left"></span>
								<div className="name">Anastasia Stone</div>
								<img src="assests/TaxiPark_files/_client-1.jpg" alt="Client"/>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 swiper-slide swiper-slide-next"  style={{width: "380px"}}>
						<div className="inner matchHeight"  style={{height: "294px"}}>
							<div className="text">
								<p>Suspendisse nec arcu sed nibh lacinia pretium. Phasellus eros ligula, mattis id rutrum non, eleifend vitae lacus. </p>
							</div>				
							<div className="quote">		
								<span className="fa fa-quote-left"></span>
								<div className="name">Steven Rashford</div>
								<img src="assests/TaxiPark_files/_client-4.jpg" alt="Client"/>
							</div>
						</div>
					</div>	
					<div className="col-md-4 col-sm-6 swiper-slide" style={{width: "380px"}}>
						<div className="inner matchHeight" style={{height: "294px"}}>
							<div className="text">
								<p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris. </p>
							</div>			
							<div className="quote">			
								<span className="fa fa-quote-left"></span>
								<div className="name">Patrick James</div>
								<img src="assests/TaxiPark_files/_client-5.jpg" alt="Client"/>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 swiper-slide"  style={{width: "380px"}}>
						<div className="inner matchHeight" style={{height: "294px"}}>
							<div className="text">
								<p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum.</p>
							</div>
							<div className="quote">
								<span className="fa fa-quote-left"></span>
								<div className="name">Anastasia Stone</div>
								<img src="assests/TaxiPark_files/_client-1.jpg" alt="Client"/>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 swiper-slide"  style={{width: "380px"}}>
						<div className="inner matchHeight" style={{height: "294px"}}>
							<div className="text">
								<p>Suspendisse nec arcu sed nibh lacinia pretium. Phasellus eros ligula, mattis id rutrum non, eleifend vitae lacus. </p>
							</div>				
							<div className="quote">		
								<span className="fa fa-quote-left"></span>
								<div className="name">Steven Rashford</div>
								<img src="assests/TaxiPark_files/_client-4.jpg" alt="Client"/>
							</div>
						</div>
					</div>	
					<div className="col-md-4 col-sm-6 swiper-slide" style={{width: "380px"}}>
						<div className="inner matchHeight" style={{height: "294px"}}>
							<div className="text">
								<p>Quisque sollicitudin feugiat risus, eu posuere ex euismod eu. Phasellus hendrerit, massa efficitur dapibus pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris. </p>
							</div>			
							<div className="quote">			
								<span className="fa fa-quote-left"></span>
								<div className="name">Patrick James</div>
								<img src="assests/TaxiPark_files/_client-5.jpg" alt="Client"/>
							</div>
						</div>
					</div>					
				</div>
				<div className="arrows">
					<a href="http://like-themes.com/taxipark/homepage-2.html#" className="arrow-left fa fa-caret-left swiper-button-disabled">One</a>
					<a href="http://like-themes.com/taxipark/homepage-2.html#" className="arrow-right fa fa-caret-right">Two</a>
				</div>				
			</div>
		</div>
	</section>		<div id="homepage-banners">
		<div className="container">
			<div className="row">
				<a href="http://like-themes.com/taxipark/homepage-2.html#" className="col-md-6 col-sm-6 col-ms-6"><img src="assests/TaxiPark_files/_banner-1.png" className="full-width" alt="Banner"/>One</a>
				<a href="http://like-themes.com/taxipark/homepage-2.html#" className="col-md-6 col-sm-6 col-ms-6"><img src="assests/TaxiPark_files/_banner-2.png" className="full-width" alt="Banner"/>One</a>
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
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="http://like-themes.com/taxipark/homepage-2.html#"><img src="assests/TaxiPark_files/_partner-1.png" alt="Partner"/></a></div>
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="http://like-themes.com/taxipark/homepage-2.html#"><img src="assests/TaxiPark_files/_partner-2.png" alt="Partner"/></a></div>
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="http://like-themes.com/taxipark/homepage-2.html#"><img src="assests/TaxiPark_files/_partner-3.png" alt="Partner"/></a></div>
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="http://like-themes.com/taxipark/homepage-2.html#"><img src="assests/TaxiPark_files/_partner-4.png" alt="Partner"/></a></div>
					    <div className="col-md-5ths col-sm-3 col-ms-4 col-xs-6"><a href="http://like-themes.com/taxipark/homepage-2.html#"><img src="assests/TaxiPark_files/_partner-5.png" alt="Partner"/></a></div>
					</div>				
				</div>				
			</div>
		</div>
	</section>

	<section id="block-footer">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 col-ms-6">
					<h4>About us</h4>
					<p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. </p>

					<div className="social-small social-yellow">
						<a href="http://like-themes.com/taxipark/homepage-2.html#" className="fa fa-twitter">1</a>
						<a href="http://like-themes.com/taxipark/homepage-2.html#" className="fa fa-facebook">1</a>
						<a href="http://like-themes.com/taxipark/homepage-2.html#" className="fa fa-instagram">1</a>
						<a href="http://like-themes.com/taxipark/homepage-2.html#" className="fa fa-google-plus">1</a>
						<a href="http://like-themes.com/taxipark/homepage-2.html#" className="fa fa-pinterest">1</a>
					</div>					
				</div>
				<div className="col-lg-5 col-md-5 hidden-md hidden-sm hidden-xs hidden-ms">					
					<h4>Explore</h4>
					<div className="row">
						<div className="col-md-5">
							<ul className="nav navbar-nav">
								<li className="active"><a href="http://like-themes.com/taxipark/homepage-2.html#">Get Taxi</a></li>
								<li><a href="http://like-themes.com/taxipark/homepage-2.html#">Services</a></li>
								<li><a href="http://like-themes.com/taxipark/homepage-2.html#">Tariffs</a></li>
								<li><a href="http://like-themes.com/taxipark/homepage-2.html#">Application</a></li>

							</ul>						
						</div>
						<div className="col-md-5">
							<ul className="nav navbar-nav">
								<li><a href="http://like-themes.com/taxipark/homepage-2.html#">Become a driver</a></li>
								<li><a href="http://like-themes.com/taxipark/homepage-2.html#">Testimonials</a></li>
								<li><a href="http://like-themes.com/taxipark/homepage-2.html#">Contacts</a></li>
								<li><a href="http://like-themes.com/taxipark/homepage-2.html#">Pages</a></li>
							</ul>						
						</div>						
					</div>

				</div>
				<div className="col-lg-3 col-md-6 col-sm-6 col-ms-6">					
					<h4>Contact us</h4>
					<p><span className="yellow">Address:</span> 43 2-nd Avenue,  New York, NY 29004-7153</p>

					<ul className="address">
						<li><span className="fa fa-phone"></span>800-5-800</li>
						<li><span className="fa fa-envelope"></span><a href="http://like-themes.com/taxipark/homepage-2.html#">gettaxi@taxipark.co.uk</a></li>
						<li><span className="fa fa-skype"></span>gettaxipark</li>
					</ul>					
				</div>		
			</div>
		</div>
	</section>

	<footer>
		<div className="container">
			<a href="http://like-themes.com/">Like-themes</a> 2017 ?? All Rights Reserved <a href="http://like-themes.com/taxipark/homepage-2.html#">Terms of use</a>
			<a href="http://like-themes.com/taxipark/homepage-2.html#" className="go-top hidden-xs hidden-ms">1</a>
		</div>
	</footer>
        </>
    )
}

export default Home;