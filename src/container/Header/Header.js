import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../static";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <section className="header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="header__info"
      >
        <div className="header__badge">
          <div className="badge-cmp">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Ollie</h1>
            </div>
          </div>
          <div className="tag-cmp">
            <p className="p-text">Full-stack Web Developer</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 0.5 }}
        className="header__img"
      >
        <img src={images.profile} alt="profile-image" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile-circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="header__circles"
      >
        {[images.node, images.react, images.python].map((circle, index) => (
          <div className="circle-cmp" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(Header, "home");
