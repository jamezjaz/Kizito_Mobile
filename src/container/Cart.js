import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addQuantity, removeItem, subtractQuantity } from '../actions';
import sortUp from '../assets/sort-up.png';
import sortDown from '../assets/sort-down.png';
import cartStyles from '../styles/CartStyles.module.css';
import DisplayTotal from '../presentational/DisplayTotal';

const Cart = props => {
  const { addedItems } = props;
  const addedItemsLen = addedItems.length;
  // console.log('Added Items', addedItems);
  // console.log(addedItemsLen);
  // to remove the item completely
  const handleRemove = id => {
    const { removeItem } = props;
    removeItem(id);
  };

  // to add the quantity
  const handleAddQuantity = id => {
    const { addQuantity } = props;
    addQuantity(id);
  };

  // to subtract from the quantity
  const handleSubQuantity = id => {
    const { subtractQuantity } = props;
    subtractQuantity(id);
  };

  return (
    <div className={cartStyles.container}>
      <h3>Added Items</h3>
      {addedItemsLen
        ? (
          addedItems.map(item => (
            <div key={item.id} className={cartStyles.card}>
              <div>
                <img src={item.image} className={cartStyles.img} alt={item.title} />
              </div>
              <div>
                <h5>{item.name}</h5>
                <h4>
                  <b>
                    Price:
                    {' '}
                    {`₦${item.price}`}
                  </b>
                </h4>
                <span>
                  Category:
                  {' '}
                  {item.category}
                </span>
                <p>
                  <b>
                    Quantity:
                    {' '}
                    {item.quantity}
                  </b>
                </p>
              </div>
              <Link to="/cart" onClick={() => { handleAddQuantity(item.id); }}>
                <img src={sortUp} className={cartStyles.sortUp} alt="sort-up" />
              </Link>
              <Link to="/cart" onClick={() => { handleSubQuantity(item.id); }}>
                <img src={sortDown} className={cartStyles.sortDown} alt="sort-down" />
              </Link>
              <button type="button" className={cartStyles.remove} onClick={() => { handleRemove(item.id); }}>
                Remove
              </button>
            </div>
          ))
        )
        : (
          <p>Nothing!</p>
        )}
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">
          {addedItemsLen}
          {' '}
          <span>items to cart</span>
        </ul>
      </div>
      <DisplayTotal />
    </div>
  );
};

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
  // console.log(state);
  addedItems: state.phone.addedItems,
});

const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItem(id)),
  addQuantity: id => dispatch(addQuantity(id)),
  subtractQuantity: id => dispatch(subtractQuantity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
