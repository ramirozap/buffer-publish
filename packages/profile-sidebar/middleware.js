import {
  actionTypes as dataFetchActionTypes,
  actions as dataFetchActions,
} from '@bufferapp/async-data-fetch';
import {
  actions,
} from './reducer';

export default ({ dispatch, getState }) => next => (action) => {
  next(action);
  switch (action.type) {
    case `login_${dataFetchActionTypes.FETCH_SUCCESS}`:
      dispatch(dataFetchActions.fetch({
        name: 'profiles',
      }));
      break;
    case `profiles_${dataFetchActionTypes.FETCH_SUCCESS}`:
      // if no profile is selected, select one!
      if (
        !getState().profileSidebar.selectedProfileId &&
        action.result.length > 0
      ) {
        dispatch(actions.selectProfile({
          id: action.result[0].id,
        }));
      }
      break;
    default:
      break;
  }
};
