import React from "react";
import { Feature } from "../../components";
import { feature, features } from "../../data/whatGPT3.json";
import "./WhatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title={feature.title} text={feature.text} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        {features.map((item, index) => (
          <Feature key={item.title + index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default WhatGPT3;
