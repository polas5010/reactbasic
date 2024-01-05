import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="navigation">
        <li className="nav-link active">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>

        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
