import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="nav-wrapper">
      <h1 className="brand">Handloom</h1>

      <nav className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/Men" className="nav-item">Men</NavLink>
        <NavLink to="/Women" className="nav-item">Women</NavLink>
        <NavLink to="/Contact" className="nav-item">Contact</NavLink>
        <NavLink to="/cart" className="nav-item">Cart</NavLink>

        <div className="profile-dropdown" ref={dropdownRef}>
          <div className="profile-icon" onClick={toggleDropdown}>👤</div>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/login" className="dropdown-item">Login</NavLink>
              <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
              <NavLink to="/Logout" className="dropdown-item">Logout</NavLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;