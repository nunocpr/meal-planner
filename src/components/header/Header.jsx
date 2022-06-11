import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../css/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false),
    toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  const renderMenu = () => {
    if (isOpen) {
      return (
        <div className="menu-wrapper">
          <nav className="expanded-menu">
            <Link to='/'>Home</Link>
            <Link to='/calendar'>Calendar</Link>
            <Link to='/recipe'>Recipe</Link>
            <Link to='/cookbook'>Cookbook</Link>
          </nav>
        </div>
      )
    } else {
      return
    }
  }
  return (
    <>
      <header>
        <div className="logo">
          [Sooper]
        </div>
        <button
          className={`expand-btn ${isOpen ? 'menu-open' : ''}`}
          onClick={toggleMenu}
        >
          Menu
        </button>
        <nav className="menu">
          <Link to='/'>Home</Link>
          <Link to='/calendar'>Calendar</Link>
          <Link to='/recipe'>Recipe</Link>
          <Link to='/cookbook'>Cookbook</Link>
        </nav>
      </header>
      {renderMenu()}
    </>
  )
}

export default Header;