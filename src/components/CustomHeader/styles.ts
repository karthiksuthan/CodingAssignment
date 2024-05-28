import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {ColorPallette} from '../../assets/colors';
import {FontVar} from '../../assets/fonts/FontSize';
import {getDpValue} from '../../utils/layoutUtils';

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
    paddingBottom: 18,
  },
  innerWrap: {
    flexDirection: 'row',
    marginHorizontal: getDpValue(30),
    alignItems: 'center',
    height: '100%',
    // backgroundColor: 'pink',
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
    padding: 5,
  },
  text: {
    flex: 1,
    fontSize: 22,
    color: ColorPallette.white,
    fontFamily: 'TitilliumWeb-Regular',
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  inputBox: {
    height: 35,
    borderWidth: 1,
    // flex: 1,
    backgroundColor: 'white',
    color: ColorPallette.black,
    // marginBottom: 15,
    marginTop: 5,
    marginHorizontal: 20,
    borderRadius: 15,
    paddingHorizontal: 15,
    lineHeight: 21,
    fontSize: 17,
    fontFamily: 'TitilliumWeb-Regular',
    paddingVertical: 0,
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
    // marginVertical: 0,

    // paddingBottom: 5,
  },
  animatedView: {
    position: 'absolute',
    // backgroundColor: 'pink',
    width: '100%',
    height: 45,
    right: 0,
    transformOrigin: 'right',
  },
  animatedContainer: {
    flex: 1,
    height: '100%',
    // backgroundColor: 'teal',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
