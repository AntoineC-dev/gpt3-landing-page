import React from "react";

import { aiPng, peoplePng } from "../../assets";
import { headerData } from "../../data";
import "./Header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{headerData.contentTitle}</h1>
        <p>{headerData.contentTxt}</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email adress" />
          <button type="button">{headerData.buttonTxt}</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={peoplePng} alt="people" />
          <p>{headerData.peopleTxt}</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={aiPng} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
