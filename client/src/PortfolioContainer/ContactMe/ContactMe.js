import React, { useState } from "react";
import Typical from "react-typical";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import { useState } from "react";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBoolean] = useState(false);

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's keep in Touch"} title={"Contact Me"} />
      <div className="central-from">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical
              loop={Infinity}
              steps={["Get In Touch 📧 :email:", 1000]}
            />
          </h2>
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="message">Message</label>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}
