import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./Atom";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue.trim()) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        { id: Date.now(), text: inputValue, isComplete: false },
      ]);
      setInputValue("");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nhập công việc..."
        style={{ padding: "8px", width: "250px" }}
      />
      <button
        onClick={addItem}
        style={{ padding: "8px 15px", marginLeft: "5px", cursor: "pointer" }}
      >
        Thêm
      </button>
    </div>
  );
};

export default TodoInput;
