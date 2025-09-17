import React from "react";
import classes from "./Product.module.css";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product;
  return (
    <div className={classes.card_container}>
      <a href="#">
        <img src={image} alt="Product Image" />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* Rating */}
          <Rating value={rating} precision={0.1} />
          {/* Rating Counter */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* Price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
