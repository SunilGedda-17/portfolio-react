import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>

            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper" >
                <div className="nav-content" >
                    <div className="logo-container">
                        <img className="logo" src="./assets/images/logo.png" alt="Logo" />
                    </div>


                    {/* Fixed menuOpen issue here */}
                    <ul className={openMenu ? "nav-menu open" : "nav-menu"}>
                        <li><a href="#home" className="menu-item">Home</a></li>
                        <li><a href="#skills" className="menu-item">Skills</a></li>
                        <li><a href="#projects" className="menu-item">Projects</a></li>
                        <li><a href="#contact" className="menu-item">Contact Me</a></li>

                        <button className="contact-btn" onClick={() => window.open("https://drive.google.com/uc?export=download&id=1LNOvKf0_4xQ3CyyECOGY4xh_lrK8ccoF", "_blank")}>
                            Download CV
                        </button>

                    </ul>

                    {/* Fixed class attribute to className */}
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
