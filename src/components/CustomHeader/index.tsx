import {
  Animated,
  BackHandler,
  Image,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TEXT_STRINGS} from '../../constants/String';
import {styles} from './styles';
import {BackIconImage, NavBar, SearchIconImage} from '../../assets/images';
import CustomAnimatedHeader from './CustomAnimatedHeader';
import Toast from 'react-native-simple-toast';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  title: string;
  onSearchTextChange: (text: string) => void;
  searchKey: string;
};

const CustomHeader = (props: Props) => {
  const [isSearchActive, setSearchActive] = useState<boolean>(false);
  const isSecondBackPress = useRef<boolean>(false);

  const onSearchPress = () => {
    if(!isSearchActive)
      setSearchActive(true)
    else Keyboard.dismiss()
  };

  const onBackPress = () => {
    if (isSearchActive) {
      setSearchActive(false);
      props?.onSearchTextChange('');
    } else if (isSecondBackPress.current) {
      BackHandler.exitApp();
    } else {
      Toast.show(TEXT_STRINGS.exitToastMessage, 3000);
      isSecondBackPress.current = true;
      setTimeout(() => {
        isSecondBackPress.current = false;
      }, 3500);
    }
  };

  const toggleSearchFlag = () => setSearchActive(false);

  return (
    <SafeAreaView edges={{top:'maximum'}} style={styles.conatiner}>
      <ImageBackground source={NavBar} style={styles.imageBackground}>
        <View style={styles.innerWrap}>
          <TouchableOpacity onPress={onBackPress} style={styles.touchWrap}>
            <Image source={BackIconImage} style={styles.backIcon} />
          </TouchableOpacity>
          <CustomAnimatedHeader
            searchText={props?.searchKey}
            isSearchActive={isSearchActive}
            onSearchTextChange={props?.onSearchTextChange}
            callback={toggleSearchFlag}
          />
          <TouchableOpacity onPress={onSearchPress} style={styles.touchWrap}>
            <Image source={SearchIconImage} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CustomHeader;
