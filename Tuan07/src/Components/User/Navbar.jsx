import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "./Atom";

const Navbar = () => {
  const [user, setUser] = useRecoilState(userState);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "#2c3e50",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>Hệ Thống Quản Lý</h3>

      <div>
        {user ? (
          <>
            <span style={{ marginRight: "15px" }}>
              Xin chào, <strong>{user.username}</strong>!
            </span>
            <button onClick={handleLogout} style={btnStyle}>
              Đăng xuất
            </button>
          </>
        ) : (
          <span>Khách (Chưa đăng nhập)</span>
        )}
      </div>
    </div>
  );
};

const btnStyle = {
  padding: "6px 12px",
  cursor: "pointer",
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "4px",
};

export default Navbar;
