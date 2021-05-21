import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav__bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navigation;
