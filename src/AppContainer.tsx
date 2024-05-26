import React from 'react';
import {SafeContainer} from './components';
import {ListingScreen} from './screens/Listing';

const AppContainer = () => {
  return (
    <>
      <SafeContainer>
        <ListingScreen />
      </SafeContainer>
    </>
  );
};
export default AppContainer;
