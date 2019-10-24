import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import About from '../screens/About';

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
