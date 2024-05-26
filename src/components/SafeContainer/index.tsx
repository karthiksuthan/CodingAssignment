import {View, Text, StatusBar} from 'react-native';
import React, {ReactNode} from 'react';
import {
  SafeAreaProvider,
  SafeAreaProviderProps,
  SafeAreaView,
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
      <SafeAreaView edges={{top:'maximum'}} style={{flex:1}}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SafeContainer;
