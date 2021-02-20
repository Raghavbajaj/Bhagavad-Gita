import React from "react";
import child from "./assets/child.webp";
import "./App.css";
function Navbar() {
  return (
    <div className="nav-bar">
      <h3 id="site-title">ANSWERME</h3>
      <div id="sections">
        <a href="" id="about-section">
          ABOUT
        </a>
        <a href="" id="contact-section">
          CONTACT
        </a>
        <a href="" id="other-section">
          OTHER
        </a>
        <a href="" id="ask-section">
          ASK
        </a>
        <a href="" className="Avatar">
          <img src={child} alt="My Aatar" />
        </a>
      </div>
    </div>
  );
}
export default Navbar;
