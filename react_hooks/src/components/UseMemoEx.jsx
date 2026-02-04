import React, { useState, useMemo } from "react";

function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const expensiveCalculation = (n) => {
    console.log("Đang tính toán bình phương...");
    return n * n;
  };

  const result = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div className="card">
      <h3>5. useMemo (Tối ưu hiệu năng tính toán)</h3>
      <p>
        Số: {number} | Bình phương: {result}
      </p>
      <button onClick={() => setNumber(number + 1)}>Đổi số (Tính lại)</button>
      <button onClick={() => setCount(count + 1)}>
        Re-render trang ({count})
      </button>
      <p>
        <small>
          Minh chứng: Xem Console, hàm tính toán chỉ chạy khi bấm "Đổi số".
        </small>
      </p>
    </div>
  );
}
export default UseMemoEx;
