import React, {useEffect} from 'react';
import {ListingScreen} from '../screens/Listing';
import {Alert, BackHandler} from 'react-native';

// just a mock router , real project will implement a real app navigation router here
const AppNavigator = () => {
  
  return (
    <>
      <ListingScreen />
    </>
  );
};

export default AppNavigator;
