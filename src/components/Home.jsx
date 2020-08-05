import React from "react";

function Home(props) {
  return (
    <div id="home" >

      <div className="row justify-content-end">
          <div className="home-content col-md-4">
            <p>{props.data.home_content}</p>
        </div>
        <div className="col-md-1">
        </div>
      </div>
    </div>
  );
}

export default Home;
