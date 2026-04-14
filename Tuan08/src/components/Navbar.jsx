import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { totalQuantityState } from "./AtomCart";

const Navbar = () => {
  const totalQuantity = useRecoilValue(totalQuantityState);

  return (
    <nav
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        marginBottom: "20px",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          marginRight: "20px",
          fontWeight: isActive ? "bold" : "normal",
        })}
      >
        Trang chủ
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}
      >
        Giỏ hàng ({totalQuantity})
      </NavLink>
    </nav>
  );
};

export default Navbar;
