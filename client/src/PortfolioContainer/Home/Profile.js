import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/sheyla.michelle.303">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/sheyla_popovich/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/sheyla-popovich-fsd/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/SheylaPopovich">
              <i className="fa fa-github-square"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span>
              {" "}
              Sheyla <span className="highlighted-text">.is()</span> 
              <br></br>
              <span>Sheyla Popovich</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🙋",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "React Dev 📱",
                    1000,
                    "More About Me",
                    1000,
                    "A little More About Me",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
              I wish to create innovative websites while displaying the highest level of professionalism to achieve absolute client satisfaction.
              </span>
            </span>
          </div>
          <div className="profile-options">
                  <button className="btn primary-btn">
                      {""}
                      Hire Me{" "}
                  </button>
                  <a href="Sheyla_Popovich_Resume.pdf" download="Sheyla Sheyla_Popovich_Resume.pdf "></a>
          </div>
        </div>
      </div>
    </div>
  );
}