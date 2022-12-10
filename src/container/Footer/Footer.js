import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../static";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  return (
    <section className="footer">
      <h1 className="head-text">Get in Touch!</h1>
      <p className="p-text">iio.olivercross@gmail.com</p>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
