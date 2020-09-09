import { ActionType } from 'typesafe-actions';
import * as actions from '../../actions/notifications';
import { NotificationsActionTypes, INotificationState } from './interfaces';

type INotificationAction = ActionType<typeof actions>

const initialState : INotificationState[] = [];

export function notificationReducer(state = initialState, action : INotificationAction) {
  switch (action.type) {
    case NotificationsActionTypes.SEND_NOTIFICATION: {
      return [
        ...state, action.payload
      ];
    }
    case NotificationsActionTypes.DELETE_NOTIFICATION: {
      return state.filter((element, index) => index !== action.payload);
    }
    default: return state;
  }
};