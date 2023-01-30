import React, { useRef, useState } from "react";
import "./sidebar.css";
import { MdDashboard } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { BsPiggyBankFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Sidebar = ({ open }) => {
  return (
    <aside className={`sidebar ${open ? "open" : "closed"}`}>
      <div className="container-sidebar">
        <ul className="nav-list">
          <li className={`list-nav ${open ? "open" : "closed"}`}>
            <Link to="/" className="title-icon">
              Dashboard
            </Link>
            <Link
              to="/"
              className={`container-icon-nav ${open ? "open" : "closed"}`}
            >
              <MdDashboard className="icon-nav" />
            </Link>
          </li>
          <li className={`list-nav ${open ? "open" : "closed"}`}>
            <Link to="/analytics" className="title-icon">
              Analytics
            </Link>
            <Link
              to="/analytics"
              className={`container-icon-nav ${open ? "open" : "closed"}`}
            >
              <IoMdStats className="icon-nav" />
            </Link>
          </li>
          <li className={`list-nav ${open ? "open" : "closed"}`}>
            <Link to="/budget" className="title-icon">
              Pianificazione
            </Link>
            <Link
              to="/budget"
              className={`container-icon-nav ${open ? "open" : "closed"}`}
            >
              <BsPiggyBankFill className="icon-nav" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
