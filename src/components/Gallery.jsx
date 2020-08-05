import React from "react";

function Gallery(props) {
  return (
    <div id="gallery" className="text-center">
      <div className="container">
        <h1>Gallery</h1>

        <div className="row gallery-items">
          {props.data.gallery.map((eachImg) => (
            <div className="col-md-4">
              <img
                className="img-fluid  img-size"
                src={process.env.PUBLIC_URL + eachImg.src}
                alt="img"
              />
              <div className="caption">
                <p>{eachImg.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
