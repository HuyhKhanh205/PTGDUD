import React, { useState } from "react";

function UseStateEx() {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h3>1. useState</h3>
      <p>Số hiện tại: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
export default UseStateEx;
