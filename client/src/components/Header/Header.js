import React, { useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSettingsApplications } from "react-icons/md";
import "./header.css";

export const Header = ({ handleClick }) => {
  return (
    <header>
      <div className="container-header">
        <div>
          <span className="container-toggle">
            <GiHamburgerMenu onClick={handleClick} className="toggle-nav" />
          </span>
          <span className="title-section">Dashboard</span>
        </div>
        <div className="container-toggle-mode">
          <MdSettingsApplications className="toggle-mode" />
        </div>
      </div>
    </header>
  );
};
