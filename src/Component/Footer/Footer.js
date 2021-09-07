
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {

    const ourAddress = [
        { name: "12th dragon street,melbourne 1292m, AUS" },
        { name: "Yards", link: "//google.com/map" },

    ]

    const services = [
        { name: "National News", link: "/nationalNews" },
        { name: "World News", link: "/internationalNews" },
        { name: "Sports News", link: "/sportNews" },
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={4} menuTitle="Get in Touch" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Phone</h6>
                            <button className="btn btn-brand text-white">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;