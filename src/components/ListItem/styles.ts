import {Dimensions, StyleSheet} from 'react-native';
import {getDpValue} from '../../utils/layoutUtils';
import {FontVar} from '../../assets/fonts/FontSize';
import {ColorPallette} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    marginLeft: getDpValue(30),
    width: (Dimensions.get('screen').width - getDpValue(30 * 4)) / 3,
    aspectRatio: 0.6,
  },
  posterImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    objectFit: 'scale-down',
  },
  name: {
    color: ColorPallette.white,
    fontSize: 15,
    fontFamily: 'TitilliumWeb-Light',
    marginTop: getDpValue(24),
    marginHorizontal: 2,
  },
});
