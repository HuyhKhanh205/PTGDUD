import { useState, useEffect } from "react";

function CRUD() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // GET: Lấy danh sách Todo (giới hạn 10 cái cho gọn)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // POST: Thêm Todo mới
  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify({ title: newTodo, completed: false, userId: 1 }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        },
      );
      const addedTodo = await response.json();

      // Cập nhật UI ngay lập tức
      setTodos([addedTodo, ...todos]);
      setNewTodo("");
    } catch (error) {
      alert("Lỗi khi thêm Todo");
    } finally {
      setIsSubmitting(false);
    }
  };

  // DELETE: Xóa Todo
  const handleDelete = async (id) => {
    // Optimistic UI: Tạm xóa trên giao diện trước để user thấy phản hồi nhanh
    const originalTodos = [...todos];
    setTodos(todos.filter((todo) => todo.id !== id));

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) throw new Error("Delete failed");
    } catch (error) {
      // Nếu API lỗi, khôi phục lại dữ liệu ban đầu
      alert("Không thể xóa, đang khôi phục dữ liệu...");
      setTodos(originalTodos);
    }
  };

  return (
    <div>
      <h2>Bài 5: CRUD </h2>

      <form onSubmit={handleAddTodo} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nhập việc cần làm..."
          disabled={isSubmitting}
          style={{ padding: "10px", width: "250px", marginRight: "10px" }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: "10px 20px",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            backgroundColor: "blue",
            color: "white",
            border: "none",
          }}
        >
          {isSubmitting ? "Đang lưu..." : "Thêm mới"}
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              marginBottom: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{todo.title}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CRUD;
