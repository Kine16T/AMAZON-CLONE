// Fixed ProductCard and related context usage

import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurencyFormat from "../CurrencyFormat/CurencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { type } from "../../Utility/Action.type";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, id, title, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: type.ADD_TO_BASKET,
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
      className={`${classes.cardContainer} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <div className={classes.imageWrapper}>
        <Link to={`/products/${id}`} className={classes.productImage}>
          <img src={image} alt={title} />
        </Link>
      </div>

      <div className={classes.cardDetails}>
        <h3 className={classes.productTitle}>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count} ratings</small>
        </div>
        <div>
          <CurencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
