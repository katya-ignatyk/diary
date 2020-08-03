import { NotificationsActionTypes } from '../../reducers/notifications/interfaces';
import { IAction } from '../../../interfaces';
import { INotificationState } from '../../reducers/notifications/interfaces';

export type ISendNnotification = IAction<NotificationsActionTypes.SEND_NOTIFICATION, INotificationState>