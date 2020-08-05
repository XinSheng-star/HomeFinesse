import React from "react";


function Header() {
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top navbar-expand-md navbar-light"
    >
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#page-top">
            <img src={process.env.PUBLIC_URL + '/img/home_logo.jpg'}  alt="Logo" width="60" class="d-inline-block align-middle mr-2"></img>
            <span >home finesse</span>
          </a>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">
              Gallery
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
