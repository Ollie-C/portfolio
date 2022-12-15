import React, { useEffect, useState } from "react";
import { client } from "../../client";
import "./Navbar.scss";
import { HiMenuAlt4, HiX, HiFolderDownload } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [cv, setCV] = useState(null);

  useEffect(() => {
    const query = `*[_type == 'files'] {
  
      fileUrl,
      "cvURL": fileUrl.asset->url}`;

    client
      .fetch(query)
      .then((data) => {
        setCV(data);
      })
      .catch(console.error);
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="#home">
          <h2>OLLIE C.</h2>
        </a>
      </div>
      <ul className="navbar__links">
        {["about", "projects", "skills", "contact"].map((item) => (
          <li className="navbar__link p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      {cv && (
        <a className="navbar__cv" href={`${cv[0].cvURL}?dl=`}>
          <HiFolderDownload />
          <h3>CV</h3>
        </a>
      )}
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
