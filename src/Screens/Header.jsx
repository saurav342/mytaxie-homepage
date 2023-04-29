import { useState } from "react"

const Header = () => {
	
	const[toggle, setToggle] = useState(false);
	const handleOptions =() =>{
           setToggle(!toggle)
	}
	return (
		<>
			<div className="navbar-dark-transparent">	<div className="nav-wrapper" id="nav-wrapper">
				<nav className="navbar navbar-static navbar-affix affix dark" data-spy="affix">
					<div className="container">
						<div className="navbar-header">
							<button type="button" onClick={handleOptions} className="navbar-toggle collapsed">
							    <span className="sr-only">Toggle navigation</span>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
								{ toggle && (
									<>
									<ul className="list-group">
								       <li className="list-group-item"><a href="/">Home</a></li>
								       <li className="list-group-item"><a href="/flight">Get Flight</a></li>
								       <li className="list-group-item"><a href="/">Services</a></li>
							           <li className="list-group-item"><a href="/contact">Contact Us</a></li>
								       {/* <li className="list-group-item"><a href="/about">About Us</a></li> */}
								    </ul>
									</>
								)}
								</button>
							
							<a className="logo" href="/"><img src="assests/TaxiPark_files/logo-inner.png" alt="TaxiPark" /></a>
						</div>
						<div id="navbar" className="navbar-collapse collapse">
							<button type="button" className="navbar-toggle collapsed">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>
							<ul className="nav navbar-nav">
								{/* <li className="hasSub current_page_item">
									<a href=" #">Home</a>
									<ul className="sub-menu"><li><a href="  /index.html">Homepage 1</a></li><li className="current_page_item"><a href=" ">Homepage 2</a></li><li><a href="  /homepage-3.html">Homepage 3</a></li></ul>
								</li> */}
								<li><a href="/">Home</a></li>
								<li><a href="/flight">Get Flight</a></li>
								<li><a href="/flight">Services</a></li>
								{/* <li className="hasSub">
									<a href=" #">Our blog</a>
									<ul className="sub-menu"><li><a href="  /blog.html">classNameic Blog</a></li><li><a href="  /blog-3.html">Blog without Sidebar</a></li><li><a href="  /post.html">Blog Post</a></li></ul>
								</li> */}
								{/* <li className="hasSub">
									<a href=" #">Gallery</a>
									<ul className="sub-menu"><li><a href="  /gallery-2.html">Gallery 2-columns</a></li><li><a href="  /gallery-3.html">Gallery 3-columns</a></li><li><a href="  /gallery-4.html">Gallery 4-columns</a></li></ul>
								</li>
								<li><a href="  /testimonials.html">Testimonials</a></li> */}
								<li><a href="/contact">Contact Us</a></li>
								<li><a href="/about">About Us</a></li>
								{/* <li className="hasSub">
									<a href=" #">Pages</a>
									<ul className="sub-menu"><li><a href="  /typo.html">Typography</a></li><li><a href="  /shortcodes.html">Shortcodes</a></li></ul>
								</li>	 */}
												</ul>
						</div>
					</div>
				</nav>
			</div>
			</div>
		</>
	)

}

export default Header;