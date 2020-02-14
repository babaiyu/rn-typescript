import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>; // Typing Navigation
  getUserAction: () => Promise<void>; // Redux Function
  user: any; // IntelliSense of Redux
  isLoading: boolean; // IntelliSense of Redux
}
