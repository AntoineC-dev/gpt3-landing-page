import React from "react";
import "./CTA.css";
import { ctaData } from "../../data";

const CTA = () => {
  return (
    <div className="gpt3__cta">
      <div className="gpt3__cta-content">
        <p>{ctaData.link}</p>
        <h3>{ctaData.title}</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">{ctaData.ctaTxt}</button>
      </div>
    </div>
  );
};

export default CTA;
