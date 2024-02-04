import './Main.css';
import React from "react";

function Header() {
  return (
    <header>
      <video src={require('./img/main_vid.mp4')} loop autoPlay muted></video>
      <h1>Community Compass</h1>
      <div className="row">
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
