import { Dispatch } from 'redux';
import { IDeleteNote, ISaveNote, ISaveNotes, IUpdateNote } from './interfaces';
import { INoteState, NotesActionTypes } from '../../reducers/notes/interfaces';
import { startLoader, stopLoader } from '../loader';
import { NoteService } from '../../../services';
import { config } from '../../../env';
import { sendNotification } from '../notifications';

export const deleteNote = (index : number) : IDeleteNote => {
  return {
    type: NotesActionTypes.DELETE_NOTE,
    payload: index
  };
};

export const saveNote = (note : INoteState) : ISaveNote => {
  return {
    type: NotesActionTypes.SAVE_NOTE,
    payload: note
  };
};

export const saveNotes = (notes : INoteState[]) : ISaveNotes => {
  return {
    type: NotesActionTypes.SAVE_NOTES,
    payload: notes
  };
};

export const changeNote = (note : INoteState) : IUpdateNote => {
  return {
    type: NotesActionTypes.UPDATE_NOTE,
    payload: note
  };
};

export const getAllNotes = (profileId : number) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {

    const response = await NoteService.Instance.getNotes(`${config.BE_URL}/profile/notes`, { profileId });

    dispatch(saveNotes(response.data.notes));

  } catch (error) {

    dispatch(sendNotification({ 
      severity: 'error', 
      message: error.message,
      time: 4000 
    }));
  }

  dispatch(stopLoader());
};

export const createNote = (note : Partial<INoteState>, profileId : number) => async(dispatch : Dispatch) => {

  dispatch(startLoader());

  try {
    const response = await NoteService.Instance.saveNote(`${config.BE_URL}/note`, { note, profileId });
    dispatch(saveNote(response.data.note));

    dispatch(sendNotification({ 
      severity: 'success', 
      message: 'Success! Note has been saved!',
      time: 4000 
    }));

  } catch (error) {
    dispatch(sendNotification({ 
      severity: 'error', 
      message: error.message,
      time: 4000 
    }));
  }

  dispatch(stopLoader());
};

export const removeNote = (profileId : number, id : number, index : number) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {
    const response = await NoteService.Instance.deleteNote(`${config.BE_URL}/profile/note`, { profileId, id });
    dispatch(deleteNote(index));

    dispatch(sendNotification({ 
      severity: 'success', 
      message: 'Success! Note has been deleted!',
      time: 1000 
    }));

  } catch (error) {
    dispatch(sendNotification({ 
      severity: 'error', 
      message: error.message,
      time: 3000 
    }));
  }

  dispatch(stopLoader());
};

export const updateNote = (note : INoteState) => async(dispatch : Dispatch) => {
  dispatch(startLoader());

  try {
    const response = await NoteService.Instance.updateNote(`${config.BE_URL}/profile/note`, note);
    dispatch(changeNote(response.data.note));

    dispatch(sendNotification({ 
      severity: 'success', 
      message: 'Success! Note has been deleted!',
      time: 1000 
    }));

  } catch (error) {
    dispatch(sendNotification({ 
      severity: 'error', 
      message: error.message,
      time: 3000 
    }));
  }

  dispatch(stopLoader());
};