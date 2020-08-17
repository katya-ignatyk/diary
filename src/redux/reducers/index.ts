import { combineReducers } from 'redux';
import NotificationReducer from './notifications';
import LoaderReducer from './loader';
import { userReducer } from './user';
import { profileReducer } from './profile';

const reducers = combineReducers({
  notifications: NotificationReducer,
  loader: LoaderReducer,
  user: userReducer,
  profile: profileReducer
});

export default reducers;
