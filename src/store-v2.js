import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// === execution flow ===
// 1. dispatch action
// 2. middleware (async operation, logger, timers)
// 3. store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
