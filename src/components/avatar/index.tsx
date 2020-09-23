import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '../../containers/ButtonContainer';
import styles from './styles.css';
import buttonStyles from '../shared/Form/Button/button.css';
import avatarStyles from '../../scss/common/avatar/styles.css';
import { IAvatarReduxProps } from './interfaces';

function Avatar(props : IAvatarReduxProps) {
  
  const { id, avatar, deleteAvatar, updateAvatar } = props;

  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteProfileAvatar = () => {
    handleClose();
    deleteAvatar(id);
  };
  
  const fileInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    handleClose();
    
    const { target: { name, files } } = event;
    const inputData = new FormData();

    inputData.append(name, files[0]);
    inputData.append('id', String(id));
    
    updateAvatar(inputData); 
  };

  return (
    <div className={styles.avatar__section}>
      <img src= {avatar} alt='avatar' className={avatarStyles.avatar} onClick={handleOpen}/>
      
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>
          Change profile photo
        </DialogTitle>

        <DialogContent>
          <DialogActions>
            <form name='file-form' encType='multipart/form-data'>
              <label htmlFor='file-input' className={buttonStyles.form__button}>
                Upload photo
                <input name='image' type="file" id='file-input' className={styles.file__input} onChange={fileInputChange}/>
              </label>
            </form>
             <Button
              onClick={deleteProfileAvatar}
              text='Delete photo'
            />
             <Button
              onClick={handleClose}
              text='Cancel'
            />
          </DialogActions>
        </DialogContent>

      </Dialog>
    </div>
  );
}

export default Avatar;