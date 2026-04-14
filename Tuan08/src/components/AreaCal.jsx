import React from "react";
import { useRecoilValue } from "recoil";
import { areaState, widthState, heightState } from "./AtomArea";
import Area from "./Area";

const AreaCal = () => {
  const width = useRecoilValue(widthState);
  const height = useRecoilValue(heightState);
  const area = useRecoilValue(areaState);

  return (
    <div>
      <h3>Kết quả tính toán</h3>
      <p>
        Kích thước: {width} x {height}
      </p>
      <p>
        <strong>Diện tích: {area}</strong>
      </p>
    </div>
  );
};

export default AreaCal;
