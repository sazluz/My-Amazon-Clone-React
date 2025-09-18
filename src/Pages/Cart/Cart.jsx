import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Cart.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => amount + item.price, 0);
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
                <div style={{ margin: "10px" }}>
                  <ProductCard
                    key={i}
                    product={item}
                    renDes={true}
                    addCart={false}
                    flex={true}
                  />
                </div>
              ))
            )}
          </div>

          <div>
            {basket?.length !== 0 && (
              <div className={classes.subtotal}>
                <div>
                  <p>Subtotal {basket?.length} items</p>
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
