import React from "react";
import classes from "./Landing.module.css";
import CarouselEffect from "../../Components/Carousel/CourselEffect";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import LayOut from "../../Components/LayOut/LayOut";
function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
