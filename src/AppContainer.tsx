import React from 'react';
import {SafeContainer} from './components';
import {ListingScreen} from './screens/Listing';
import AppNavigator from './Navigation/router';

//global handlers like firebase db connections reside here
//Also global components like custom toasts and alerts

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
