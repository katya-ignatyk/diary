export enum NotificationsActionTypes{
  SEND_SUCCESS_NOTIFICATION = 'SEND_SUCCESS_NOTIFICATION',
  SEND_ERROR_NOTIFICATION = 'SEND_ERROR_NOTIFICATION'
}

export interface INotificationsState {
  isSuccessNotification : boolean,
  isErrorNotification : boolean,
  notificationText : string
}