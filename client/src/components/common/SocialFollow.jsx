import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const iconstyle = {
  margin: "0 1rem",
  transition: "transform 250ms",
  display: "inline-block",
  color: "grey"
  
}
export default function SocialFollow() {
  return (
    
    <div class="social-container">
      <a href="https://www.linkedin.com/in/rentxiang/" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" style={iconstyle}/>
      </a>
      <a href="https://github.com/rentxiang" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" style={iconstyle}/>
      </a>
      
</div>
    
  );
}