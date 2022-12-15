import React, { useState } from "react";
import "./Footer.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  const [email, setEmail] = useState(null);

  const clickHandler = () => {
    const query = `*[_type == "files" && title match "Email"] {
      description,
    }`;

    client.fetch(query).then((data) => {
      setEmail(data[0]);
    });
  };

  return (
    <>
      <section className="footer">
        <h1 className="head-text">I'd love to hear from you!</h1>

        {email ? (
          <p className="p-text">{email.description}</p>
        ) : (
          <button className="footer__button" onClick={() => clickHandler()}>
            SHOW EMAIL
          </button>
        )}
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
