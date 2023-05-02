import React from "react";
import "./style.css";

function Banner() {
  return (
    <div className="banner-container">
      <img
        className="banner-image"
        src="https://as2.ftcdn.net/v2/jpg/01/57/28/31/1000_F_157283191_ALJy3vuwlPKVdDtPPCZsPpRk3BksFlwF.jpg"
        alt="Banner"
      />
      <div className="banner-text-container">
        <h1 className="banner-text">
          <span className="first-letter">R</span>ecipe{" "}
          <span className="first-letter">F</span>or{" "}
          <span className="first-letter">S</span>uccess!
        </h1>
        <div className="banner-text-smoke-effect"></div>
      </div>
      <div className="banner-image-smoke-effect"></div>
    </div>
  );
}

export default Banner;
