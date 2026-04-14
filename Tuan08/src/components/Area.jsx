import React from "react";
import { useRecoilState } from "recoil";
import { widthState, heightState } from "./AtomArea";

const Area = () => {
  const [width, setWidth] = useRecoilState(widthState);
  const [height, setHeight] = useRecoilState(heightState);

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <h3>Nhập thông số</h3>
      <div>
        Chiều rộng:
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        Chiều cao:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Area;
