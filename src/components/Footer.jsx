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
<section className="footer flex justify-center py-10">
  <p>
    <div className="footer-title text-gray-600 text-center">
      Copyright Ⓒ 2023 PITSI KAGISHO. All Rights Reserved.
    </div>
    <div className="icons flex justify-center mt-4">
      <a href="https://www.youtube.com/" className="social text-red-600">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/kagisho.prodence" className="social text-blue-700 ml-6">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/PitsiKagisho" className="social text-blue-500 ml-6">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/pitsi_kagisho/" className="social text-pink-600 ml-6">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/kagisho-pitsi-5a1094103/" className="social text-blue-600 ml-6">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/Kagisho96" className="social text-gray-700 ml-6">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  </p>
</section>
 
  );
};