import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TEXT_STRINGS} from '../../constants/String';
import {styles} from './styles';

type Props = {
  searchText: string;
  isSearchActive: boolean;
  onSearchTextChange: (text: string) => void;
  callback: () => void;
};

const CustomAnimatedHeader = (props: Props) => {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const inputBoxRef = useRef<TextInput>(null);
  const AnimValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props?.isSearchActive) {
      setSearchActive(true);
    } else if (searchActive) {
      inputBoxRef?.current?.blur?.();
      Animated.timing(AnimValue, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }).start(() => setSearchActive(false));
    }
  }, [props?.isSearchActive]);

  useEffect(() => {
    if (props?.isSearchActive) {
      Animated.timing(AnimValue, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }).start(() => inputBoxRef?.current?.focus?.());
    } else {
    }
  }, [props?.isSearchActive]);

  const handleInputBlur = () => {
    if (props?.searchText === '' && props?.isSearchActive) {
      Animated.timing(AnimValue, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start(() => {
        props?.callback();
      });
    }
  };

  return (
    <View style={styles.animatedContainer}>
      {!searchActive ? (
        <Animated.Text style={styles.text}>
          {TEXT_STRINGS.headerPlaceholder}
        </Animated.Text>
      ) : (
        <Animated.View
          style={[styles.animatedView, {transform: [{scaleX: AnimValue}]}]}>
            <TextInput
              value={props?.searchText}
            ref={inputBoxRef}
            blurOnSubmit
            style={styles.inputBox}
              onBlur={handleInputBlur}
              onChangeText={props?.onSearchTextChange}
          />
        </Animated.View>
      )}
    </View>
  );
};
export default CustomAnimatedHeader;
