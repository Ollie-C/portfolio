import React from "react";
import { NavDots, SocialMedia } from "../components";
import "./AppWrap.scss";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper">
          <Component />
          <div className="copyright">
            <p className="p-text">@2022 Ollie C</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavDots active={idName} />
      </div>
    );
  };

export default AppWrap;
