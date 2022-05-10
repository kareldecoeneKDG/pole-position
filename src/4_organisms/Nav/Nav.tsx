import React from 'react';
import logo from './logo-hollow.png';



function Nav() {
    return (
        <nav className="nav">

            {/* MOBILE NAV */}
            <div className="flex mobile">

                {/* LINKS */}
                <div className="nav-links">
                    <ul className="nav-links__list">
                        <div className="flex">
                            <a className="nav-links__list__logo" href="#">
                                <img className="logo logo-menu" src={logo} alt="Logo of Pole Position, F1 blog" />
                            </a>

                            <div className="nav-links__list__buttons flex">
                                <div>Switch</div>
                                <div className="icon-bg-lg"><i className="fa fa-times" aria-hidden="true"></i></div>
                            </div>
                        </div>

                        <div className="nav-links__list__items">
                            <a className="nav-links__list__items__link">
                                <li className="nav-links__list__items__link__item">Dashboard</li>
                            </a>
                            <a className="nav-links__list__items__link">
                                <li className="nav-links__list__items__link__item">Blog</li>
                            </a>
                            <a className="nav-links__list__items__link">
                                <li className="nav-links__list__items__link__item">Teams</li>
                            </a>
                            <a className="nav-links__list__items__link">
                                <li className="nav-links__list__items__link__item">Drivers</li>
                            </a>
                            <a className="nav-links__list__items__link">
                                <li className="nav-links__list__items__link__item">Grand Prixs</li>
                            </a>
                        </div>

                        <li>
                            <a className="nav__link button button-nav"><i className="fa fa-user" aria-hidden="true"></i> Karel Decoene</a>
                            <a className="nav__link button button-nav"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</a>
                        </li>
                    </ul>
                </div>

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