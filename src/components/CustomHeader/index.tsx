import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {TEXT_STRINGS} from '../../constants/String';
import {styles} from './styles';
import {BackIconImage, NavBar, SearchIconImage} from '../../assets/images';

const CustomHeader = () => {
  const onBackPress = () => {};
  const onSearchPress = () => {};
  return (
    <View style={styles.conatiner}>
      <ImageBackground source={NavBar} style={styles.imageBackground}>
        <View style={styles.innerWrap}>
          <TouchableOpacity onPress={onBackPress} style={styles.touchWrap}>
            <Image source={BackIconImage} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.text}>{TEXT_STRINGS.headerPlaceholder}</Text>
          <TouchableOpacity onPress={onSearchPress} style={styles.touchWrap}>
            <Image source={SearchIconImage} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CustomHeader;
