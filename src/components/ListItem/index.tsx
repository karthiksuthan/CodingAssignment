import {Dimensions, Image, Platform, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {memo, useState} from 'react';
import {PlaceholderPoster, Posters} from '../../assets/images';
import {styles} from './styles';
import { movieListItemType } from '../../types';
import { getDpValue } from '../../utils/layoutUtils';

const ListItem = ({ index, name, image }: { index: number; name: string; image:string}) => {
  const PosterWidth = (useWindowDimensions().width - getDpValue(30 * 4)) / 3;
  const [isLongText, setLongText] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const checkTextLength = (e: any) => {
    if (name?.length > 16) console.log('/'.repeat(100), e.nativeEvent);
    if (
      Platform.OS == 'android'
        ? e?.nativeEvent?.lines?.length > 1
        : e?.nativeEvent?.lines?.[0]?.width > PosterWidth
    ) {
      setLongText(true);
    } else setLongText(false);
  };
  const handlePress = () => {
    if (isLongText) setToggle(old => !old);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgWrap}>
        <Image
          source={Posters?.[image] ?? PlaceholderPoster}
          style={styles.posterImage}
        />
      </View>
      {
        <Text
          onPress={handlePress}
          onTextLayout={checkTextLength}
          style={styles.name}
          numberOfLines={toggle ? 0 : 1}>
          {name}
        </Text>
      }
    </View>
  );
};

export default memo(ListItem);
