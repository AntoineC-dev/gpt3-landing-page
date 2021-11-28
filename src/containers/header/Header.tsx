import React from "react";

import { ai, people, data } from "./imports";
import "./Header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">{data.contentTitle}</h1>
        <p>{data.contentTxt}</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email adress" />
          <button type="button">{data.buttonTxt}</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>{data.peopleTxt}</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
