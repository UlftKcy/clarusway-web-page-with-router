import React from "react";
import cw from "../assets/cw.svg";
import { NavLink, useHistory } from "react-router-dom";

export default function Navbar() {
  let history = useHistory();
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-sm px-5 py-2 border-bottom fixed-top">
      <div className="container">
        <a
          onClick={() => {
            history.push("/");
          }}
          className="navbar-brand"
        >
          <img src={cw} style={{ width: "50px", cursor: "pointer" }}></img>{" "}
          Clarusway Web Design
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsiblenavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="collapsiblenavbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              exact
              activeClassName="active"
            >
              <a className="nav-link">Home</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              style={{ textDecoration: "none" }}
              activeClassName="active"
            >
              <a className="nav-link">About</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              style={{ textDecoration: "none" }}
              activeClassName="active"
            >
              <a className="nav-link">Services</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
