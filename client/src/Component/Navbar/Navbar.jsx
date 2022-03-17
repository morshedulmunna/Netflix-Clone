import "./Navbar.scss";
import { FaSearch } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // When Scrolling===>>>
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  // When Scrolling===****>

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://i.ibb.co/VVQ7PfF/netflix-logo-png-2562.png"
            alt="Logo"
          />
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/series">
            <span>Series</span>
          </Link>
          <Link to="/movies">
            <span>Movies</span>
          </Link>
          <Link to="/popular">
            <span>New And Popular</span>
          </Link>
          <Link to="/mylist">
            <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <FaSearch className="icon" />
          <span>KID</span>
          <MdNotificationsActive className="icon" />
          <img src="https://i.ibb.co/LzSqx8v/Card-user.jpg" alt="Profile Pic" />
          <div className="profile">
            <IoMdArrowDropdownCircle className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
