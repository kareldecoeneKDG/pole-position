import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import headerLogoLight from './Logo-big-light.png';
import headerLogoDark from './Logo-big-dark.png';
import backgroundRectangles from './bg-rectangles.png';
import backgroundRectanglesDark from './bg-rectangles-dark.png';

import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation()

    return (
        <header className="header">

            {/* BG RECTANGLES 1 */}
            <img className="bg-rect bg-rect1 light" src={backgroundRectangles} alt="Background rectangles illustration" />
            <img className="bg-rect bg-rect1 dark" src={backgroundRectanglesDark} alt="Background rectangles dark illustration" />



            {/* HEADER CONTENT */}
            <div className="header__container">
                <img className="header__logo light" src={headerLogoLight} alt="Full logo Pole Position" />
                <img className="header__logo dark" src={headerLogoDark} alt="Full logo Pole Position" />

                <p className="header__p p">
                    {t('header_intro')}
                </p>

                <Link className="button button-primary skew" to="/register">
                    <span>{t('header_cta')} <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                </Link>



                {/* <img className="header__img-placeholder" src={placeholder} alt="Full logo Pole Position" /> */}

                {/* PREVIEWS
                <img className="header__img-placeholder mobile" src={mobilePreview} alt="Preview mobile Pole Position" />
                <img className="header__img-placeholder tablet light" src={tabletLightkPreview} alt="Preview tablet Pole Position" />
                <img className="header__img-placeholder tablet dark" src={tabletDarkPreview} alt="Preview tablet Pole Position" /> */}

                {/* MOBILE PREVIEW */}
                <picture>
                    <source srcSet="/images/pages/webp/mobile.webp" type="image/webp" />
                    <source srcSet="/images/pages/jpg/mobile.jpg" type="image/jpg" />
                    <img className="header__img-placeholder mobile" src="/images/pages/jpg/mobile.jpg" alt="Preview mobile Pole Position" />
                </picture>

                {/* TABLET PREVIEWS */}
                <picture>
                    <source srcSet="/images/pages/webp/tablet-light.webp" type="image/webp" />
                    <source srcSet="/images/pages/jpg/tablet-light.jpg" type="image/jpg" />
                    <img className="header__img-placeholder tablet light" src="/images/pages/jpg/desktop-light.jpg" alt="Preview tablet Pole Position" />
                </picture>

                <picture>
                    <source srcSet="/images/pages/webp/tablet-dark.webp" type="image/webp" />
                    <source srcSet="/images/pages/jpg/tablet-dark.jpg" type="image/jpg" />
                    <img className="header__img-placeholder tablet dark" src="/images/pages/jpg/desktop-dark.jpg" alt="Preview tablet Pole Position" />
                </picture>

                {/* DESKTOP PREVIEWS */}
                <picture>
                    <source srcSet="/images/pages/webp/desktop-light.webp" type="image/webp" />
                    <source srcSet="/images/pages/jpg/desktop-light.jpg" type="image/jpg" />
                    <img className="header__img-placeholder desktop light" src="/images/pages/jpg/desktop-light.jpg" alt="Preview desktop Pole Position" />
                </picture>

                <picture>
                    <source srcSet="/images/pages/webp/desktop-dark.webp" type="image/webp" />
                    <source srcSet="/images/pages/jpg/desktop-dark.jpg" type="image/jpg" />
                    <img className="header__img-placeholder desktop dark" src="/images/pages/jpg/desktop-dark.jpg" alt="Preview desktop Pole Position" />
                </picture>
            </div>



            {/* SCROLL DOWN ICON */}
            <a className="header__scrolldown" href="#latestnews">
                <i className="header__scrolldown__icon fa fa-chevron-down" aria-hidden="true"></i>
            </a>



            {/* BG RECTANGLES 2 */}
            <img className="bg-rect bg-rect2 light" src={backgroundRectangles} alt="Background rectangles illustration" />
            <img className="bg-rect bg-rect2 dark" src={backgroundRectanglesDark} alt="Background rectangles dark illustration" />
        </header>
    );
}

export default Header;