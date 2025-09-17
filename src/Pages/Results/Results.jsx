import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../Components/Product/ProductCard";

const Results = () => {
  const [result, setResult] = useState();
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <LayOut>
        <section>
          <h1>Results for {categoryName}</h1>
          <hr />
          <div className={classes.products_container}>
            {result?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </section>
      </LayOut>
    </>
  );
};

export default Results;
