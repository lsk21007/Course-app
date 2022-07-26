import { useSelector } from 'react-redux';
import './Cart.scss';
import CartItem from './CartItem';

const Cart = () => {

  const state = useSelector(state => state.courseReducer);

  return (
    <div className="cart">
      <div className="cart__top">
        <h3>Shopping Cart</h3>
      </div>
      <div className="cart__info">
        <div className="cart__items">
          <p>{state.length} Courses in Cart</p>
        </div>
        <CartItem></CartItem>
      </div>
      <div className="cart__checkout"></div>
    </div>
  );
};

export default Cart;
