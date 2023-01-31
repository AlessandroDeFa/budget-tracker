import React, { useRef, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdSettingsApplications } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { Switch } from "@mui/material";
import "./header.css";

export const Header = ({ handleClick, toggleTheme }) => {
  const [themesettings, setThemeSettings] = useState(false);

  const handleTheme = () => {
    setThemeSettings(!themesettings);
  };

  const title = window.location.pathname.replace("/", "");

  return (
    <header>
      <div className="container-header">
        <div>
          <span className="container-toggle">
            <GiHamburgerMenu onClick={handleClick} className="toggle-nav" />
          </span>
          <span className="title-section">{`${
            title === ""
              ? "Dashboard"
              : title.charAt(0).toUpperCase() + title.substring(1)
          }`}</span>
        </div>
        <div className="container-toggle-mode">
          <MdSettingsApplications
            onClick={handleTheme}
            className="toggle-mode"
          />
        </div>
        <div className={`theme-settings ${themesettings ? "open" : "closed"}`}>
          <div className="theme-container">
            <div className="settings">Settings</div>
            <div className="toggle-settings">
              <span>
                <span>
                  <BsFillSunFill className="icon-theme" />
                </span>
                <span className="text-theme">Light</span>
              </span>
              <span>
                <Switch onChange={toggleTheme} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    // fare il sistema di dark mode e light mode e applicare classe ai link "active" quando si é nella pagina selezionata
  );
};
