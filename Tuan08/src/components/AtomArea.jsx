import { atom, selector } from "recoil";

export const widthState = atom({
  key: "widthState",
  default: 0,
});
export const heightState = atom({
  key: "heightState",
  default: 0,
});

export const areaState = selector({
  key: "areaState",
  get: ({ get }) => {
    const width = get(widthState);
    const height = get(heightState);
    return width * height;
  },
});
