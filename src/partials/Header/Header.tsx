import React from "react";
import { Link, NavLink } from "react-router-dom"

//styles
import "./Header.scss";

export const Header = () => {
  return (
    <div className="Header">

      <div className="navbar">
      <NavLink className="nav" to="/products"> Product list</NavLink>
      <NavLink className="nav" to="/product/add"> Add </NavLink>
      <NavLink className="nav" to="/login"> Login </NavLink>
      <NavLink className="nav" to="/register"> Register </NavLink>
      </div>
    </div>
  );
};
