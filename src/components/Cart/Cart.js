import { useSelector } from 'react-redux';
import './Cart.scss';
import CartItem from './CartItem';
import { TotalPrice } from "./TotalPrice";

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
        <div style={{ display: 'flex' }}>
          <div>
            <CartItem></CartItem>
          </div>
          <div className="right">
            <TotalPrice></TotalPrice>
          </div>
        </div>
      </div>
      <div className="cart__checkout"></div>
    </div>
  );
};

export default Cart;
