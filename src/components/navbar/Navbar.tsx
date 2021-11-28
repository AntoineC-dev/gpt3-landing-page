import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./Navbar.css";
import { logoSvg } from "../../assets";
import { navigationData } from "../../data";
import { useToggle } from "../../hooks";

const Menu = () => (
  <>
    {navigationData.menuItems.map((item, index) => (
      <p key={item.label + index}>
        <a href={item.href}>{item.label}</a>
      </p>
    ))}
  </>
);

const Actions = () => (
  <>
    <p>Sign in</p>
    <button type="button">Sign up</button>
  </>
);

const Navbar = () => {
  const [menuOpen, toggleMenuOpen] = useToggle(); // default to false
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logoSvg} alt="logo" />
        </div>
        <nav className="gpt3__navbar-links_container">
          <Menu />
        </nav>
      </div>
      <div className="gpt3__navbar-sign">
        <Actions />
      </div>
      <div className="gpt3__navbar-menu">
        {menuOpen ? (
          <RiCloseLine color="#fff" size={27} onClick={toggleMenuOpen} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={toggleMenuOpen} />
        )}
        {menuOpen && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <Actions />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
