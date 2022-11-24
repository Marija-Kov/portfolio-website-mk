import hamMenu from './hamMenu.js';
import { guidesInit, originsInit, randomGuideAndOriginPos } from './guidesOrigins.js';
import { bkgChange, wrkParallax, navOnScroll, sendBtn } from './effects.js';
import { github, instagram, linkedin, twitter } from './variables.js'
import "../style/index.scss";
import githubIcon from '../images/github.png';
import twitterIcon from "../images/twitter.png";
import linkedinIcon from "../images/linkedin.png";
import instagramIcon from "../images/instagram.png";

github.src = githubIcon;
twitter.src = twitterIcon;
linkedin.src = linkedinIcon;
instagram.src = instagramIcon;

hamMenu();

navOnScroll();

bkgChange();

guidesInit();

originsInit();

randomGuideAndOriginPos();

wrkParallax();

sendBtn();















