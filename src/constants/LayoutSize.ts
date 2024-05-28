import { Dimensions } from "react-native"
import { getDpValue } from "../utils/layoutUtils";

const SCREEN_WIDTH = Dimensions.get('screen').width

export const Dynamic_Layout_Sizes = {
  posterwidth: (SCREEN_WIDTH - getDpValue(30 * 4)) / 3,
};