import RPCClient from 'micro-rpc-client';
import {
  actions,
  actionTypes,
} from './';


export default (store) => {
  let counter = 0;
  const rpc = new RPCClient({ url: '/rpc' });
  return next => (action) => {
    next(action);
    switch (action.type) {
      case actionTypes.FETCH: {
        const id = counter++; // eslint-disable-line no-plusplus
        const args = {
          ...action.args,
          // assumes using the asyncDataFetch key
          // TODO: might want to think about exporting a key
          token: store.getState().asyncDataFetch.token,
        };
        store.dispatch(actions.fetchStart({
          name: action.name,
          args,
          id,
        }));
        rpc.call(action.name, args)
          .then(result => store.dispatch(actions.fetchSuccess({
            name: action.name,
            args,
            id,
            result,
          })))
          .catch(error => store.dispatch(actions.fetchFail({
            name: action.name,
            args,
            id,
            error: error.message,
          })));
        break;
      }
      default:
        break;
    }
  };
};
