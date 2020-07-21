import { NotificationsActionTypes } from '../../reducers/notifications/interfaces';
import { ISendErrorNnotification, ISendSuccessNnotification } from './interfaces';

export const sendSuccessNotification = (text : string) : ISendSuccessNnotification => {
  return {
    type: NotificationsActionTypes.SEND_SUCCESS_NOTIFICATION,
    payload: text
  };
};

export const sendErrorNotification = (text : string) : ISendErrorNnotification => {
  return {
    type: NotificationsActionTypes.SEND_ERROR_NOTIFICATION,
    payload: text
  };
};