import React, { useState } from "react";
import "./SideBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import NewPost from "../CreatNewPost/NewPost";

const SideBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = () => {
    const token = localStorage.getItem("Token");
    if (token) {
      localStorage.removeItem("Token");
      localStorage.removeItem("User");
      navigate("/Login/SignIn");
    }
  };

  return (
    <>
      <div className="sidebar-toggle">
        <img
          onClick={toggleMenu}
          className="menu-icon"
          src="/icons/icons8-menu-50.png"
          alt="menu"
        />
      </div>

      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src="/icons/favicon.ico" alt="logo" />
          <h1>Snapgram</h1>
          <img
            onClick={toggleMenu}
            className="menu-icon close-icon"
            src="/icons/icons8-menu-50.png"
            alt="close"
          />
        </div>

        <div className="sidebar-links">
          <NavLink to="/profile" className="sidebar-link" onClick={toggleMenu}>
            <img src="/icons/profile-placeholder.svg" alt="Profile" />
            <span>Profile</span>
          </NavLink>

          <NavLink to="/HomePage" className="sidebar-link" onClick={toggleMenu}>
            <img src="/icons/home.svg" alt="Home" />
            <span>Home</span>
          </NavLink>

          <NavLink to="/explore" className="sidebar-link" onClick={toggleMenu}>
            <img src="/icons/posts.svg" alt="Explore" />
            <span>Explore</span>
          </NavLink>

          <NavLink to="/people" className="sidebar-link" onClick={toggleMenu}>
            <img src="/icons/people.svg" alt="People" />
            <span>People</span>
          </NavLink>

          <NavLink to="/saved" className="sidebar-link" onClick={toggleMenu}>
            <img src="/icons/save.svg" alt="Saved" />
            <span>Saved</span>
          </NavLink>

          <button
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            className="sidebar-link post-button"
          >
            <img src="/icons/posts.svg" alt="Create" />
            <span>Create Post</span>
          </button>
        </div>

        <div className="sidebar-footer">
          <NavLink onClick={() => { logout(); toggleMenu(); }} className="sidebar-link">
            <img src="/icons/logout.svg" alt="Logout" />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>

      <NewPost id="myModal" />
    </>
  );
};

export default SideBar;