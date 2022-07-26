import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as CartSvg } from '../images/logo/cart.svg';
import { ReactComponent as Search } from '../images/logo/search.svg';
import UdemyLogo from '../images/logo/udemy.svg';
import './Navbar.scss';

const Navbar = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const state = useSelector(state => state.courseReducer);

  return (
    <header className="header">
      <Link to="/">
        <img src={UdemyLogo} alt="logo" className="header__logo" />
      </Link>
      <div className="header__search">
        <p>Categories</p>
        <form className="header__searchbar" onSubmit={submitHandler}>
          <input placeholder="Search for anything" />
          <button type="submit">
            <Search />
          </button>
        </form>
        <p>Udemy for Buisness</p>
        <p>Teach on Udemy</p>
      </div>
      <div className="header__right">
        <div className="header__cart">
          <Link to="/cart">
            <CartSvg className="header__cartLogo" />
          </Link>
          {state.length !== 0 && <span className="header__quantity">{state.length < 10 ? state.length : '9+'}</span>}
        </div>
        <button className="header__btn header__login">Log in</button>
        <button className="header__btn header__signup">Sign up</button>
      </div>
    </header>
  );
};

export default Navbar;
