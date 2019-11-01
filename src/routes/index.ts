import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Import Screens
import Home from '../screens/Home';
import About from '../screens/About';

// Create Route Management
const Routes = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    About
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(Routes);
