import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
// import { images } from "../../static";
import { AppWrap } from "../../wrapper";

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// };

const Header = () => {
  return (
    <section className="header">
      <div className="status">
        <div className="status__circle"></div>
        <p className="status__text">READY TO WORK WITH YOU</p>
      </div>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="header__info"
      >
        <div className="header__title">
          <h1>HEY, I'm Ollie,</h1>
        </div>
        <div className="header__description">
          <p>
            a frontend developer from Dorset, UK with a passion for creative
            technology and nature.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AppWrap(Header, "home");
