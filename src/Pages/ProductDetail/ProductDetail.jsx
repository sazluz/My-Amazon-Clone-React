import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renDes={true}
          addCart={true}
        />
      )}
    </LayOut>
  );
};

export default ProductDetail;
