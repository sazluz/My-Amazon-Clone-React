import React from "react";
import CarouselComponent from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import LayOut from "../../Components/LayOut/LayOut";

const Landing = () => {
  return (
    <>
      <LayOut>
        <CarouselComponent />
        <Category />
        <Product />
      </LayOut>
    </>
  );
};

export default Landing;
