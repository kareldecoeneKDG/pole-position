import React from 'react';
import { Link } from 'react-router-dom';

import Socials from '../../3_molecules/Socials/Socials';

import logoFooter from './logo-footer-mobile.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="mobile">
                {/* LOGO + SCROLLUP */}
                <div className="top flex">
                    <Link to="/">
                        <img className="logoFooter" src={logoFooter} alt="logo Pole Position footer" />
                    </Link>

                    <div className="scrollup icon-bg">
                        <i className="scrollup__icon fa fa-chevron-up" aria-hidden="true"></i>
                    </div>
                </div>

                {/* CONTACT */}
                <div className="footer__section">
                    <h3>Contact</h3>

                    <a className="footer__section__p" href="tel:+32478692536">+32 478 69 25 36</a>
                    <a className="footer__section__p" href="mailto:info@poleposition.be">info@poleposition.be</a>
                </div>

                {/* HEADOFFICE */}
                <div className="footer__section">
                    <h3>Headoffice</h3>

                    <a href="https://goo.gl/maps/AReNJ66swuL1HsJY6">
                        <p className="footer__section__p">Bredestraat 1550</p>
                        <p className="footer__section__p">2650 Hemiksem</p>
                        <p className="footer__section__p">Antwerp, Belgium</p>
                    </a>
                </div>

                {/* SOCIALS */}
                <div className="footer__section">
                    <h3>Socials</h3>

                    <Socials />
                </div>

                {/* SITEMAP */}
                <div className="footer__section">
                    <h3>Sitemap</h3>

                    <Link className="footer__section__p" to="/dashboard">Dashboard</Link>
                    <Link className="footer__section__p" to="/blog">Blog</Link>
                    <Link className="footer__section__p" to="/standings">Standings</Link>
                    <Link className="footer__section__p" to="/grandprixs">Grand Prixs</Link>
                </div>

                {/* CONDITIONS & TERMS */}
                <div className="footer__section">
                    <h3>Terms</h3>

                    <Link className="footer__section__p" to="/privacy-policy">Terms & conditions</Link>
                    <Link className="footer__section__p" to="/privacy-policy">Privacy Policy</Link>
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

                        <Link className="footer__section__p" to="/dashboard">Dashboard</Link>
                        <Link className="footer__section__p" to="/blog">Blog</Link>
                        <Link className="footer__section__p" to="/standings">Standings</Link>
                        <Link className="footer__section__p" to="/grandprixs">Grand Prixs</Link>
                    </div>

                    {/* HEADOFFICE */}
                    <div className="footer__section">
                        <h3>Headoffice</h3>

                        <a href="https://goo.gl/maps/AReNJ66swuL1HsJY6">
                            <p className="footer__section__p">Bredestraat 1550</p>
                            <p className="footer__section__p">2650 Hemiksem</p>
                            <p className="footer__section__p">Antwerp, Belgium</p>
                        </a>
                    </div>

                    {/* CONTACT */}
                    <div className="footer__section">
                        <h3>Contact</h3>

                        <a className="footer__section__p" href="tel:+32478692536">+32 478 69 25 36</a>
                        <a className="footer__section__p" href="mailto:info@poleposition.be">info@poleposition.be</a>
                    </div>

                    {/* CONDITIONS & TERMS */}
                    <div className="footer__section">
                        <h3>Terms</h3>

                        <Link className="footer__section__p" to="/privacy-policy">Terms & conditions</Link>
                        <Link className="footer__section__p" to="/privacy-policy">Privacy Policy</Link>
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