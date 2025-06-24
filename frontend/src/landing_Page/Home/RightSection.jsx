import React from "react";
import './Home.css'
function RightSection({
  imageURl,
  GameName,
  GameDescription,
  learnMore,
}) {
  return (
    <div className="container mt-2">
      <div className="row p-5 mt-5">
        <div className="col-6 p-3 ">
          <h1 style={{ marginLeft: "8px" }}>{GameName}</h1>
          <p className="p-3 fs-5">{GameDescription}</p>
          <div>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ marginLeft: "9px" }}
              ></i>
            </a>
          </div>
        </div>
     

        <div className="col-6 p-3 mb-5">
          <img
          className="gamepic"
            src={imageURl}
            style={{ height: "350px", width: "500px" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
