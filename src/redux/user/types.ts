// Generate Variable | For Action & Reducer
export const GET_USER: string = 'GET_USER';
export const GET_USER_SUCCESS: string = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: string = 'GET_USER_FAILED';

// Generate Action Reducer
export interface Action {
  type: string;
  data: any[];
  message?: string;
}

// Generate State Reducer
export interface State {
  data: any[];
  isLoading: boolean;
}
