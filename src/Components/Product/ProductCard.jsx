import React from "react";
import classes from "./Product.module.css";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    image = "",
    title = "Product Title",
    id = "",
    rating = { rate: 0, count: 0 }, // Default rating object
    price = 0,
    description = "",
  } = product || {};

  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        {image && <img src={image} alt={title || "Product image"} />}
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* Use rating.rate instead of rating */}
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          {/* Use rating.count */}
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
