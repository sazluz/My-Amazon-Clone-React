import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";

const CarouselComponent = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={false}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        swipeable={false}
      >
        {img?.map((imageItem) => {
          return <img src={imageItem} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </>
  );
};

export default CarouselComponent;
