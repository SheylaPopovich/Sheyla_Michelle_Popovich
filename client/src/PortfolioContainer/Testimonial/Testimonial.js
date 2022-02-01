import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
      <ScreenHeading title={"Projects"} subHeading={"View my Work"} />
      <section className="testimonial-section" id={props.id || ""}>
        {/* <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div>
                <img className="projects" src={i2E} />
              </div>
              <div>
                <img className="projects" src={codingQuiz} />
              </div>
              <div>
                <img className="projects" src={dayplanner} />
              </div>
              <div>
                <img className="projects" src={getFlexed} />
              </div>
              <div>
                <img className="projects" src={getFlexed2} />
              </div>
            </OwlCarousel>
          </div>
        </div> */}

        <div class="container">
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
        </div>
      </section>
     <button>See more on GITHUB</button>
    </div>
  );
}
