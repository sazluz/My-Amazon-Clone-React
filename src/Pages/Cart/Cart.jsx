import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Cart.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Type } from "../../Utility/action.type";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <>
      <LayOut>
        <section className={classes.container}>
          <div className={classes.cart_container}>
            <h2>Hello</h2>
            <h3>Your Shopping Cart</h3>
            <hr />
            {basket?.length === 0 ? (
              <p>Opps ! No products in your cart</p>
            ) : (
              basket?.map((item, i) => (
                <div key={i} className={classes.cart_product}>
                  <ProductCard
                    product={item}
                    renDes={true}
                    addCart={false}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={20} />
                    </button>
                    <span
                      className={classes.amount_txt}
                      style={{ fontSize: "18px", fontWeight: "bold" }}
                    >
                      {item.amount}
                    </span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div>
            {basket?.length !== 0 && (
              <div className={classes.subtotal}>
                <div>
                  <p>
                    Subtotal (
                    {basket.reduce((total, item) => total + item.amount, 0)}{" "}
                    items)
                  </p>
                  <CurrencyFormat amount={total} />
                </div>
                <span>
                  <input type="checkbox" />
                  <small>This order contains a gift</small>
                </span>
                <Link className={classes.link} to="/payments">
                  Continue to Checkout
                </Link>
              </div>
            )}
          </div>
        </section>
      </LayOut>
    </>
  );
};

export default Cart;
