import { Dispatch, ActionCreator, AnyAction } from 'redux';
import { userJSON } from '../../services/apis';
import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED } from './types';

const getUser = 'getUser';

export function requestState(type: string): AnyAction {
  if (type === getUser) {
    return {
      type: GET_USER
    };
  }
  return {
    type: GET_USER
  };
}

export function successState(type: string, data: any): AnyAction {
  if (type === getUser) {
    return {
      type: GET_USER_SUCCESS,
      data
    };
  }
  return {
    type: GET_USER_SUCCESS
  };
}

export function failedState(
  type: string,
  data: any,
  message: string
): AnyAction {
  if (type === getUser) {
    return {
      type: GET_USER_FAILED,
      data,
      message
    };
  }
  return {
    type: GET_USER_FAILED
  };
}

export const getUserAction: ActionCreator<any> = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(requestState(getUser));
    try {
      const response = userJSON();
      dispatch(successState(getUser, response));
    } catch (err) {
      dispatch(failedState(getUser, err, err.message));
    }
  };
};
