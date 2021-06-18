import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/PhoneDetails.css';

const PhoneDetails = ({ phones, match }) => {
  const phoneId = match.params.id;
  return (
    <div className="container-fluid details-container">
      <h2 className="heading">Phone Details</h2>
      {phones.filter(phone => phone.id === phoneId).map(phone => (
        <table className="table" key={phone.id} style={{ width: '100%' }}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Type</th>
              <th scope="col">Specification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{phone.name}</th>
              <td>
                <img src={phone.image} className="w-75" alt="phoneImage" />
              </td>
              <td>{phone.category}</td>
              <td>{`₦${phone.price}`}</td>
              <td>{phone.type}</td>
              <td>
                {phone.mainSpec[0].os}
                <br />
                {phone.mainSpec[1].sim}
                <br />
                {phone.mainSpec[2].internal}
                <br />
                {phone.mainSpec[3].card}
                <br />
                {phone.mainSpec[4].mainCamera}
                <br />
                {phone.mainSpec[5].selfieCamera}
                <br />
                {phone.mainSpec[6].sensors}
                <br />
                {phone.mainSpec[7].batteryType}
                <br />
                {phone.mainSpec[8].others}
                <br />
                {phone.mainSpec[9].technology}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

PhoneDetails.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    mainSpec: PropTypes.arrayOf(PropTypes.shape()),
  })).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

PhoneDetails.defaultProps = {
  match: {},
};

const mapStateToProps = state => ({
  phones: state.phone.phones.mobiles,
});

export default connect(mapStateToProps, null)(PhoneDetails);
