import { NotificationsActionTypes } from '../../reducers/notifications/interfaces';
import { IAction } from '../../../interfaces';

export type ISendErrorNnotification = IAction<NotificationsActionTypes.SEND_ERROR_NOTIFICATION, String>
export type ISendSuccessNnotification = IAction<NotificationsActionTypes.SEND_SUCCESS_NOTIFICATION, String>