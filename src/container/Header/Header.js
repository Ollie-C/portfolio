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
        transition={{ duration: 2 }}
        className="header__info"
      >
        <div className="header__badge">
          <div className="badge-cmp">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hey, I'm</p>
              <h1 className="head-text">Ollie</h1>
            </div>
          </div>
          <div className="tag-cmp">
            <p className="p-text">Full-stack Web Developer</p>
          </div>
        </div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ delay: 2, duration: 2 }}
          className="header__info"
        >
          <div className="header__badge">
            <div className="tag-cmp">
              <h3>Why did I invite you here?</h3>
              <p className="p-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                ullam necessitatibus. Beatae, expedita! Ut ducimus nobis, quos
                quod blanditiis.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ delay: 4, duration: 2 }}
          className="header__info"
        >
          <HiChevronDoubleDown href="#about" className="header__button" />
        </motion.div>
      </motion.div>

      {/* <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 0.5 }}
        className="header__img"
      >
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
      </motion.div> */}
    </section>
  );
};

export default AppWrap(Header, "home");
