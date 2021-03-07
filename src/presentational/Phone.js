import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';

const Phone = props => {
  const { phone } = props;

  return (
    <div className="container-fluid border py-5">
      <Carousel />
      <div>
        <div>
          <h2>
            {`Name: ${phone.name}`}
          </h2>
        </div>
        <div>
          <img src={phone.image} className="w-25" alt="phoneImg" />
        </div>
        <div>
          <h5>
            {`Category: ${phone.category}`}
          </h5>
        </div>
        <div>
          <h4>
            {`Price: N${phone.price}`}
          </h4>
        </div>
      </div>
    </div>
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
