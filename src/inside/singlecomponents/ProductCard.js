import React from "react";
import "./ProductCard.css";
export default function ProductCard(props) {
  return (
    <>
      <div className="product-card-container">
        <p className="product-card-name">{props.products.name}</p>
        <img
          className="product-card-img"
          src={`/images/${props.products.image}`}
          alt="prod_pic"
        ></img>
        <p className="product-card-price">₱{props.products.price}</p>
        <img
          className="product-card-addbtn"
          src="/images/addcartbtn.png"
          alt="pic"
          title="add to cart"
        ></img>
      </div>
    </>
  );
}
