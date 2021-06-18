import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/kizito-logo.png';
import cart from '../assets/cart.png';
import NavStyles from '../styles/NavStyles.module.css';

const Nav = () => {
  const counter = useSelector(state => state.phone.addedItems);

  return (
    <nav className={NavStyles.nav}>
      <h2>
        <Link className={NavStyles.logo} to="/">
          <img src={logo} className="rounded-circle" alt={logo} />
        </Link>
        <span>Kizito Mobile Tech</span>
      </h2>
      <ul className={NavStyles.navLinks}>
        <Link className={NavStyles.lists} to="/">
          <li>Home</li>
        </Link>
        <Link className={NavStyles.lists} to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/cart">
          <li>
            <div className={NavStyles.counter}>{counter.length}</div>
            <img src={cart} className="w-75" alt={cart} />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
