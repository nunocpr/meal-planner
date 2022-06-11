import React from "react";
import { Link } from "react-router-dom";
import '../../css/header.css';

const Header = () => (
  <>
    <header>
      <div className="logo">
        [Sooper]
      </div>
      <nav className="menu">
        <Link to='/'>Home</Link>
        <Link to='/calendar'>Calendar</Link>
        <Link to='/recipe'>Recipe</Link>
        <Link to='/cookbook'>Cookbook</Link>
      </nav>
    </header>
    <hr />
  </>
)

export default Header;