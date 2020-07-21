import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { INotificationReduxProps, INotificationProps } from './interfaces';

function Alert(props : AlertProps) {
  return <MuiAlert elevation={10} variant="filled" {...props} />;
}

function Notification(props : INotificationReduxProps & INotificationProps) {
return (
  <>
    <Snackbar open={true}>
      <Alert severity={props.severity}>{props.notificationText}</Alert>
    </Snackbar> 
  </>
);
}

export default Notification;