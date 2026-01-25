import React from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard"; // Tái sử dụng ProductCard ở Bài 1

const ProductList = () => {
  // Tạo mảng giả lập 6 sản phẩm
  const products = Array.from({ length: 6 });

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Danh sách sản phẩm</h2>
      <div className="grid-container">
        {products.map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
