import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: "Zoox’s fleet management application is an essential tool in the operation of our ever-growing fleet of autonomous robotaxis. We build tools to interact with and monitor our vehicles remotely",
        highlight: {
            bullets: [
                "I can do this",
                "I can do that",
                "But I really dont know what Im doing",
            ],
            heading: "Here are a Few Highlights:"
        }
    }

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
      </div>
    </div>
  );
}
