import React, { useRef, useState, useEffect } from "react";
import "./sidebar.css";
import { MdDashboard } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { BsPiggyBankFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Sidebar = ({ open }) => {
  const [activeLink, setActivelink] = useState("");

  useEffect(() => {
    setActivelink(window.location.pathname);
  }, []);

  return (
    <aside className={`sidebar ${open ? "open" : "closed"}`}>
      <div className="container-sidebar">
        <ul className="nav-list">
          <li className={`list-nav ${open ? "open" : "closed"}`}>
            <Link to="/" className="title-icon">
              Dashboard
            </Link>
            <Link
              id="link"
              to="/"
              className={`container-icon-nav ${open ? "open" : "closed"} ${
                activeLink === "/" ? "active" : ""
              }`}
            >
              <MdDashboard className="icon-nav" />
            </Link>
          </li>
          <li className={`list-nav ${open ? "open" : "closed"}`}>
            <Link to="/analytics" className="title-icon">
              Analytics
            </Link>
            <Link
              id="link"
              to="/analytics"
              className={`container-icon-nav ${open ? "open" : "closed"} ${
                activeLink === "/analytics" ? "active" : ""
              }`}
            >
              <IoMdStats className="icon-nav" />
            </Link>
          </li>
          <li className={`list-nav ${open ? "open" : "closed"}`}>
            <Link to="/budget" className="title-icon">
              Budget
            </Link>
            <Link
              id="link"
              to="/budget"
              className={`container-icon-nav ${open ? "open" : "closed"} ${
                activeLink === "/budget" ? "active" : ""
              }`}
            >
              <BsPiggyBankFill className="icon-nav" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
