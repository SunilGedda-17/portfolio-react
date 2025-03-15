import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <img className="logo" src="./assets/images/navlogo.webp" alt="Logo" />
                <ul>
                    <li><a className="menu-item">Home</a></li>
                    <li><a className="menu-item">Skills</a></li>
                    <li><a className="menu-item">Projects</a></li>
                    <li><a className="menu-item">Contact</a></li>
                    <button className="contact-btn" onClick={() => {}}>Download CV</button>
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;
