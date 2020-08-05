import React from "react";

function Services(props) {
    return (
        <div id="services" className="text-center">
        <div className="container">
            <h1>Services</h1>
            <p>We specialize in customizing to the needs of each customer and project,
             no matter the size and scope.
            </p>
          </div>
          <div className="row py-5">

          {props.data.services.map(eachService => 
              <div className="col-md-4">
              <div className="service-desc">
                <h3>{eachService.name}</h3>
                <p>{eachService.text}</p>
              </div>
            </div>
          )}

         </div>
          </div>
    );
}

export default Services;