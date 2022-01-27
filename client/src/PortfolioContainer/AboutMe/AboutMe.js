import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

<<<<<<< HEAD
export default function AboutMe(props){
=======

export default function AboutMe(props) {
>>>>>>> c2af4fa3566e4562476b464723d161534f853df3
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Zoo fleet management application is an essential tool in the operation of our ever-growing fleet of autonomous. We build tools to interact with and monitor our vehicles remotely",
    highlights: {
      bullets: [
        "I can do this",
        "I can do that",
        "But I really dont know what Im doing",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
<<<<<<< HEAD
    <div className="about-me-container screen-container" id={props.id || ""}>
=======
    <div
      className="about-me-container screen-container"  
      id={props.id || ""}
    >
>>>>>>> c2af4fa3566e4562476b464723d161534f853df3
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
<<<<<<< HEAD
=======
                
>>>>>>> c2af4fa3566e4562476b464723d161534f853df3
                Hire Me
              </button>
              <a
                href="Sheyla_Popovich_Resume.pdf"
                download="Sheyla_Popovich_Resume.pdf "
              >
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
