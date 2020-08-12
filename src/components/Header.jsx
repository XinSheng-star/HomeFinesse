import React from "react";
import {Link} from "react-router-dom";


function Header() {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top navbar-expand-md navbar-light"
    >
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#page-top">
            <img src={process.env.PUBLIC_URL + '/img/home_logo.jpg'}  alt="Logo" width="60" className="d-inline-block align-middle mr-2"></img>
            <span >home finesse</span>
          </a>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <Link to="/" className="nav-link" >
              Home
              </Link>
          </li>
          <li className="nav-item">
          <Link to="/services" className="nav-link" >
              Services
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/gallery" className="nav-link" >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/nopage" className="nav-link" >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
