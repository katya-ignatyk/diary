import { INotificationState } from '../../../redux/reducers/notifications/interfaces';

export interface INotificationReduxProps{
  notifications : INotificationState[];
  deleteNotification : (index : number) => void;
}
