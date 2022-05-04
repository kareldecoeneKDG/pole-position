import React from 'react';
//import './Header.scss';
import headerLogo from './header-logo.png';
import placeholder from './placeholder.png';
import backgroundRectangles from './bg-rectangles.png';

function Header() {
    return (
        <header className="header">

            {/* BG RECTANGLES 1 */}
            <img className="bg-rect bg-rect1" src={backgroundRectangles} alt="Background rectangles"/>

            {/* HEADER CONTENT */}
            <div className="header__container">
                <img className="header__logo" src={headerLogo} alt="Full logo Pole Position" />

                <p className="header__p p">
                    Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                </p>

                <a className="button button-primary" href="#">Join the community <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></a>

                <img className="header__logo" src={placeholder} alt="Full logo Pole Position" />
            </div>

            {/* SCROLL DOWN ICON */}
            <a className="header__scrolldown" href="#">
                <i className="header__scrolldown__icon fa fa-chevron-down" aria-hidden="true"></i>
            </a>

            {/* BG RECTANGLES 2 */}
            <img className="bg-rect bg-rect2" src={backgroundRectangles} alt="Background rectangles"/>
        </header>
    );
}

export default Header;