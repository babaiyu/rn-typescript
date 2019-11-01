// Generate field in object Message
export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

// Generate State for Redux
export interface ChatState {
  messages: Message[];
}

// Generate variable
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

// Generate Action for Redux
interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;
