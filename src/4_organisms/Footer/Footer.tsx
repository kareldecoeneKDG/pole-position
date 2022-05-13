import React from 'react';

import Socials from '../../3_molecules/Socials/Socials';

import logoFooter from './logo-footer-mobile.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="mobile">
                {/* LOGO + SCROLLUP */}
                <div className="top flex">
                    <img className="logoFooter" src={logoFooter} alt="logo Pole Position footer" />

                    <div className="scrollup icon-bg">
                        <i className="scrollup__icon fa fa-chevron-up" aria-hidden="true"></i>
                    </div>
                </div>

                {/* CONTACT */}
                <div className="footer__section">
                    <h3>Contact</h3>

                    <a className="footer__section__p" href="#">+32 478 69 25 36</a>
                    <a className="footer__section__p" href="#">info@poleposition.be</a>
                </div>

                {/* HEADOFFICE */}
                <div className="footer__section">
                    <h3>Headoffice</h3>

                    <p className="footer__section__p">Bredestraat 155</p>
                    <p className="footer__section__p">2650 Hemiksem</p>
                    <p className="footer__section__p">Antwerp, Belgium</p>
                </div>

                {/* SOCIALS */}
                <div className="footer__section">
                    <h3>Socials</h3>

                    <Socials />
                </div>

                {/* SITEMAP */}
                <div className="footer__section">
                    <h3>Sitemap</h3>

                    <a className="footer__section__p" href="#">Dashboard</a>
                    <a className="footer__section__p" href="#">Teams</a>
                    <a className="footer__section__p" href="#">Drivers</a>
                    <a className="footer__section__p" href="#">Standings</a>
                    <a className="footer__section__p" href="#">Grand Prixs</a>
                    <a className="footer__section__p" href="#">Account</a>
                </div>

                {/* CONDITIONS & TERMS */}
                <div className="footer__section">
                    <h3>Terms</h3>

                    <a className="footer__section__p" href="#">Terms & conditions</a>
                    <a className="footer__section__p" href="#">Privacy Policy</a>
                </div>

                <hr className="footer__line line" />

                <p className="footer__section__p copyright">© 2022 Pole Position - F1 collaborator</p>
            </div>

            <div className="desktop">
                {/* LOGO + SCROLLUP */}
                <div className="top flex">
                    <img className="logoFooter" src={logoFooter} alt="logo Pole Position footer" />

                    <a className="button button-primary">
                        Back to top <i className="scrollup__icon fa fa-chevron-up first-chevron" aria-hidden="true"></i>
                    </a>
                </div>

                <div className="footer__sections flex">
                    {/* SITEMAP */}
                    <div className="footer__section">
                        <h3>Sitemap</h3>

                        <a className="footer__section__p" href="#">Dashboard</a>
                        <a className="footer__section__p" href="#">Teams</a>
                        <a className="footer__section__p" href="#">Drivers</a>
                        <a className="footer__section__p" href="#">Standings</a>
                        <a className="footer__section__p" href="#">Grand Prixs</a>
                        <a className="footer__section__p" href="#">Account</a>
                    </div>

                    {/* HEADOFFICE */}
                    <div className="footer__section">
                        <h3>Headoffice</h3>

                        <p className="footer__section__p">Bredestraat 155</p>
                        <p className="footer__section__p">2650 Hemiksem</p>
                        <p className="footer__section__p">Antwerp, Belgium</p>
                    </div>

                    {/* CONTACT */}
                    <div className="footer__section">
                        <h3>Contact</h3>

                        <a className="footer__section__p" href="#">+32 478 69 25 36</a>
                        <a className="footer__section__p" href="#">info@poleposition.be</a>
                    </div>

                    {/* CONDITIONS & TERMS */}
                    <div className="footer__section">
                        <h3>Terms</h3>

                        <a className="footer__section__p" href="#">Terms & conditions</a>
                        <a className="footer__section__p" href="#">Privacy Policy</a>
                    </div>
                </div>

                <hr className="footer__line line" />

                <div className="bottom flex">
                    <p className="footer__section__p copyright">© 2022 Pole Position - F1 collaborator</p>
                    <Socials />
                </div>
            </div>
        </footer>
    );
}

export default Footer;