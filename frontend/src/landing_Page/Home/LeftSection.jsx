import React from "react";
import './Home.css'
function leftSection({
  imageURl,
  GameName,
  GameDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-2 ">
          <img className="gamepic" src={imageURl} alt="" />
        </div>

        <div className="col-6 p-3">
          <h1 style={{ marginLeft: "8px" }}>{GameName}</h1>
          <p className="p-3 fs-5">{GameDescription}</p>
          <div>
            <a
              href={tryDemo}
              style={{ textDecoration: "none", marginLeft: "15px" }}
            >
              Try Demo
              <i
                class="fa-solid fa-arrow-right-long"
                style={{ marginLeft: "9px" }}
              ></i>
            </a>
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

          <div className="mt-4">
            <a href={googlePlay} style={{ marginLeft: "14px" }}>
              <img src="/Images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img
                src="/Images/appstoreBadge.svg"
                alt=""
                style={{ marginLeft: "50px", textDecoration: "none" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default leftSection;
