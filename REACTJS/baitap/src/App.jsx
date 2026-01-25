import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Button from "./components/Button";
import Alert from "./components/Alert";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";

function App() {
  const [alert, setAlert] = useState({ type: "", message: "" });

  const showAlert = (type, message) => {
    setAlert({ type, message });
    // Tự động tắt sau 3 giây (optional)
    setTimeout(() => setAlert({ type: "", message: "" }), 3000);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bài tập Buổi 1 - React CSS</h1>
      <hr />

      {/* Bài 3: Alert */}
      <h3>Bài 3: Alert & Notification</h3>
      <Alert
        type={alert.type}
        message={alert.message}
        onClose={() => setAlert({ type: "", message: "" })}
      />
      <div style={{ marginBottom: "20px" }}>
        <p>Bấm nút để hiện Alert:</p>
        <Button
          type="success"
          onClick={() => showAlert("success", "Thành công rực rỡ!")}
        >
          Success
        </Button>
        <Button
          type="warning"
          onClick={() => showAlert("warning", "Cảnh báo hệ thống!")}
        >
          Warning
        </Button>
        <Button
          type="danger"
          onClick={() => showAlert("error", "Lỗi nghiêm trọng!")}
        >
          Error
        </Button>
      </div>
      <hr />

      <h3>Bài 1: Product Card</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        <ProductCard />
      </div>
      <hr />

      <h3>Bài 2: Button Types</h3>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
      <hr />

      <h3>Bài 4: Login Form</h3>
      <LoginForm />
      <hr />

      <h3>Bài 5: Responsive Layout (Resize trình duyệt để xem)</h3>
      <ProductList />
    </div>
  );
}

export default App;
