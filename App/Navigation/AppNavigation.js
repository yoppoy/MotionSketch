import React from "react";

import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/App/HomeScreen'

export default const AppNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    title: 'Home'
  }
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fff",
    },
    headerTintColor: "#fff",
    animationEnabled: true
  }
});
