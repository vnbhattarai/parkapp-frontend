import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/reservation">Route</Link>
        </li>
      </ul>
    </nav>
  </header>;

export default Nav;
