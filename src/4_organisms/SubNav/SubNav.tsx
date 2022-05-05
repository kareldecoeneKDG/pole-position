import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const subNav = document.querySelector(".subnav");
const items = document.querySelectorAll(".subnav__list__item");

// Show menu when clicking first item
subNav?.addEventListener("click", () => {
    console.log("testttt");

    items.forEach((item) => {
        item.classList.toggle("active");
    });
});

function SubNav() {
    return (
        <nav className="subnav">
            <ul className="subnav__list">
                <li className="subnav__list__item">
                    <p className="subnav__list__item__link selected-item">{window.location.pathname}</p>
                </li>

                <li className="subnav__list__item">
                    <NavLink className="subnav__list__item__link" style={({ isActive }) => (isActive ? { backgroundColor: '#222222', color: '#FFFFFF' } : {})} to="/dashboard">Saved Blogposts</NavLink>
                </li>

                <li className="subnav__list__item">
                    <a className="subnav__list__item__link" href="#">Favorite driver</a>
                </li>

                <li className="subnav__list__item">
                    <a className="subnav__list__item__link" href="#">Favorite team</a>
                </li>

                <li className="subnav__list__item">
                    <a className="subnav__list__item__link" href="#">Settings</a>
                </li>
            </ul>

            <i className="subnav__icon fa fa-chevron-down" aria-hidden="true"></i>
        </nav>
    );
}

export default SubNav;