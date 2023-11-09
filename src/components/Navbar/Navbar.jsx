import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () => {  
  return (
    <div className="navbar-container">
      <h1 className="logo">logo</h1>
      <nav>
        <ul className="List-container">
          <li>
            <Link to='/category/electronics' className="navbar-button">
              Electronicos
            </Link>
          </li>
          <li>
            <Link to='/category/jewelery' className="navbar-button">
              Joyeria
            </Link>
          </li>
          <li>
            <Link to="/category/men's-clothing" className="navbar-button">
              Ropa de hombre
            </Link>
          </li>
          <li>
            <Link to="/category/women's-clothing" className="navbar-button">
              Ropa de mujer
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
