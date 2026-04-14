import React from "react";
import { useRecoilValue } from "recoil";
import { countState } from "./AtomCount";

const Count = () => {
  const count = useRecoilValue(countState);

  return (
    <div>
      <p>
        Giá trị count hiện tại là: <strong>{count}</strong>
      </p>
    </div>
  );
};

export default Count;
