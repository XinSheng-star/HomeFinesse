import React from "react";

function Footer(props) {
  return (

    // row 1 - col 1 - Company Heading and brief content

    <div id="footer" className="text-center text-md-left mt-5 pt-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6  my-md-0 my-2">
            <h2 className="footer">{props.data.footer_heading}</h2>
            <p className="pr-5">{props.data.footer_content}</p>
          </div>

          {/* row 1 - col 2 - Important Links */}


          <hr className="clearfix w-100 d-md-none"></hr>
          <div className="col-md-3 my-md-0 my-2 footer-list">
            <h4>Links</h4>
            <ul>
              {props.data.footer_links.map((eachLink) => {
                return (
                  <li>
                    <a href={eachLink.href}>{eachLink.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>

           {/* row 1 - col 3 - Contact Info */}

          <hr className="clearfix w-100 d-md-none"></hr>
          <div className="col-md-3 my-md-0 my-2 footer-list">
            <h4>Contact Us</h4>
            <ul>
              <li>{props.data.contact.address.street_address}</li>
              {props.data.contact.phone.map((phone) => {
                return (
                  <li>
                    <i className="fa fa-phone"></i> {phone}
                  </li>
                );
              })}

              <li>
                <i className="fa fa-envelope"></i> {props.data.contact.email}
              </li>
            </ul>
          </div>
        </div>
      </div>

       {/* row 2 - col 1 - Copyright Info */}

      <div className="container-fluid copyright pt-3 mt-5">
        <div className="row mx-2">
          <div className="col-md-9">
            <p>
              <small className="text-white-50">
              © {new Date().getFullYear()}. All Rights Reserved.
              </small>
            </p>
          </div>

 {/* row 2 - col 2 - Social Buttons */}

          <div className="col-md-3 text-center text-md-right">
            <ul className="list-unstyled list-inline ">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com"
                  className="text-white-50 mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.twitter.com"
                  className="text-white-50 mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com"
                  className="text-white-50 mx-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
