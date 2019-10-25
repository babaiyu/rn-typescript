export interface UserJSON {
  userJSON: any;
}

export interface UserJSONState {
  usersJSON: any;
  fetchingUser: boolean;
}

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

interface GetUserAction {
  type: string;
  userJSON: UserJSON;
  payload: UserJSON;
}

export type GetUserTypes = GetUserAction;
