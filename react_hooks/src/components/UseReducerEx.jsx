import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "TANG":
      return { count: state.count + 1 };
    case "GIAM":
      return { count: state.count - 1 };
    case "XOA":
      return { count: 0 };
    default:
      return state;
  }
};

function UseReducerEx() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="card">
      <h3>3. useReducer (Quản lý logic phức tạp)</h3>
      <p>
        Giá trị hiện tại: <strong>{state.count}</strong>
      </p>
      <button onClick={() => dispatch({ type: "TANG" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "GIAM" })}>Giảm</button>
      <button onClick={() => dispatch({ type: "XOA" })}>Reset</button>
      <p>
        <small>
          Minh chứng: Click các nút để gửi "action" vào reducer xử lý.
        </small>
      </p>
    </div>
  );
}
export default UseReducerEx;
