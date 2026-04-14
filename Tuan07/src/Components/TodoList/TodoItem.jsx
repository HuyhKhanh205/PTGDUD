import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./Atom";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <input
        type="text"
        value={item.text}
        onChange={editItemText}
        style={{
          marginLeft: "10px",
          border: "none",
          textDecoration: item.isComplete ? "line-through" : "none",
          color: item.isComplete ? "#888" : "#000",
        }}
      />
      <button
        onClick={deleteItem}
        style={{
          marginLeft: "auto",
          color: "red",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
      >
        Xóa
      </button>
    </div>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;
