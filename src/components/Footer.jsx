import React from "react";
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        <img src="\images\ise logo.png" alt="" />
      </div>
      <div className="foot1">
        <ul className= "foot-links-mobile">
          <li>
            <NavLink className="foot-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="foot-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="foot-link" to="/services">
              Services 
            </NavLink>
          </li>
          <li>
            <NavLink className="foot-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="foot-link" to="/worker">
              <span className="worker">Become a Worker</span>
            </NavLink>
          </li>
        </ul>
        <div className="icons">
          <div className="mobile-icons">
            <ul className="foot-links-mobile">
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaInstagram/></a></li>
              <li><a href="#"><FaTwitter/></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="foot2">
        <div className="top">
          <li><a href="#">Isework 2022 all rights reserved</a></li>
        </div>
        <div className="column">
          <div className="list1">
            <li><a href="#">Privacy Policy</a></li>
          </div>
          <div className="list2">
            <li><a href="#">Terms & condition</a></li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;