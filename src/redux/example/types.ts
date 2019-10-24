// Init Static Types
export interface Message {
    user: string
    message: string
    timestamp: number
}

export interface ChatState {
    messages: Message[]
}

// Set Type of Type
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'

// Init Action Creators
interface SendMessageAction {
    type: typeof SEND_MESSAGE
    payload: Message
}

interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE
    meta: {
        timestamp: number
    }
}

// Just Export
export type ChatActionTypes = SendMessageAction | DeleteMessageAction