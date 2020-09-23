import moment from 'moment';
import { INoteState, NotesActionTypes } from './interfaces';
import { IDeleteNote, ISaveNote, ISaveNotes, IUpdateNote } from '../../actions/notes/interfaces';

type INotesAction = IDeleteNote | ISaveNote | ISaveNotes | IUpdateNote;

const initialState : INoteState[] = [{
  id: null,
  date: moment(),
  title: '',
  text: '',
}];

export function notesReducer(state = initialState, action : INotesAction) {
  switch (action.type) {
    case NotesActionTypes.SAVE_NOTE: {
      return [
         ...state , action.payload 
      ];
    }

    case NotesActionTypes.DELETE_NOTE: {
      return [
        ...state.filter((element, index) => index !== action.payload)
      ];
    }

    case NotesActionTypes.SAVE_NOTES: {
      return [
        ...action.payload
     ];
    }

    case NotesActionTypes.UPDATE_NOTE: {
      return [
        ...state.map((element) => {
            return element.id === action.payload.id ? 
            action.payload : 
            element;
        })
      ];
    }
    default: return state;
  }
};