import React from "react";
import { useRecoilValue } from "recoil";
import { themeState } from "./AtomModeTheme";

const ModeTheme = () => {
  const theme = useRecoilValue(themeState);

  return (
    <div style={{ padding: "10px" }}>
      <p>
        Giao diện hiện tại: <strong>{theme.toUpperCase()}</strong>
      </p>
    </div>
  );
};

export default ModeTheme;
