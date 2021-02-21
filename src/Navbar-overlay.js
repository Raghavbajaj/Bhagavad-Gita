import React, { useState, useEffect } from "react";
import child from "./assets/child.webp";

function Navbaroverlay() {
  const [headerColor, setHeaderColor] = useState("white");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor("inline") : setHeaderColor("none");
  };
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <div style={{ display: headerColor }} id="nav-bar-overlay">
      <a href="" id="nav-bar-item-top">
        Wanna-Talk
      </a>
      <a href="" id="nav-bar-item-Ask">
        Ask
      </a>
      <a href="" id="nav-bar-item-About">
        About&nbsp;&nbsp;&&nbsp;&nbsp;Contact
      </a>
      <a href="" id="nav-bar-item-Avatar">
        <img src={child} />
      </a>
    </div>
  );
}

export default Navbaroverlay;
