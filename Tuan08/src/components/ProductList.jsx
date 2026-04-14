import React from "react";
import { useSetRecoilState } from "recoil";
import { cartState } from "./AtomCart";

const products = [
  { id: 1, name: "Laptop Gaming", price: 20000000 },
  { id: 2, name: "Chuột Không Dây", price: 500000 },
];

const ProductList = () => {
  const setCart = useSetRecoilState(cartState);

  const addToCart = (product) => {
    setCart((oldCart) => {
      const isExist = oldCart.find((item) => item.id === product.id);
      if (isExist) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...oldCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h4>{p.name}</h4>
          <p>{p.price.toLocaleString()} VNĐ</p>
          <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
