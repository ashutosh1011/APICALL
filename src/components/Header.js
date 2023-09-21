import { Link } from "react-router-dom";

const Logo = () => (
  <img
    className="logo"
    alt="logo"
    src="https://www.shutterstock.com/image-vector/food-products-grocery-store-logo-600w-332013962.jpg"
  />
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Logo />
      <ul className="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
