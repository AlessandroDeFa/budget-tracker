import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSettingsApplications } from "react-icons/md";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <div className="container-header">
        <div>
          <span className="container-toggle">
            <GiHamburgerMenu className="toggle-nav" />
          </span>
          <span className="title-section">Dashboard</span>
        </div>
        <div>
          <MdSettingsApplications className="toggle-mode" />
        </div>
      </div>
    </header>
  );
};
