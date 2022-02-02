import React, { useEffect } from "react";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import i2E from "../../assets/Testimonial/i2E.gif";
import codingQuiz from "../../assets/Testimonial/coding-quiz.jpg";

import getFlexed from "../../assets/Testimonial/get_flexed.jpg";
import getFlexed2 from "../../assets/Testimonial/get_flexed2.jpg";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div>
      <section className="testimonial-section" id={props.id || ""}>
        {" "}
        <ScreenHeading title={"Projects"} subHeading={"View my Work"} />
        {/* <div class="container1">
          <div class="row">
            <div class="col">
              <img className="projects" src={i2E} />
            </div>
            <div class="col">
              <img className="projects" src={getFlexed} />
            </div>
            <div class="w-100"></div>
            <div class="col">
              <img className="projects" src={codingQuiz} />
            </div>
            <div class="col">
              <img className="projects" src={getFlexed2} />
            </div>
          </div>
        </div> */}
      </section>

      <div className="container">
        <div className="row">
          <div class="container">
            <img src={i2E} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">Hello World</div>
            </div>
          </div>

          <div class="container">
            <img src={codingQuiz} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">Hello World</div>
            </div>
          </div>

          <div class="container">
            <img src={getFlexed} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">Hello World</div>
            </div>
          </div>

          <div class="container">
            <img src={getFlexed2} alt="Avatar" class="image" />
            <div class="overlay">
              <div class="text">Hello World</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
