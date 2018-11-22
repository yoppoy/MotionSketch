import React from "react";

import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import AuthloadingScreen from '../Containers/Auth/AuthloadingScreen'
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthloadingScreen,
    App: AppNavigation,
    Auth: AuthNavigation,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
