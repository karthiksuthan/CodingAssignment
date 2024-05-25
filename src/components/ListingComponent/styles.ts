import { StyleSheet } from "react-native";
import { getDpValue } from "../../utils/layoutUtils";
import { ColorPallette } from "../../assets/colors";

export const styles = StyleSheet.create({
  listStyle: {},
  contentContainer: {
      gap: getDpValue(90),
      backgroundColor: ColorPallette.black,
  },
    columnWrap: {
  }
});
