import {StyleSheet} from 'react-native';
import {getDpValue} from '../../utils/layoutUtils';
import {ColorPallette} from '../../assets/colors';

export const styles = StyleSheet.create({
  listStyle: {},
  contentContainer: {
    flexGrow:1,
    gap: getDpValue(90),
  },
  listWrap: {
    flex: 1,
    backgroundColor: ColorPallette.black,
  },
  emptyText: {
    color: ColorPallette.white,
    fontSize: 17,
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center',
    padding: 50,
  },
  emptyContainer: {
    flexGrow:1,
    justifyContent:'center',
  },
});
