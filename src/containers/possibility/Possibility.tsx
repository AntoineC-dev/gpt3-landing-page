import React from "react";
import "./Possibility.css";
import { possibilityPng } from "../../assets";
import { possibilityData } from "../../data";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityPng} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>{possibilityData.links}</h4>
        <h1 className="gradient__text">{possibilityData.title}</h1>
        <p>{possibilityData.text}</p>
        <h4>{possibilityData.links}</h4>
      </div>
    </div>
  );
};

export default Possibility;
