import { ChatState, ChatActionTypes, SEND_MESSAGE, DELETE_MESSAGE } from './types';

const initial_state: ChatState = {
    messages: []
}

export default function chatReducer(state = initial_state, action: ChatActionTypes){
    switch(action.type) {
        case SEND_MESSAGE: {
            return {
                messages: [...state.messages, action.payload]
            }
        }
        case DELETE_MESSAGE: {
            return {
                messages: state.messages.filter(
                    message => message.timestamp !== action.meta.timestamp
                )
            }
        }
        default:
            return state
    }
}
