import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Area from "./components/Area";
import AreaCal from "./components/AreaCal";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <>
        <Area />
        <AreaCal />
        <p>========================</p>
        <h2>Ví dụ giỏ hàng</h2>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Cart />
      </>
    </BrowserRouter>
  );
}

export default App;
