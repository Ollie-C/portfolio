import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiCodewars } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/oliver-cross/"
        className="app__social-icon"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Ollie-C"
        className="app__social-icon"
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.codewars.com/users/ori-x"
        className="app__social-icon"
        target="_blank"
      >
        <SiCodewars />
      </a>
    </div>
  );
};

export default SocialMedia;
