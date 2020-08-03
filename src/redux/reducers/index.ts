import { combineReducers } from 'redux';
import NotificationReducer from './notifications';
import LoaderReducer from './loader';
import { userReducer } from './user';

const reducers = combineReducers({
  notifications: NotificationReducer,
  loader: LoaderReducer,
  user: userReducer
});

export default reducers;
