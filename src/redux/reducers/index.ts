import { combineReducers } from 'redux';
import { notificationReducer } from './notifications';
import { loaderReducer } from './loader';
import { userReducer } from './user';
import { profileReducer } from './profile';
import { notesReducer } from './notes';

const reducers = combineReducers({
  notifications: notificationReducer,
  loader: loaderReducer,
  user: userReducer,
  profile: profileReducer,
  notes: notesReducer
});

export default reducers;
