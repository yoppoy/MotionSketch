import React from "react";

import { createStackNavigator } from 'react-navigation'
import SignupScreen from '../Containers/Auth/SignupScreen'
import SigninScreen from '../Containers/Auth/SigninScreen'

export default const AuthNavigation = createStackNavigator({
  SignIn: SigninScreen,
  SignUp: SignupScreen
}, {
  defaultNavigationOptions: {}
});
