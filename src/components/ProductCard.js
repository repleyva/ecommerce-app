import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { set } from "../redux/product-modal/productModalSlice";
import numberWithCommas from "../utils/numberWithCommas";
import Button from "./Button";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
          {numberWithCommas(props.price)}
          <div className="product-card__price__old">
            <del>{numberWithCommas(199000)}</del>
          </div>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          size="sm"
          icon="bx bx-cart"
          animate={true}
          onClick={() => dispatch(set(props.slug))}
        >
          choose to buy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
