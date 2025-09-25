import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { useContext } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import { CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

const Payment = () => {
  const [{ basket, user }] = useContext(DataContext);
  const total = basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  return (
    <>
      <LayOut>
        {/* Header */}
        <div className={classes.payment_header}>
          Checkout ({basket.length}) items
        </div>
        {/* Payment Method */}
        <section className={classes.payment}>
          {/* Address */}
          <div className={classes.flex}>
            <h3>Delivery Adress</h3>
            <div>
              <div>{user?.email}</div>
              <div>123 Location</div>
              <div>Chicago</div>
            </div>
          </div>
          <hr />
          {/* Product */}
          <div className={classes.flex}>
            <h3>Review items and delivery</h3>
            <div>
              <div>
                {basket?.map((item) => (
                  <ProductCard key={item.id} product={item} flex={true} />
                ))}
              </div>
            </div>
          </div>
          <hr />
          {/* Card Form */}
          <div className={classes.flex}>
            <h3>Payment Methods</h3>
            <div className={classes.payment_card_container}>
              <div className={classes.payment__detail}>
                <form action="">
                  <CardElement />
                  <div className={classes.payment__price}>
                    <div>
                      <span>
                        Total Price | <CurrencyFormat amount={total} />
                      </span>
                    </div>
                    <button>Pay Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </LayOut>
    </>
  );
};

export default Payment;
