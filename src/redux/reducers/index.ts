import { combineReducers } from 'redux';
import NotificationReducer from './notifications';
import LoaderReducer from './loader';

const reducers = combineReducers({
  notifications: NotificationReducer,
  loader: LoaderReducer
});

export default reducers;
