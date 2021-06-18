import React from 'react';
import PropTypes from 'prop-types';
import PhoneFilterStyles from '../styles/PhoneFilterStyles.module.css';

const PhoneFilter = props => {
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
    <div>
      <label htmlFor="select" className={PhoneFilterStyles.label}>
        <select className={PhoneFilterStyles.select} onChange={handleClick}>
          <option>PHONE CATEGORIES</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

PhoneFilter.propTypes = {
  handleFilter: PropTypes.func,
};

PhoneFilter.defaultProps = {
  handleFilter: null,
};

export default PhoneFilter;
