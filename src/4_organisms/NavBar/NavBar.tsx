import React, { useState } from "react";

import logo from './logo-hollow.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
    console.log(checked);

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
                <div className="top">
                    <img className="logo logo-menu" src={logo} alt="Logo of Pole Position, F1 blog" />

                    <div className="toggle-container">
                        <input type="checkbox" id="switch" name="theme" checked={checked} onChange={(e) => setChecked(e.target.checked)} /><label htmlFor="switch" onClick={() => setChecked((c) => c)}>Toggle</label>
                    </div>
                </div>

                <div className="links">
                    <a href="/home">Dashboard</a>
                    <a href="/about">Blog</a>
                    <a href="/service">Teams</a>
                    <a href="/contact">Drivers</a>
                    <a href="/contact">Grand Prixs</a>
                </div>

                <div className="bottom">
                    <a className="button button-primary" href="/"><i className="chevron-first fa fa-user" aria-hidden="true"></i> Karel Decoene</a>
                    <a className="button button-secondary" href="/"><i className="chevron-first fa fa-sign-out" aria-hidden="true"></i> Sign out</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;