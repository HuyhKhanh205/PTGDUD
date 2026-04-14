import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, totalPriceState } from "./AtomCart";

const CartView = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const totalPrice = useRecoilValue(totalPriceState);

  const updateQuantity = (id, delta) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCart((oldCart) => oldCart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Giỏ hàng của bạn</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{ marginBottom: "10px", borderBottom: "1px solid #eee" }}
        >
          <span>{item.name} | </span>
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span style={{ margin: "0 10px" }}>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          <span>
            {" "}
            | Giá: {(item.price * item.quantity).toLocaleString()} VNĐ{" "}
          </span>
          <button onClick={() => removeItem(item.id)} style={{ color: "red" }}>
            Xóa
          </button>
        </div>
      ))}
      <h3>Tổng tiền: {totalPrice.toLocaleString()} VNĐ</h3>
    </div>
  );
};

export default CartView;
