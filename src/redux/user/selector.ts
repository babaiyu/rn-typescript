import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeIsLoading = (state: AppState) => state.user.isLoading;
const makeUser = (state: AppState) => state.user.data;

export const getIsLoading = createSelector(
  makeIsLoading,
  i => i,
);

export const getDataUser = createSelector(
  makeUser,
  i => i,
);
