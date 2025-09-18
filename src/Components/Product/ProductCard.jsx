import React, { useContext } from "react";
import classes from "./Product.module.css";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

const ProductCard = ({ product, flex, renDes }) => {
  const {
    image = "",
    title = "Product Title",
    id = "",
    rating = { rate: 0, count: 0 },
    price = 0,
    description = "",
  } = product || {};

  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        {image && <img src={image} alt={title || "Product image"} />}
      </Link>
      <div>
        <h3>{title}</h3>
        {renDes ? <p style={{ maxWidth: "750px" }}>{description}</p> : ""}
        <div className={classes.rating}>
          {/* Use rating.rate instead of rating */}
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          {/* Use rating.count */}
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
