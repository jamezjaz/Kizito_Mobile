import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Phone from '../presentational/Phone';
import Slider from '../presentational/Slider';
import { filterPhonesAction } from '../actions';
import PhoneFilter from '../presentational/PhoneFilter';

const PhonesList = props => {
  const { phones, filtered } = props;

  const handleFilterChange = category => {
    const { filter } = props;
    filter(category);
  };

  const filteredPhones = phones.filter(phone => (
    !!((filtered === null || filtered === phone.category))));

  return (
    <div>
      <PhoneFilter handleFilter={handleFilterChange} />
      <h1>HOT DEALS</h1>
      <Slider />
      <table className="d-flex flex-wrap">
        {filteredPhones.map(phone => (
          <Phone key={phone.id} phone={phone} />
        ))}
      </table>
    </div>
  );
};

PhonesList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  filtered: PropTypes.string,
  filter: PropTypes.func.isRequired,
};

PhonesList.defaultProps = {
  filtered: null,
};

const mapStateToProps = state => ({
  phones: state.phone.phones.mobiles,
  filtered: state.filter,
});

const mapDispatchToProps = dispatch => ({
  filter: category => dispatch(filterPhonesAction(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
