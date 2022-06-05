import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from './logo-hollow.png';
import sun from './sun.png';
import moon from './moon.png';

function Navbar() {

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

    //if device prefers dark mode, start blog in darkmode
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

    // Get the element based on ID + icons
    const checkbox = document.getElementById("switch");
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');

    const changeTheme = () => {
        if (theme === 'dark') {
            theme = 'light';
            changeThemeToLight()
        } else {
            theme = 'dark';
            changeThemeToDark()
        }
    }

    // Apply retrived theme to the website
    checkbox?.addEventListener('change', changeTheme);
    sunIcon?.addEventListener('click', changeTheme);
    moonIcon?.addEventListener('click', changeTheme);

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
            <div className="links-desktop nav-webapp desktop">
                <NavLink to="/dashboard" className="links-desktop__link dashboard-menu-item">Dashboard <i className="fa fa-chevron-down" aria-hidden="true"></i></NavLink>
                <NavLink to="/blog" className="links-desktop__link">Blog</NavLink>
                <NavLink to="/driverStandings" className="links-desktop__link standings-menu-item">Standings <i className="fa fa-chevron-down" aria-hidden="true"></i></NavLink>
                <NavLink to="/grandprixs" className="links-desktop__link">Grand Prixs</NavLink>
            </div>

            {/* Desktop nav items */}
            <div className="links-desktop nav-website desktop">
                <a href="#benefits" className="links-desktop__link">Benefits</a>
                <a href="#platform" className="links-desktop__link">Pricing</a>
                <a href="#newsletter" className="links-desktop__link">Newsletter</a>
            </div>

            {/* Desktop light/dark theme switch */}
            <div className="toggle-container desktop">
                <img className="toggle-container__icon sun" src={sun} alt="sun icon theme switch" />
                <img className="toggle-container__icon moon" src={moon} alt="moon icon theme switch" />
                <input type="checkbox" id="switch" name="theme" checked={checked} onChange={(e) => setChecked(e.target.checked)} /><label htmlFor="switch" onClick={() => setChecked((c) => c)}>Toggle</label>
            </div>

            {/* Desktop account button */}
            <Link className="button button-primary desktop skew" to="/dashboard">
                <span><i className="chevron-first fa fa-user" aria-hidden="true"></i> Karel Decoene</span>
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
                        <img className="toggle-container__icon sun" src={sun} alt="sun icon theme switch" />
                        <img className="toggle-container__icon moon" src={moon} alt="moon icon theme switch" />
                        <input type="checkbox" id="switch" name="theme" checked={checked} onChange={(e) => setChecked(e.target.checked)} /><label htmlFor="switch" onClick={() => setChecked((c) => c)}>Toggle</label>
                    </div>
                </div>

                <div className="links nav-webapp">
                    <NavLink to="/dashboard" className="mobile-link dashboard-menu-item">Dashboard</NavLink>
                    <NavLink to="/blog" className="mobile-link">Blog</NavLink>
                    <NavLink to="/driverStandings" className="mobile-link standings-menu-item">Standings</NavLink>
                    <NavLink to="/grandprixs" className="mobile-link">Grand Prixs</NavLink>
                </div>

                <div className="links nav-website">
                    <Link to="#benefits" className="mobile-link">Benefits</Link>
                    <Link to="#platform" className="mobile-link">Pricing</Link>
                    <Link to="#newsletter" className="mobile-link">Newsletter</Link>
                </div>

                <div className="bottom">
                    <Link className="button button-primary skew" to="/dashboard">
                        <span><i className="chevron-first fa fa-user" aria-hidden="true"></i> Karel Decoene</span>
                    </Link>
                    <a className="button button-secondary skew" href="/"><span><i className="chevron-first fa fa-sign-out" aria-hidden="true"></i> Sign out</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;