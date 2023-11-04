import React from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

import "./css/MainNavigation.css";
import MainHeader from "./MainHeader.jsx";
import NavLinks from "./NavLinks.jsx";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Question Bank&ensp;
            <FaBook></FaBook>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <NavLinks />
          </div>
        </div>
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
