import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TotalStyles from '../styles/TotalStyles.module.css';

const DisplayTotal = props => {
  const { total, addShipping, subtractShipping } = props;
  const handleChecked = e => {
    if (e.target.checked) {
      addShipping();
    } else {
      subtractShipping();
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="checkbox">
          <input type="checkbox" id="checkbox" onChange={handleChecked} />
          <span>Shipping(+₦800)</span>
        </label>
        <h4>
          Total:
          ₦
          {total}
        </h4>
      </div>
      <div>
        <Link to="/form">
          <button type="submit" className={TotalStyles.checkout}>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

DisplayTotal.propTypes = {
  total: PropTypes.number.isRequired,
  addShipping: PropTypes.func.isRequired,
  subtractShipping: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  total: state.phone.total,
});

const mapDispatchToProps = dispatch => ({
  addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }); },
  subtractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTotal);
