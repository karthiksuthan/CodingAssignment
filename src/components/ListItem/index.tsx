import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {PlaceholderPoster, Posters} from '../../assets/images';
import {styles} from './styles';
import { movieListItemType } from '../../types';

const ListItem = ({index, item}:{index:number,item:movieListItemType}) => {
  const [isLongText, setLongText] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const checkTextLength = (e:any) => {
    if (e.nativeEvent.lines.length > 1) {
      setLongText(true);
    } else setLongText(false);
  };
  const handlePress = () => {
    if (isLongText)
      setToggle(old=>!old)
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgWrap}>
        <Image
          source={Posters?.[item?.['poster-image']] ?? PlaceholderPoster}
          style={styles.posterImage}
        />
      </View>
      {
        <Text
          onPress={handlePress}
          onTextLayout={checkTextLength}
          style={styles.name}
          numberOfLines={toggle ? 0 : 1}>
          {item?.name}
        </Text>
      }
    </View>
  );
};

export default ListItem;
