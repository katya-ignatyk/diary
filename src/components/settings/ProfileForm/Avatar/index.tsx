import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '../../../../containers/ButtonContainer';
import styles from './styles.css';
import buttonStyles from '../../../shared/Form/Button/button.css';
import avatarStyles from '../../../../scss/avatar/styles.css';
import { IAvatarReduxProps } from './interfaces';

function Avatar(props : IAvatarReduxProps) {
  
  const { id, avatar, deleteAvatar, updateAvatar } = props;

  const [open, setOpen] = useState(false);

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
      <img src= {avatar} alt='avatar' className={avatarStyles.avatar}/>
      <button className={styles.button} onClick={handleOpen}>
        Change profile photo
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
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