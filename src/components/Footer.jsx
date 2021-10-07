import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer-details">
      Made with{" "}
      <span role="img" aria-label="heart">
        💜
      </span>{" "}
      by
      <a
        href="https://www.linkedin.com/in/emenap/"
        rel="noopenr noreferrer"
        target="_blank"
        className="footer-logo"
      >
        <span className="footer-logo-img">&lt;&gt;</span> <span>Ernesto Mena</span>
      </a>
    </div>
    <div className="footer-location">
      CH,
      <span> Santiago</span>, 2021
    </div>
  </footer>
);

export default Footer;
