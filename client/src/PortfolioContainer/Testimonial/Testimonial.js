import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from  "../../utilities/ScrollService";
import Animations from '../../utilities/Animations';


export default function Testimonial() {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
<div>
  {}
</div>
  )
}
