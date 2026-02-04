import React, { useState, useCallback } from "react";

function UseCallbackEx() {
  const [count, setCount] = useState(0);

  const handleAlert = useCallback(() => {
    alert(`Giá trị hiện tại là: ${count}`);
  }, [count]);

  return (
    <div className="card">
      <h3>6. useCallback (Ghi nhớ hàm xử lý)</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng số</button>
      <button onClick={handleAlert}>Hiển thị Alert</button>
      <p>
        <small>
          Minh chứng: Hàm alert được ghi nhớ và chỉ cập nhật khi count thay đổi.
        </small>
      </p>
    </div>
  );
}
export default UseCallbackEx;
