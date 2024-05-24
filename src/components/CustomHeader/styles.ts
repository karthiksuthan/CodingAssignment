import {PixelRatio, StyleSheet} from 'react-native';
import {ColorPallette} from '../../assets/colors';
import {FontVar} from '../../assets/fonts/FontSize';
import { getDpValue } from '../../utils/layoutUtils';

export const styles = StyleSheet.create({
  conatiner: {
    zIndex: 999,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor:ColorPallette.headerBackground,
  },
  imageBackground: {
    height: getDpValue(192),
    justifyContent: 'center',
    paddingBottom:18,
  },
  innerWrap: {
    flexDirection: 'row',
    marginHorizontal: getDpValue(30),
    alignItems: 'center',
  },
  backIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  searchIcon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  touchWrap: {
    padding:5,
  },
  text: {
    flex:1,
    fontSize: 22,
    color: ColorPallette.white,
    fontFamily: 'TitilliumWeb-Regular',
    paddingHorizontal:15
  },
});
