import { PixelRatio } from "react-native";

//function to get dp values from px values given in redline document
export function getDpValue(px: number) {
    console.log(
      'px',
      px,
      '-dp',
      Math.ceil((px * 160) / (160 * PixelRatio.get())),
    );
    return Math.ceil(px * 160 / (160 * PixelRatio.get()));
}