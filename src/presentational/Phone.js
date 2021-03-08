import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PhoneStyles from '../styles/PhoneStyles.module.css';

const Phone = props => {
  const { phone } = props;

  return (
    <tbody>
      <tr>
        <td>
          <div className={PhoneStyles.PhoneDetails}>
            <div className={PhoneStyles.imgContainer}>
              <img src={phone.image} data-testid="image" className={PhoneStyles.img} alt="PhoneImg" />
            </div>
            <h4 data-testid="name">{phone.name}</h4>
            <button type="button" className="btn btn-secondary">
              <Link className={PhoneStyles.link} to="/phoneDetails">
                <h4>Phone Details</h4>
              </Link>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

Phone.propTypes = {
  phone: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
};

export default Phone;
