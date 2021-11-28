import React, { FC } from "react";
import "./Feature.css";

interface IFeature {
  title: string;
  text: string;
}

const Feature: FC<IFeature> = ({ title, text }) => {
  return (
    <div className="gpt3__features-container_feature">
      <div className="gpt3__features-container_feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
