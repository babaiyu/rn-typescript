// Import Types
import { Message, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes } from './types';

// Returning Function of Types
export function sendMessage(newMessage: Message): ChatActionTypes {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    }
}

export function deleteMessage(timestamp: number): ChatActionTypes {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp
        }
    }
}
