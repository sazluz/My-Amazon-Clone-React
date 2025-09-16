import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/img/logo.png";
import usaFlag from "../../assets/img/usa.png";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <header>
        <section className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* Logo */}
            <a href="/">
              <img src={logo} alt="Amazon-logo" />
            </a>
            <div className={classes.delivery}>
              {/* Delivery */}
              <span>
                {/* Icon */}
                <IoLocationOutline />
              </span>
              <div>
                <p>Delivered to </p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Amazon" />
            {/* Icon */}
            <FaSearch className={classes.search__icon} size={28} />
          </div>
          {/* Other Section */}
          <div className={classes.order_container}>
            <a href="#" className={classes.language}>
              <img src={usaFlag} width="40px" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            {/* Sign in */}
            <a href="#">
              <div>
                <p>Hello, sign in</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* Orders */}
            <a href="#">
              <div>
                <p>returns</p>
                <span>& Orders</span>
              </div>
            </a>
            {/* Cart */}
            <a href="" className={classes.cart}>
              {/* Icon */}
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </section>
      </header>
      <LowerHeader />
    </>
  );
};

export default Header;
