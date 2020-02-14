import {Dispatch} from 'redux';
import {userJSON} from '../../services/apis';
import {GET_USER, GET_USER_FAILED, GET_USER_SUCCESS} from './types';

// Life Cycle
const loadingGetUser = () => ({
  type: GET_USER,
});

const successGetUser = (data: any[]) => ({
  type: GET_USER_SUCCESS,
  data,
});

const failedGetUser = (message: any[]) => ({
  type: GET_USER_FAILED,
  message,
});

// Function for hit the Action
const getUser = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingGetUser());
    try {
      const res = await userJSON();
      return dispatch(successGetUser(res));
    } catch (err) {
      return dispatch(failedGetUser(err.message));
    }
  };
};

export default getUser;
