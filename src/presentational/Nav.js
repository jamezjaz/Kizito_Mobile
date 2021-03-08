import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/kizito-logo.png';
import NavStyles from '../styles/NavStyles.module.css';

const Nav = props => {
  const categories = ['All', 'Infinix', 'Samsung', 'Tecno', 'Apple', 'Itel', 'Nokia', 'Opoo', 'Lenovo', 'Sony'];
  const { handleFilter } = props;

  const handleClick = event => {
    const { value } = event.target;
    if (value === 'All') {
      handleFilter(null);
    } else {
      handleFilter(value);
    }
  };
  return (
    <nav className={NavStyles.nav}>
      <h2 cl>
        <Link className={NavStyles.logo} to="/">
          <img src={logo} className="rounded-circle" alt={logo} />
        </Link>
        Kizito Mobile Tech
      </h2>
      <label htmlFor="select" className={NavStyles.label}>
        <select className={NavStyles.select} onChange={handleClick}>
          <option>PHONE CATEGORIES</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <ul className={NavStyles.navLinks}>
        <Link className={NavStyles.lists} to="/">
          <li>Home</li>
        </Link>
        <Link className={NavStyles.lists} to="/about">
          <li>About Us</li>
        </Link>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  handleFilter: PropTypes.func,
};

Nav.defaultProps = {
  handleFilter: null,
};

export default Nav;
