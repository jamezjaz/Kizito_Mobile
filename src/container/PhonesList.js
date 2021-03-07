import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Phone from '../presentational/Phone';

const PhonesList = props => {
  const { phones } = props;

  return (
    <div>
      <h1>HOT DEALS</h1>
      {phones.map(phone => (
        <Phone key={phone.id} phone={phone} />
      ))}
    </div>
  );
};

PhonesList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  phones: state.phone.phones.mobiles,
});

export default connect(mapStateToProps, null)(PhonesList);
