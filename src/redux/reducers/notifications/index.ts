import { ActionType } from 'typesafe-actions';
import * as actions from '../../actions/notifications';
import { NotificationsActionTypes } from './interfaces';

type INotification = ActionType<typeof actions>

const initialState = {
  isSuccessNotification: false,
  isErrorNotification: false,
  notificationText: ''
};

export default function NotificationReducer (state = initialState, action : INotification) {
  switch (action.type) {
    case NotificationsActionTypes.SEND_SUCCESS_NOTIFICATION: {
      return {
        ...state, notificationText: action.payload, isSuccessNotification: true, isErrorNotification: false
      };
    }
    case NotificationsActionTypes.SEND_ERROR_NOTIFICATION: {
      return {
        ...state, notificationText: action.payload, isSuccessNotification: false, isErrorNotification: true
      };
    }
    default: return state;
  }
};