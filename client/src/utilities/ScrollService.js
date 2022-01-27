import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";

export default class ScrollService {
  static scrollHandler = new ScrollService();
  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
<<<<<<< HEAD
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewPort);
=======
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewPort);
>>>>>>> c2af4fa3566e4562476b464723d161534f853df3
  }
  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let homeScreen = document.getElementById("Home");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientReact();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewPort = (event) => {
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let fullyVisible = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
