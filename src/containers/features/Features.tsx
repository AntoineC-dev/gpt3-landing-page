import React from "react";
import { Feature } from "../../components";
import { featuresData } from "../../data";
import "./Features.css";

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">{featuresData.title}</h1>
        <p>{featuresData.link}</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.features.map((item, index) => (
          <Feature key={item.title + index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
