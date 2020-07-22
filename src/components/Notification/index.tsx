import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { INotificationReduxProps } from './interfaces';

function Alert(props : AlertProps) {
  return <MuiAlert elevation={10} variant="filled" {...props} />;
}

const styles = (index : number) : React.CSSProperties => ({
  position: 'absolute',
  bottom: 50 * index + 'px',
  left: 150 + 'px'
});

function Notification(props : INotificationReduxProps) {
  const { notifications, deleteNotification } = props;

  function handleClose(index : number, reason ?: string) {
    if (reason === 'clickaway') {
      return;
    }
    deleteNotification(index);
  }
  
  return notifications.map((notification, index) => (
    <Snackbar
      style={styles(index)}
      onClose={(event : React.SyntheticEvent, reason : string) => handleClose(index, reason)}
      open={true}
      autoHideDuration={notification.time}
      key={index + (new Date()).toString()}
      //is there other way to generate unique key?
    >
      <Alert onClose={() => handleClose(index)} severity={notification.severity}>
        {notification.message}
      </Alert>
    </Snackbar>));
  }

export default Notification;
