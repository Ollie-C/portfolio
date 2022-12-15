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
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="header__info"
      >
        <div className="header__badge">
          <div className="badge-cmp">
            <h1 className="head-text">Hey, I'm Ollie.</h1>
          </div>

          <div className="tag-cmp">
            <p className="p-text">a full-stack web developer</p>
          </div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="tag-cmp">
              <p className="p-text">
                I'm a London-based developer with a minimalist approach to
                building beautiful, seamless full-stack applications.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [-50, 0], opacity: [0, 1] }}
        transition={{ delay: 2, duration: 1 }}
        className="header__scroll"
      >
        <div className="header__navdown">
          <a href="#about">
            <HiChevronDoubleDown className="header__button" />
          </a>
        </div>
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
