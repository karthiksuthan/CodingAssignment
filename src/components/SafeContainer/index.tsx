import {View, Text, StatusBar} from 'react-native';
import React, {ReactNode} from 'react';
import {
  SafeAreaProvider,
  SafeAreaProviderProps,
} from 'react-native-safe-area-context';
import {ColorPallette} from '../../assets/colors';

const SafeContainer = ({children}: SafeAreaProviderProps) => {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated
        barStyle={'light-content'}
        backgroundColor={ColorPallette.black}
      />
      {children}
    </SafeAreaProvider>
  );
};

export default SafeContainer;
