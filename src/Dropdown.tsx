import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

interface DropdownProps {
    setSelected: Function,
    selected: string
}

function Dropdown({ selected, setSelected }: DropdownProps) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Saved blogposts', 'Favorite driver', 'Favorite team', 'Account'];

    const subNavButton = document.querySelector('.dropdown-btn');
    let backUpSelected = "";

    subNavButton?.addEventListener("click", () => {
        if (selected != "Select page") {
            backUpSelected = selected;
        }

    {/* MAKE BETTER */}
        if (isActive != true) {
            setSelected("Select page")
            console.log("test2");
        }
        else if (selected == "Select page") {
            console.log('test');
            setSelected(backUpSelected)
        }
    })

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>{selected} <i className="fa fa-chevron-down" aria-hidden="true"></i></div>

            {isActive && (
                <div className="dropdown-content">
                    {/*{options.map((option) => (
                        <div
                            onClick={(e) => {
                                setSelected(option)
                                setIsActive(false)
                            }}
                            className="dropdown-item"
                        >
                            {option}
                        </div>
                        ))}*/}

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
        </div>
    );
}

export default Dropdown;