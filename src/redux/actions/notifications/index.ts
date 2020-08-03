import { NotificationsActionTypes, INotificationState } from '../../reducers/notifications/interfaces';
import { ISendNnotification } from './interfaces';

export const sendNotification = (notificationInfo : INotificationState) : ISendNnotification => {
  return {
    type: NotificationsActionTypes.SEND_NOTIFICATION,
    payload: notificationInfo
  };
};

export const deleteNotification = (index : number) => {
  return {
    type: NotificationsActionTypes.DELETE_NOTIFICATION,
    payload: index
  };
};