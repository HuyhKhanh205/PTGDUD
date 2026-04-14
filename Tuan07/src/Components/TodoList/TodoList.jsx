import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./Atom";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
      {todoList.length === 0 ? (
        <p style={{ color: "#888" }}>Danh sách trống...</p>
      ) : (
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))
      )}
    </div>
  );
};

export default TodoList;
