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
        let contactMeScreen = document.getElementById("Home")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }
}