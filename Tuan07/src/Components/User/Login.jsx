import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "./Atom";

const Login = () => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useRecoilState(userState);

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setUser({ username: inputValue, role: "admin" });
    }
  };

  if (user) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#27ae60" }}>
        <h2>Đăng nhập thành công!</h2>
        <p>Bây giờ bạn có thể truy cập các tính năng ẩn.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        width: "300px",
        margin: "20px auto",
        borderRadius: "8px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Đăng nhập giả lập</h3>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="Nhập tên đăng nhập..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #aaa",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: "#3498db",
            color: "White",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
