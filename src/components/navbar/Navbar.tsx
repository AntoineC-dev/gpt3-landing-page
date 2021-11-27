import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import useToggle from "../../hooks/useToggle";
import "./Navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#library">Library</a>
    </p>
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
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
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
