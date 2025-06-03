import React, { useContext } from "react";
import classes from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import LowerHeader from './LowerHeader';
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  // console.log(basket.length);
  return (
    <section className={classes.fixed__header}>
      <section>
        <div className={classes.header__container}>
          {/* Logo */}
          <div className={classes.logo__container}>
            <Link Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
            {/* Delivery */}
            <div className={classes.delivery}>
              <span>
                <FaLocationDot />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Search section*/}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="search product" />
            <FaSearch size={38} />
          </div>
          {/* Right side link */}
          <div className={classes.order__container}>
            <Link Link to="#" className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/small/flags_PNG14655.png"
                alt="USA_Flag"
              />
              <select name="" id="">
                <option value="">EN </option>
              </select>
            </Link >
            <Link to="/Auth">
             
                <>
                  <h5>Sign In</h5>
                  <span>Account and Lists</span>
                </>
              
            </Link>

            {/* {user ? (
                  <>
                    <h5>Hello, {user?.email?.split("@")[0]}</h5>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  
                )} */}

            {/* Orders */}
            <Link to="/Orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* Cart */}
            <Link to="/Cart" className={classes.cart}>
              <FiShoppingCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header