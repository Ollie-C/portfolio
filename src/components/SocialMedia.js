import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="app__social-icon">
        <BsLinkedin />
      </div>
      <div className="app__social-icon">
        <BsInstagram />
      </div>
      <div className="app__social-icon">
        <FaFacebookF />
      </div>
    </div>
  );
};

export default SocialMedia;
