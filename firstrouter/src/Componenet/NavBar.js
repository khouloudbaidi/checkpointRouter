import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>React Router</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink
            exact
            to="/"
            className="navLink "
            activeClassName="selectedLink"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="navLink "
            activeClassName="selectedLink"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="navLink "
            activeClassName="selectedLink"
          >
            About
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
