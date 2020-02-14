import {NavigationScreenProp} from 'react-navigation';
import {sendMessage} from '../../redux/chat/action';
import {ChatState} from '../../redux/chat/types';

// Create Static Props
export interface Props {
  navigation: NavigationScreenProp<any, any>;
  sendMessage: typeof sendMessage;
  chat: ChatState;
}

// Create Static State
export interface State {
  message: string;
  user: string;
  timestamp: number;
}
