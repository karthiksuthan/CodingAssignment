import {Dimensions, StyleSheet} from 'react-native';
import {getDpValue} from '../../utils/layoutUtils';
import {FontVar} from '../../assets/fonts/FontSize';
import {ColorPallette} from '../../assets/colors';
import { Dynamic_Layout_Sizes } from '../../constants/LayoutSize';

export const styles = StyleSheet.create({
  container: {
    marginLeft: getDpValue(30),
    // backgroundColor: 'pink',
    width: Dynamic_Layout_Sizes.posterwidth,
  },
  imgWrap: {
    width: Dynamic_Layout_Sizes.posterwidth,
    aspectRatio: 0.669,
    // backgroundColor: 'blue',
  },
  posterImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    objectFit: 'scale-down',
    // backgroundColor: 'red',
  },
  name: {
    color: ColorPallette.white,
    fontSize: 15,
    fontFamily: 'TitilliumWeb-Light',
    marginTop: getDpValue(24),
    marginHorizontal: 2,
  },
});
