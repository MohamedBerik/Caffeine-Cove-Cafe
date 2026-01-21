import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
    } catch (err) {
      console.log(err);
    }
    logout();
    navigate("/");
  };

  return (
    <header id="header">
      <nav className="navbar">
        <NavLink to="/" className="logo-link">
          <img src="img/logo.png" alt="Caffeine Cove" className="logo" />
        </NavLink>
        <ul className="nav-list">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {!user ? (
            <>
              <div className="">
                <li className="btn btn-outline-success">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="btn btn-outline-success">
                  <NavLink to="/register">Register</NavLink>
                </li>
              </div>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-danger ml-5"
                  // style={{
                  //   background: "none",
                  //   border: "none",
                  //   cursor: "pointer",
                  // }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
