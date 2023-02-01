import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../static";
import { AppWrap } from "../../wrapper";
import { HiChevronDoubleDown } from "react-icons/hi";

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
      <div className="status">
        <div className="status__circle"></div>
        <p className="status__text">READY TO WORK ON SOMETHING INCREDIBLE</p>
      </div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="header__info"
      >
        <div className="header__badge">
          <div className="badge-cmp">
            <h1 className="head-text">Hey! I'm Ollie</h1>
          </div>

          <div className="tag-cmp">
            <p className="p-text">
              I'm a London-based
              <span className="p-text-bold"> full stack developer</span> with a
              passion for building beautiful, seamless full-stack applications
            </p>
          </div>

          <div className="tag-cmp">
            <p className="p-text">and a love for the environment</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="header__circles"
      >
        {[images.react, images.node, images.python].map((circle, index) => (
          <div className="circle-cmp" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(Header, "home");
