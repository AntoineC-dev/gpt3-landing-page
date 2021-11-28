import React from "react";

import "./Brand.css";
import { atlassianPng, dropboxPng, googlePng, shopifyPng, slackPng } from "../../assets";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={googlePng} alt="google" />
      </div>
      <div>
        <img src={slackPng} alt="slack" />
      </div>
      <div>
        <img src={atlassianPng} alt="atlassian" />
      </div>
      <div>
        <img src={dropboxPng} alt="dropbox" />
      </div>
      <div>
        <img src={shopifyPng} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
