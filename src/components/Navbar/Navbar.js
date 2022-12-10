import React, { useState } from "react";
import { images } from "../../static";
import "./Navbar.scss";
import { HiMenuAlt4, HiX, HiFolderDownload } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>OLLIE C.</h2>
      </div>
      <ul className="navbar__links">
        {["home", "about", "projects", "skills", "contact"].map((item) => (
          <li className="navbar__link p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__cv">
        <HiFolderDownload />
        <h3>CV</h3>
      </div>

      <div className="navbar__menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a onClick={() => setToggle(false)} href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
