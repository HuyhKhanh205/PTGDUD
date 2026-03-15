import { Routes, Route, NavLink } from "react-router-dom";

// Import 5 component từ thư mục 'component' của bạn
import Bai1 from "./component/Bai1";
import Bai2 from "./component/Bai2";
import Bai3 from "./component/Bai3";
import Bai4 from "./component/Bai4";
import Bai5 from "./component/Bai5";

function App() {
  // Style cho NavLink (Menu bên trái)
  const navStyle = ({ isActive }) => ({
    display: "block",
    padding: "12px 20px",
    marginBottom: "8px",
    textDecoration: "none",
    color: isActive ? "white" : "#333",
    backgroundColor: isActive ? "#007bff" : "#f8f9fa",
    borderRadius: "6px",
    fontWeight: isActive ? "bold" : "normal",
    border: "1px solid #ddd",
  });

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* SIDEBAR - CỘT TRÁI CHỨA MENU */}
      <div
        style={{
          width: "280px",
          padding: "20px",
          borderRight: "2px solid #eee",
          backgroundColor: "#fff",
        }}
      >
        <h3 style={{ color: "#007bff", textAlign: "center" }}>
          🚀 BÀI TẬP FETCH API
        </h3>
        <nav style={{ marginTop: "20px" }}>
          <NavLink to="/bai1" style={navStyle}>
            Bài 1: Fetch API Cơ bản
          </NavLink>
          <NavLink to="/bai2" style={navStyle}>
            Bài 2: Loading & Error
          </NavLink>
          <NavLink to="/bai3" style={navStyle}>
            Bài 3: Dynamic Fetch
          </NavLink>
          <NavLink to="/bai4" style={navStyle}>
            Bài 4: Fetch + Search
          </NavLink>
          <NavLink to="/bai5" style={navStyle}>
            Bài 5: CRUD Nâng cao
          </NavLink>
        </nav>
      </div>

      {/* CONTENT - CỘT PHẢI HIỂN THỊ NỘI DUNG */}
      <div style={{ flex: 1, padding: "40px", backgroundColor: "#fdfdfd" }}>
        <Routes>
          {/* Mặc định khi vào trang chủ */}
          <Route
            path="/"
            element={
              <h2>👈 Hãy chọn một bài tập ở Menu bên trái để xem kết quả!</h2>
            }
          />

          {/* Định tuyến tới các file Bai1.jsx, Bai2.jsx... */}
          <Route path="/bai1" element={<Bai1 />} />
          <Route path="/bai2" element={<Bai2 />} />
          <Route path="/bai3" element={<Bai3 />} />
          <Route path="/bai4" element={<Bai4 />} />
          <Route path="/bai5" element={<Bai5 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
