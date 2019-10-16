import Home from '../screens/Home';
import About from '../screens/About';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const Routes = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        About
    }, {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(Routes);
