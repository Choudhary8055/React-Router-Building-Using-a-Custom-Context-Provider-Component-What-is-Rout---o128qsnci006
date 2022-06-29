import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
export const NavBar = () => {
  return (
    <>
      <Navbar>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/home" className="home-link">
                Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/" className="index-link">
                Index
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </Navbar>
    </>
  );
};
