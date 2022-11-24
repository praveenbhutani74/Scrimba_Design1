import React from "react";
import Logo from "../assets/logo.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <img src={Logo} className="Logo-Image" alt="Logo" />
        <h4 className="H3">React Course - Project 1</h4>
      </nav>
    </>
  );
};

export default Navbar;
