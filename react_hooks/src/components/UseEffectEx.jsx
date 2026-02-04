import React, { useState, useEffect } from "react";

function UseEffectEx() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="card">
      <h3>2. useEffect</h3>
      <p>Dữ liệu mẫu: {data.title}</p>
    </div>
  );
}
export default UseEffectEx;
