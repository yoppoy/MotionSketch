import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav =  createStackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,

  }
}, {
  defaultNavigationOptions: {
    headerTintColor: '#000',
    headerStyle: {
      backgroundColor: '#fff',
    },
  },
});

export default createAppContainer(PrimaryNav);
