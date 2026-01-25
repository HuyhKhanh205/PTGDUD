import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img
        src="https://via.placeholder.com/250"
        alt="Sản phẩm"
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">Tai nghe Bluetooth</h3>
        <p className="product-price">500.000 VNĐ</p>
        <button className="btn-add">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
