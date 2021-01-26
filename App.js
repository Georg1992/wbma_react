import React from 'react';
import {MainProvider} from './contexts/MainContext';
import Navigator from './navigators/Navigator';
import {enableScreens} from 'react-native-screens';

enableScreens();

const App = () => {
  return (
    <MainProvider>
      <Navigator />
    </MainProvider>
  );
};

export default App;
