import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { INotificationReduxProps } from './interfaces';

function Alert(props : AlertProps) {
  return <MuiAlert elevation={10} variant="filled" {...props} />;
}

const styles = (index : number) : React.CSSProperties => ({
  position: 'absolute',
  bottom: 50 * index + 'px',
  left: 0,
  transform: 'translateX(0%)',
});

function Notification(props : INotificationReduxProps) {   
  const { notifications, deleteNotification } = props;

  const handleClose = React.useCallback((event : React.SyntheticEvent, reason ?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      deleteNotification(0);
  }, []);
  
  return (
    <>
      {notifications.map((notification, index) => (
        <Snackbar
          style={styles(index)}
          onClose = {handleClose}
          open={true}
          autoHideDuration={notification.time}
          key={uuidv4()}
        >
          <Alert onClose={handleClose} severity={notification.severity}>
            {notification.message}
          </Alert>
        </Snackbar>)
      )}
    </>
  );
}

export default Notification;
