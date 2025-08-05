import React from "react";
import "../styles/marquecards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faAndroid,
  faGithub,
  faDropbox,
  faBitcoin,
  faAmazon,
  faVimeo,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

const icons = [
  faVimeo,
  faAmazon,
  faAndroid,
  faApple,
  faBitcoin,
  faDropbox,
  faGithub,
  faHtml5,
];

const WhatWeCraft = () => {
  return (
    <section className="whatwecraft-icons">
      <div className="marquee">
        <div className="marquee-group">
          {icons.map((icon, idx) => (
            <div className="icon-card" key={idx}>
              <FontAwesomeIcon icon={icon} className="icon-inner" />
            </div>
          ))}
        </div>
        <div className="marquee-group duplicate" aria-hidden="true">
          {icons.map((icon, idx) => (
            <div className="icon-card" key={`dup-${idx}`}>
              <FontAwesomeIcon icon={icon} className="icon-inner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCraft;
