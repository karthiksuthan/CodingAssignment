import { PixelRatio } from "react-native";
import BootSplash from 'react-native-bootsplash';

//function to get dp values from px values given in redline document
export function getDpValue(px: number) {
    return Math.ceil(px * 160 / (160 * PixelRatio.get()));
}

export const hideSplashScreen = () => {
  BootSplash.isVisible().then(isvisible => {
    if (isvisible) {
      BootSplash.hide();
    }
  })
}