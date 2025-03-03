import React from "react";
import { Link } from "react-router-dom";




const Header = ({ toggleCart }) => {
  return (
    <div className="header">
      <div className="logo">
        <h1>Food App</h1>
      </div>
      
      <div className="nav-items">

      <ul className="nav-items">
          <li className="item-home"><Link to="/">Home</Link></li>
         <li><button className="cart-toggle" onClick={toggleCart}>
          Cart
        </button>
        </li>
        </ul>
        
      </div>
    </div>
  );
};


export default Header;
