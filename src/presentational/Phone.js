import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PhoneStyles from '../styles/PhoneStyles.module.css';
import add from '../assets/add.gif';
import { addToCart } from '../actions';

const Phone = props => {
  const { phone } = props;
  const uniqueKey = phone.id;

  const handleClick = id => {
    const { addItemsToCart } = props;
    addItemsToCart(id);
    console.log('Added to cart');
  };

  return (
    <tbody>
      <tr>
        <td>
          <div className={PhoneStyles.PhoneDetails}>
            <div className={PhoneStyles.imgContainer}>
              <img src={phone.image} data-testid="image" className={PhoneStyles.img} alt="PhoneImg" />
            </div>
            <h4 data-testid="name">{phone.name}</h4>
            <div className={PhoneStyles.purchase}>
              <h5>{`₦${phone.price}`}</h5>
              <button type="button" onClick={() => { handleClick(phone.id); }}>
                <img src={add} alt="add" />
              </button>
            </div>
            <button type="button" className="btn btn-secondary">
              <Link className={PhoneStyles.link} to={`/phoneDetails/${uniqueKey}`}>
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
    id: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  addItemsToCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItemsToCart: id => dispatch(addToCart(id)),
});

export default connect(null, mapDispatchToProps)(Phone);
