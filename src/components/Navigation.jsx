import React, { useState } from "react";
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navigation = () => {
  window.addEventListener("scroll", function () {
    const navigation = document.querySelector(".navigation")
    navigation.classList.toggle("active",window.scrollY > 100)
  })

  // Toggle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <div className="nav">
      <div className="nav-list">
        <div className="nav-logo">
          <NavLink className="nav-logoo" to="/">
            <img src="\images\ise logo.png" alt=""/>
          </NavLink>
        </div>
        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/services">
              Services 
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/worker">
              <span className="worker">Become a Worker</span>
            </NavLink>
          </li>
        </ul>
        <div className='toggle' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <div className="close"><FaTimes /></div> : <div className="open"><FaBars /></div>} 
        </div>
      </div>
    </div>
  );
}

export default Navigation;