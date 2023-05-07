import React from "react";
  
export const Footer = () => {
  return (
    <section>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 PITSI KAGISHO. All Rights Reserved.
        </p>
        <a href="https://www.linkedin.com/in/joshua-garcia-90b101120/">LinkedIn</a>
        <a href="https://github.com/joshua-garcia">GitHub</a>
        <a href="https://twitter.com/joshua_garcia">Twitter</a>
        <a href="https://www.instagram.com/joshua_garcia/">Instagram</a>
        <a href="https://www.facebook.com/joshua_garcia/">Facebook</a>
        <a href="https://www.youtube.com/channel/UC-6-6-6-6-6-6-6-6/">YouTube</a>

        {/* <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div> */}
    </section>
 
  );
};