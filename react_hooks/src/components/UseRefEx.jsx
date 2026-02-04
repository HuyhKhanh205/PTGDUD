import React, { useRef } from "react";

function UseRefEx() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#e1f5fe";
  };

  return (
    <div className="card">
      <h3>4. useRef (Truy cập DOM trực tiếp)</h3>
      <input ref={inputRef} type="text" placeholder="Nhập văn bản..." />
      <button onClick={focusInput}>Focus vào ô Input</button>
      <p>
        <small>Minh chứng: Nhấn nút sẽ thấy ô input tự động được chọn.</small>
      </p>
    </div>
  );
}
export default UseRefEx;
