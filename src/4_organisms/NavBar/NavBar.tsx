import React, { useState } from "react";

import logo from './logo-hollow.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>

            <a href="#">
                <img className="logo" src={logo} alt="Pole Position logo mobile"></img>
            </a>

            <div className="profile icon-bg">
                <i className="profile__icon fa fa-user" aria-hidden="true"></i>
            </div>

            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/service">Service</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;