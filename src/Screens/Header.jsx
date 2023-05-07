import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleOptions = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="navbar-dark-transparent">
        {" "}
        <div className="nav-wrapper" id="nav-wrapper">
          <nav
            className="navbar navbar-static navbar-affix affix dark"
            data-spy="affix"
          >
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  onClick={handleOptions}
                  className="navbar-toggle collapsed"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                  {toggle && (
                    <>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <a href="/">Home</a>
                        </li>
                        <li className="list-group-item">
                          <a href="/flight">Get Flight</a>
                        </li>
                        <li className="list-group-item">
                          <a href="/">Get Cab</a>
                        </li>
                        <li className="list-group-item">
                          <a href="/contactus">Contact Us</a>
                        </li>
                        {/* <li className="list-group-item"><a href="/about">About Us</a></li> */}
                      </ul>
                    </>
                  )}
                </button>

                <a className="logo" href="/">
                  <img
                    src="assests/TaxiPark_files/logo-inner.png"
                    alt="TaxiPark"
                  />
                </a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <button type="button" className="navbar-toggle collapsed">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>
                <ul className="nav navbar-nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/flight">Get Flight</a>
                  </li>
                  <li>
                    <a href="/">Get Cab</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact Us</a>
                  </li>
                  {/* <li><a href="/about">About Us</a></li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
