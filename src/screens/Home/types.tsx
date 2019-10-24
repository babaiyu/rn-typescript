import { NavigationScreenProp } from 'react-navigation';
import { sendMessage } from '../../redux/chat/action';
import { ChatState } from '../../redux/chat/types';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
  sendMessage: typeof sendMessage;
  chat: ChatState;
}

export interface State {
  message: string;
  user: string;
  timestamp: number;
}
