import { PixelRatio } from "react-native";

export function getDpValue(px: number) {
    console.log(
      'px',
      px,
      '-dp',
      Math.ceil((px * 160) / (160 * PixelRatio.get())),
    );
    return Math.ceil(px * 160 / (160 * PixelRatio.get()));
}