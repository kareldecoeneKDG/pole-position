import React from 'react';
//import './Nav.scss';
import logo from './logo-hollow.png';

function Nav() {
    return (
        <nav className="nav">

            {/* MOBILE NAV */}
            <div className="flex mobile">

                {/* BURGER */}
                <div className="burger">
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>

                <a href="#">
                    <img className="logo" src={logo} alt="Pole Position logo mobile"></img>
                </a>

                <div className="profile icon-bg">
                    <i className="profile__icon fa fa-user" aria-hidden="true"></i>
                </div>
            </div>

            {/* DESKTOP NAV */}
            <div className="desktop">

            </div>
        </nav>
    );
}

export default Nav;