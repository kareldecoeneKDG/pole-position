import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from './logo-hollow.png';

const Navbar = () => {

    /* --- MOBILE MENU --- */
    // Mobile menu switcher
    const [isOpen, setIsOpen] = useState(false);

    /* Close menu after clicking menu item */
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            setIsOpen(!isOpen);
        })
    })

    // Prevent scrolling when menu is open
    if (isOpen == true) {
        document.body.style.overflowY = 'hidden';
        document.body.style.height = '100%';
    }
    else {
        document.body.style.overflowY = 'visible';
        document.body.style.height = 'initial';
    }



    /* --- LIGHT/DARK THEME --- */
    // Light/dark theme
    let theme = localStorage.getItem('data-theme');

    const changeThemeToDark = () => {
        document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
        localStorage.setItem("data-theme", "dark") // save theme to local storage
        theme = "dark";
    }

    const changeThemeToLight = () => {
        document.documentElement.setAttribute("data-theme", "light") // set theme light
        localStorage.setItem("data-theme", 'light') // save theme to local storage
        theme = "light";
    }

    if (localStorage.getItem('data-theme') == '') {
        let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

        if (darkThemeMq.matches == true) {
            changeThemeToDark()
        } else {
            changeThemeToLight()
        }
    }
    else {
        document.documentElement.setAttribute("data-theme", localStorage.getItem('data-theme')!);
    }

    // Get the element based on ID
    const checkbox = document.getElementById("switch");

    // Apply retrived them to the website
    checkbox?.addEventListener('change', () => {
        //let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage

        if (theme === 'dark') {
            theme = 'light';
            changeThemeToLight()
            //checkbox.checked = true;
        } else {
            theme = 'dark';
            changeThemeToDark()
        }
    });

    //toggle checkbox
    const [checked, setChecked] = useState(false);



    return (
        <div className="Navbar">
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>

            {/* Pole Position logo */}
            <Link to="/">
                <img className="logo" src={logo} alt="Pole Position logo mobile"></img>
            </Link>

            {/* Desktop nav items */}
            <div className="links-desktop desktop">
                <NavLink to="dashboard" className="links-desktop__link">Dashboard</NavLink>
                <NavLink to="blog" className="links-desktop__link">Blog</NavLink>
                <NavLink to="driverStandings" className="links-desktop__link">Standings</NavLink>
                <NavLink to="grandprixs" className="links-desktop__link">Grand Prixs</NavLink>
            </div>

            {/* Desktop light/dark theme switch */}
            <div className="toggle-container desktop">
                <input type="checkbox" id="switch" name="theme" checked={checked} onChange={(e) => setChecked(e.target.checked)} /><label htmlFor="switch" onClick={() => setChecked((c) => c)}>Toggle</label>
            </div>

            {/* Desktop account button */}
            <Link className="button button-primary desktop" to="/dashboard">
                <i className="chevron-first fa fa-user" aria-hidden="true"></i> Karel Decoene
            </Link>

            {/* Mobile account button */}
            <Link className="profile icon-bg mobile" to="/dashboard">
                <i className="profile__icon fa fa-user" aria-hidden="true"></i>
            </Link>

            {/* Mobile sliding nav */}
            <div className={`nav-items ${isOpen && "open"}`}>
                <div className="top">
                    <Link to="/">
                        <img className="logo logo-menu" src={logo} alt="Pole Position logo mobile"></img>
                    </Link>

                    <div className="toggle-container">
                        <input type="checkbox" id="switch" name="theme" checked={checked} onChange={(e) => setChecked(e.target.checked)} /><label htmlFor="switch" onClick={() => setChecked((c) => c)}>Toggle</label>
                    </div>
                </div>

                <div className="links">
                    <NavLink to="dashboard" className="mobile-link">Dashboard</NavLink>
                    <NavLink to="blog" className="mobile-link">Blog</NavLink>
                    <NavLink to="driverStandings" className="mobile-link">Standings</NavLink>
                    <NavLink to="grandprixs" className="mobile-link">Grand Prixs</NavLink>
                </div>

                <div className="bottom">
                    <Link className="button button-primary" to="/dashboard">
                        <i className="chevron-first fa fa-user" aria-hidden="true"></i> Karel Decoene
                    </Link>
                    <a className="button button-secondary" href="/"><i className="chevron-first fa fa-sign-out" aria-hidden="true"></i> Sign out</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;