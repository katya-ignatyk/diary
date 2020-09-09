import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import Button from '../../../containers/ButtonContainer';
import Input from '../../../components/shared/Form/Input';
import Error from '../../../components/shared/Form/Error';
import noteStyles from '../../../scss/common/notes/styles.css';
import styles from './styles.css';
import inputStyles from '../../shared/Form/Input/styles.css';
import { noteValidationSchema } from '../../../validation';
import { IAddNoteReduxProps } from './interfaces';

function newNote(props : IAddNoteReduxProps) {

  const { profileId, createNote } = props;
  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [isDialogOpen, setisDialogOpen] = useState(false);
  const [date, setDate] = useState<Moment>();

  const handleDialogClose = () => {
    setisDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setisDialogOpen(true);
  };

  const handleDateChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setDate(moment(event.target.value));
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
    },
    enableReinitialize: true,
    onSubmit: values => {
      const { title, text } = values;

      createNote({
          title,
          date: date || moment(),
          text,
       }, profileId);

      handleDialogClose();
      formik.resetForm();
    },
    validationSchema: noteValidationSchema()
  });

  const { handleChange, handleSubmit, values, touched, errors, resetForm } = formik;
  
  return (
    <div className={noteStyles.note__container}>
      <button 
        onClick={handleDialogOpen} 
        className={`${styles.add__button} ${noteStyles.icon__button}`}
      />
      <Dialog
        fullScreen={fullScreen}
        open={isDialogOpen}
        onClose={handleDialogClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>Add note</DialogTitle>
        <DialogContent>
        <form className={styles.note__form} onSubmit={handleSubmit}>        
          <Input 
            id='title'
            name='title'
            type='text'
            onChange={handleChange}
            value={values.title}
            text='Title'
          />
          <Error touched={touched.title} errors={errors.title}/>

          <label htmlFor="datetime-local" className={inputStyles["form-group__label"]}>
            Date
            <TextField
              id='datetime-local'
              type='datetime-local'
              defaultValue={moment().format('YYYY-MM-DDTHH:mm')}
              onChange={handleDateChange}
              className={inputStyles["form-group__input"]}
            />
          </label>
          
          <label htmlFor="text" className={inputStyles["form-group__label"]}>
            Text
            <textarea 
              id='text'
              name='text'
              onChange={handleChange}
              value={values.text}
              className={`${inputStyles["form-group__input"]} ${styles.note__text}`}
            />  
          </label>
          
          <Error touched={touched.text} errors={errors.text}/>

          <Button text='Save' />
        </form>
        </DialogContent>
      </Dialog>
  
        </div>
    );
}

export default newNote;