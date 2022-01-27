import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                aria
                label="link to facebook "
                href="https://www.facebook.com/sheyla.michelle.303"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                aria
                label="link to instagram"
                href="https://www.instagram.com/sheyla_popovich/"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                aria
                label="link to linkedin"
                href="https://www.linkedin.com/in/sheyla-popovich-fsd/"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                aria
                label="link to github"
                href="https://github.com/SheylaPopovich"
              >
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I'm <span className="highlighted-text">Sheyla</span>
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
                    "Enthusiastic Dev",
                    1000,
                    "React Dev",
                    1000,
                    "More About Me",
                    1000,
                    "A little More About Me",
                    1000,
                  ]}
                />
              </h1>
              </span>
              <span className="profile-role-tagline">
                Full Stack Developer
              </span>
           
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
             onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
           
              Hire Me
            </button>
            <a
              aria
              label="link to resume"
              href="Sheyla_Popovich_Resume.pdf"
              download="Sheyla_Popovich_Resume.pdf "
            >
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
