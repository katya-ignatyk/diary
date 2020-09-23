import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '../../../containers/ButtonContainer';
import noteStyles from '../../../scss/common/notes/styles.css';
import styles from './styles.css';
import { INoteReduxProps, INoteProps } from './interfaces';

function Note(props : INoteProps & INoteReduxProps) {
  
  const { profileId, deleteNote, updateNote, note, index } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isNoteDisabled, setIsNoteDisabled] = useState(true);
  const [isNoteTextDisabled, setIsNoteTextDisabled] = useState(true);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState<Moment>();
  const [selectedNoteId, setSelectedNoteId] = useState(0);

  const deleteClick = (index : number, id : number) => {
    deleteNote(
      profileId,
      id,
      index
    );
  };

  const editInfoClick = (id : number) => {
    setSelectedNoteId(id);
    setIsNoteDisabled(false);
  };
  
  const handleDialogClose = () => {
    setText('');
    setIsNoteTextDisabled(true);
    setIsDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };
  
  const handleTitleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleDateChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setDate(moment(event.target.value));
  };

  const saveInfoChangesClick = () => {
    setIsNoteDisabled(true);

    if (!title && !date) {
      return;
    } 

    updateNote({
      ...note,
      title: title || note.title,
      date: date || note.date,
    }).then(() => setTitle(''));
  };

  const saveTextChangesClick = () => {
    handleDialogClose();

    if (!text) {
      return;
    }

    updateNote({
      ...note,
      text
    });
  };

  const editTextClick = () => {
    setIsNoteTextDisabled(false);
  };
  
  return (
    <div className={noteStyles.note__container}>
      <button 
        onClick={
          () => deleteClick(index, note.id)
        } 
        disabled = {
          !isNoteDisabled
        }
        className={`${noteStyles.icon__button}  ${styles.delete__button}`}
      />
      <button 
        onClick = {
          () => editInfoClick(note.id)
        }
        disabled = {
          !isNoteDisabled
        }
        className={`${noteStyles.icon__button}  ${styles.edit__button}`}
      />
      <button 
        onClick={
          () => handleDialogOpen()
        }
        disabled = {
          !isNoteDisabled
        }
        className={`${noteStyles.icon__button}  ${styles.open__button}`} 
      />

      <div className={styles.note__info}>
        <input 
          onChange= {handleTitleChange}
          className={`${noteStyles.disabled__input} ${styles.note__title}`} 
          value={selectedNoteId === note.id && title || note.title} 
          disabled = {
            !isNoteDisabled && selectedNoteId === note.id ? 
            false:
            true
          }
        /> 
        <TextField
          id='datetime-local'
          type='datetime-local'
          defaultValue={moment(note.date).format('YYYY-MM-DDTHH:mm')}
          onChange={handleDateChange}
          disabled = {
            !isNoteDisabled && selectedNoteId === note.id ? 
            false:
            true
          }
        />
        {
          !isNoteDisabled && selectedNoteId == note.id 
          && <Button 
            text='Save' 
            onClick={ saveInfoChangesClick} 
          />
        }
      </div>
      
      <Dialog
        fullScreen={fullScreen}
        open={isDialogOpen}
        onClose={handleDialogClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{note.title}</DialogTitle>
        <DialogContent>
          <textarea 
            className={`${noteStyles.disabled__input} ${styles.note__text}`}
            onChange={handleTextChange}
            value={text || note.text} 
            disabled = {isNoteTextDisabled}
          /> 
        </DialogContent>
        <DialogActions>
          <Button text='Close' onClick={handleDialogClose}/>
          {
            isNoteTextDisabled && <Button text='Edit' onClick={editTextClick}/> 
            || <Button text='Save' onClick={saveTextChangesClick}/> 
          }
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Note;