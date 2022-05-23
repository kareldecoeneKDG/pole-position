import React from 'react';
import { Link } from 'react-router-dom';

import headerLogoLight from './Logo-big-light.png';
import headerLogoDark from './Logo-big-dark.png';
import placeholder from './placeholder.png';
import backgroundRectangles from './bg-rectangles.png';
import backgroundRectanglesDark from './bg-rectangles-dark.png';

import mobilePreview from './mobile.webp';
import tabletDarkPreview from './tablet-dark.webp';
import tabletLightkPreview from './tablet-light.webp';
import desktopDarkPreview from './desktop-dark.webp';
import desktopLightPreview from './desktop-light.webp';

function Header() {
    return (
        <header className="header">

            {/* BG RECTANGLES 1 */}
            <img className="bg-rect bg-rect1 light" src={backgroundRectangles} alt="Background rectangles" />
            <img className="bg-rect bg-rect1 dark" src={backgroundRectanglesDark} alt="Background rectangles dark" />

            {/* HEADER CONTENT */}
            <div className="header__container">
                <img className="header__logo light" src={headerLogoLight} alt="Full logo Pole Position" />
                <img className="header__logo dark" src={headerLogoDark} alt="Full logo Pole Position" />

                <p className="header__p p">
                    Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                </p>

                <Link className="button button-primary" to="/register">
                    Join the community <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i>
                </Link>

                {/* <img className="header__img-placeholder" src={placeholder} alt="Full logo Pole Position" /> */}

                {/* PREVIEWS */}
                <img className="header__img-placeholder mobile" src={mobilePreview} alt="Preview mobile Pole Position" />
                <img className="header__img-placeholder tablet light" src={tabletLightkPreview} alt="Preview tablet Pole Position" />
                <img className="header__img-placeholder tablet dark" src={tabletDarkPreview} alt="Preview tablet Pole Position" />
                <img className="header__img-placeholder desktop light" src={desktopLightPreview} alt="Preview tablet Pole Position" />
                <img className="header__img-placeholder desktop dark" src={desktopDarkPreview} alt="Preview tablet Pole Position" />
            </div>

            {/* SCROLL DOWN ICON */}
            <Link className="header__scrolldown" to="latestnews">
                <i className="header__scrolldown__icon fa fa-chevron-down" aria-hidden="true"></i>
            </Link>

            {/* BG RECTANGLES 2 */}
            <img className="bg-rect bg-rect2 light" src={backgroundRectangles} alt="Background rectangles" />
            <img className="bg-rect bg-rect2 dark" src={backgroundRectanglesDark} alt="Background rectangles dark" />
        </header>
    );
}

export default Header;