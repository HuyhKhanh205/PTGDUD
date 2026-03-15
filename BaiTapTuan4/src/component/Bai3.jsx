import { useState, useEffect } from "react";

function DynamicFetch() {
  const [userId, setUserId] = useState("1");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = parseInt(userId);

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        );
        if (!response.ok) throw new Error("Không tìm thấy user");
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      <h2>Bài 3: Tìm kiếm User theo ID</h2>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Nhập ID (1-10)"
        style={{ padding: "8px", marginBottom: "20px" }}
      />

      {loading && <p>Đang tìm kiếm...</p>}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {user && !loading && (
        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            maxWidth: "300px",
          }}
        >
          <h3> {user.name}</h3>
          <p> Phone: {user.phone}</p>
          <p> Website: {user.website}</p>
        </div>
      )}
    </div>
  );
}

export default DynamicFetch;
