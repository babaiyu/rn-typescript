import { NavigationScreenProp } from 'react-navigation';
import { getUserAction } from '../../redux/user/action';
import { UserJSONState } from '../../redux/user/types';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
  getUserAction: typeof getUserAction;
  getUser: UserJSONState;
}

export interface State {
  nullArray: any;
}
