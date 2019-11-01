import { Dispatch } from 'redux';
import { userJSON } from '../../services/apis';
import { GET_USER, GET_USER_FAILED, GET_USER_SUCCESS } from './types';

// Life Cycle
const loadingGetUser = () => ({
  type: GET_USER
});

const successGetUser = (data: any[]) => ({
  type: GET_USER_SUCCESS,
  data
});

const failedGetUser = (message: any[]) => ({
  type: GET_USER_FAILED,
  message
});

// Function for hit the Action
const getUser = () => {
  return (dispatch: Dispatch) => {
    dispatch(loadingGetUser());
    userJSON()
      .then((res: any) => {
        dispatch(successGetUser(res));
      })
      .catch(err => {
        dispatch(failedGetUser(err.message));
      });
  };
};

export default getUser;
