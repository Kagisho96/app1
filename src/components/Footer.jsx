import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

  
export const Footer = () => {
  return (
    <section className="footer">
    <p>

        <div className="footer-title">
            Copyright Ⓒ 2023 PITSI KAGISHO. All Rights Reserved.
        </div>
        <div className="icons">
         <a href="https://www.youtube.com/"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
         </a>
         <a href="https://www.facebook.com/kagisho.prodence"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
         </a>
         <a href="https://twitter.com/PitsiKagisho" className="twitter social">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
         </a>
         <a href="https://www.instagram.com/pitsi_kagisho/"
            className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
         </a>
         <a href="https://www.linkedin.com/in/kagisho-pitsi-5a1094103/"
            className="youtube social">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
         </a>
         <a href="https://github.com/Kagisho96"
            className="youtube social">
            <FontAwesomeIcon icon={faGithub} size="2x" />
         </a>
        </div>

    </p>
    
    </section>
 
  );
};