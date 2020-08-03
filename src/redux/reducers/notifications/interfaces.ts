import { Color } from "@material-ui/lab/Alert";

export enum NotificationsActionTypes{
  SEND_NOTIFICATION = 'SEND_NOTIFICATION',
  DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'
}

export interface INotificationState {
  severity : Color;
  message : string;
  time : number;
}