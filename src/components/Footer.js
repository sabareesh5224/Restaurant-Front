// src/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>We are a leading company in the industry, providing top-notch services to our clients.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Home</a></li>
                            <li><a href="#about" className="text-light">About</a></li>
                            <li><a href="#services" className="text-light">Services</a></li>
                            <li><a href="#contact" className="text-light">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><FontAwesomeIcon icon={faPhoneAlt}/> +91 9876543212</li>
                            <li><FontAwesomeIcon icon={faEnvelope}/> info@example.com</li>
                            <li><FontAwesomeIcon icon={faMapMarkerAlt}/> 123 main, Erode</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; 2024 Restaurant. All rights reserved.</p>
                    <a href="https://www.facebook.com" target="_blank" className="text-light me-2"><FontAwesomeIcon icon={faFacebookF}/></a>
                    <a href="https://www.twitter.com" target="_blank" className="text-light me-2"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="https://www.instagram.com" target="_blank" className="text-light"><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
