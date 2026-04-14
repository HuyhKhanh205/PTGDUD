import React from "react";
import { useRecoilState } from "recoil";
import { countState } from "./AtomCount";

const CountCtrl = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tăng (+)</button>
      <button onClick={() => setCount(count - 1)}>Giảm (-)</button>
    </div>
  );
};

export default CountCtrl;
