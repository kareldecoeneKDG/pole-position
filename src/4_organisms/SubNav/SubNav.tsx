import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

interface SubnavProps {
    setSelected: Function,
    selected: string
}

function Subnav({ selected, setSelected }: SubnavProps) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Saved blogposts', 'Favorite driver', 'Favorite team', 'Account'];

    {/* Tried to put placeholder "Select page" when dropdown is active */ }
    {/*const subNavButton = document.querySelector('.dropdown-btn');
    let backUpSelected = "";

    subNavButton?.addEventListener("click", () => {

        //Menu opens
        if (selected == "Select page") {

            //first take backup
            backUpSelected = selected;
            console.log("backup taken");
        }

        //Menu is open
        if(isActive == true) {
            setSelected("Select page")
            console.log("placeholder shown");
        }
        //Menu gets closed
        else {
            setSelected(backUpSelected)
            console.log("backup inserted");
        }
    })*/}

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>{selected} <i className="fa fa-chevron-down" aria-hidden="true"></i></div>

            {/* SUBNAV DASHBOARD */}
            {isActive && (
                <div className="dropdown-content mobile">
                    <NavLink to="/dashboard" onClick={(e) => {
                        setSelected(options[0])
                        setIsActive(false)
                    }} className="dropdown-item">Saved Blogposts</NavLink>

                    <NavLink to="/driver" onClick={(e) => {
                        setSelected(options[1])
                        setIsActive(false)
                    }} className="dropdown-item">Favorite driver</NavLink>

                    <NavLink to="/team" onClick={(e) => {
                        setSelected(options[2])
                        setIsActive(false)
                    }} className="dropdown-item">Favorite team</NavLink>

                    <NavLink to="/account" onClick={(e) => {
                        setSelected(options[3])
                        setIsActive(false)
                    }} className="dropdown-item">Account</NavLink>
                </div>
            )}

            <div className="dropdown-content-desktop desktop">
                <NavLink to="/dashboard" onClick={(e) => {
                    setSelected(options[0])
                    setIsActive(false)
                }} className="dropdown-item">Saved Blogposts</NavLink>

                <NavLink to="/driver" onClick={(e) => {
                    setSelected(options[1])
                    setIsActive(false)
                }} className="dropdown-item">Favorite driver</NavLink>

                <NavLink to="/team" onClick={(e) => {
                    setSelected(options[2])
                    setIsActive(false)
                }} className="dropdown-item">Favorite team</NavLink>

                <NavLink to="/account" onClick={(e) => {
                    setSelected(options[3])
                    setIsActive(false)
                }} className="dropdown-item">Account</NavLink>
            </div>

            {/* SUBNAV STANDINGS */}
            {isActive && (
                <div className="dropdown-content mobile standings-subnav">
                    <NavLink to="/driverStandings" onClick={(e) => {
                        setSelected(options[0])
                        setIsActive(false)
                    }} className="dropdown-item">Drivers</NavLink>

                    <NavLink to="/teamStandings" onClick={(e) => {
                        setSelected(options[1])
                        setIsActive(false)
                    }} className="dropdown-item">Teams</NavLink>
                </div>
            )}

            <div className="dropdown-content-desktop desktop standings-subnav">
                <NavLink to="/driverStandings" onClick={(e) => {
                    setSelected(options[0])
                    setIsActive(false)
                }} className="dropdown-item">Drivers</NavLink>

                <NavLink to="/teamStandings" onClick={(e) => {
                    setSelected(options[1])
                    setIsActive(false)
                }} className="dropdown-item">Teams</NavLink>
            </div>
        </div>
    );
}

export default Subnav;