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
    <div className="container2">
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
            <a
              target="_blank"
              href="https://initiation-to-execution.herokuapp.com/login"
            >
              <img src={i2E} alt="Avatar" class="image" />
              <div class="overlay1">
                <div class="text">
                  A project management app with the ability to create individual
                  projects and collaborate with others within a secure
                  environment.
                </div>
              </div>
            </a>
          </div>

          <div class="container">
            <a
              target="_blank"
              href="https://sheylapopovich.github.io/coding-quiz-challenge/"
            >
              <img src={codingQuiz} alt="Avatar" class="image" />
              <div class="overlay2">
                <div class="text">
                  A timed quiz covering the topic of "Coding" with multiple
                  choice answers. The app will feature dynamically updated HTML
                  and CSS powered by JavaScript code.
                </div>
              </div>
            </a>
          </div>

          <div class="container">
            <a
              target="_blank"
              href="https://sheylapopovich.github.io/get-flexed/"
            >
              <img src={getFlexed} alt="Avatar" class="image" />
              <div class="overlay3">
                <div class="text">
                  A workout app that allows the user to select the type of
                  workout they prefer by matching their selected filters and
                  then inspires them with an inspirational quote.
                </div>
              </div>
            </a>
          </div>

          <div class="container">
            <a target="_blank" href="https://get-flexed.herokuapp.com/">
              <img src={getFlexed2} alt="Avatar" class="image" />
              <div class="overlay4">
                <div class="text">
                  This app was developed as a safe place workout social
                  platform. Users can create an account, workouts, and interact
                  with other users.
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
