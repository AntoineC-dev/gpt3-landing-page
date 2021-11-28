import React from "react";

import "./Footer.css";
import { footerData } from "../../data";
import { logoSvg } from "../../assets";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">{footerData.title}</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>{footerData.ctaTxt}</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoSvg} alt="logo" />
          <p>{footerData.legalTxt}</p>
        </div>
        {footerData.footerMenus.map((menu, index) => (
          <div key={menu.name + index} className="gpt3__footer-links_div">
            <h4>{menu.name}</h4>
            {menu.items.map((link, index) => (
              <p key={link.label + index}>{link.label}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="gpt3__footer-copyright">
        <p>{footerData.copyrightTxt}</p>
      </div>
    </div>
  );
};

export default Footer;
