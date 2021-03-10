import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import about from '../assets/about.png';
import contactUs from '../assets/contactUs.png';
import address from '../assets/address.png';
import phone from '../assets/phone.png';
import email from '../assets/email.png';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="container-fluid footer py-5 mt-4">
    <div className="row mx-auto">
      <div className="col-12 col-sm-4 text-left">
        <h5 className="footer-heading p-2 rounded">Kizito Mobile Tech</h5>
        <div className="d-flex flex-column">
          <Link className="footer-link" to="/about">
            <img src={about} className="mr-2" alt="phone" />
            <small>About Us</small>
          </Link>
          <Link className="footer-link" to="/form">
            <img src={contactUs} className="mr-2" alt="phone" />
            <small>Contact Us</small>
          </Link>
        </div>
      </div>
      <div className="col-12 col-sm-4 text-left">
        <h5 className="footer-heading p-2 rounded">Contact Us</h5>
        <div className="d-flex flex-column">
          <div>
            <img src={address} className="mr-2" alt="address" />
            <small>23 Olayeni Street Computer Village, Ikeja, Lagos Nigeria</small>
          </div>
          <div>
            <img src={phone} className="mr-2" alt="phone" />
            <small>+2348106334661</small>
          </div>
          <div>
            <img src={email} className="mr-2" alt="email" />
            <small>KizitoMobileTech@gmail.com</small>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-4 text-left">
        <h5 className="footer-heading p-2 rounded">Social</h5>
        <div>
          <a
            href="https://www.facebook.com/"
            className="facebook mr-2"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <small>Facebook</small>
        </div>
        <div>
          <a
            href="https://www.twitter.com/jamezjaz90"
            className="twitter mr-2"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <small>Twitter</small>
        </div>
        <div>
          <a
            href="https://www.instagram.com/learnbuildteach"
            className="instagram mr-2"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <small>Instagram</small>
        </div>
        <div>
          <a
            href="https://www.web.whatsapp.com"
            className="whatsapp mr-2"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <small>WhatsApp</small>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
