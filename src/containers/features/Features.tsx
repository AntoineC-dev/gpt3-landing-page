import React from "react";
import { Feature } from "../../components";
import { features, text, title } from "../../data/features.json";
import "./Features.css";

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">{title}</h1>
        <p>{text}</p>
      </div>
      <div className="gpt3__features-container">
        {features.map((item, index) => (
          <Feature key={item.title + index} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Features;
