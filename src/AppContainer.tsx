import React from 'react';
import {SafeContainer} from './components';
import {ListingScreen} from './screens/Listing';
import AppNavigator from './Navigation/router';

const AppContainer = () => {
  return (
    <>
      <SafeContainer>
        <AppNavigator />
      </SafeContainer>
    </>
  );
};
export default AppContainer;
