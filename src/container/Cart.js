import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { addQuantity, removeItem, subtractQuantity } from '../actions';
// import sortUp from '../assets/sort-up.png';
// import sortDown from '../assets/sort-down.png';

// eslint-disable-next-line
class Cart extends Component {
  // to remove the item completely
  handleRemove = id => {
    const { removeItem } = this.props;
    removeItem(id);
  };

  // to add the quantity
  handleAddQuantity = id => {
    const { addQuantity } = this.props;
    addQuantity(id);
  };

  // to subtract from the quantity
  handleSubQuantity = id => {
    const { subtractQuantity } = this.props;
    subtractQuantity(id);
  };

  render() {
    const { addedItems } = this.props;
    // const addedItemsLen = addedItems.length;
    console.log('Added Items', addedItems);
    // console.log(addedItemsLen);
    return (
      <div>
        <h3>Added Items</h3>
        <h3>Added Items</h3>
        <h3>Added Items</h3>
        <h3>Added Items</h3>
        <h3>Added Items</h3>
        {/* {addedItemsLen
          ? (
            addedItems.map(item => (
              <div key={item.id}>
                <div>
                  <img src={item.img} alt={item.title} />
                </div>
                <div>
                  <h5>{item.name}</h5>
                  <h4>{`₦${item.price}`}</h4>
                </div>
                <Link to="/cart">
                  <img src={sortUp} alt="sort-up" />
                </Link>
                <Link to="/cart">
                  <img src={sortDown} alt="sort-down" />
                </Link>
              </div>
            ))
          )
          : (
            <p>Nothing!</p>
          )} */}
        <div className="cart">
          <h5>You have ordered:</h5>
          <ul className="collection">
            {/* {addedItemsLen} */}
            {' '}
            <span>items to cart</span>
          </ul>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  addedItems: PropTypes.instanceOf(Array).isRequired,
  removeItem: PropTypes.func.isRequired,
  addQuantity: PropTypes.func.isRequired,
  subtractQuantity: PropTypes.func.isRequired,
};

// Cart.defaultProps = {
//   addedItems: [],
// };

const mapStateToProps = state => ({
  addedItems: state.addedItems,
});

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  addQuantity: id => dispatch(addQuantity(id)),
  subtractQuantity: id => dispatch(subtractQuantity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
