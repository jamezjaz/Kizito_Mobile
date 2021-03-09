import React from 'react';
import logo from '../assets/kizito-logo.png';
import AboutStyles from '../styles/AboutStyles.module.css';
import vision from '../assets/vision.png';
import mission from '../assets/mission.png';

const About = () => (
  <div className="container-fluid">
    <div className={AboutStyles.container}>
      <h2 className={AboutStyles.heading}>About Us</h2>
      <div className={AboutStyles.content}>
        <p className={AboutStyles.para}>
          Kizito Mobile Technology (RC NO: XXXXXXX) is Nigeria’s retail
          store offering warranty phones, tablets, electronics
          gadgets, consoles and accessories. We sell both new and
          fairly-used phones. We are committed to delivering quality
          products and best possible customer service support.
          All our new phones are accompanied with 1 year warranty.
          <br />
          Our services also entail repairs and installations.
        </p>
        <div className={AboutStyles.imgContainer}>
          <img src={logo} className="w-50 rounded-circle" alt="logoImg" />
        </div>
        <div className={AboutStyles.vision}>
          <img src={vision} alt="vision" />
          <h4>Vision</h4>
          <p>
            To be the preferred mobile phones sales and services company in Nigeria.
          </p>
        </div>
        <div className={AboutStyles.mission}>
          <img src={mission} alt="mission" />
          <h4>Mission</h4>
          <p>
            To provide cost effective and high quality products as well
            as best possible customer service support.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
