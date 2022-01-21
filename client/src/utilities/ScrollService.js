import {TOTAL_SCREENS} from './commonUtils';
import {Subject, subject} from "rxjs"

export default class ScrollService{
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()


    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewPort);
    }
    scrollToHireMe = ()=>{
        let contactMeScreen = document.getElementById("Contact Me")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }
    scrollToHome = ()=>{
        let homeScreen = document.getElementById("Home")
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }
    isElementInView=(elem, type)=>{
        let rec = elem.getBoundingClientReact();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >=0;
        let completelyVisible = elementTop >= 0 && elementBottom <=window.innerHeight;

        
    }
}