import { useState, useEffect } from "react";

function SearchFilter() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h2>Bài 4: Tìm kiếm Posts (Client-side Filter)</h2>

      <input
        type="text"
        placeholder="Nhập tiêu đề cần tìm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
      />

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
            border: "1px solid #ddd",
            padding: "10px",
          }}
        >
          <p>
            Tìm thấy: <strong>{filteredPosts.length}</strong> kết quả.
          </p>
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                borderBottom: "1px solid #eee",
                paddingBottom: "10px",
                marginBottom: "10px",
              }}
            >
              <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>
                {post.title}
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchFilter;
